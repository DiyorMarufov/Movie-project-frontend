import { memo } from "react";

const SkeletonImages = () => {
  return (
    <div className="flex gap-[20px] overflow-x-auto mt-10 h-[220px] animate-pulse">
      <div className="w-full rounded-[10px] bg-gray-300"></div>
      <div className="w-full rounded-[10px] bg-gray-300"></div>
      <div className="w-full rounded-[10px] bg-gray-300"></div>
    </div>
  );
};

export default memo(SkeletonImages);
