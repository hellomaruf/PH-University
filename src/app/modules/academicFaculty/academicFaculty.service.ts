import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFacultyModel } from "./academicFaculty.model";
import { ObjectId } from "mongodb";

const createFaculty = (payload: TAcademicFaculty) => {
  const result = AcademicFacultyModel.create(payload);
  return result;
};

const getAllAcademicFaculty = async () => {
  const result = await AcademicFacultyModel.find({});
  return result;
};

const getSingleAcademicFaculty = async (id: string) => {
  const result = await AcademicFacultyModel.findOne({ _id: new ObjectId(id) });
  return result;
};

export const AcademicFacultyService = {
  createFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
};
