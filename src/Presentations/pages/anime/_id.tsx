/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC, Fragment } from "react";
import CardDetailAnime from "@components/Card/CardDetailAnime";
import Banner from "@components/Banner/Banner.components";
import Btn from "@components/Button/Btn.components";
import { mq } from "@/Presentations/constant/breakpoint";
import AnimeDetailPageViewModel from "./_id.view.model";
import { MEDIA_LIST_STATUS } from "@/Presentations/constant/global";

const DetailAnimePageCss = {
  self: css({
    position: "relative",
  }),
  containerContent: css({
    width: "100%",
    padding: "0 16px",
    maxWidth: "1440px",
    margin: "0 auto",
    marginTop: "-100px",
    [mq[0]]: {
      narginTop: "-160px",
    },
    [mq[1]]: {
      marginTop: "-180px",
      padding: "0 100px",
    },
    [mq[4]]: {
      marginTop: "-200px",
      padding: "0 336px",
    },
  }),
  content: css({
    display: "flex",
    flexDirection: "column",
    rowGap: "16px",
    [mq[1]]: {
      flexDirection: "row",
      columnGap: "16px",
      alignItems: "center",
    },
  }),
  coverImage: css({
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    columnGap: "16px",
    width: "100%",
    [mq[1]]: {
      flexDirection: "column",
      alignItems: "center",
      rowGap: "8px",
    },
  }),
  containerBtnAddCollection: css({
    flex: 1,
    width: "100%",
    "& button": {
      width: "100%",
    },
  }),
  menuDropdown: css({
    "& ul": {
      listStyleType: "none",
      color: "var(--color-black)",
      display: "flex",
      flexDirection: "column",
      rowGap: "16px",
      padding: "10px 8px",
      "& li": {
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "& button": {
          border: "1px solid var(--color-black)",
          outline: "none",
          backgroundColor: "transparent",
          fontSize: "0.75rem",
          fontWeight: "400",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          padding: "8px 16px",
          borderRadius: "2px",
          [mq[1]]: {
            padding: "4px 8px",
          },
          "&:hover": {
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
          },
        },
      },
    },
  }),
  showMore: css({
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    height: "24px",
    background:
      "linear-gradient(to bottom, #171a27 17%, rgba(255,255,255,0) 100%)",
    "&:hover": {
      background:
        "linear-gradient(to bottom, #1c1f2d 17%, rgba(255,255,255,0) 100%)",
      bottom: -25,
    },
    textAlign: "center",
    position: "absolute",
    bottom: -20,
    right: 0,
    left: 0,
  }),

  contectText: css({
    position: "relative",
    display: "flex",
    flexDirection: "column",
    rowGap: "12px",
    [mq[1]]: {
      rowGap: "16px",
      zIndex: 1,
    },
    [mq[3]]: {
      rowGap: "24px",
    },
  }),
  title: css({
    fontSize: "1.5rem",
    fontWeight: "700",
  }),
  description: css({
    textAlign: "justify",
    fontSize: "0.875rem",
    fontWeight: "400",
    [mq[3]]: {
      fontSize: "1rem",
    },
  }),

  containerDetail: css({
    marginTop: "48px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: "16px",
    [mq[3]]: {
      marginTop: "60px",
    },
  }),
  iconContainer: css({
    width: "32px",
    height: "32px",
    backgroundColor: "var(--color-white)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  boxDetail: css({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    columnGap: "8px",
    width: "100%",
    [mq[1]]: {
      width: "50%",
    },
    [mq[2]]: {
      width: "25%",
    },
    "& p": css({
      fontSize: "14px",
    }),
    "& .headlineDetail": css({ fontWeight: "500" }),
  }),
};

