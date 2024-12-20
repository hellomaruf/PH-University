import { Types } from "mongoose";

export type TPreRequisitCourse = {
  course: Types.ObjectId;
  isDeleted: boolean;
};

export type TCourse = {
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisitCourse: [];
  isDeleted?: boolean;

};
