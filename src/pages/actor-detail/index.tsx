import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../shared/const";
import { useActors } from "./services";
import { Image } from "antd";
import SkeletonActorDetail from "../../shared/components/ui/SkeletonActorDetail";
import Title from "../../shared/components/ui/title";
import MovieViewSlider from "../../shared/components/movie-view/MovieView-Slider";
import Skeleton from "../../shared/components/ui/Skeleton";
import { useSimilarMovieData } from "../../shared/hooks/getSimilarMovieActors";

export interface IActorDetail {
  id: number;
  biography: string;
  birthday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}

const ActorDetail = () => {
  const { id } = useParams();

  const { getActorById, getActorItemsById } = useActors();
  const { data, isLoading } = getActorById(Number(id));

  const { data: actorImages } = getActorItemsById(Number(id), "images");
  const { data: similarActorMovies, isLoading: similarActorLoading } =
    useSimilarMovieData("person", Number(id), "cast", "movie_credits");
  const [showMore, setShowMore] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  let lines = 11;
  let clamp = lines > 10 && !showMoreInfo;

  const [visibleCount, setVisibleCount] = useState(4);

  // Media Show more
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;

      if (width <= 900) {
        setVisibleCount(2);
      } else if (width <= 1210) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {isLoading && <SkeletonActorDetail />}
      <section className="pt-7">
        <div className="container flex flex-col">
          <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden gap-8 dark:bg-[#000000] dark:transition-all transition-all">
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={IMAGE_URL + data?.profile_path}
                alt={data?.name || "Actor Image"}
                className="w-full h-auto rounded-lg object-cover shadow-md"
              />
            </div>

            <div className="flex-1 flex flex-col p-4">
              <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-[#ffffff] dark:transition-all transition-all">
                {data?.name}
              </h1>

              <p
                className={`text-gray-700 text-base mb-6 ${
                  clamp ? "line-clamp-10" : ""
                } leading-relaxed dark:text-[#A1A1A1] dark:transition-all transition-all`}
              >
                {data?.biography || "Biography is not available."}
              </p>
              <div className="flex items-center justify-end">
                <button
                  onClick={() => setShowMoreInfo((p) => !p)}
                  className="text-[#ffffff] bg-[#000000] dark:bg-[var(--color-py)] dark:text-[#ffffff] dark:border-none dark:transition-all transition-all w-[90px] h-[30px] rounded-[5px] cursor-pointer hover:opacity-85"
                >
                  {!showMoreInfo ? "Read more" : "Hide"}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 text-[16px] dark:text-[#ffffff] dark:transition-all transition-all">
                    Place of Birth:
                  </h3>
                  <p className="text-[15px] dark:text-[#A1A1A1] dark:transition-all transition-all">
                    {data?.place_of_birth || "Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-[16px] dark:text-[#ffffff] dark:transition-all transition-all">
                    Birthday:
                  </h3>
                  <p className="text-[15px] dark:text-[#A1A1A1] dark:transition-all transition-all">
                    {data?.birthday || "Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-[16px] dark:text-[#ffffff] dark:transition-all transition-all">
                    Department:
                  </h3>
                  <p className="text-[15px] dark:text-[#A1A1A1] dark:transition-all transition-all">
                    {data?.known_for_department || "Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-[16px] dark:text-[#ffffff] dark:transition-all transition-all">
                    Popularity:
                  </h3>
                  <p className="text-[15px] dark:text-[#A1A1A1] dark:transition-all transition-all">
                    {data?.popularity?.toFixed(1) || "N/A"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 pt-10 actor-images max-[1210px]:grid-cols-3 max-[900px]:grid-cols-2">
            {actorImages?.profiles
              ?.slice(
                0,
                !showMore ? visibleCount : actorImages?.profiles?.length
              )
              .map((actor: any, inx: number) => (
                <div key={inx}>
                  <Image
                    src={IMAGE_URL + actor?.file_path}
                    className=""
                    alt=""
                  />
                </div>
              ))}
          </div>
          {actorImages?.profiles?.length > 4 && (
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowMore((p) => !p)}
                className="text-[#ffffff] bg-[#000000] mt-10 rounded-[5px] h-[40px] w-[120px] hover:opacity-85 cursor-pointer dark:bg-[var(--color-py)] dark:text-[#ffffff] dark:transition-all transition-all"
              >
                {!showMore ? "Show more" : "Hide"}
              </button>
            </div>
          )}
          <Title
            text="Similar"
            className="text-[#000000] dark:text-[var(--color-py)] mt-[50px]"
          />
          {similarActorLoading && <Skeleton />}
          <MovieViewSlider
            data={similarActorMovies}
            isLoading={similarActorLoading}
          />
        </div>
      </section>
    </>
  );
};

export default memo(ActorDetail);
