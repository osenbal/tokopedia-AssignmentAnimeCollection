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
    const GET_ANIME_DETAIL = gql`
      query media($id: Int) {
        media: Media(id: $id, type: ANIME, isAdult: false) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          bannerImage
          description
          season
          seasonYear
          type
          episodes
          chapters
          volumes
          genres
          isAdult
          averageScore
          favourites
          isFavouriteBlocked
          isFavourite
          isFavouriteBlocked
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
          }
          rankings {
            id
            rank
            type
            format
            year
            season
            allTime
            context
          }
          mediaListEntry {
            id
            status
            score
          }
        }
      }
    `;

    return GET_ANIME_DETAIL;
  }

  public bulkInsertToCollection(): DocumentNode {
    throw new Error("Method not implemented.");
  }

  public insertToCollection(): DocumentNode {
    const INSERT_ANIME_TO_COLLECTION = gql`
      mutation (
        $id: Int
        $mediaId: Int
        $status: MediaListStatus
        $score: Float
        $progress: Int
        $progressVolumes: Int
        $repeat: Int
        $private: Boolean
        $notes: String
        $customLists: [String]
        $hiddenFromStatusLists: Boolean
        $advancedScores: [Float]
        $startedAt: FuzzyDateInput
        $completedAt: FuzzyDateInput
      ) {
        SaveMediaListEntry(
          id: $id
          mediaId: $mediaId
          status: $status
          score: $score
          progress: $progress
          progressVolumes: $progressVolumes
          repeat: $repeat
          private: $private
          notes: $notes
          customLists: $customLists
          hiddenFromStatusLists: $hiddenFromStatusLists
          advancedScores: $advancedScores
          startedAt: $startedAt
          completedAt: $completedAt
        ) {
          id
          mediaId
          status
          score
          advancedScores
          progress
          progressVolumes
          repeat
          priority
          private
          hiddenFromStatusLists
          customLists
          notes
          updatedAt
          startedAt {
            year
            month
            day
          }
          completedAt {
            year
            month
            day
          }
          user {
            id
            name
          }
          media {
            id
            title {
              userPreferred
            }
            coverImage {
              large
            }
            type
            format
            status
            episodes
            volumes
            chapters
            averageScore
            popularity
            isAdult
            startDate {
              year
            }
          }
        }
      }
    `;

    return INSERT_ANIME_TO_COLLECTION;
  }
}
