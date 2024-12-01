import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";
import { academicSemesterController } from "./academicSemester.controller";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  academicSemesterController.createAcademicSemester
);

export const createAcademicSemesterRoutes = router;
