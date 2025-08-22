import React from "react";

const SkeletonActors = () => {
  return (
    <div className="flex gap-[20px] overflow-auto mt-[20px] actors animate-pulse">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex-shrink-0 w-[100px] text-center">
          <div>
            <div className="h-[150px] w-[100px] bg-gray-300 rounded-full mx-auto dark:bg-gray-700" />
          </div>

          <div className="mt-2 space-y-1">
            <div className="h-4 w-[80%] mx-auto bg-gray-300 rounded dark:bg-gray-700" />
            <div className="h-3 w-[60%] mx-auto bg-gray-200 rounded dark:bg-gray-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(SkeletonActors);
