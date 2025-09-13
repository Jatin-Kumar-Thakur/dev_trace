import mongoose from 'mongoose';
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

const Log = mongoose.model('Log', LogSchema);
export default Log;
