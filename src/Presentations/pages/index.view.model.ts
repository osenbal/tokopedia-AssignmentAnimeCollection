import { useEffect, useState } from "react";
import UseAnime from "@/Domain/hooks/useAnime";

const IndexViewModel = () => {
  const { useAnimeList } = UseAnime();

  const [page, setPage] = useState(1);

  const [pageInfo, setPageInfo] = useState({} as any);
  const [listAnime, setListAnime] = useState([] as any[]);
  const [listAnimeTrending, setListAnimeTrending] = useState([] as any[]);

  const { loading, error, data, networkStatus, refetch } = useAnimeList(page);

  useEffect(() => {
    if (data !== undefined) {
      setListAnimeTrending(data.animeTrending.media);

      setListAnime(data.animeList.media);
      setPageInfo(data.animeList.pageInfo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (page > 1) {
      refetch({
        page: page,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    loading,
    error,
    networkStatus,
    refetch,
    listAnime,
    pageInfo,
    page,
    setPage,
    listAnimeTrending,
  };
};

export default IndexViewModel;
