import { NextFunction, Request, RequestHandler, Response } from "express";
import { usersServices } from "./user.service";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

const createStudent: RequestHandler = catchAsync(async (req, res, next) => {
  const studentData = req.body;
  console.log(studentData);

  // will call service function to send this data------------->
  const result = await usersServices.createStudentIntoDB(studentData);

  // send response ------------>
  res.status(400).json({
    success: true,
    massage: "Student is create successfully",
    data: result,
  });
});

// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await studentServices.getAllStudentFromDB();
//     res.status(200).json({
//       success: true,
//       message: "All student find successfully",
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const usersController = {
  createStudent,
};
