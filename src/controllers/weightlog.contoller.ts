import { Router } from 'express';
import { createWeightLog, getUserWeightLogs } from '../services/weightlog.service';
import { authenticateToken } from '../middleware/authenticate';


const router = Router();

router.post('/', createWeightLog);
router.get('/:userId', authenticateToken, getUserWeightLogs);



export const WeightLogController: Router = router;