"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = require("./app/modules/users/user.router");
const app = (0, express_1.default)();
// perser -------------->
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes---------------->
// app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", user_router_1.UsersRouters);
app.get("/", (req, res) => {
    res.send("Hello developer!");
});
// Global error handle-------->
app.use((err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || "Something Went Wrong!!";
    return res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
});
exports.default = app;
