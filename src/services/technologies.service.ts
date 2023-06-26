import { Technology } from "../interfaces";
import { Technology as TechnologyModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllTechnologiesService = async () => {
  const items = await TechnologyModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getTechnologyService = async (id: string) => {
  const item = await TechnologyModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersByTechnologyService = async (id: string) => {
  const items = await TechnologyModel.findAll({
    where: { id },
    attributes: [],
    include: {
      model: UserModel,
      attributes: {
        exclude: [
          "password",
          "roleId",
          "phone_number",
          "createdAt",
          "updatedAt",
        ],
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
export const createTechnologyService = async (body: Technology) => {
  const { name } = body;
  const [item, created] = await TechnologyModel.findOrCreate({
    where: { name },
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
export const updateTechnologyService = async (id: string, body: Technology) => {
  const item = await TechnologyModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteTechnologyService = async (id: string) => {
  const item = await TechnologyModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
