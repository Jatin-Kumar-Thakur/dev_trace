
// import express from "express";
// import logRoutes from "./routes/logRoutes.js";
// import settingRoutes from "./routes/settingRoutes.js";
// import { devTraceLogger } from "../../bin/index.js";
// import connectDB from "./config/db.js";
// import startAutoDeleteJob from "./cron/autoDeleteLogs.js";

// /**
//  * Initialize DevTrace in user's Express app
//  * @param {Express.Application} app
//  * @param {Object} options
//  * @param {string} options.mongoUri - MongoDB connection string
//  * @param {string} [options.logEndpoint] - Optional log endpoint
//  */
// export const initDevTrace = async (app, options = {}) => {
//   if (!options.mongoUri) {
//     throw new Error("Please provide a mongoUri when initializing DevTrace");
//   }

//   await connectDB(options.mongoUri);

//   // Optional: start auto-delete job if desired
//   startAutoDeleteJob();

//   // Attach routes
//   app.use("/api/logs", logRoutes);
//   app.use("/api/setting", settingRoutes);

//   // Add middleware to log requests
//   app.use(devTraceLogger({ endpoint: options.logEndpoint }));
// };

// export { devTraceLogger, connectDB };


import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logRoutes from "./routes/logRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";
import connectDB from "./config/db.js";
import startAutoDeleteJob from "./cron/autoDeleteLogs.js";

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

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
