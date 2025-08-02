const express = require("express");
const router = express.Router();
const { updateAutoDeleteSetting, getSettings } = require("../controllers/settingController");

router.get("/auto-delete", getSettings);
router.post("/auto-delete", updateAutoDeleteSetting);

module.exports = router;