import { Router } from "express";
import { UsersRouters } from "../modules/users/user.router";
import { StudentRoutes } from "../modules/students/student.router";
import { createAcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { AcademicSemesterRouter } from "../modules/academicFaculty/academicFaculty.router";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UsersRouters,
  },
  {
    path: "/students",
    route: StudentRoutes,
  },
  {
    path: "/academy-semester",
    route: createAcademicSemesterRoutes,
  },
  {
    path: "/academy-faculty",
    route: AcademicSemesterRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
