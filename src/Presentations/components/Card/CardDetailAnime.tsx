/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import { mq } from "@/Presentations/constant/breakpoint";

const CardDetailAnimeCss = {
  self: css({
    position: "relative",
    maxWidth: "100px",
    maxHeight: "130px",
    overflow: "hidden",
    borderRadius: "14px",
    [mq[3]]: {
      maxHeight: "322px",
      maxWidth: "215px",
    },
  }),
  containerIcon: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "var(--color-white)",
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    position: "absolute",
    bottom: "10px",
    right: "10px",

    "& img": {
      width: "14px",
      height: "14px",
    },
  }),
  coverImage: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    [mq[3]]: {
      height: "322px",
      width: "215px",
    },
  }),
};

type CardDetailAnimeProps = {
  imageUrl: string;
};

const CardDetailAnime: FC<CardDetailAnimeProps> = ({ imageUrl }) => {
  return (
    <div css={CardDetailAnimeCss.self}>
      <img css={CardDetailAnimeCss.coverImage} src={imageUrl} alt="banner" />

      {/* <div css={CardDetailAnimeCss.containerIcon}>
        <img src="/assets/icons/ico_love.svg" alt="love" />
      </div> */}
    </div>
  );
};

export default CardDetailAnime;
