import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { UserModel } from "./user.model";

const findLastStudentId = async () => {
  const lastStudentId = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      id: -1,
    })
    .lean();
  return lastStudentId?.id ? lastStudentId.id.substring(6) : undefined;
};

// generate student id ----------->
export const generateStudentId = async (payload: TAcademicSemester) => {
  let currentSemesterId = (0).toString();
  // first time id---------->
  const lastStudentId = await findLastStudentId(); // 2024--->year 01---->code 0001----generated id
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4); //01
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); //2024
  const currentSemesterCode = payload.code;
  const currentSemesterYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentSemesterYear === currentSemesterYear
  ) {
    currentSemesterId = lastStudentId.substring(6) 
  }

  let incrementId = (parseInt(currentSemesterId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
