import { NextFunction, Response } from "express";
import { RequestExtended } from "../interfaces";
import { Role as RoleModel, User as UserModel } from "../models";
import { handleErrorHttpController, tokenSignedChecker } from "../utils";

/**
 *
 * @param req
 * @param res
 * @param next
 */
export const sessionMiddleware = async (
  req: RequestExtended,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization)
      return handleErrorHttpController(res, "LOGIN_REQUIRED", 401);

    const token: string = authorization?.replace("Bearer", "").trim() || "";

    const { email } = tokenSignedChecker(token) as RequestExtended;

    if (!email)
      return handleErrorHttpController(res, "AUTHENTICATION_ERROR", 401);

    const item = await UserModel.findOne({
      where: { email },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt", "phone_number"],
      },
      include: {
        model: RoleModel,
        attributes: ["role"],
      },
    });

    if (!item) return handleErrorHttpController(res, "UNAUTHORIZED", 403);

    req.user = item?.dataValues;

    next();
  } catch (error) {
    const message: string = JSON.stringify(error);

    if (message.toLowerCase().includes("expired")) {
      return handleErrorHttpController(res, "EXPIRED_TOKEN", 401);
    } else {
      handleErrorHttpController(
        res,
        "AUTHORIZATION_ERROR",
        500,
        JSON.stringify(message)
      );
    }
  }
};
