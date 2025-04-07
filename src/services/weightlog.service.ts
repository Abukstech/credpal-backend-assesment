import { Request, Response } from 'express';
import prisma from '../lib/prisma';


export const createWeightLog = async (req: Request, res: Response) => {
  const { weight, userId } = req.body;
  try {
    const log = await prisma.weightLog.create({ data: { weight, userId } });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: 'Failed to log weight' });
  }
};

export const getUserWeightLogs = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const logs = await prisma.weightLog.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weight logs' });
  }
};
