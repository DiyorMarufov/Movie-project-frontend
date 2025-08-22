import { memo, useEffect } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../shared/const";
import Title from "../../shared/components/ui/title";
import TopWeeks from "../../shared/components/top-weeks/TopWeeks";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks/getGenres";
import { Image } from "antd";
import { Calendar, Plus, Star, Timer } from "lucide-react";
import SkeletonMovieDetail from "../../shared/components/ui/SkeletonMovieDetail";
import SkeletonImages from "../../shared/components/ui/SkeletonImages";
import { useMovie } from "../movie/services/useMovie";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovie();
  const { data, isLoading } = getMovieById(id || "");
  const { data: imagesData, isLoading: isLoadingImages } = getMovieItems(
    id || "",
    "images"
  );
  const { data: movieViews } = useFullMovieData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section className="pt-[20px]">
      <div className="container flex flex-col">
        {isLoading ? (
          <SkeletonMovieDetail />
        ) : (
          <div className="flex gap-[30px] max-[1200px]:flex-col">
            <div className="max-[1200px]:flex justify-center">
              <div>
                <img
                  src={`${IMAGE_URL}${data?.poster_path}`}
                  className="h-[575px]"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 max-[1200px]:w-full max-[1200px]:pb-3">
              <div className="flex flex-wrap items-center justify-between max-[395px]:gap-2">
                <h1
                  title={data?.title}
                  className="font-semibold text-[25px] line-clamp-1 dark:text-[#ffffff] dark:transition-all transition-all"
                >
                  {data?.title}
                </h1>
                <button className="flex items-center gap-2 p-[16px] rounded-[15px] text-[#ffffff] bg-[var(--color-py)] cursor-pointer hover:opacity-85">
                  <Plus /> Add to Favourite
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-[60px] dark:text-[#ffffff] dark:transition-all transition-all">
                <div className="flex flex-wrap gap-2">
                  {data?.genres?.map((item: any) => (
                    <div key={item.id}>
                      <div className="p-[10px] rounded-[10px] bg-[#000000] font-bold text-[#ffffff] dark:bg-[#ffffff] dark:text-[#000000] dark:transition-all transition-all">
                        {item?.name}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-[6px] py-[8px] px-[10px] dark:text-[#ffffff] dark:transition-all transition-all">
                  <Calendar />
                  <p className="text-[16px] flex items-center pt-1">
                    {data?.release_date.split("-")[0]}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Timer />
                  <p className="text-[16px] flex items-center pt-1">
                    <span>{Math.floor(data?.runtime / 60)}</span>:
                    <span>{data?.runtime % 60}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 p-[10px]">
                  <Star className="fill-black" />
                  <p className="mt-1 text-[16px]">
                    {data?.vote_average.toFixed(1)}
                  </p>
                </div>
              </div>
              <div className="pt-[24px] dark:text-[#ffffff] font-bold dark:transition-all transition-all">
                <p>{data?.overview}</p>
              </div>

              <div className="grid grid-cols-[130px_10px_1fr] gap-y-2 text-[17px] pt-[44px] font-bold dark:text-[#ffffff] dark:transition-all transition-all">
                <div className="px-3 text-right">Country</div>
                <div className="text-center">:</div>
                <div className="px-3">{data?.origin_country}</div>

                <div className="px-3 text-right">Genre</div>
                <div className="text-center">:</div>
                <div className="px-3">
                  {data?.genres?.map((p: any) => p.name).join(", ")}
                </div>

                <div className="px-3 text-right">Date Release</div>
                <div className="text-center">:</div>
                <div className="px-3">{data?.release_date}</div>

                <div className="px-3 text-right">Production</div>
                <div className="text-center">:</div>
                <div className="px-3">
                  {data?.production_companies
                    .map((item: any) => item.name)
                    .join(", ")}
                </div>

                <div className="px-3 text-right">Revenue</div>
                <div className="text-center">:</div>
                <div className="px-3">{data?.revenue.toLocaleString()}$</div>
              </div>
            </div>
          </div>
        )}

        {isLoadingImages && <SkeletonImages />}
        <div className="flex gap-[20px] overflow-x-auto mt-10 h-[220px] images">
          {imagesData?.backdrops?.slice(0, 20).map((item: any, inx: number) => (
            <div key={inx} className="flex-shrink-0">
              <Image
                src={IMAGE_URL + item.file_path}
                alt=""
                className="h-full object-cover rounded-[10px]"
                width={380}
              />
            </div>
          ))}
        </div>

        <div className="mt-[30px]">
          <div className="flex gap-10">
            <NavLink to={""}>
              <Title
                text="Cast"
                className={`text-[#000000] cursor-pointer select-none dark:text-[#ffffff] dark:hover:text-[var(--color-py)] dark:transition-all transition-all`}
              />
            </NavLink>

            <NavLink to={"crew"}>
              <Title
                text="Crew"
                className="text-[#000000] cursor-pointer select-none dark:text-[#ffffff] dark:hover:text-[var(--color-py)] dark:transition-all transition-all"
              />
            </NavLink>
          </div>

          <Outlet />
        </div>

        <TopWeeks text="This weekend" showAll="Show all" />
        <MovieView data={movieViews} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default memo(MovieDetail);
