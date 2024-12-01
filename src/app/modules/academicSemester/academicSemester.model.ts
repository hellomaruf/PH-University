import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

export const TMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: ["Aumumn", "Summar", "Fall"],
    required: true,
  },
  code: {
    type: String,
    enum: ["01", "02", "03"],
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: TMonths,
    required: true,
  },
  endMonth: {
    type: String,
    enum: TMonths,
    required: true,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
