import { model, Schema } from "mongoose";
import { Guardian, Student, UserName } from "./student.interfase";

// sub schema for organized code --------->
const studentName = new Schema<UserName>({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  middleName: {
    type: String,
    require: true,
  },
});

// sub schema for organized code --------->
const studentGuardian = new Schema<Guardian>({
  fatherName: { type: String, require: true },
  motherName: { type: String, require: true },
  fatherContactNO: { type: String, require: true },
  motherContactNo: { type: String, require: true },
});

const studentSchema = new Schema<Student>({
  id: String,
  name: studentName,
  user: {
    type: Schema.Types.ObjectId,
    required: [true, "user id is required"],
    unique: true,
    ref: "User",
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "AB+", "B+", "O+"],
    required: true,
  },
  guardian: studentGuardian,
  admissionSemester: {
    type: Schema.Types.ObjectId,
    ref:'AcademicSemester'
  },
});

// create model--------------->
export const studentModel = model<Student>("student", studentSchema);
