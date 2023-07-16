import React from "react";
import IndexViewModel from "./index.view.model";

const HomePage: React.FC = () => {
  const { isGetListAnimeError, isGetListAnimeLoading } = IndexViewModel();

  if (isGetListAnimeLoading) return <p>Loading...</p>;
  if (isGetListAnimeError) return <p>Error : {isGetListAnimeError.message}</p>;

  return (
    <>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <br />
      </div>
    </>
  );
};

export default HomePage;
