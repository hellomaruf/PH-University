import { z } from "zod";

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Department name must be string!",
      required_error: "name is required",
    }),
    academicFaculty: z.string({
      invalid_type_error: "Academic Faculty name must be string!",
      required_error: "Academic faculty is required",
    }),
  }),
});
const updateAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: "Department name must be string!",
        required_error: "name is required",
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: "Academic Faculty name must be string!",
        required_error: "Academic faculty is required",
      })
      .optional(),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
