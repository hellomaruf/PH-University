import { Response } from "express";
type TSuccessResponse<T> = {
  status: boolean;
  message: string;
  data: T[] | null | T;
};
const sendResponse = <T>(res: Response, data: TSuccessResponse<T>) => {
  res.json({
    status: true,
    message: data.message,
    data: data.data,
  });
};
