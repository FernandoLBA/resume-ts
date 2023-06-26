import { User } from "../interfaces";
import { Role as RoleModel, User as UserModel } from "../models";
import {
  comparePassword,
  encryptPassword,
  tokenSignedGenerator,
} from "../utils";

/**
 *
 * @param user
 * @returns
 */
export const registerUserService = async (user: User) => {
  const { email, password, roleId } = user;
  const hashedPassword = await encryptPassword(password);

  // finds the role
  const role = await RoleModel.findByPk(roleId);

  // El rol debe existir en la bd para registrar un usuario
  if (!role) return { rest: [], created: false };

  const [item, created] = await UserModel.findOrCreate({
    where: { email },
    defaults: { ...user, password: hashedPassword },
    attributes: ["name", "last_name", "email"],
  });

  // Extrae las propiedades password y phone_number y retorna el resto de las propiedades
  const { password: pass, phone_number, ...rest } = item.dataValues;

  return { rest, created };
};

/**
 *
 * @param body
 * @returns
 */
export const loginUserService = async (body: User) => {
  const { email, password } = body;

  const item = await UserModel.findOne({
    where: {
      email,
    },
    attributes: ["password"],
  });

  if (!item) return;

  const passwordChecked = await comparePassword(
    password,
    item?.dataValues?.password || ""
  );

  if (!passwordChecked)
    return { msg: "EMAIL_OR_PASSWORD_INCORRECT", error: true };

  const token = tokenSignedGenerator(email);

  return { token };
};
