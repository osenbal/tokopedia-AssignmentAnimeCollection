import { ICollectionAnimeService } from "@/contracts/Services/ICollectionAnime.service";
import { ICollectionAnimeDatasource } from "@/contracts/Datasources/ICollectionAnime.datasource";
import { ICollectionAnimeRepository } from "@/contracts/Repositories/ICollectionAnime.repository";
import CollectionRepositoryImpl from "@/Data/Repositories/CollectionAnime.repository";
import CollectionAnimeGraphqlDatasourceImpl from "@/Data/Datasources/GraphQL/CollectionAnime.datasource.impl";
import { DocumentNode } from "@apollo/client";

export default class CollectionAnimeServiceImpl
  implements ICollectionAnimeService
{
  private static instance: CollectionAnimeServiceImpl;
  private collectionDatasource: ICollectionAnimeDatasource =
    CollectionAnimeGraphqlDatasourceImpl.getInstance();
  private collectionRepository: ICollectionAnimeRepository =
    new CollectionRepositoryImpl(this.collectionDatasource);

  public static getInstance(): CollectionAnimeServiceImpl {
    if (!CollectionAnimeServiceImpl.instance) {
      CollectionAnimeServiceImpl.instance = new CollectionAnimeServiceImpl();
    }

    return CollectionAnimeServiceImpl.instance;
  }

  public getCollections(): DocumentNode {
    return this.collectionRepository.getCollections();
  }

  public addCollection(): DocumentNode {
    return this.collectionRepository.addCollection();
  }

  public updateCollection(): DocumentNode {
    return this.collectionRepository.updateCollection();
  }

  public deleteCollection(): DocumentNode {
    return this.collectionRepository.deleteCollection();
  }
}
