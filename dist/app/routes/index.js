"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../modules/users/user.router");
const student_router_1 = require("../modules/students/student.router");
const academicSemester_route_1 = require("../modules/academicSemester/academicSemester.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/users",
        route: user_router_1.UsersRouters,
    },
    {
        path: "/students",
        route: student_router_1.StudentRoutes,
    },
    {
        path: "/academy-semester",
        route: academicSemester_route_1.createAcademicSemesterRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
