import { useEffect, useState } from "react";
import { useGlobalContext } from "@/Domain/context/global.context";
import useCollectionAnime from "@/Domain/hooks/useCollectionAnime";
import { getCookie } from "@/Data/Local/cookie/cookie.local.data";

const CollectionViewModel = () => {
  const [collection, setCollection] = useState<any>({} as any);

  const userId = getCookie("userId") as string;

  const { useGetCollections } = useCollectionAnime();

  const { data, loading, error } = useGetCollections(parseInt(userId));

  console.log("collection", data);

  return {
    collection,
  };
};

export default CollectionViewModel;
