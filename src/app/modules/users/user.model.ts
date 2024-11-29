import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  id: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  needPasswordChange: {
    type: String,
  },
  role: {
    required: true,

    type: String,
    enum: ["admin", "student", "faculty"],
  },
  status: {
    required: true,
    type: String,
    enum: ["in-progress", "blocked"],
  },
  isDelete: {
    required: true,
    type: Boolean,
  },
});

export const UserModel = model<TUser>("User", userSchema);
