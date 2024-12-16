import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { CourseController } from "./course.controller";
import { courseValidation } from "./course.validation";

const router = express.Router();

router.post(
  "/create-course",
  validateRequest(courseValidation.CourseSchema),
  CourseController.createCourse
);

router.get("/all-course", CourseController.getAllCourse);

router.get("/:id", CourseController.getASingleCourse);

router.delete("/:id", CourseController.deleteCourse);

export const CourseRoutes = router;
