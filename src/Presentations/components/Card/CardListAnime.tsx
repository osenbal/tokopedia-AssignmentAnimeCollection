/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import CardAnime from "./CardAnime";
import Pagination from "@components/Pagination/Pagination.component";
import { mq } from "@/Presentations/constant/breakpoint";
import { NetworkStatus } from "@apollo/client";

// styled for CardListAnime mobile first
const cardListAnimeCss = {
  self: css({
    marginTop: "38px",
    [mq[4]]: {
      margin: "0 90px",
      marginTop: "82px",
    },
  }),
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
    marginTop: "8px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    padding: "10px 8px",
    minHeight: "540px",
    overflowX: "auto",
    [mq[0]]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [mq[1]]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [mq[2]]: {
      gridTemplateColumns: "repeat(5, 1fr)",
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
  paginationContainer: css({
    padding: "20px 8px",
  }),
};

type CardListAnimeProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  listAnime: any[];
  pageInfo: {
    total: number;
    perPage: number;
  };
  loading: boolean;
  networkStatus: NetworkStatus;
};

const CardListAnime: React.FC<CardListAnimeProps> = ({
  page,
  setPage,
  listAnime,
  pageInfo,
  networkStatus,
  loading,
}) => {
  return (
    <div css={cardListAnimeCss.self}>
      <div css={cardListAnimeCss.header}>
        <h2>Animes</h2>
        <p>See all</p>
      </div>

      {loading ||
      networkStatus === NetworkStatus.refetch ||
      networkStatus === NetworkStatus.setVariables ? (
        <div css={cardListAnimeCss.listCard}>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
          <div className="skeleton-card"></div>
        </div>
      ) : (
        <div css={cardListAnimeCss.listCard}>
          {listAnime.map((anime, index) => {
            return (
              <CardAnime
                key={index}
                color={anime?.coverImage?.color}
                name={anime?.title?.english || anime?.title?.native}
                image={anime?.coverImage?.medium}
              />
            );
          })}
        </div>
      )}

      <div css={cardListAnimeCss.paginationContainer}>
        <Pagination
          onPageChange={(page) => setPage(page)}
          totalCount={pageInfo.total}
          siblingCount={1}
          currentPage={page}
          pageSize={pageInfo.perPage}
        />
      </div>
    </div>
  );
};

export default CardListAnime;
