import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

const createStudent = catchAsync(async (req, res) => {
  const studentData = req.body;
  console.log(studentData);

  // will call service function to send this data------------->
  const result = await studentServices.createStudentIntoDB(studentData);

  // send response ------------>
  res.status(400).json({
    success: true,
    massage: "Student is create successfully",
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "All student find successfully",
    data: result,
  });
});

export const studentController = {
  createStudent,
  getAllStudents,
};
