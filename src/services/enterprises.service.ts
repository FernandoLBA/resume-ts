import { Enterprise } from "../interfaces";
import { Enterprise as EnterpriseModel, Job as JobModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllEnterprisesService = async () => {
  const items = await EnterpriseModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getEnterpriseService = async (id: string) => {
  const item = await EnterpriseModel.findByPk(id, {
    include: [{
      model: JobModel,
      through: {
        attributes: []
      }
    }]
  });

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersByEnterpriseService = async (id: string) => {
  const items = await EnterpriseModel.findAll({
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
export const createEnterpriseService = async (body: Enterprise) => {
  const { name } = body;
  const [item, created] = await EnterpriseModel.findOrCreate({
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
export const updateEnterpriseService = async (id: string, body: Enterprise) => {
  const item = await EnterpriseModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteEnterpriseService = async (id: string) => {
  const item = await EnterpriseModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
