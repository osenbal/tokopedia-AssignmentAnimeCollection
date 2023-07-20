import { ICollectionAnimeRepository } from "@/contracts/Repositories/ICollectionAnime.repository";
import { ICollectionAnimeDatasource } from "@/contracts/Datasources/ICollectionAnime.datasource";
import { DocumentNode } from "@apollo/client";

export default class CollectionAnimeRepositoryImpl
  implements ICollectionAnimeRepository
{
  private collectionDatasource: ICollectionAnimeDatasource;

  constructor(collectionDatasource: ICollectionAnimeDatasource) {
    this.collectionDatasource = collectionDatasource;
  }

  public getCollections(): DocumentNode {
    return this.collectionDatasource.getCollections();
  }

  public addCollection(): DocumentNode {
    return this.collectionDatasource.addCollection();
  }

  public updateCollection(): DocumentNode {
    return this.collectionDatasource.updateCollection();
  }

  public deleteCollection(): DocumentNode {
    return this.collectionDatasource.deleteCollection();
  }
}
