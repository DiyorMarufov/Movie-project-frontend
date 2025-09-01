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
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../lib/features/favoriteSlice";
import { toggleLikes } from "../../lib/features/likesSlice";
import type { RootState } from "../../../app/store";
import { Bookmark } from "lucide-react";

interface Props {
  data: any;
  className?: string;
  isLoading: boolean;
}

const MovieViewSlider: FC<Props> = ({ data, className, isLoading }) => {
  const navigate = useNavigate();
  const [showYearId, setShowYearId] = useState<number | null>(null);

  const likes = useSelector((state: RootState) => state.toggleLikes.value);
  const dispatch = useDispatch();

  const toggleMovie = (movie: any) => {
    dispatch(toggleFavorite(movie));
    dispatch(toggleLikes(movie.id));
  };
  return (
    <div className={`${className} pt-2`}>
      <div>
        <Swiper
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper custom-swiper-nav relative"
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          breakpoints={{
            350: { slidesPerView: 2 },
            600: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1150: { slidesPerView: 4 },
          }}
        >
          {isLoading && <Skeleton />}

          {data?.map((movie: any) => (
            <SwiperSlide key={movie.id} className="cursor-pointer">
              <div
                className="
            relative overflow-hidden
            group aspect-[2/3]"
              >
                <img
                  loading="lazy"
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  className="
              w-full h-full object-cover
              transition-transform duration-300 ease-in-out 
              hover:scale-105"
                  onMouseEnter={() => setShowYearId(movie.id)}
                  onMouseLeave={() => setShowYearId(null)}
                  onClick={() => {
                    navigate(`/movie/${movie.id}`);
                  }}
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
                className="bg-white dark:bg-black px-1 py-2"
                onClick={() => {
                  navigate(`/movie/${movie.id}`);
                }}
              >
                <h3
                  className="font-medium line-clamp-1
              text-[16px] sm:text-[18px] md:text-[20px] lg:text-[23px] 
              dark:text-white transition-all"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 dark:text-[#4D4D4D]">
                  {movie?.genres.join(", ")}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(MovieViewSlider);
