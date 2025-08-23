import { Input } from "antd";
import type { OTPProps } from "antd/es/input/OTP";
import { memo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../auth/services";

const VerifyOtp = () => {
  const { sendOtp } = useAuth();
  const [params] = useSearchParams();
  const encode = params.get("e");
  const email = atob(encode || "");
  const navigate = useNavigate();

  const onChange: OTPProps["onChange"] = (code) => {
    sendOtp.mutate(
      { email, code },
      {
        onSuccess: () => navigate("login"),
      }
    );
  };
  return (
    <section className="pt-[48px] pb-[340px]">
      <div className="container flex justify-center">
        <div className="text-center w-[380px]">
          <h1 className="font-medium text-[30px] dark:text-[white]">Otp</h1>

          <p className="font-normal pb-6 break-words text-[#777777]">
            Write otp, which we send to email{" "}
            <span className="font-bold dark:text-[var(--color-py)]">
              {email}
            </span>
          </p>

          <Input.OTP
            formatter={(str) => str.toUpperCase()}
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(VerifyOtp);
