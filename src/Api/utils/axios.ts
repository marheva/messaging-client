import axios from "axios";

const DEFAULT_SERVER = "http://localhost:8000/api";
export const SERVER = process.env.API_SERVER || DEFAULT_SERVER;

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: SERVER,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  ({ response }: any) => {
    const {
      data: { error, message },
      status,
    } = response;
    if (error && status === 403 && window.location.pathname !== "/login") {
      window.location.reload();
    }
    return response;
  }
);
