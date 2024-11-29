import { Schema, model, connect, Types } from "mongoose";

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherContactNO: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  address: string;
  ContactNo: string;
};

export type Student = {
  id: string;
  name: UserName;
  user:Types.ObjectId
  gender: "male" | "female";
  email: string;
  contactNo: string;
  emergencyContactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "AB+" | "O+";
  guardian: Guardian;
//   presentAddress: string;
//   permanentAddress: string;
//   localGuardian: LocalGuardian;
};
