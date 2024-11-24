import express, { Request, Response } from "express";
import { StudentRoutes } from "./app/modules/students/student.router";
import cors from "cors";
const app = express();

// perser -------------->
app.use(express.json());
app.use(cors());

// application routes---------------->
app.use("/api/v1/students", StudentRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello developer!");
});

export default app;
