// create an anime service test
// Path: src/Domain/services/Anime/anime.service.test.ts

import AnimeServiceImpl from "./Anime.service";

describe("Anime service", () => {
  it("should return anime service", () => {
    expect(AnimeServiceImpl.getInstance()).toBeTruthy();
  });

  it("should return anime list", () => {
    expect(AnimeServiceImpl.getInstance().getAnimeList()).toBeTruthy();
  });
});
