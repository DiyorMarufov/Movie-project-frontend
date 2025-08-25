import { memo, useState, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../shared/assets/hero/default-img.jpg";
import Skeleton from "../ui/Skeleton";

import { Swiper, SwiperSlide } from "swiper/react";

//@ts-ignore
import "swiper/css";

//@ts-ignore
import "swiper/css/free-mode";

//@ts-ignore
import "swiper/css/pagination";

import "../../../index.css";

import { Navigation } from "swiper/modules";

interface Props {
  data: any;
  className?: string;
  isLoading: boolean;
}

const MovieViewSlider: FC<Props> = ({ data, className, isLoading }) => {
  const navigate = useNavigate();
  const [showYearId, setShowYearId] = useState<number | null>(null);

  return (
    <div className={`${className}`}>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper custom-swiper-nav"
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
        >
          {isLoading && <Skeleton />}
          <div className="flex gap-5 overflow-auto movie-swiper">
            {data?.map((movie: any) => (
              <SwiperSlide key={movie.id} className="cursor-pointer">
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
                    className="h-full min-w-[280px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
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
                <div className="bg-[white] dark:bg-[#000000] dark:transition-all transition-all">
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
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default memo(MovieViewSlider);
