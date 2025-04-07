import { Request, Response } from "express";
import { PrismaClient, User } from "@prisma/client";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";





import { Readable } from "stream";
import { generateToken } from "../helpers/jwt";
import prisma from "../lib/prisma";


export const signUp = async (req: Request, res: Response) => {
  const {
  name,
  email,
  password
  }:User = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      res.status(400).json({ message: "Email already in use." });
      return;
    }

   

    const hashedPassword = await bcrypt.hash(password, 10);


    const newUserData: Prisma.UserCreateInput = {
        name,
      email,
    
      
      password: hashedPassword,
   
    };

    const newUser = await prisma.user.create({
      data: newUserData,
    },

);

    const token = generateToken(newUser.id);
    res.status(201).json({ token, user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

// Login function
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find the restaurant by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(404).json({ message: "Restaurant not found." });
      return;
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials." });
      return;
    }

    // Generate JWT token
    const token = generateToken(user.id);
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
};
