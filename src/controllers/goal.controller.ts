import { Router } from 'express';
import { createGoal, getUserGoals, updateGoalStatus, deleteGoal } from '../services/goal.service';
import { authenticateToken } from '../middleware/authenticate';


const router = Router();

router.post('/', createGoal);
router.get('/:userId', authenticateToken, getUserGoals);
router.patch('/:id', authenticateToken, updateGoalStatus);
router.delete('/:id', authenticateToken, deleteGoal);

export const GoalController: Router = router;
