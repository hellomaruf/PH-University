"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_router_1 = require("./app/modules/students/student.router");
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./app/modules/users/user.router");
const app = (0, express_1.default)();
// perser -------------->
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes---------------->
app.use("/api/v1/students", student_router_1.StudentRoutes);
app.use("/api/v1/users", user_router_1.UsersRouters);
app.get("/", (req, res) => {
    res.send("Hello developer!");
});
exports.default = app;
