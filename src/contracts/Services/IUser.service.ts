import { DocumentNode } from "@apollo/client";

export interface IUserService {
  getMe(): DocumentNode;
}
