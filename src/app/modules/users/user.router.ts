import express, { NextFunction, Request, Response } from "express";
import { usersController } from "./user.controller";
import { AnyZodObject } from "zod";

const router = express.Router();

const validationRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Validation code here --------------->
    const zodParseData = await schema.parseAsync({
      body: req.body,
    });
  };
};

router.post(
  "/create-users",
    // validationRequest({ }),
  usersController.createStudent
);

export const UsersRouters = router;
