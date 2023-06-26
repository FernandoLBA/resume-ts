import { NextFunction, Request, Response } from "express";
import { handleErrorHttpController } from "../utils";

const SECRET_KEY = process.env.SECRET_KEY;

export const secretMiddleware = (
  { headers: { secretkey } }: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!secretkey) {
      handleErrorHttpController(res, "AUTHORIZATION_HEADER_MISSING", 401);

      return;
    }

    if (secretkey !== SECRET_KEY) {
      handleErrorHttpController(res, "NOT_AUTHORIZED_FRONTEND", 401);

      return;
    }

    next();
  } catch (error) {
    handleErrorHttpController(res, "NOT_AUTHORIZED", 403);
  }
};
