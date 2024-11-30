import { NextFunction, Request, Response } from "express";

// const globalErrorHundler = (
//   err: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   let statusCode = 500;
//   let message = err.message || "Something Went Wrong!!";

//   return res.status(statusCode).json({
//     success: false,
//     message,
//     error: err,
//   });
// };


const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Handle the error
    console.error(err);
     res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
};
export default globalErrorHandler;