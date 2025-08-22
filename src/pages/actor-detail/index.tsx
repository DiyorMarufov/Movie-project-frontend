import { memo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../shared/const";
import { useActors } from "./services";

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

  const { getActorById, getActorImagesById } = useActors();
  const { data } = getActorById(Number(id));

  const { data: actorImages } = getActorImagesById(Number(id), "images");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  return (
    <section className="pt-7">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden gap-8 dark:bg-[#000000] dark:transition-all transition-all">
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
              title={data?.biography}
              className="text-gray-700 text-base mb-6 line-clamp-10 leading-relaxed dark:text-[#A1A1A1] dark:transition-all transition-all"
            >
              {data?.biography || "Biography is not available."}
            </p>

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

        <div className="flex gap-5 overflow-auto pt-10 actor-images">
          {actorImages?.profiles?.map((actor: any, inx: number) => (
            <div key={inx}>
              <div>
                <img
                  src={IMAGE_URL + actor?.file_path}
                  className="h-[500px]"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ActorDetail);
