import React from "react";

const LoginPage: React.FC = () => {
  return (
    <>
      <div>
        <h2>Login Page</h2>
        <a href="https://anilist.co/api/v2/oauth/authorize?client_id=13567&response_type=token">
          Login with AniList
        </a>
      </div>
    </>
  );
};

export default LoginPage;
