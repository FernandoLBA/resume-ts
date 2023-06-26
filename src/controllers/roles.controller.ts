import { Request, Response } from "express";
import { RequestExtended } from "../interfaces";
import {
  createRoleService,
  deleteRoleService,
  getRoleService,
  getRolesService,
  getUsersByRoleService,
  updateRoleService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getRoles = async (req: Request, res: Response) => {
  try {
    const data = await getRolesService();

    handleHttpResponses(res, "Items listed", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_GETTING_ITEMS",
      500,
      JSON.stringify(error)
    );
  }
};

/**
 *
 * @param param0
 * @param res
 * @returns
 */
export const getUsersByRole = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getUsersByRoleService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Users listed by role", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_GET_MIXING_ITEMS",
      500,
      JSON.stringify(error)
    );
  }
};

/**
 *
 * @param param0
 * @param res
 */
export const getRole = async (
  { params: { id } }: RequestExtended,
  res: Response
) => {
  try {
    const data = await getRoleService(id);

    if (!data) return handleErrorHttpController(res, "ITEM_NOT_FOUND", 404);

    handleHttpResponses(res, "Item listed", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_GETTING_ITEM",
      500,
      JSON.stringify(error)
    );
  }
};

/**
 *
 * @param param0
 * @param res
 */
export const createRole = async ({ body }: Request, res: Response) => {
  try {
    const { item: data, created } = await createRoleService(body);

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
 */
export const updateRole = async (
  { params: { id }, body }: Request,
  res: Response
) => {
  try {
    const data = await updateRoleService(id, body);

    if (!data) return handleErrorHttpController(res, "ITEM_NOT_FOUND", 404);

    handleHttpResponses(res, "Item updated", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_UPDATING_ITEM",
      500,
      JSON.stringify(error)
    );
  }
};

/**
 *
 * @param req
 * @param res
 */
export const deleteRole = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteRoleService(id);

    if (!data) return handleErrorHttpController(res, "ITEM_NOT_FOUND", 404);

    handleHttpResponses(res, "Item deleted", data);
  } catch (error) {
    handleErrorHttpController(
      res,
      "ERROR_UPDATING_ITEM",
      500,
      JSON.stringify(error)
    );
  }
};