const DetailAnimePage: FC = () => {
  const {
    detailAnime,
    error,
    toggleShowMoreDescription,
    showMoreDescription,
    elipsisDescription,
    insertToCollection,
  } = AnimeDetailPageViewModel();

  if (error) {
    return <h1>Error {error.message}</h1>;
  }

  return (
    <div css={DetailAnimePageCss.self}>
      {!detailAnime?.media ? (
        ""
      ) : (
        <Fragment>
          <Banner imageUrl={detailAnime?.media?.bannerImage} />

          <div css={DetailAnimePageCss.containerContent}>
            <div css={DetailAnimePageCss.content}>
              <div css={DetailAnimePageCss.coverImage}>
                <CardDetailAnime
                  imageUrl={detailAnime?.media?.coverImage?.large}
                />
                <div css={DetailAnimePageCss.containerBtnAddCollection}>
                  <Btn
                    text={
                      detailAnime?.media?.mediaListEntry?.status ||
                      "Add to Collection"
                    }
                    size="xSmall"
                    icon={
                      <img
                        src="/assets/icons/ico_arrowDown.svg"
                        alt="dropdown"
                      />
                    }
                    isDropdown={true}
                    menuDropdown={
                      <div css={DetailAnimePageCss.menuDropdown}>
                        <ul>
                          {MEDIA_LIST_STATUS.map((item) => {
                            return (
                              <li key={item.id}>
                                <button
                                  onClick={() => insertToCollection(item.value)}
                                >
                                  {item.name}
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    }
                  />
                </div>
              </div>

              <div css={DetailAnimePageCss.contectText}>
                <p css={DetailAnimePageCss.title}>
                  {detailAnime?.media?.title?.english ||
                    detailAnime?.media?.title?.english?.native}
                </p>
                <p
                  css={DetailAnimePageCss.description}
                  dangerouslySetInnerHTML={{
                    __html:
                      detailAnime?.media?.description?.length < 500
                        ? detailAnime?.media?.description
                        : elipsisDescription(detailAnime?.media?.description),
                  }}
                />
                {showMoreDescription ||
                detailAnime?.media?.description?.length < 500 ? null : (
                  <div
                    css={DetailAnimePageCss.showMore}
                    onClick={toggleShowMoreDescription}
                  >
                    <p>Show More</p>
                  </div>
                )}
              </div>
            </div>

            <div css={DetailAnimePageCss.containerDetail}>
              <div css={DetailAnimePageCss.boxDetail}>
                <div css={DetailAnimePageCss.iconContainer}>
                  <img src="/assets/icons/ico_episodes.svg" alt="episode" />
                </div>
                <div>
                  <p className="headlineDetail">Episodes</p>
                  <p>
                    {!detailAnime.media
                      ? ""
                      : detailAnime?.media?.episodes ||
                        detailAnime?.media?.nextAiringEpisode?.episode - 1}
                  </p>
                </div>
              </div>

              <div css={DetailAnimePageCss.boxDetail}>
                <div css={DetailAnimePageCss.iconContainer}>
                  <img src="/assets/icons/ico_seasons.svg" alt="season" />
                </div>
                <div>
                  <p className="headlineDetail">Seasons</p>
                  <p>
                    {detailAnime?.media?.season}{" "}
                    {detailAnime?.media?.seasonYear}
                  </p>
                </div>
              </div>

              <div css={DetailAnimePageCss.boxDetail}>
                <div css={DetailAnimePageCss.iconContainer}>
                  <img src="/assets/icons/ico_genre.svg" alt="genre" />
                </div>
                <div>
                  <p className="headlineDetail">Genre</p>
                  {detailAnime?.media?.genres?.map((item: string) => {
                    return <p key={item}>{item}</p>;
                  })}
                </div>
              </div>

              <div css={DetailAnimePageCss.boxDetail}>
                <div css={DetailAnimePageCss.iconContainer}>
                  <img src="/assets/icons/ico_star.svg" alt="rate" />
                </div>
                <div className="headlineDetail">
                  <p>Highest Rate All time</p>
                  <p>
                    #
                    {!detailAnime.media
                      ? ""
                      : detailAnime?.media?.rankings[0]?.rank}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default DetailAnimePage;
