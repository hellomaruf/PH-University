"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
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
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
