import { Router } from 'express';
import { createWorkout, getUserWorkouts, deleteWorkout } from '../services/workout.service';


const router = Router();

router.post('/', createWorkout);
router.get('/:userId', getUserWorkouts);
router.delete('/:id', deleteWorkout);

export const WorkoutController: Router = router;
