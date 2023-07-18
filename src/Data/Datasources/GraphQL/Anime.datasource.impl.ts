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
    const FRAGMENT_MEDIA_LIST = gql`
      fragment MediaList on Media {
        id
        title {
          english
          native
        }
        coverImage {
          medium
          color
        }
      }
    `;

    const GET_LOCATIONS = gql`
      query ($page: Int, $perPage: Int, $sortAnimeList: [MediaSort]) {
        animeTrending: Page(page: $page, perPage: $perPage) {
          media: media(type: ANIME, sort: TRENDING_DESC, isAdult: false) {
            ...MediaList
          }
        }
        animeList: Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            perPage
          }
          media: media(type: ANIME, sort: $sortAnimeList, isAdult: false) {
            ...MediaList
          }
        }
      }
      ${FRAGMENT_MEDIA_LIST}
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
