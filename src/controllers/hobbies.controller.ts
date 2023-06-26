import { Request, Response } from "express";
import {
  createHobbieService,
  deleteHobbieService,
  getAllHobbiesService,
  getHobbieService,
  getUsersByHobbieService,
  updateHobbieService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getAllHobbies = async (req: Request, res: Response) => {
  try {
    const data = await getAllHobbiesService();

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
export const getHobbie = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getHobbieService(id);

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
export const getUsersByHobbie = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getUsersByHobbieService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Users listed by hobbie", data);
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
export const createHobbie = async ({ body }: Request, res: Response) => {
  try {
    const { item: data, created } = await createHobbieService(body);

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
export const updateHobbie = async (
  { params: { id }, body }: Request,
  res: Response
) => {
  try {
    const data = await updateHobbieService(id, body);

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
export const deleteHobbie = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteHobbieService(id);

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
