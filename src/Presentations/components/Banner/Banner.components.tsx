/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import { mq } from "@/Presentations/constant/breakpoint";

const BannerCss = {
  self: css({
    width: "100%",
    height: "200px",
    position: "relative",
    [mq[0]]: {
      height: "300px",
    },
    [mq[1]]: {
      height: "400px",
    },
    [mq[3]]: {
      height: "500px",
    },
  }),
  bannerImg: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  overlayBanner: css({
    position: "absolute",
    top: "0",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to top, var(--color-black) 17%, rgba(255,255,255,0) 90%)",
  }),
};

type BannerProps = {
  imageUrl: string;
};

const Banner: FC<BannerProps> = ({ imageUrl }) => {
  return (
    <div css={BannerCss.self}>
      <div css={BannerCss.overlayBanner}></div>
      <img css={BannerCss.bannerImg} src={imageUrl} alt="banner" />
    </div>
  );
};

export default Banner;
