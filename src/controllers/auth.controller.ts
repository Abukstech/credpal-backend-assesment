import { Router } from "express";
import { login, signUp } from "../services/auth.service";



const router = Router();

router.post("/signup", signUp);
router.post("/login", login);

export const AuthController: Router = router;