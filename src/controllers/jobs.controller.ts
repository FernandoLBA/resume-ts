import { Request, Response } from "express";
import {
  createJobService,
  deleteJobService,
  getAllJobsService,
  getJobService,
  getUsersByJobService,
  updateJobService,
} from "../services";
import { handleErrorHttpController, handleHttpResponses } from "../utils";

/**
 *
 * @param req
 * @param res
 */
export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const data = await getAllJobsService();

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
export const getJob = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getJobService(id);

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
 * Obtiene los usuarios por el JobId
 * @param param0
 * @param res
 * @returns
 */
export const getUsersByJob = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await getUsersByJobService(id);

    if (!data.length)
      return handleErrorHttpController(res, "ITEMS_NOT_FOUND", 404);

    handleHttpResponses(res, "Users listed by Job", data);
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
export const createJob = async ({ body }: Request, res: Response) => {
  try {
    const { job: data, created } = await createJobService(body);

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
export const updateJob = async (
  { params: { id }, body }: Request,
  res: Response
) => {
  try {
    const data = await updateJobService(id, body);

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
export const deleteJob = async (
  { params: { id } }: Request,
  res: Response
) => {
  try {
    const data = await deleteJobService(id);

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
