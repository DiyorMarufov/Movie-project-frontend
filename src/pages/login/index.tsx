import { Button, Form, Input, type FormProps } from "antd";
import { memo } from "react";
import { useAuth } from "../auth/services";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSignInData } from "../../shared/lib/features/signinSlice";
import { setToken } from "../../shared/lib/features/authSlice";
import type { RootState } from "../../app/store";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  const { signInUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = useSelector((state: RootState) => state.signInSlice);

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signInUser.mutate(values, {
      onSuccess: (res) => {
        dispatch(clearSignInData());
        dispatch(setToken(res?.data.access_token));
        navigate(`/profile`);
      },
    });
  };
  return (
    <section className="pt-[48px]">
      <div className="container flex justify-center">
        <div className="w-[380px]">
          <h1 className="text-center font-medium text-[32px] dark:text-[#ffffff]">
            Login
          </h1>
          <Form
            initialValues={initialValues}
            onFinish={onFinish}
            style={{
              paddingTop: 10,
              display: "flex",
              gap: 13,
              flexDirection: "column",
              paddingBottom: 205,
            }}
          >
            <Form.Item name="email" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter email" className="h-[40px]" />
            </Form.Item>
            <Form.Item name="password" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter password" className="h-[40px]" />
            </Form.Item>
            <Button className="h-[40px]!" type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default memo(Login);
