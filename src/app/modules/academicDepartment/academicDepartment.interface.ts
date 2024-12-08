import { Types } from "mongoose";

export type TAcademicDeparment = {
  name: string;
  academicFaculty: Types.ObjectId;
};
