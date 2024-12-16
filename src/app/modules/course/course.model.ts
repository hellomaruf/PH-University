import { model, Schema } from "mongoose";
import { TCourse, TPreRequisitCourse } from "./course.interface";

const PreRequisitCourseSchema = new Schema<TPreRequisitCourse>({
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  isDeleted: { type: Boolean, default: false },
});

const CourseSchema = new Schema<TCourse>({
  title: { type: String, trim: true, unique: true, required: true },
  prefix: { type: String, required: true },
  code: { type: Number, required: true },
  credits: { type: Number, required: true },
  preRequisitCourse: [PreRequisitCourseSchema],
  isDeleted: { type: Boolean, default: false },

});

// Create and export the model
export const CourseModel = model<TCourse>("Course", CourseSchema);
