import React from "react";

const SkeletonMovieDetail = () => {
  return (
    <div className="flex gap-[30px] max-[1200px]:flex-col animate-pulse">
      <div className="max-[1200px]:w-full">
        <div className="h-[575px] w-[400px] max-[1200px]:w-full bg-gray-300 rounded-lg" />
      </div>

      <div className="flex-1 max-[1200px]:w-full max-[1200px]:pb-3">
        <div className="flex items-center justify-between mb-6">
          <div className="w-2/3 h-8 bg-gray-300 rounded" />
          <div className="w-[180px] h-13 bg-gray-300 rounded-[12px]" />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-[60px]">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-[80px] h-8 bg-gray-300 rounded-[10px]"
              />
            ))}
          </div>

          <div className="w-[60px] h-6 bg-gray-300 rounded" />

          <div className="w-[70px] h-6 bg-gray-300 rounded" />

          <div className="w-[60px] h-6 bg-gray-300 rounded" />
        </div>

        <div className="pt-[24px] space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-300 rounded" />
          ))}
        </div>

        <div className="grid grid-cols-[130px_10px_1fr] gap-y-4 text-[17px] pt-[44px]">
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="h-4 bg-gray-300 rounded mx-3" />
              <div className="h-4 bg-gray-300 rounded text-center" />
              <div className="h-4 bg-gray-300 rounded mx-3" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SkeletonMovieDetail);
