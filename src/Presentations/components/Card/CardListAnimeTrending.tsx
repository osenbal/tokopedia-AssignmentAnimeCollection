/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { Fragment, FC } from "react";
import CardAnime from "./CardAnime";
import { mq } from "@/Presentations/constant/breakpoint";
import { useNavigate } from "react-router-dom";

// styled for CardListAnime mobile first
const cardListAnimeCss = {
  self: css({}),
  header: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 8px",
    "& h2": {
      fontSize: "16px",
      fontWeight: "500",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "400",
    },
  }),
  listCard: css({
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    overflowX: "auto",
    height: "100%",
    padding: "0 8px",
    columnGap: "8px",
    marginTop: "8px",
    paddingBottom: "4px",
    [mq[0]]: {
      columnGap: "20px",
    },
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent",
      height: "0px",
      transition: "all 0.3s ease-in-out",
      scrollBehavior: "smooth",
    },
    "&:hover": {
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
        borderRadius: "10px",
        backgroundColor: "#343434",
      },
      "&::-webkit-scrollbar": {
        height: "4px",
        width: "3px",
        borderRadius: "10px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#403e3e",
        borderRadius: "10px",
      },
    },
  }),
};

type CardListAnimeProps = {
  listAnimeTrending: any[];
  isLoading: boolean;
};

const CardListAnimeTrending: FC<CardListAnimeProps> = ({
  listAnimeTrending,
  isLoading,
}) => {
  const navigate = useNavigate();

  return (
    <div css={cardListAnimeCss.self}>
      <div css={cardListAnimeCss.header}>
        <h2>Trending</h2>
        <p>See all</p>
      </div>
      <div css={cardListAnimeCss.listCard}>
        {isLoading ? (
          <Fragment>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </Fragment>
        ) : (
          listAnimeTrending.map((anime, index) => {
            return (
              <CardAnime
                onClick={() => navigate(`/anime/${anime?.id}`)}
                key={index}
                id={anime?.id}
                color={anime?.coverImage?.color}
                name={anime?.title?.english || anime?.title?.native}
                image={anime?.coverImage?.medium}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CardListAnimeTrending;
