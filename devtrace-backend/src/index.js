require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logRoutes = require('./routes/logRoutes');
const settingRoutes = require("./routes/settingRoutes");
const connectDB = require('./config/db');
const startAutoDeleteJob = require('./cron/autoDeleteLogs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/logs', logRoutes);
app.use('/api/setting', settingRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    startAutoDeleteJob();
  });
});
