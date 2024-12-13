import { model, Schema, Types } from "mongoose";
import { TAcademicDeparment } from "./academicDepartment.interface";

const academicDepartmentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: "AcademicDepartment",
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
