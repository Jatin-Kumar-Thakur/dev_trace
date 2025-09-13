import express from 'express';
const router = express.Router();
import { createLog, getLogs } from '../controllers/logController.js';

router.post('/', createLog);
router.get('/', getLogs);

export default router;
