const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
    autoDeleteLogs: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("Settings", settingSchema);