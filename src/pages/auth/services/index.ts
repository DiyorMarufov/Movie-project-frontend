import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { authApi } from "../../../shared/api";

export interface IRegister {
  fullname?: string;
  email: string;
  password: string;
}

export interface IOtp {
  email: string;
  code: string | number;
}

export const userKey = "userKey";

export const useAuth = () => {
  const client = new QueryClient();

  const signUpUser = useMutation({
    mutationFn: (data: IRegister) => authApi.post("users/signup", data),
    onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
  });

  const sendOtp = useMutation({
    mutationFn: (data: IOtp) => authApi.post("users/confirm-otp", data),
    onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
  });

  const signInUser = useMutation({
    mutationFn: (data: IRegister) => authApi.post("users/signin", data),
    onSuccess: () => client.invalidateQueries({ queryKey: [userKey] }),
  });

  const authMe = useQuery({
    queryKey: ["auth"],
    queryFn: () => authApi.get("users/me"),
  });

  return { signUpUser, sendOtp, signInUser, authMe };
};
