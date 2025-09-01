import { memo, useState, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../shared/assets/hero/default-img.jpg";
import Skeleton from "../ui/Skeleton";
import { Bookmark } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../lib/features/favoriteSlice";
import type { RootState } from "../../../app/store";
import { toggleLikes } from "../../lib/features/likesSlice";

interface Props {
  data: any;
  className?: string;
  isLoading?: boolean;
}

const MovieView: FC<Props> = ({ data, className, isLoading }) => {
  const navigate = useNavigate();
  const [showYearId, setShowYearId] = useState<number | null>(null);
  const likes = useSelector((state: RootState) => state.toggleLikes.value);
  const dispatch = useDispatch();

  const toggleMovie = (movie: any) => {
    dispatch(toggleFavorite(movie));
    dispatch(toggleLikes(movie.id));
  };

  return (
    <div className={className}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="grid grid-cols-4 gap-5 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[350px]:grid-cols-1">
          {data?.map((movie: any) => (
            <div key={movie.id} className="cursor-pointer">
              <div className="relative overflow-hidden group aspect-[2/3]">
                <img
                  loading="lazy"
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  onMouseEnter={() => setShowYearId(movie.id)}
                  onMouseLeave={() => setShowYearId(null)}
                  onClick={() => navigate(`/movie/${movie.id}`)}
                />

                {showYearId === movie.id && (
                  <div className="absolute top-2 left-2 px-2 bg-[var(--color-py)] text-white rounded-[10px] text-sm">
                    <h1>{movie?.release_date.split("-")[0]}</h1>
                  </div>
                )}

                <div
                  onClick={() => toggleMovie(movie)}
                  className="absolute top-1 right-1 p-2 bg-[var(--color-py)] rounded-[100px] hover:opacity-80"
                >
                  <Bookmark
                    className={`text-[#ffffff] ${
                      likes.includes(movie.id)
                        ? "fill-[#ffffff]"
                        : "fill-[var(--color-py)]"
                    }`}
                  />
                </div>
              </div>

              <div
                className="mt-2 px-1"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                <h3
                  className="font-medium line-clamp-1 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] dark:text-white transition-all"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-sm sm:text-[14px] text-gray-600 dark:text-[#AAAAAA] line-clamp-1">
                  {movie?.genres.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(MovieView);
