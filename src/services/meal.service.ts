import { Request, Response } from 'express';
import prisma from '../lib/prisma';


export const createMeal = async (req: Request, res: Response) => {
  const { name, calories, protein, carbs, fats, userId } = req.body;
  try {
    const meal = await prisma.meal.create({
      data: { name, calories, protein, carbs, fats, userId },
    });
    res.status(201).json(meal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to log meal' });
  }
};

export const getUserMeals = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const meals = await prisma.meal.findMany({ where: { userId } });
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch meals' });
  }
};

export const deleteMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.meal.delete({ where: { id } });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete meal' });
  }
};
