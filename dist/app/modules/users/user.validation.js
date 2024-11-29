"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    id: zod_1.z.string(),
    password: zod_1.z
        .string({
        invalid_type_error: 'Password must be string'
    })
        .min(8, { message: "Password must be at least 8 characters long" })
        .max(20, { message: "Password must be no more than 20 characters long" })
        .regex(/[A-Z]/, {
        message: "Password must include at least one uppercase letter",
    })
        .regex(/[a-z]/, {
        message: "Password must include at least one lowercase letter",
    })
        .regex(/[0-9]/, { message: "Password must include at least one number" })
        .regex(/[@$!%*?&]/, {
        message: "Password must include at least one special character (@$!%*?&)",
    }),
    needsPasswordChange: zod_1.z.boolean().optional(),
    role: zod_1.z.enum(["admin", "student", "faculty"]),
    status: zod_1.z.enum(["in-progress", "blocked"]).default("in-progress"),
    isDelete: zod_1.z.boolean().optional().default(false),
});
exports.userValidation = {
    userValidationSchema,
};
