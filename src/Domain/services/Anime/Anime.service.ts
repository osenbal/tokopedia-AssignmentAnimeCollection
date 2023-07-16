import { IAnimeService } from "@/contracts/Services/IAnime.service";
import AnimeRepositoryImpl from "@/Data/Repositories/Anime.repository";
import AnimeGraphqlDatasourceImpl from "@/Data/Datasources/GraphQL/Anime.datasource.impl";
import { DocumentNode } from "@apollo/client";

export default class AnimeServiceImpl implements IAnimeService {
  private animeGraphqlDatasource = AnimeGraphqlDatasourceImpl.getInstance();
  private animeRepository = new AnimeRepositoryImpl(
    this.animeGraphqlDatasource
  );
  private static instance: AnimeServiceImpl;

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
