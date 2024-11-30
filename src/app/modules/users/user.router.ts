import express, { NextFunction, Request, Response } from "express";
import { usersController } from "./user.controller";

const router = express.Router();

const shenaBahini = (name: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(`i am a shenabahini name ${name}`);
    next();
  };
};

router.post(
  "/create-users",
  shenaBahini("Validation"),
  usersController.createStudent
);

export const UsersRouters = router;
