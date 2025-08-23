import { memo, useEffect } from "react";
import { useAuth } from "../auth/services";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../shared/lib/features/authSlice";
import type { RootState } from "../../app/store";

const Profile = () => {
  const { authMe } = useAuth();
  const { isError } = authMe;

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.authSlice.user);

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
