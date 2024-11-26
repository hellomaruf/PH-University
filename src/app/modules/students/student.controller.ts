import { Request, Response } from "express";
import { studentServices } from "./student.service";
const createStudent = async (req: Request, res: Response) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "All student find successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
};
