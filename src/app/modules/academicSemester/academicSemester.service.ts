import { TAcademicSemesterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";
import { ObjectId } from "mongodb";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemesterCode) => {
  const result = AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemester = async () => {
  const result = await AcademicSemester.find({});
  return result;
};

const getSingleAcademicSemester = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: new ObjectId(id) });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemester,
  getSingleAcademicSemester,
};
