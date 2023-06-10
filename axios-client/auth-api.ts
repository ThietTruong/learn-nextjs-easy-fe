import { LoginPayLoad } from "@/models";
import axiosClient from "./axios-client";

const authApi = {
  login: (data: LoginPayLoad) => {
    return axiosClient.post("/login", data);
  },
  logout: () => {
    return axiosClient.post("/logout");
  },
  getProfile: () => {
    return axiosClient.get("/profile");
  },
};

export default authApi;
