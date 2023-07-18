import { FC } from "react";
import CardListAnimeTrending from "@components/Card/CardListAnimeTrending";
import CardListAnime from "@components/Card/CardListAnime";
import IndexViewModel from "./index.view.model";

const HomePage: FC = () => {
  const {
    listAnime,
    listAnimeTrending,
    loading,
    pageInfo,
    networkStatus,
    page,
    setPage,
  } = IndexViewModel();

  return (
    <>
      <section>
        <CardListAnimeTrending
          listAnimeTrending={listAnimeTrending}
          isLoading={loading}
        />
      </section>
      <section>
        <CardListAnime
          listAnime={listAnime}
          loading={loading}
          pageInfo={pageInfo}
          networkStatus={networkStatus}
          page={page}
          setPage={setPage}
        />
      </section>
    </>
  );
};

export default HomePage;
