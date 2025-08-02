const cron = require('node-cron');
const Log = require('../models/Log');
const Settings = require('../models/Setting');

// Schedule cron job to run daily at midnight
const startAutoDeleteJob = () => {
    cron.schedule('0 0 * * *', async () => {
        try {
            const settings = await Settings.findOne();
            if (settings?.autoDeleteLogs) {
                const cutoffDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
                const result = await Log.deleteMany({ timestamp: { $lt: cutoffDate } });

                console.log(`🧹 Auto-delete: Removed ${result.deletedCount} logs older than 7 days`);
            }
        } catch (err) {
            console.error('❌ Error during auto-delete:', err.message);
        }
    });

    console.log('✅ Auto-delete cron job scheduled');
};

module.exports = startAutoDeleteJob;
