import { memo } from "react";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

const FavoriteMovie = () => {
  const data = useSelector((state: RootState) => state.favoriteSlice.value);
  return (
    <div className="container">
      {data.length > 0 ? (
        <MovieView data={data} />
      ) : (
        <div className="h-[49vh] flex items-center justify-center">
          <div className="font-medium text-[23px] dark:text-[var(--color-py)] max-sm:text-[17px]">
            Nothing is here, Add your movie to favorite
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FavoriteMovie);
