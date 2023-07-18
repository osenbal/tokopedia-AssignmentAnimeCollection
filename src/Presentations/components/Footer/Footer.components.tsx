/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { lazy, FC } from "react";
import { mq } from "@/Presentations/constant/breakpoint";

const Logo = lazy(
  () => import("@/Presentations/components/Logo/Logo.components")
);

// styled for CardAnime mobile first
const footerCss = {
  self: css({
    marginTop: "52px",
    fontSize: "12px",
    color: "var(--color-white)",
    display: "flex",
    flexDirection: "column",
    padding: "28px 16px",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    rowGap: "18px",
    paddingBottom: "100px",
    [mq[2]]: {
      marginTop: "157px",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left",
      padding: "28px 184px",
      backgroundColor: "#08080D",
      gap: "18px",
    },
  }),
  leftSide: css({
    display: "flex",
    flexDirection: "column",
    rowGap: "18px",
  }),
  rightSide: css({
    display: "flex",
    flexDirection: "column",
    rowGap: "25px",
    [mq[2]]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: "112px",
    },
    "& ul": {
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
      rowGap: "25px",

      "& li": {
        "& a": {
          textDecoration: "none",
          color: "#FFFFFF",
        },
      },
    },
  }),
};

const Footer: FC = () => {
  return (
    <div css={footerCss.self}>
      <div css={footerCss.leftSide}>
        <Logo
          styleImg={{
            width: "73px",
            height: "18px",
          }}
        />
        <p>Onime adalah website list anime yang berasal dari AniList</p>
        <p>©Copyright 2023</p>
      </div>

      <div css={footerCss.rightSide}>
        <ul>
          <li>
            <a href="/" rel="noopener noreferrer">
              Home
            </a>
          </li>
          <li>
            <a href="/collections" rel="noopener noreferrer">
              Collections
            </a>
          </li>
          <li>
            <a href="/profile" rel="noopener noreferrer">
              Profile
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="/collections" rel="noopener noreferrer">
              About Me
            </a>
          </li>
          <li>
            <a href="/profile" rel="noopener noreferrer">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
