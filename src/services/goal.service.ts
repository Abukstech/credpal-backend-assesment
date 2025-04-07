import { Request, Response } from 'express';
import prisma from '../lib/prisma';


export const createGoal = async (req: Request, res: Response) => {
  const { description, target, userId } = req.body;
  try {
    const goal = await prisma.goal.create({ data: { description, target, userId } });
    res.status(201).json(goal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create goal' });
  }
};

export const getUserGoals = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const goals = await prisma.goal.findMany({ where: { userId } });
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch goals' });
  }
};

export const updateGoalStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { achieved } :{achieved:boolean} = req.body;
  try {
    const goal = await prisma.goal.update({
      where: { id },
      data: { achieved :true},
    });
    res.json(goal);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update goal' });
  }
};

export const deleteGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.goal.delete({ where: { id } });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete goal' });
  }
};
