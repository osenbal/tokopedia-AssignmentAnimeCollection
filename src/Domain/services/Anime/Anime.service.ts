import { IAnimeService } from "@/contracts/Services/IAnime.service";
import { IAnimeDatasource } from "@/contracts/Datasources/IAnime.datasource";
import { IAnimeRepository } from "@/contracts/Repositories/IAnime.repository";
import AnimeRepositoryImpl from "@/Data/Repositories/Anime.repository";
import AnimeGraphqlDatasourceImpl from "@/Data/Datasources/GraphQL/Anime.datasource.impl";
import { DocumentNode } from "@apollo/client";

export default class AnimeServiceImpl implements IAnimeService {
  private static instance: AnimeServiceImpl;
  private animeGraphqlDatasource: IAnimeDatasource =
    AnimeGraphqlDatasourceImpl.getInstance();
  private animeRepository: IAnimeRepository = new AnimeRepositoryImpl(
    this.animeGraphqlDatasource
  );

  public static getInstance(): AnimeServiceImpl {
    if (!AnimeServiceImpl.instance) {
      AnimeServiceImpl.instance = new AnimeServiceImpl();
    }
    return AnimeServiceImpl.instance;
  }

  public getAnimeList(): DocumentNode {
    return this.animeRepository.getLists();
  }

  public getAnimeById(): DocumentNode {
    return this.animeRepository.getDetail();
  }
}
