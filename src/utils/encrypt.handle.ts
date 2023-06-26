import { compare, hash } from "bcryptjs";

/**
 *
 * @param password
 * @returns
 */
export const encryptPassword = async (password: string) => {
  return await hash(password, 10);
};

/**
 *
 * @param password
 * @param hashedPassword
 * @returns
 */
export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return await compare(password, hashedPassword);
};
