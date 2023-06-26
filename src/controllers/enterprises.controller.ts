import { Request, Response } from "express";
import {
  createEnterpriseService,
  deleteEnterpriseService,
  getAllEnterprisesService,
  getEnterpriseService,
  getUsersByEnterpriseService,
  updateEnterpriseService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getAllEnterprises = async (req: Request, res: Response) => {
  try {
    const data = await getAllEnterprisesService();

    handleHttpResponses(res, "Items listed", data);
  } catch (error) {
    handleErrorHttpController(res, "ERROR_GETTING_ITEMS", 500);
  }
};

/**
 *
 * @param param0
 * @param res
 * @returns
 */
export const getEnterprise = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getEnterpriseService(id);

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
 * Obtiene los usuarios por el EnterpriseId
 * @param param0
 * @param res
 * @returns
 */
export const getUsersByEnterprise = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getUsersByEnterpriseService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Users listed by Enterprise", data);
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
 * @returns
 */
export const createEnterprise = async ({ body }: Request, res: Response) => {
  try {
    const { item: data, created } = await createEnterpriseService(body);

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
export const updateEnterprise = async (
  { params: { id }, body }: Request,
  res: Response
) => {
  try {
    const data = await updateEnterpriseService(id, body);

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
export const deleteEnterprise = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteEnterpriseService(id);

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
