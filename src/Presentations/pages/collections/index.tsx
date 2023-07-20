/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import CollectionViewModel from "./collection.view.model";
import CardAnime from "@components/Card/CardAnime";
import { mq } from "@/Presentations/constant/breakpoint";
import { useNavigate } from "react-router-dom";
import Btn from "@components/Button/Btn.components";

const CollectionsPageCss = {
  self: css({}),
  header: css({
    "& h2": {
      fontSize: "16px",
      fontWeight: "500",
    },
  }),
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
    width: "48%",
  }),
  collectionEmpty: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    rowGap: "16px",
  }),
};

const CollectionsPage: FC = () => {
  const { collection } = CollectionViewModel();
  const navigate = useNavigate();

  return (
    <div css={CollectionsPageCss.self} className="container_home">
      <div css={CollectionsPageCss.header}>
        {collection?.length !== 0 ? <h2>Collections Page</h2> : null}
      </div>
      {collection?.length === 0 ? (
        <div css={CollectionsPageCss.collectionEmpty}>
          <p>Empty Collections</p>
          <div>
            <Btn
              isDropdown={false}
              onClick={() => {
                navigate(`/`);
              }}
              text="Browse Anime"
              size="medium"
            />
          </div>
        </div>
      ) : (
        <div css={CollectionsPageCss.listCollection}>
          {collection?.map((item: any, index: number) => {
            return (
              <CardAnime
                key={index}
                css={CollectionsPageCss.itemCollection}
                onClick={() => {
                  navigate(`/collections/${item?.name}`);
                }}
                id={item?.entries[0].media?.id}
                name={item?.name}
                image={item?.entries[0]?.media?.coverImage?.medium}
                color={item?.entries[0]?.media?.coverImage?.color}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CollectionsPage;
