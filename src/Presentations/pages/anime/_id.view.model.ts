import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UseAnime from "@/Domain/hooks/useAnime";
import UseCollectionAnime from "@/Domain/hooks/useCollectionAnime";

const AnimeDetailPageViewModel = () => {
  const { media_id } = useParams();
  const { useDetailAnime } = UseAnime();
  const { useAddCollection } = UseCollectionAnime();

  const [detailAnime, setDetailAnime] = useState<any>({} as any);
  const [showMoreDescription, setShowMoreDescription] =
    useState<boolean>(false);

  const { data, loading, error, networkStatus } = useDetailAnime(
    parseInt(media_id || "0")
  );

  const [addToCollection] = useAddCollection();

  const toggleShowMoreDescription = () => {
    setShowMoreDescription(!showMoreDescription);
  };

  const elipsisDescription = (description: string) => {
    if (description === undefined) return "";

    if (description.length >= 550 && !showMoreDescription) {
      return description.slice(0, 550) + "...";
    } else {
      return description;
    }
  };

  const insertToCollection = (status: string) => {
    addToCollection({
      variables: {
        mediaId: parseInt(media_id || "0"),
        status: status,
      },
    })
      .then((res) => {
        setDetailAnime((prev: any) => {
          return {
            media: {
              ...prev.media,
              mediaListEntry: {
                ...prev.media.mediaListEntry,
                status: status,
              },
            },
          };
        });
      })
      .catch((err) => {
        toast.error(err.message || "Something went wrong!");
      });
  };

  useEffect(() => {
    if (data && media_id) {
      setDetailAnime(data);
    }
  }, [data, media_id]);

  return {
    loading,
    error,
    detailAnime,
    networkStatus,
    showMoreDescription,
    toggleShowMoreDescription,
    elipsisDescription,
    insertToCollection,
  };
};

export default AnimeDetailPageViewModel;
