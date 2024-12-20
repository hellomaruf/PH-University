import express from "express";
import { studentController } from "./student.controller";
const router = express.Router();

// will call controller function------------->
router.post("/create-student", studentController.createStudent);
router.get("/all-students", studentController.getAllStudents);

export const StudentRoutes = router;
