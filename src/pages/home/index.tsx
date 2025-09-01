import { memo } from "react";
import { Play } from "lucide-react";
import TopWeeks from "../../shared/components/top-weeks/TopWeeks";
import { useFullMovieData } from "../../shared/hooks/getGenres";
import { IMAGE_URL } from "../../shared/const";

//@ts-ignore
import "swiper/css";

//@ts-ignore
import "swiper/css/navigation";

//@ts-ignore
import "swiper/css/pagination";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../index.css";
import SkeletonHero from "../../shared/components/ui/SkeletonHero";
import { useNavigate } from "react-router-dom";
import MovieViewSlider from "../../shared/components/movie-view/MovieView-Slider";

export interface IPosterMovie {
  id: number | string;
  backdrop_path: string;
  title: string;
  release_date: string;
  genres: string[];
  original_language: string;
  adult: boolean;
}

const Home = () => {
  const { data, isLoading } = useFullMovieData("discover");
  const navigate = useNavigate();
  return (
    <section>
      <div className="container-hero relative hero">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          navigation={true}
          keyboard={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper cursor-pointer rounded-[12px]"
        >
          {isLoading && <SkeletonHero />}
          {data?.map((item: IPosterMovie) => (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <img
                  src={IMAGE_URL + item.backdrop_path}
                  className="w-full h-[640px] object-cover"
                  alt={item.title}
                  onClick={() => navigate(`movie/${item.id}`)}
                />
                <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[10px] w-[380px] max-[850px]:hidden">
                  <h1 className="font-medium text-[32px] text-[#FFFFFF] text-center">
                    {item.title}
                  </h1>
                  <div className="flex items-center gap-2 text-[#ffffff]">
                    <span title={item.release_date} className="line-clamp-1">
                      {item.release_date}
                    </span>
                    <div className="h-[4px] w-[4px] bg-[white] rounded-full"></div>
                    <span
                      title={item.genres.join(", ")}
                      className="line-clamp-1"
                    >
                      {item.genres.join(", ")}
                    </span>
                    <div className="h-[4px] w-[4px] bg-[white] rounded-full uppercase"></div>
                    <span>{item.original_language}</span>
                    <div className="h-[4px] w-[4px] bg-[white] rounded-full"></div>
                    <span>{item.adult ? "18+" : "16+"}</span>
                  </div>
                  <button
                    className="flex items-center justify-center gap-[7px] w-full h-[50px] cursor-pointer hover:opacity-85 bg-[#ffffff] rounded-[12px] text-[var(--color-py)]"
                    onClick={() => navigate(`movie/${item.id}`)}
                  >
                    <Play />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <TopWeeks text="This weekend" showAll="Show all" />
      <MovieViewSlider data={data} className="container" isLoading={isLoading} />
    </section>
  );
};
export default memo(Home);
