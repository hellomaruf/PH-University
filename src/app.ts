import express, { NextFunction, Request, Response } from "express";
import { StudentRoutes } from "./app/modules/students/student.router";
import cors from "cors";
import { UsersRouters } from "./app/modules/users/user.router";
import globalErrorHandler from "./app/middlewares/globalErrorHundler";
import { createAcademicSemesterRoutes } from "./app/modules/academicSemester/academicSemester.route";
import { AcademicFacultyRouter } from "./app/modules/academicFaculty/academicFaculty.router";
import { AcademicDepartmentRouter } from "./app/modules/academicDepartment/academicDepartment.router";
const app = express();

// perser -------------->
app.use(express.json());
app.use(cors());

// application routes---------------->
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UsersRouters);
app.use("/api/v1/academy-semester", createAcademicSemesterRoutes);
app.use("/api/v1/academy-faculty", AcademicFacultyRouter);
app.use("/api/v1/academy-department", AcademicDepartmentRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello developer!");
});

// Global error handle-------->
app.use(globalErrorHandler);

export default app;
