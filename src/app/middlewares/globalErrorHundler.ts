import { ErrorRequestHandler } from "express";
import { ZodError, ZodIssue } from "zod";
import { TErrorSourse } from "../interface/error";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Default error start---------->
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something Went Wrong!";

  let errorSourse: TErrorSourse = [
    {
      path: "",
      message: "Something Went Wrong!",
    },
  ];
  // Default error end---------->

  // handle zod error start ----------->
  const handleZodError = (err: ZodError) => {
    const statusCode = 400;
    const errorSourse = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1],
        message: issue.message,
      };
    });
    return {
      statusCode,
      message: "Zod Validaiton Error!",
      errorSourse,
    };
  };

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSourse = simplifiedError.errorSourse;
  }
  // handle zod error end ----------->

  console.error(err);

  res.status(statusCode || 500).json({
    success: false,
    message,
    errorSourse,
    stack: process.env.NODE_ENV === "development" ? err?.stack : null,
  });
};
export default globalErrorHandler;
