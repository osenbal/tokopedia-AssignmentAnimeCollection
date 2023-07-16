import { DocumentNode } from "@apollo/client";

export interface IAnimeService {
  getAnimeList(): DocumentNode;
  getAnimeById(): DocumentNode;
}
