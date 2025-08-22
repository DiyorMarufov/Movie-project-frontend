import { memo } from "react";
import logo from "../../assets/header/logo.svg";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center dark:bg-[#000000]">
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default memo(Loading);
