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

router.get(
  "/get-all-academic-semester",
  academicSemesterController.getAllAcademicSemester
);

router.get(
  "/get-single-semester/:id",
  academicSemesterController.getASingleAcademicSemester
);

export const createAcademicSemesterRoutes = router;
