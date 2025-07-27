const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  method: String,
  url: String,
  statusCode: Number,
  headers: Object,
  requestBody: mongoose.Schema.Types.Mixed,
  responseBody: mongoose.Schema.Types.Mixed,
  duration: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Log', LogSchema);
