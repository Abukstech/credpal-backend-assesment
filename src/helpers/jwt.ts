
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET;

export const generateToken = (id: string) => {
  return jwt.sign({ id }, secretKey as string, { expiresIn: "1h" });
};