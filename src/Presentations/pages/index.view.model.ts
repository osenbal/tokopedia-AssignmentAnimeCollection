import UseAnime from "@/Domain/hooks/useAnime.context";

const IndexViewModel = () => {
  const { useAnimeList } = UseAnime();
  const listAnime = useAnimeList();

  return {
    listDataAnime: listAnime.data,
    isGetListAnimeLoading: listAnime.loading,
    isGetListAnimeError: listAnime.error,
  };
};

export default IndexViewModel;
