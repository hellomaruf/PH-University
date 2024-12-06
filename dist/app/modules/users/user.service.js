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
exports.usersServices = void 0;
const student_model_1 = require("../students/student.model");
const user_model_1 = require("./user.model");
const createStudentIntoDB = (studentData) => __awaiter(void 0, void 0, void 0, function* () {
    let userData = {};
    // if password is not given , set default password--------->
    userData.password = process.env.DEFAULT_PASS;
    userData.role = "student";
    // generate student id ----------->
    const generateStudentId = (payload) => {
    };
    // manually set generated id ----->
    userData.id = generateStudentId();
    const newUser = yield user_model_1.UserModel.create(userData);
    // create student ------>
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;
        const newStudent = student_model_1.studentModel.create(studentData);
        return newStudent;
    }
    return newUser;
});
const getAllStudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find();
    return result;
});
exports.usersServices = {
    createStudentIntoDB,
    getAllStudentFromDB,
};
