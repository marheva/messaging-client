import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getUserInformation(userId: string) {
  const url = `${urls.user.getUserInformation}${userId}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}
