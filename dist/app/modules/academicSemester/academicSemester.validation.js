"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterValidation = void 0;
const zod_1 = require("zod");
const academicSemester_model_1 = require("./academicSemester.model");
const createAcademicSemesterValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum(["Aumumn", "Summar", "Fall"]),
        code: zod_1.z.enum(["01", "02", "03"]),
        year: zod_1.z.string(),
        startMonth: zod_1.z.enum(academicSemester_model_1.TMonths),
        endMonth: zod_1.z.enum(academicSemester_model_1.TMonths),
    }),
});
exports.AcademicSemesterValidation = {
    createAcademicSemesterValidationSchema,
};
