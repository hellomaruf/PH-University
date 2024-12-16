import { RequestHandler } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { CourseServices } from "./course.service";

const createCourse: RequestHandler = catchAsync(async (req, res, next) => {
  const courseData = req.body;

  // will call service function to send this data------------->
  const result = await CourseServices.createCourseIntoDB(courseData);

  // send response ------------>
  res.status(200).json({
    success: true,
    massage: "Create Course is create successfully",
    data: result,
  });
});

const getAllCourse: RequestHandler = catchAsync(async (req, res, next) => {
  const result = await CourseServices.getAllCourseFromDB();

  res.status(200).json({
    success: true,
    massage: "Get all Course Successfully",
    data: result,
  });
});

const getASingleCourse: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseServices.getSingleCourseFromDB(id);

  res.status(200).json({
    success: true,
    massage: "Get single Course Successfully",
    data: result,
  });
});

const deleteCourse: RequestHandler = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await CourseServices.deleteCourseFromDB(id);

  res.status(200).json({
    success: true,
    massage: "Delete Course Successfully",
    data: result,
  });
});

export const CourseController = {
  createCourse,
  getAllCourse,
  getASingleCourse,
  deleteCourse,
};
