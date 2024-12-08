import { model, Schema, Types } from "mongoose";
import { TAcademicDeparment } from "./academicDepartment.interface";

const academicDepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    academicFaculty: {
      type: Types.ObjectId,
      ref: "AcademicFaculty",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicDepartmentModel = model<TAcademicDeparment>(
  "AcademicDepartment",
  academicDepartmentSchema
);
