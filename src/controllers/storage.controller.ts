import { Request, Response } from "express";
import {
  createStorageService,
  deleteStorageService,
  getAllStorageService,
  getProjectByStorageService,
  getStorageService,
  updateStorageService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getAllStorage = async (req: Request, res: Response) => {
  try {
    const data = await getAllStorageService();

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
export const getStorage = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getStorageService(id);

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
 * Obtiene los proyectos por el StorageId
 * @param param0
 * @param res
 * @returns
 */
export const getProjectByStorage = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getProjectByStorageService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Project listed by Storage", data);
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
export const createStorage = async (req: Request, res: Response) => {
  try {
    const { file } = req;
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const PORT = process.env.PORT;

    const body = {
      filename: file?.filename,
      url: `${PUBLIC_URL}:${PORT}/${file?.filename}`,
    };

    const { item: data, created } = await createStorageService(body);

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
export const updateStorage = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      file,
    } = req;
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const PORT = process.env.PORT;

    const body = {
      filename: file?.filename,
      url: `${PUBLIC_URL}:${PORT}/${file?.filename}`,
    };

    const data = await updateStorageService(id, body);

    if (!data) return handleErrorHttpController(res, "ITEM_NOT_FOUND", 404);

    handleHttpResponses(res, "Item updated", data);
  } catch (error) {
    console.log(error);
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
export const deleteStorage = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteStorageService(id);

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
