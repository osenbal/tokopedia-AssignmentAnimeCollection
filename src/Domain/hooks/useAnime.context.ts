import AnimeServiceImpl from "../services/Anime/Anime.service";
import { useQuery } from "@apollo/client";

const UseAnime = () => {
  const animeService = AnimeServiceImpl.getInstance();

  const useAnimeList = () => {
    return useQuery(animeService.getAnimeList());
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
