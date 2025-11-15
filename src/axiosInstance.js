import axios from "axios";
import { refreshAccessToken } from "./refreshToken";

const domain = 'https://e-commarce-website-eight.vercel.app';

const axiosInstance = axios.create({
  baseURL: `${domain}/api/v1`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem("userToken");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
