import express from "express";
import { usersController } from "./user.controller";

const router = express.Router();

router.post("/create-users", usersController.createStudent);

export const UsersRouters = router;
