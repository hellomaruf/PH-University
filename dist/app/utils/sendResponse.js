"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.json({
        status: true,
        message: data.message,
        data: data.data,
    });
};
