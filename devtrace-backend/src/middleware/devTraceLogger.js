import axios from 'axios';

export function devTraceLogger(options = {}) {
  const apiUrl = options.endpoint || 'http://localhost:8000/api/logs';

  return async (req, res, next) => {
    const start = Date.now();

    const originalSend = res.send;
    let responseBody;

    res.send = function (body) {
      responseBody = body;
      return originalSend.call(this, body);
    };

    res.on('finish', async () => {
      const duration = Date.now() - start;
      const log = {
        method: req.method,
        url: req.originalUrl,
        statusCode: res.statusCode,
        headers: req.headers,
        requestBody: req.body,
        responseBody,
        duration,
        timestamp: new Date()
      };

      try {
        await axios.post(apiUrl, log);
      } catch (err) {
        console.error('Logging failed:', err.message);
      }
    });

    next();
  };
}
