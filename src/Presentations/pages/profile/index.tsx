/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { FC } from "react";
import ProfileViewModel from "./profile.view.model";
import Btn from "@components/Button/Btn.components";

const ProfilePageCss = {
  self: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "16px",
    justifyContent: "center",
    minHeight: "100vh",
  }),
  imgUser: css({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  }),
};

const ProfilePage: FC = () => {
  const { user, logout } = ProfileViewModel();

  return (
    <div css={ProfilePageCss.self}>
      <img
        css={ProfilePageCss.imgUser}
        src={user?.avatar?.large}
        alt="profile"
      />
      <p>Hi, {user?.name}</p>
      <div>
        <Btn text="Logout" onClick={logout} size="medium" />
      </div>
    </div>
  );
};

export default ProfilePage;
