import QueryBuilder from "../../builder/queryBuilder";
import { studentSearchableField } from "./student.constant";
import { Student } from "./student.interfase";
import { studentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  console.log(query);

  // let searchTerm = "";
  // const studentSearchableField = ["name.firstName", "email"];

  // const queryObj = { ...query };
  // const excludingImportant = ["searchTerm"];
  // excludingImportant.forEach((key) => delete queryObj[key]);

  // if (query?.searchTerm) {
  //   searchTerm = query?.searchTerm as string;
  // }

  // const searchQuery = studentModel.find({
  //   $or: studentSearchableField.map((field) => ({
  //     [field]: { $regex: searchTerm, $options: "i" },
  //   })),
  // });

  // const result = await searchQuery.find(queryObj).populate("admissionSemester");
  // return result;

  const studentQuery = new QueryBuilder(studentModel.find(), query)
    .search(studentSearchableField)
    .filter()
    .sort()
    .paginate();

  const result = await studentQuery.modelQuery;
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
