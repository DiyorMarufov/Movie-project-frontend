import React from "react";

const SkeletonHero = () => {
  return (
    <>
      <div className="container-hero rounded-lg">
        <div className="w-full h-[750px] bg-gray-300 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5">
          <div className="w-1/2 h-6 bg-gray-600 rounded-lg animate-pulse"></div>
          <div className="w-1/6 h-4 bg-gray-600 rounded-lg animate-pulse"></div>
          <div className="w-1/12 h-4 bg-gray-600 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </>
  );
};

export default React.memo(SkeletonHero);
