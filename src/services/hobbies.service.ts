import { Hobbie } from "../interfaces";
import { Hobbie as HobbieModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllHobbiesService = async () => {
  const items = await HobbieModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getHobbieService = async (id: string) => {
  const item = await HobbieModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersByHobbieService = async (id: string) => {
  const items = await HobbieModel.findAll({
    where: { id },
    attributes: [],
    include: {
      model: UserModel,
      attributes: {
        exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"],
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
export const createHobbieService = async (body: Hobbie) => {
  const { name } = body;
  const [item, created] = await HobbieModel.findOrCreate({
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
export const updateHobbieService = async (id: string, body: Hobbie) => {
  const item = await HobbieModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteHobbieService = async (id: string) => {
  const item = await HobbieModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
