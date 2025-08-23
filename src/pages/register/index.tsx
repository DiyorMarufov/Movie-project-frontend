import { Button, Form, Input, type FormProps } from "antd";
import { memo } from "react";
import { useAuth } from "../auth/services";
import { useDispatch } from "react-redux";
import { setSignInData } from "../../shared/lib/features/signinSlice";
import { useNavigate } from "react-router-dom";

type FieldType = {
  fullname: string;
  email: string;
  password: string;
};

const Register = () => {
  const { signUpUser } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    signUpUser.mutate(values, {
      onSuccess: () => {
        const data: FieldType = {
          fullname: values.fullname,
          email: values.email,
          password: values.password,
        };
        dispatch(setSignInData(data));
        const encode = btoa(values.email);
        navigate(`/otp?e=${encode}`);
      },
    });
  };

  return (
    <section className="pt-[48px]">
      <div className="container flex justify-center">
        <div className="w-[380px]">
          <h1 className="text-center font-medium text-[32px] dark:text-[#ffffff]">
            Registration
          </h1>
          <Form
            onFinish={onFinish}
            style={{
              paddingTop: 10,
              display: "flex",
              gap: 13,
              flexDirection: "column",
              paddingBottom: 205,
            }}
          >
            <Form.Item name="fullname" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter fullname" className="h-[40px]" />
            </Form.Item>
            <Form.Item name="email" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter email" className="h-[40px]" />
            </Form.Item>
            <Form.Item name="password" style={{ marginBottom: 0 }}>
              <Input placeholder="Enter password" className="h-[40px]" />
            </Form.Item>
            <Button className="h-[40px]!" type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default memo(Register);
