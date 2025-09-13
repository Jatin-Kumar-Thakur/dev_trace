// import cron from 'node-cron';
// import Log from '../models/Log.js';
import Settings from '../models/Setting.js';

// // Schedule cron job to run daily at midnight
// const startAutoDeleteJob = () => {
//     cron.schedule('0 0 * * *', async () => {
//         try {
//             const settings = await Settings.findOne();
//             if (settings?.autoDeleteLogs) {
//                 const cutoffDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
//                 const result = await Log.deleteMany({ timestamp: { $lt: cutoffDate } });

//                 console.log(`🧹 Auto-delete: Removed ${result.deletedCount} logs older than 7 days`);
//             }
//         } catch (err) {
//             console.error('❌ Error during auto-delete:', err.message);
//         }
//     });

//     console.log('✅ Auto-delete cron job scheduled');
// };

// export default startAutoDeleteJob;

import Log from '../models/Log.js';

const deleteOldLogs = async () => {
    try {
        const settings = await Settings.findOne();
        if (settings?.autoDeleteLogs) {
            const cutoffDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days ago
            const result = await Log.deleteMany({ timestamp: { $lt: cutoffDate } });

            console.log(`🧹 Deleted ${result.deletedCount} logs older than 7 days`);
            return result.deletedCount;
        }
    } catch (err) {
        console.error("❌ Error deleting old logs:", err.message);
        throw err;
    }
};

export default deleteOldLogs;

