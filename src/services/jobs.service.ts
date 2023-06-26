import { Model } from "sequelize";
import { Enterprise, Job } from "../interfaces";
import {
  Enterprise as EnterpriseModel,
  EnterpriseJob as EnterpriseJobModel,
  Job as JobModel,
  User as UserModel,
} from "../models";

/**
 *
 * @returns
 */
export const getAllJobsService = async () => {
  const items = await JobModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getJobService = async (id: string) => {
  const item = await JobModel.findByPk(id, {
    include: [{
      model: EnterpriseModel,
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
export const getUsersByJobService = async (id: string) => {
  const items = await JobModel.findAll({
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
export const createJobService = async (body: Job) => {
  const { enterpriseId, ...rest } = body;

  const enterprise = await EnterpriseModel.findByPk(enterpriseId);

  const [job, created] = await JobModel.findCreateFind({
    where: { name: rest.name },
    defaults: {
      ...rest,
    },
  });

  job &&
    enterprise &&
    (await EnterpriseJobModel.create({
      jobId: job.dataValues.id,
      enterpriseId: enterprise?.dataValues?.id,
    }));

  return { job, created };
};

/**
 *
 * @param id
 * @param body
 * @returns
 */
export const updateJobService = async (id: string, body: Job) => {
  const item = await JobModel.findByPk(id);

  await item?.update(body);

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteJobService = async (id: string) => {
  const item = await JobModel.findByPk(id);

  await item?.destroy();

  return item;
};
