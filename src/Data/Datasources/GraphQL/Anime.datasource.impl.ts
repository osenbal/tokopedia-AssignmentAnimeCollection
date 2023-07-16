import { IAnimeDatasource } from "@/contracts/Datasources/IAnime.datasource";
import { gql, DocumentNode } from "@apollo/client";

export default class AnimeGraphqlDatasourceImpl implements IAnimeDatasource {
  private static instance: AnimeGraphqlDatasourceImpl;

  public static getInstance(): AnimeGraphqlDatasourceImpl {
    if (!AnimeGraphqlDatasourceImpl.instance) {
      AnimeGraphqlDatasourceImpl.instance = new AnimeGraphqlDatasourceImpl();
    }

    return AnimeGraphqlDatasourceImpl.instance;
  }

  public getList(): DocumentNode {
    const GET_LOCATIONS = gql`
      query ($page: Int, $perPage: Int, $search: String, $sort: [MediaSort]) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            perPage
            currentPage
          }
          media(search: $search, type: ANIME, sort: $sort) {
            id
            title {
              romaji
              english
              native
            }
            genres
            coverImage {
              extraLarge
              large
              medium
              color
            }
            bannerImage
          }
        }
      }
    `;

    return GET_LOCATIONS;
  }

  public getDetail(): DocumentNode {
    throw new Error("Method not implemented.");
  }

  public bulkInsertToCollection(): DocumentNode {
    throw new Error("Method not implemented.");
  }

  public insertToCollection(): DocumentNode {
    throw new Error("Method not implemented.");
  }
}
