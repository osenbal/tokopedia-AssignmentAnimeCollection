export interface IAnimeDatasource {
  getList(): any;
  getDetail(): any;

  bulkInsertToCollection(): any;
  insertToCollection(): any;
}

// get detail mush login to see the status in collection
// query GetAnimeDetail{
//   anime: Media(id: 1, type: ANIME) {
//     id
//     title {
//       romaji
//       english
//     }
//     genres
//     description
//     episodes
//    	season
//     type
//     status
//     averageScore
//     startDate {
//       year
//       month
//       day
//     }
//     endDate {
//       year
//       month
//       day
//     }
//     coverImage {
//       extraLarge
//       large
//       medium
//       color
//     }
//     bannerImage

//   }
//   collection: MediaListCollection(userId: 3, type:ANIME) {
//    user {
//      id
//    }
//     lists {
//       name
//       isCustomList
//       isSplitCompletedList
//       status
//     }

//   }
// }
