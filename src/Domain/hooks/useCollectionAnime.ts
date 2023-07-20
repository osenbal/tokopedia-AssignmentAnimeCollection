import CollectionAnimeServiceImpl from "../services/Collection/CollectionAnime.service";
import { useQuery, useMutation } from "@apollo/client";

const useCollectionAnime = () => {
  const collectionAnimeService = CollectionAnimeServiceImpl.getInstance();

  const useAddCollection = (mediaId?: number, status?: string) => {
    return useMutation(collectionAnimeService.addCollection(), {
      fetchPolicy: "no-cache",
      variables: {
        mediaId: mediaId,
        status: status,
      },
    });
  };

  const useGetCollections = (userId: number | null) => {
    return useQuery(collectionAnimeService.getCollections(), {
      variables: {
        userId: userId,
      },
    });
  };

  const useUpdateCollection = () => {
    return useMutation(collectionAnimeService.updateCollection());
  };

  const useDeleteCollection = () => {
    return useMutation(collectionAnimeService.deleteCollection());
  };

  return {
    useAddCollection,
    useGetCollections,
    useUpdateCollection,
    useDeleteCollection,
  };
};

export default useCollectionAnime;
