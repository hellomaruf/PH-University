import { Router } from "express";
import { UsersRouters } from "../modules/users/user.router";
import { StudentRoutes } from "../modules/students/student.router";
import { createAcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
