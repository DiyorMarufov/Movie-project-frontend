import { memo, useEffect } from "react";
import { useAuth } from "../auth/services";
import { useDispatch } from "react-redux";
import { removeToken } from "../../shared/lib/features/authSlice";

const Profile = () => {
  const { authMe } = useAuth();
  const { isError } = authMe;

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(removeToken());
    }
  }, [isError]);
  return (
    <section className="pt-[48px]">
      <div className="container flex justify-center">
        <div className="">
          <h2>Profile</h2>
        </div>
      </div>
    </section>
  );
};

export default memo(Profile);
