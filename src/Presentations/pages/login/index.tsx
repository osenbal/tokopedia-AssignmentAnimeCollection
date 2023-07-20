/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import Btn from "@components/Button/Btn.components";

const LoginPageCss = {
  self: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: "16px",
    minHeight: "100vh",
  }),
};

const LoginPage: FC = () => {
  return (
    <div css={LoginPageCss.self}>
      <h2>Login Page</h2>
      {/* <a href="https://anilist.co/api/v2/oauth/authorize?client_id=13567&response_type=token">
        Login with AniList
      </a> */}
      <div>
        <Btn
          text="Login with AniList"
          size="medium"
          onClick={() => {
            window.location.href =
              "https://anilist.co/api/v2/oauth/authorize?client_id=13567&response_type=token";
          }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
