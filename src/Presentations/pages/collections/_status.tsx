/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import StatusViewModel from "./_status.view.model";
import CardAnime from "@components/Card/CardAnime";
import { useNavigate } from "react-router-dom";
import { NetworkStatus } from "@apollo/client";
import { mq } from "@/Presentations/constant/breakpoint";

const CollectionsStatusPageCss = {
  self: css({}),
  listCollection: css({
    marginTop: "8px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    [mq[0]]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [mq[1]]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    [mq[2]]: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  }),
  itemCollection: css({
    height: "200px",
  }),
};

const CollectionsStatusPage: FC = () => {
  const { collection, statusCollection, loading, networkStatus, error } =
    StatusViewModel();
  const navigate = useNavigate();

  return (
    <div css={CollectionsStatusPageCss.self} className="container_home">
      {error ? (
        <div>
          <h2>Something went wrong</h2>
        </div>
      ) : (
        <div>
          <h2>Collection {statusCollection}</h2>

          {loading || networkStatus === NetworkStatus.refetch ? (
            <div css={CollectionsStatusPageCss.listCollection}>
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
              <div className="skeleton-card"></div>
            </div>
          ) : (
            <div css={CollectionsStatusPageCss.listCollection}>
              {collection?.map((item: any, index: number) => {
                return (
                  <CardAnime
                    css={CollectionsStatusPageCss.itemCollection}
                    key={index}
                    onClick={() => {
                      navigate(`/anime/${item?.media?.id}`);
                    }}
                    id={item?.media?.id}
                    name={item?.media?.title?.english}
                    image={item?.media?.coverImage?.medium}
                    color={item?.media?.coverImage?.color}
                  />
                );
              })}
            </div>
          )}
          <div css={CollectionsStatusPageCss.listCollection}></div>
        </div>
      )}
    </div>
  );
};

export default CollectionsStatusPage;
