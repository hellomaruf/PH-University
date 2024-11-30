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
exports.usersController = void 0;
const user_service_1 = require("./user.service");
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentData = req.body;
        console.log(studentData);
        // will call service function to send this data------------->
        const result = yield user_service_1.usersServices.createStudentIntoDB(studentData);
        // send response ------------>
        res.status(400).json({
            success: true,
            massage: "Student is create successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
// const getAllStudents = async (req: Request, res: Response) => {
//   try {
//     const result = await studentServices.getAllStudentFromDB();
//     res.status(200).json({
//       success: true,
//       message: "All student find successfully",
//       data: result,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
exports.usersController = {
    createStudent,
};
