import { Request, Response } from "express";
import { RequestExtended } from "../interfaces";
import { loginUserService, registerUserService } from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param param0
 * @param res
 * @returns
 */
export const registerUser = async ({ body }: Request, res: Response) => {
  try {
    const { rest: data, created } = await registerUserService(body);

    if (!data.length && !created)
      return handleErrorHttpController(res, "ROLE_NEEDED", 500);

    if (!created)
      return handleErrorHttpController(res, "ITEM_ALREADY_EXISTS", 400);

    handleHttpResponses(res, "Item created", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_CREATING_ITEM",
      500,
      JSON.stringify(error)
    );
  }
};

/**
 *
 * @param req
 * @param res
 * @returns
 */
export const loginUser = async (req: RequestExtended, res: Response) => {
  try {
    const { body } = req;

    const data = await loginUserService(body);

    if (!data) return handleErrorHttpController(res, "USER_NOT_FOUND", 404);

    if (data.error) return handleErrorHttpController(res, data.msg, 403);

    handleHttpResponses(res, "Welcome", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_REGISTERING_USER",
      500,
      JSON.stringify(error)
    );
  }
};
