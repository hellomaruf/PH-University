import { Student } from "./student.interfase";
import { studentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentFromDB = async (query: Record<string, unknown>) => {
  let searchTerm = "";
  const studentSearchableField = ["name.firstName", "email"];
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const result = await studentModel
    .find({
      $or: studentSearchableField.map((field) => ({
        [field]: { $regex: searchTerm, $options: "i" },
      })),
    })
    .populate("admissionSemester");
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
