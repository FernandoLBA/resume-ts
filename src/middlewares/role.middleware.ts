import { NextFunction, Response } from "express";
import { RequestExtended, Role, User } from "../interfaces";
import { handleErrorHttpController } from "../utils";

export const roleChecker = (roles: string[]) => {
  return async (req: RequestExtended, res: Response, next: NextFunction) => {
    try {
      const { user } = req;

      const { role } = user as User;

      const { role: rol } = role as Role;

      if (!roles.some((r) => r === rol))
        return handleErrorHttpController(res, "NOT_AUTHORIZED", 401);

      next();
    } catch (error) {
      handleErrorHttpController(res, "", 500, JSON.stringify(error));
    }
  };
};
