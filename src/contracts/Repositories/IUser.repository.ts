import { DocumentNode } from "@apollo/client";

export interface IUserRepository {
  getMe(): DocumentNode;
}
