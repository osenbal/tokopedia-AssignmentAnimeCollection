/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";
import { mq } from "@/Presentations/constant/breakpoint";

// styled for CardAnime mobile first
const cardAnimeCss = {
  self: css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#343434",
    width: "100%",
    minWidth: "162px",
    borderRadius: "14px",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.01)",
      transition: "all 0.3s ease-in-out",
    },
    [mq[0]]: {
      maxWidth: "162px",
    },
  }),
  containerImage: css({
    display: "flex",
    justifyContent: "center",
    height: "220px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      animation: "fadeIn 0.2s ease-in-out",
      [mq[0]]: {
        maxWidth: "162px",
        maxHeight: "220px",
      },
    },
  }),
  title: css({
    margin: "8px 4px",
    marginTop: "5px",
    "& p": {
      fontSize: "12px",
      fontWeight: "400",
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }),
};

type CardAnimeProps = {
  id: number;
  name: string;
  image: string;
  color: string;
  onClick?: () => void;
};

const CardAnime: React.FC<CardAnimeProps> = ({
  id,
  name,
  image,
  color,
  onClick,
}) => {
  return (
    <div css={cardAnimeCss.self} onClick={onClick}>
      <div
        css={cardAnimeCss.containerImage}
        style={{
          backgroundColor: color,
        }}
      >
        <img src={image} alt={name} />
      </div>

      <div css={cardAnimeCss.title}>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default CardAnime;
