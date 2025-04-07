import { Request, Response } from 'express';

import prisma from '../lib/prisma';




export const createWorkout = async (req: Request, res: Response) => {
  const { type, duration, calories, userId } = req.body;
  try {
    const workout = await prisma.workout.create({
      data: { type, duration, calories, userId },
    });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create workout' });
  }
};



export const getUserWorkouts = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const workouts = await prisma.workout.findMany({ where: { userId } });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.workout.delete({ where: { id } });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
};
