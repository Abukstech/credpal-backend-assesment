import { Router } from 'express';
import { createMeal, deleteMeal, getUserMeals } from '../services/meal.service';
import { authenticateToken } from '../middleware/authenticate';


const router = Router();

router.post('/', createMeal);
router.get('/:userId', authenticateToken, getUserMeals);
router.delete('/:id', authenticateToken, deleteMeal);

export const MealController: Router = router;
