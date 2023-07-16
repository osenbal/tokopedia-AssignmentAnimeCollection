import { DocumentNode } from "@apollo/client";

export interface IAnimeRepository {
  getLists(): DocumentNode;
  getDetail(): DocumentNode;
}
