import { memo } from "react";

const SkeletonActorDetail = () => {
  return (
    <section className="pt-7 animate-pulse dark:bg-[#000000]">
      <div className="container flex flex-col">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden gap-8 dark:bg-[#000000]">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <div className="w-full h-[600px] bg-gray-300 dark:bg-gray-700 rounded-lg" />
          </div>

          <div className="flex-1 flex flex-col p-4 gap-4">
            <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />

            <div className="space-y-2">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded"
                />
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <div className="h-8 w-[90px] bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {[...Array(4)].map((_, i) => (
                <div key={i}>
                  <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700 rounded mb-2" />
                  <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 pt-10 max-[1210px]:grid-cols-3 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-full h-[400px] bg-gray-300 dark:bg-gray-700 rounded"
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="h-[40px] w-[120px] bg-gray-300 dark:bg-gray-700 rounded" />
        </div>
      </div>
    </section>
  );
};

export default memo(SkeletonActorDetail);
