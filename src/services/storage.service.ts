import fs from "fs";
import { Storage } from "../interfaces";
import { Storage as StorageModel, Project as ProjectModel } from "../models";

/**
 *
 * @returns
 */
export const getAllStorageService = async () => {
  const items = await StorageModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getStorageService = async (id: string) => {
  const item = await StorageModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getProjectByStorageService = async (id: string) => {
  const items = await StorageModel.findAll({
    where: { id },
    attributes: [],
    include: {
      model: ProjectModel,
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    },
  });

  return items;
};

/**
 *
 * @param body
 * @returns
 */
export const createStorageService = async (body: Storage) => {
  const { filename } = body;

  const [item, created] = await StorageModel.findOrCreate({
    where: { filename },
    defaults: {
      ...body,
    },
  });

  return { item, created };
};

/**
 *
 * @param id
 * @param body
 * @returns
 */
export const updateStorageService = async (id: string, body: Storage) => {
  const item = await StorageModel.findByPk(id);
  const path = `${__dirname}/../storage`;

  // delete the previous image
  item && fs.unlink(`${path}/${item?.dataValues?.filename}`, (err) => {
    if (err) throw err;
  });

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteStorageService = async (id: string) => {
  const item = await StorageModel.findByPk(id);
  const path = `${__dirname}/../storage`;

  // delete the previous image
  item && fs.unlink(`${path}/${item?.dataValues?.filename}`, (err) => {
    if (err) throw err;
  });

  item && (await item.destroy());

  return item;
};
