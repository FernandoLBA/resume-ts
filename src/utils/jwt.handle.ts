import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = <string>process.env.JWT_SECRET;

/**
 * Firma el token
 * @param email
 * @returns
 */
export const tokenSignedGenerator = (email: String) => {
  const accessToken = sign({ email }, JWT_SECRET, { expiresIn: "2h" });

  return accessToken;
};

/**
 * Verifica que el token esté firmado
 * @param token
 * @returns
 */
export const tokenSignedChecker = (token: string) => {
  return verify(token, JWT_SECRET);
};
