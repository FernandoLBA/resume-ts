import { Project } from "../interfaces";
import { Enterprise as EnterpriseModel, Project as ProjectModel } from "../models";

/**
 *
 * @returns
 */
export const getAllProjectService = async () => {
  const items = await ProjectModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getProjectService = async (id: string) => {
  const item = await ProjectModel.findByPk(id);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const getEnterprisesByProjectService = async (id: string) => {
  const items = await ProjectModel.findAll({
    where: { id },
    attributes: [],
    include: {
      model: EnterpriseModel,
      attributes: {
        exclude: [
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
export const createProjectService = async (body: Project) => {
  const { name } = body;
  const [item, created] = await ProjectModel.findOrCreate({
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
export const updateProjectService = async (id: string, body: Project) => {
  const item = await ProjectModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteProjectService = async (id: string) => {
  const item = await ProjectModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
