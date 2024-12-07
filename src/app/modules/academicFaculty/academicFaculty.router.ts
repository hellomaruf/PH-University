import express from "express";
import { AcademicFacultyController } from "./academicFaculty.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyValidation } from "./academicFaculty.validation";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(AcademicFacultyValidation.academicFacultyValidationSchema),
  AcademicFacultyController.createAcademicFaculty
);
router.get(
  "/get-all-academic-faculty",
  AcademicFacultyController.getAllAcademicFaculty
);
router.get(
  "/:id",
  AcademicFacultyController.getSingleAcademicFaculty
);

export const AcademicFacultyRouter = router;
