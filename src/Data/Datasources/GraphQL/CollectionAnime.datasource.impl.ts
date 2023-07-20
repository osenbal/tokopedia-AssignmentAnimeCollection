import { ICollectionAnimeDatasource } from "@/contracts/Datasources/ICollectionAnime.datasource";
import { DocumentNode, gql } from "@apollo/client";

const FRAGMENT_MEDIA_LIST_ENTRY = gql`
  fragment mediaListEntry on MediaList {
    id
    mediaId
    status
    score
    progress
    progressVolumes
    repeat
    priority
    private
    hiddenFromStatusLists
    customLists
    advancedScores
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
    media {
      id
      title {
        english
        native
      }
      coverImage {
        medium
        color
      }
      type
      format
      status(version: 2)
      episodes
      volumes
      chapters
      averageScore
      popularity
      isAdult
      countryOfOrigin
      genres
      bannerImage
      startDate {
        year
        month
        day
      }
    }
  }
`;

export default class CollectionAnimeGraphqlDatasourceImpl
  implements ICollectionAnimeDatasource
{
  private static instance: CollectionAnimeGraphqlDatasourceImpl;

  public static getInstance(): CollectionAnimeGraphqlDatasourceImpl {
    if (!CollectionAnimeGraphqlDatasourceImpl.instance) {
      CollectionAnimeGraphqlDatasourceImpl.instance =
        new CollectionAnimeGraphqlDatasourceImpl();
    }

    return CollectionAnimeGraphqlDatasourceImpl.instance;
  }

  public getCollections(): DocumentNode {
    return gql`
      query ($userId: Int, $userName: String, $status: MediaListStatus) {
        mediaListCollection: MediaListCollection(
          userId: $userId
          userName: $userName
          type: ANIME
          status: $status
        ) {
          lists {
            name
            isCustomList
            isCompletedList: isSplitCompletedList
            status
            entries {
              ...mediaListEntry
            }
          }
        }
      }
      ${FRAGMENT_MEDIA_LIST_ENTRY}
    `;
  }

  public addCollection(): DocumentNode {
    return gql`
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
  }

  public updateCollection(): DocumentNode {
    throw new Error("Method not implemented.");
  }

  public deleteCollection(): DocumentNode {
    throw new Error("Method not implemented.");
  }
}
