"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicSemesterController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const academicSemester_service_1 = require("./academicSemester.service");
const createAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSemesterData = req.body;
    // will call service function to send this data------------->
    const result = yield academicSemester_service_1.AcademicSemesterServices.createAcademicSemesterIntoDB(academicSemesterData);
    // send response ------------>
    res.status(400).json({
        success: true,
        massage: "Acamemic semester is create successfully",
        data: result,
    });
}));
const getAllAcademicSemester = (0, catchAsync_1.catchAsync)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_service_1.AcademicSemesterServices.getAllAcademicSemester();
    res.status(400).json({
        success: true,
        massage: "Get all Semester Successfully",
        data: result,
    });
}));
exports.academicSemesterController = {
    createAcademicSemester,
    getAllAcademicSemester
};
