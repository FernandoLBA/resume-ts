import { Certification } from "../interfaces";
import { Certification as CertificationModel, User as UserModel } from "../models";

/**
 *
 * @returns
 */
export const getAllCertificationsService = async () => {
  const items = await CertificationModel.findAll();

  return items;
};

/**
 *
 * @param id
 * @returns
 */
export const getCertificateService = async (id: string) => {
  const item = await CertificationModel.findByPk(id);

  return item;
};

/**
 *
 * @param userId
 * @returns
 */
export const getUsersByCertificateService = async (id: string) => {
  const items = await CertificationModel.findAll({
    where: { id },
    attributes: [],
    include: {
      model: UserModel,
      attributes: {
        exclude: ["password", "roleId", "phone_number", "createdAt", "updatedAt"]
      }
    }
  });

  return items;
};

/**
 *
 * @param body
 * @returns
 */
export const createCertificateService = async (body: Certification) => {
  const { name } = body;
  const [item, created] = await CertificationModel.findOrCreate({
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
export const updateCertificateService = async (
  id: string,
  body: Certification
) => {
  const item = await CertificationModel.findByPk(id);

  item && (await item.update(body));

  return item;
};

/**
 *
 * @param id
 * @returns
 */
export const deleteCertificateService = async (id: string) => {
  const item = await CertificationModel.findByPk(id);

  item && (await item.destroy());

  return item;
};
