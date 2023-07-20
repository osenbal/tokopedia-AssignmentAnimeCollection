import { useEffect, useState } from "react";
import useCollectionAnime from "@/Domain/hooks/useCollectionAnime";
import { getCookie } from "@/Data/Local/cookie/cookie.local.data";

const CollectionViewModel = () => {
  const userId = getCookie("userId") as string;

  const [collection, setCollection] = useState<any>([] as any);

  const { useGetCollections } = useCollectionAnime();
  const { data, loading, error, networkStatus } = useGetCollections(
    parseInt(userId)
  );

  useEffect(() => {
    if (data) {
      setCollection(data.mediaListCollection.lists);
    }
  }, [data]);

  return {
    collection,
    loading,
    error,
    networkStatus,
  };
};

export default CollectionViewModel;
