import { Role } from "./role.interface";

export interface User {
  id?: Number;
  token?: string;
  name: String;
  last_name: String;
  email: String;
  pro_objective: String;
  current_degree: String;
  phone_number?: String;
  password: string;
  roleId?: string;
  role?: Role;
}
