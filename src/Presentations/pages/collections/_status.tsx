/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import StatusViewModel from "./_status.view.model";
import CardAnime from "@components/Card/CardAnime";
import { useNavigate } from "react-router-dom";

const CollectionsStatusPageCss = {
  self: css({}),
  listCollection: css({
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
  }),
  itemCollection: css({
    height: "200px",
  }),
};

const CollectionsStatusPage: FC = () => {
  const { collection, statusCollection } = StatusViewModel();
  const navigate = useNavigate();

  return (
    <div css={CollectionsStatusPageCss.self} className="container_home">
      <div>
        <h2>Collection [{statusCollection}]</h2>

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
      </div>
    </div>
  );
};

export default CollectionsStatusPage;
