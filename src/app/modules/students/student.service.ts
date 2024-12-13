import { Student } from "./student.interfase";
import { studentModel } from "./student.model";

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await studentModel.find().populate('admissionSemester');
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
