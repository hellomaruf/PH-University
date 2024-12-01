"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = exports.TMonths = void 0;
const mongoose_1 = require("mongoose");
exports.TMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        enum: ["Aumumn", "Summar", "Fall"],
        required: true,
    },
    code: {
        type: String,
        enum: ["01", "02", "03"],
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        enum: exports.TMonths,
        required: true,
    },
    endMonth: {
        type: String,
        enum: exports.TMonths,
        required: true,
    },
});
exports.AcademicSemester = (0, mongoose_1.model)("AcademicSemester", academicSemesterSchema);
