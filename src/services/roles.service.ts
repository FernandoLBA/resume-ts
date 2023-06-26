// import { Response } from "express";
import { Role } from "../interfaces";
import { Role as RoleModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getRolesService = async () => {
  const items = await RoleModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getRoleService = async (id: string) => {
  const item = await RoleModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getUsersByRoleService = async (id: string) => {
  const items = await RoleModel.findAll({
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
export const createRoleService = async (body: Role) => {
  const { role } = body;
  const [item, created] = await RoleModel.findOrCreate({
    where: { role },
    defaults: { ...body },
  });

  return { item, created };
};

/**
 *
 * @param id
 * @param body
 * @returns
 */
export const updateRoleService = async (id: string, body: Role) => {
  const item = await RoleModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteRoleService = async (id: string) => {
  const item = await RoleModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
