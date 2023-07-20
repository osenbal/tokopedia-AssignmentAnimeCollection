/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import CollectionViewModel from "./collection.view.model";

const CollectionsPageCss = { self: css({}) };

const CollectionsPage: FC = () => {
  const { collection } = CollectionViewModel();

  return (
    <div css={CollectionsPageCss.self}>
      <h2>Collections Page</h2>
    </div>
  );
};

export default CollectionsPage;
