import { z } from "zod";

const PreRequisitCourseSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const CourseSchema = z.object({
  title: z.string(),
  prefix: z.string(),
  code: z.number(),
  credits: z.number(),
  preRequisitCourse: z.array(PreRequisitCourseSchema).optional(),
});

export const courseValidation = { PreRequisitCourseSchema, CourseSchema };
