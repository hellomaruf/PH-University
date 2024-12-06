import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFaculty.interface";

const academicFacultyModel = new Schema<TAcademicFaculty>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const AcademicFacultyModel = model<TAcademicFaculty>(
  "AcademicFacultyModel",
  academicFacultyModel
);
