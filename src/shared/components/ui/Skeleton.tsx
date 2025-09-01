import { memo, type FC } from "react";

interface Props {
  count?: number;
}

const Skeleton: FC<Props> = ({ count = 20 }) => {
  return (
    <section className="dark:bg-[#000000]">
      <div className="container grid grid-cols-4 gap-5 max-[1000px]:grid-cols-3 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">
        {Array(count)
          .fill(" ")
          ?.map((_, index) => (
            <div key={index}>
              <div className="h-[450px] w-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
              <div className="pt-2">
                <div className="w-[70%] h-7 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="w-[80%] h-5 bg-gray-300 dark:bg-gray-700 mt-2 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default memo(Skeleton);
