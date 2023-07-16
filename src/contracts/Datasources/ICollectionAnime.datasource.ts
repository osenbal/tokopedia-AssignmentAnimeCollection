export interface ICollectionDatasource {
  getCollections(): any;
  addCollection(): any;
  updateCollection(): any;
  deleteCollection(): any;
}

// get list collections
// {
//     MediaListCollection(userId: 1, type:ANIME) {
//       lists {
//         name
//         isCustomList
//         isSplitCompletedList
//         status
//       }
//       user {
//         id
//       }
//     }
//   }
