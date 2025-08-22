import { memo, useState, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../shared/assets/hero/default-img.jpg";
import Skeleton from "../ui/Skeleton";

interface Props {
  data: any;
  className?: string;
  isLoading: boolean;
}

const MovieView: FC<Props> = ({ data, className, isLoading }) => {
  const navigate = useNavigate();
  const [showYearId, setShowYearId] = useState<number | null>(null);

  return (
    <div className={`${className}`}>
      <div className="container">
        {isLoading && <Skeleton />}
        <div className="grid grid-cols-4 gap-5 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[450px]:grid-cols-1">
          {data?.map((movie: any) => (
            <div key={movie.id} className="cursor-pointer">
              <div
                onClick={() => {
                  navigate(`/movie/${movie.id}`);
                }}
                className="h-[450px] w-full overflow-hidden relative"
              >
                <img
                  loading="lazy"
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                  onMouseEnter={() => setShowYearId(movie.id)}
                  onMouseLeave={() => setShowYearId(null)}
                />

                <div
                  className={`${
                    showYearId === movie.id
                      ? "absolute top-2 left-2 px-2 bg-[var(--color-py)] text-[#ffffff] rounded-[10px] flex items-center justify-center dark:text-[#ffffff] transition-all"
                      : ""
                  }`}
                  onMouseEnter={() => setShowYearId(movie.id)}
                  onMouseLeave={() => setShowYearId(null)}
                >
                  <h1>{movie?.release_date.split("-")[0]}</h1>
                </div>
              </div>
              <div className="">
                <h3
                  className="font-medium text-[23px] line-clamp-1 dark:text-[#ffffff] dark:transition-all transition-all max-md:text-[19px]"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p>
                  <span className="dark:text-[#4D4D4D] dark:transition-all transition-all">
                    {movie?.genres.join(", ")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MovieView);
