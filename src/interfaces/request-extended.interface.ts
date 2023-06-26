import { Request } from "express";
import { User } from "./user.interface";

export interface RequestExtended extends Request {
  user?: User;
  email?: string;
}
