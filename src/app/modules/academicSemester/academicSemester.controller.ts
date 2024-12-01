import {  RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";

const createAcademicSemester: RequestHandler = catchAsync(
    async (req, res, next) => {
        
    const academicSemesterData = req.body;

    // will call service function to send this data------------->
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
      academicSemesterData
    );

    // send response ------------>
    res.status(400).json({
      success: true,
      massage: "Acamemic semester is create successfully",
      data: result,
    });
  }
);

export const academicSemesterController = {
  createAcademicSemester,
};