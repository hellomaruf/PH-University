"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = require("mongoose");
// sub schema for organized code --------->
const studentName = new mongoose_1.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    middleName: {
        type: String,
        require: true,
    },
});
// sub schema for organized code --------->
const studentGuardian = new mongoose_1.Schema({
    fatherName: { type: String, require: true },
    motherName: { type: String, require: true },
    fatherContactNO: { type: String, require: true },
    motherContactNo: { type: String, require: true },
});
const studentSchema = new mongoose_1.Schema({
    id: String,
    name: studentName,
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "user id is required"],
        unique: true,
        ref: "User",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    email: { type: String, required: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "AB+", "B+", "O+"],
        required: true,
    },
    guardian: studentGuardian,
});
// create model--------------->
exports.studentModel = (0, mongoose_1.model)("student", studentSchema);
