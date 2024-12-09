import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicDepartmentService } from "./academicDeparment.service";

const createAcademicDepartment: RequestHandler = catchAsync(
  async (req, res, next) => {
    const academicDepartmentData = req.body;
    const result = await AcademicDepartmentService.createDepartment(
      academicDepartmentData
    );

    res.json({
      success: true,
      message: "Department create successfully!",
      data: result,
    });
  }
);

const getAllAcademicDepartment: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await AcademicDepartmentService.getAllAcademicDeparment();

    res.json({
      success: true,
      message: "Get All Department successfully!",
      data: result,
    });
  }
);

const getSingleAcademicDepartment: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const result = await AcademicDepartmentService.getSingleAcademicDepartment(
      id
    );

    res.json({
      success: true,
      message: "Get Single Department successfully!",
      data: result,
    });
  }
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
};
