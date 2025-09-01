import { memo } from "react";

const SkeletonImages = () => {
  return (
    <section className="dark:bg-[#000000]">
      <div className="flex gap-[20px] overflow-x-auto mt-10 h-[220px] animate-pulse">
        <div className="w-full rounded-[10px] bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-full rounded-[10px] bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-full rounded-[10px] bg-gray-300 dark:bg-gray-700"></div>
      </div>
    </section>
  );
};

export default memo(SkeletonImages);
