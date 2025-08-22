import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../../../shared/const";
import userLogo from "../../../../shared/assets/hero/user-icon.png";
import SkeletonCastCrew from "../../../../shared/components/ui/SkeletonCastCrew";
import { useMovie } from "../../../movie/services/useMovie";

const Cast = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovie();
  const { data: creditsData, isLoading } = getMovieItems(id || "", "credits");
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <SkeletonCastCrew />
      ) : (
        <div className="flex gap-[20px] overflow-auto mt-[20px] actors">
          {creditsData?.cast?.map((user: any) => (
            <div
              key={user.id}
              className="flex-shrink-0 w-[100px] text-center cursor-pointer"
              onClick={() => navigate(`/actor/${user.id}`)}
            >
              <div>
                <img
                  src={
                    user.profile_path ? IMAGE_URL + user.profile_path : userLogo
                  }
                  className={`h-[150px] object-cover rounded-full mx-auto ${
                    !user.profile_path ? "fill-black bg-[white]" : ""
                  }`}
                  alt={user.name}
                  loading="lazy"
                />
              </div>

              <div className="mt-2">
                <h3
                  title={user.name}
                  className="line-clamp-1 text-sm font-medium dark:text-[#A1A1A1]"
                >
                  {user.name}
                </h3>
                <p
                  title={user.character}
                  className="line-clamp-1 text-xs text-gray-500"
                >
                  {user.character}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(Cast);
