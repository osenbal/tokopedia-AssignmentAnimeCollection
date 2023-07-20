import AnimeServiceImpl from "../services/Anime/Anime.service";
import { useQuery } from "@apollo/client";

const UseAnime = () => {
  const animeService = AnimeServiceImpl.getInstance();

  const useAnimeList = (page: number) => {
    return useQuery(animeService.getAnimeList(), {
      variables: {
        page: page,
        perPage: 10,
      },
    });
  };

  const useDetailAnime = (id: number) => {
    return useQuery(animeService.getAnimeById(), {
      variables: {
        id,
      },
    });
  };

  return {
    useAnimeList,
    useDetailAnime,
  };
};

export default UseAnime;
