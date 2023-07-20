import { useState, useEffect } from "react";
import useCollectionAnime from "@/Domain/hooks/useCollectionAnime";
import { useParams } from "react-router-dom";
import { getCookie } from "@/Data/Local/cookie/cookie.local.data";

const StatusViewModel = () => {
  const userId = getCookie("userId") as string;
  const { status } = useParams() as any;

  const [collection, setCollection] = useState<any>([] as any);
  const [statusCollection, setStatusCollection] = useState<string>("");

  const { useGetCollections } = useCollectionAnime();
  const { data } = useGetCollections(parseInt(userId), status.toUpperCase());

  useEffect(() => {
    if (data) {
      setCollection(data.mediaListCollection.lists[0].entries);
      setStatusCollection(data.mediaListCollection.lists[0].name);
    }
  }, [data]);

  return {
    collection,
    statusCollection,
  };
};

export default StatusViewModel;
