import { ArrowRight } from "lucide-react";
import { memo, type FC } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  text: string;
  className?: string;
}

const ShowAll: FC<Props> = ({ text, className }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/movie")}
      className={`flex items-center gap-1 cursor-pointer hover:opacity-85 ${className}`}
    >
      <span>{text}</span>
      <ArrowRight className="w-4 h-4" />
    </button>
  );
};

export default memo(ShowAll);
