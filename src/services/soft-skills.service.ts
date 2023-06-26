import { SoftSkill } from "../interfaces";
import { SoftSkill as SoftSkillModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllSoftSkillsService = async () => {
  const items = await SoftSkillModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getSoftSkillService = async (id: string) => {
  const item = await SoftSkillModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersBySoftSkillService = async (id: string) => {
  const items = await SoftSkillModel.findAll({
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
export const createSoftSkillService = async (body: SoftSkill) => {
  const { name } = body;
  const [item, created] = await SoftSkillModel.findOrCreate({
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
export const updateSoftSkillService = async (id: string, body: SoftSkill) => {
  const item = await SoftSkillModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteSoftSkillService = async (id: string) => {
  const item = await SoftSkillModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
