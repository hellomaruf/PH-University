import { model, Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const months = [
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
];

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
    type: Date,
    required: true,
  },
  startMonth: {
    type: String,
    enum: months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: months,
    required: true,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  "AcademicSemester",
  academicSemesterSchema
);
