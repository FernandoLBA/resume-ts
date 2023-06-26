import { Response } from "express";

/**
 *
 * @param res
 * @param msg
 * @param data
 * @param statusCode
 */
export const handleHttpResponses = (
  res: Response,
  msg: string,
  data: unknown,
  statusCode: number = 200
) => {
  res.status(statusCode);
  return res.send({
    msg,
    data,
  });
};
