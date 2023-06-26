import { Request, Response } from "express";
import {
  createTechnologyService,
  deleteTechnologyService,
  getAllTechnologiesService,
  getTechnologyService,
  getUsersByTechnologyService,
  updateTechnologyService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getAllTechnologies = async (req: Request, res: Response) => {
  try {
    const data = await getAllTechnologiesService();

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
export const getTechnology = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getTechnologyService(id);

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
 * @returns
 */
export const getUsersByTechnology = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getUsersByTechnologyService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Items listed by technology", data);
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
export const createTechnology = async ({ body }: Request, res: Response) => {
  try {
    const { item: data, created } = await createTechnologyService(body);

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
export const updateTechnology = async (
  { params: { id }, body }: Request,
  res: Response
) => {
  try {
    const data = await updateTechnologyService(id, body);

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
export const deleteTechnology = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteTechnologyService(id);

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
