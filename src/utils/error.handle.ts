import { Response } from "express";

/**
 *
 * @param res
 * @param error
 * @param statusCode
 * @param rawError
 */
export const handleErrorHttpController = (
  res: Response,
  error: string,
  statusCode: number = 500,
  rawError?: String
) => {
  console.log({ Error: JSON.stringify(rawError) });
  res.status(statusCode);

  return res.send({
    msg: error,
    data: [],
  });
};
