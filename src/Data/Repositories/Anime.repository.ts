import { IAnimeRepository } from "@/contracts/Repositories/IAnime.repository";
import { IAnimeDatasource } from "@/contracts/Datasources/IAnime.datasource";
import { DocumentNode } from "@apollo/client";

export default class AnimeRepositoryImpl implements IAnimeRepository {
  private animeDatasource: IAnimeDatasource;

  constructor(animeDatasource: IAnimeDatasource) {
    this.animeDatasource = animeDatasource;
  }

  public getLists(): DocumentNode {
    return this.animeDatasource.getList();
  }

  public getDetail(): DocumentNode {
    return this.animeDatasource.getDetail();
  }
}
