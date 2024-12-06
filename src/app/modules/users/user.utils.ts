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
console.log(findLastStudentId());

// generate student id ----------->
export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time id---------->
  const lastStudentId = await findLastStudentId();
  const currentId = lastStudentId || (0).toString();

  let incrementId = (parseInt(currentId) + 1).toString().padStart(4, "0");
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
