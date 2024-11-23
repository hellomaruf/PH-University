import { Schema, model, connect } from "mongoose";

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
  gender: "male" | "female";
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "B+" | "AB+" | "O+";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
};
