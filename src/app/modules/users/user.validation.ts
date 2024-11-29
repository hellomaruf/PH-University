import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error:'Password must be string'
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
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(["admin", "student", "faculty"]),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  isDelete: z.boolean().optional().default(false),
});

export const userValidation = {
    userValidationSchema,
};
