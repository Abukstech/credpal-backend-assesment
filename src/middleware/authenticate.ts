import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access token is required' });
    return
  }

  try {
    const secretKey = process.env.JWT_SECRET!;
    const decoded = jwt.verify(token, secretKey) as { id: string };

    req.userId = decoded.id; // Attach userId to request object


    
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};