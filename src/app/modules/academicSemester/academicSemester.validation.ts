import { z } from "zod";
import { TMonths } from "./academicSemester.model";

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum(["Aumumn", "Summar", "Fall"]),
    code: z.enum(["01", "02", "03"]),
    year: z.string(),
    startMonth: z.enum(TMonths),
    endMonth: z.enum(TMonths),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterValidationSchema,
};
