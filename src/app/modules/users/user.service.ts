import { Student } from "../students/student.interfase";
import { studentModel } from "../students/student.model";
import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createStudentIntoDB = async (studentData: Student) => {
  let userData: Partial<TUser> = {};

  // if password is not given , set default password--------->
  userData.password = process.env.DEFAULT_PASS as string;
  userData.role = "student";

  // manually set generated id ----->
  userData.id = "2030100001";
  const newUser = await UserModel.create(userData);

  // create student ------>
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = studentModel.create(studentData);
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
