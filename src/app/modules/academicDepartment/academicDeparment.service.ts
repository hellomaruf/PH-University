import { ObjectId } from "mongodb";
import { TAcademicDeparment } from "./academicDepartment.interface";
import { AcademicDepartmentModel } from "./academicDepartment.model";

const createDepartment = async (payload: TAcademicDeparment) => {
  // Add exist validation------------>
  const isDepartmentExist = await AcademicDepartmentModel.findOne({
    name: payload.name,
  });

  if (isDepartmentExist) {
    throw new Error("This department is already Exist!");
  }

  const result = await AcademicDepartmentModel.create(payload);
  return result;
};

const getAllAcademicDeparment = async () => {
  const result = await AcademicDepartmentModel.find().populate(
    "academicFaculty"
  );
  return result;
};

const getSingleAcademicDepartment = async (id: string) => {
  const result = await AcademicDepartmentModel.findOne({
    _id: new ObjectId(id),
  });
  return result;
};

export const AcademicDepartmentService = {
  createDepartment,
  getAllAcademicDeparment,
  getSingleAcademicDepartment,
};
