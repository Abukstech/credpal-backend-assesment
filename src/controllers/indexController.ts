import { Router, Request, Response } from "express";
import { MealController } from "./meal.controller";
import { WorkoutController } from "./workout.controller";
import { WeightLogController } from "./weightlog.contoller";
import { GoalController } from "./goal.controller";
import { AuthController } from "./auth.controller";


const IndexController: Router = Router();


IndexController.use("/auth", AuthController);
IndexController.use("/meal", MealController);
IndexController.use("/goals", GoalController);
IndexController.use("/workout", WorkoutController);
IndexController.use("/weightlog", WeightLogController);
IndexController.get("/", async (_req: Request, res: Response) => {
  let data = {
    time: "2-Nov-24,19:00",
    message: "hello biterush",
  };
  res.status(200).json(data);
});

export default IndexController;