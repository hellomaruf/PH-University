import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicFacultyService } from "./academicFaculty.service";

const createAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const academicFacultyData = req.body;
    const result = AcademicFacultyService.createFaculty(academicFacultyData);

    res.json({
      success: true,
      message: "Faculty create successfully!",
      data: result,
    });
  }
);

const getAllAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = AcademicFacultyService.getAllAcademicFaculty();

    res.json({
      success: true,
      message: "Get All Faculty successfully!",
      data: result,
    });
  }
);

const getSingleAcademicFaculty: RequestHandler = catchAsync(
  async (req, res, next) => {
    const { id } = req.params;
    const result = AcademicFacultyService.getSingleAcademicFaculty(id);

    res.json({
      success: true,
      message: "Get All Faculty successfully!",
      data: result,
    });
  }
);

export const AcademicFacultyController = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
};
