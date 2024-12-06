import { TAcademicSemester } from "../academicSemester/academicSemester.interface";

// generate student id ----------->
export const generateStudentId = (payload: TAcademicSemester) => {
  // first time id---------->
  const currentId = (0).toString().padStart(4, "0");

  let incrementId = (parseInt(currentId) + 1).toString();
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
