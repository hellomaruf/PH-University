import express from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "create-academic-faculty",
  validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty
);
router.get(
  "get-all-academic-faculty",
  validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.getAllAcademicFaculty
);
router.get(
  "get-single-academic-faculty",
  validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.getSingleAcademicFaculty
);

export const AcademicSemesterRouter = router;
