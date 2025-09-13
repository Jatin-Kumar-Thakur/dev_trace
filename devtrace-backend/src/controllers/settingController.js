import Settings from '../models/Setting.js';

export const updateAutoDeleteSetting = async (req, res) => {
    try {
        const { enable } = req.body;
        const updated = await Settings.findOneAndUpdate(
            {},
            {
                autoDeleteLogs: enable,
            },
            {
                upsert: true, new: true
            }
        )
        res.status(200).json({ message: "Setting Updated....", data: updated })
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
};

export const getSettings = async (req, res) => {
    try {
        const data = await Settings.findOne();
        res.status(200).json(data || { autoDeleteLogs: false });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
};