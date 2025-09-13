import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema({
    autoDeleteLogs: {
        type: Boolean,
        default: false
    },
});

const Settings = mongoose.model("Settings", settingSchema);
export default Settings;