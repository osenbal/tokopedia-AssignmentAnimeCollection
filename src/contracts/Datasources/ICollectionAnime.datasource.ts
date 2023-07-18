export interface ICollectionDatasource {
  getCollections(): any;
  addCollection(): any;
  updateCollection(): any;
  deleteCollection(): any;
}

// // get list collections
// query GetAnimeDetail{
//   collections: MediaListCollection(userId:5, type:ANIME) {
//     lists {
//       name
//       isCustomList
//       isSplitCompletedList
//       status
//       entries {
//         id
//         media {
//           id

//           title {
//             romaji
//             english
//             native
//             userPreferred
//           }
//         }
//       }
//     }

//     user {
//       id
//       name
//       favourites {
//         anime {
//           edges {
//             node {
//               id
//               title {
//                 romaji
//                 english
//                 native
//                 userPreferred
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
