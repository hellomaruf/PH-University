import QueryBuilder from "../../builder/queryBuilder";
import { courseSearchableFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { CourseModel } from "./course.model";

const createCourseIntoDB = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};

const getAllCourseFromDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(
    CourseModel.find().populate("preRequisitCourse.course"),
    query
  )
    .search(courseSearchableFields)
    .filter()
    .sort()
    .paginate();
  const result = await courseQuery.modelQuery;
  return result;
};

const getSingleCourseFromDB = async (id: string) => {
  const result = await CourseModel.findById(id).populate(
    "preRequisitCourse.course"
  );
  return result;
};

const deleteCourseFromDB = async (id: string) => {
  const result = await CourseModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const CourseServices = {
  createCourseIntoDB,
  getAllCourseFromDB,
  getSingleCourseFromDB,
  deleteCourseFromDB,
};
