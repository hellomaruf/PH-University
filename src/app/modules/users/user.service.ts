import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { Student } from "../students/student.interfase";
import { studentModel } from "../students/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (payload: Student) => {
  let userData: Partial<TUser> = {};

  // if password is not given , set default password--------->
  userData.password = process.env.DEFAULT_PASS as string;
  userData.role = "student";

 

  const admissionSemesters = await AcademicSemester.findById(payload.admissionSemester)

  // manually set generated id ----->
  userData.id = await generateStudentId(admissionSemesters);
  const newUser = await UserModel.create(userData);

  // create student ------>
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = studentModel.create(payload);
    return newStudent;
  }
  return newUser;
};

const getAllStudentFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

export const usersServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
};
