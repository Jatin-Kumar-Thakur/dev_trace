
import express from "express";
const router = express.Router();
import { updateAutoDeleteSetting, getSettings } from "../controllers/settingController.js";

router.get("/auto-delete", getSettings);
router.post("/auto-delete", updateAutoDeleteSetting);

export default router;