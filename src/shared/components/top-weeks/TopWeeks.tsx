import { memo, type FC } from "react";
import Title from "../ui/title";
import ShowAll from "../ui/showAll";

interface Props {
  text: string;
  showAll: string;
}

const TopWeeks: FC<Props> = ({ text, showAll }) => {
  return (
    <div className="container mt-[50px] mb-[20px]">
      <div className="flex justify-between">
        <Title
          text={text}
          className="dark:text-[var(--color-py)] dark:transition-all transition-all"
        />
        <ShowAll
          text={showAll}
          className="dark:text-[var(--color-py)] dark:transition-all transition-all"
        />
      </div>
    </div>
  );
};

export default memo(TopWeeks);
