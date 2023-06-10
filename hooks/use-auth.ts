import authApi from "@/axios-client/auth-api";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });
  const fistLoading = profile === undefined && error === undefined;
  async function login() {
    await authApi.login({
      username: "thiettruong1999@gmal.com",
      password: "123456",
    });
    await mutate();
  }
  console.log({ profile, error });
  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }
  console.log("profile", profile);
  return {
    fistLoading,
    profile,
    error,
    login,
    logout,
  };
}
