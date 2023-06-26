import { Education } from "../interfaces";
import { Education as EducationModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllEducationService = async () => {
  const items = await EducationModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getEducationService = async (id: string) => {
  const item = await EducationModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersByEducationService = async (id: string) => {
  const items = await EducationModel.findAll({
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
export const createEducationService = async (body: Education) => {
  const { degree } = body;
  const [item, created] = await EducationModel.findOrCreate({
    where: { degree },
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
export const updateEducationService = async (id: string, body: Education) => {
  const item = await EducationModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteEducationService = async (id: string) => {
  const item = await EducationModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
