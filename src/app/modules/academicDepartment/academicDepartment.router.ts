import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";
import { AcademicDepartmentController } from "./academicDeparment.controller";

const router = express.Router();

router.post(
  "/create-academic-department",
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentController.createAcademicDepartment
);
router.get(
  "/get-all-academic-department",
  AcademicDepartmentController.getAllAcademicDepartment
);
router.get("/:id", AcademicDepartmentController.getSingleAcademicDepartment);

export const AcademicDepartmentRouter = router;
