import { User } from "../interfaces";
import {
  Certification,
  Education,
  Enterprise,
  Hobbie,
  Job,
  Project,
  Role,
  SoftSkill,
  Storage,
  Technology,
  User as UserModel,
} from "../models";

/**
 *
 * @returns
 */
export const getUsersService = async () => {
  const items = await UserModel.findAll({
    attributes: { exclude: ["password", "phone_number"] },
  });

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getUserService = async (id: string) => {
  const item = await UserModel.findByPk(id, {
    attributes: {
      exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"],
    },
    include: [
      {
        model: Education,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Role,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Certification,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: SoftSkill,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Technology,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Hobbie,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: Enterprise,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Job,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            through: {
              attributes: [],
            },
          },
          {
            model: Project,
            attributes: {
              exclude: ["createdAt", "updatedAt"],
            },
            include: [
              {
                model: Storage,
                as: "storagio",
              },
            ],
          },
        ],
      },
    ],
  });

  return item;
};

/**
 *
 * @param id
 * @param body
 * @returns
 */
export const updateUserService = async (id: string, body: User) => {
  const item = await UserModel.findByPk(id, {
    attributes: { exclude: ["password", "phone_number"] },
  });

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteUserService = async (id: string) => {
  const item = await UserModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
