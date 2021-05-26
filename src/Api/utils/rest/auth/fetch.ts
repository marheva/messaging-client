import { AxiosPromise } from "axios";
import urls from "../urls";
import { axiosInstance } from "../../axios";

export function getSession(): AxiosPromise<any> {
  const url = `${urls.auth.getSession}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}

export function fetchLoginUser(email: string, password: string) {
  const url = `${urls.auth.userLogin}`;
  let requestFormData = new FormData();

  requestFormData.set("email", email);
  requestFormData.set("password", password);
  requestFormData = { ...requestFormData, ...{ email: email, password: password } };

  return axiosInstance({
    method: "POST",
    url,
    data: requestFormData,
  });
}

export function postUserLogout() {
  const url = `${urls.auth.userLogout}`;

  return axiosInstance({
    method: "POST",
    url,
  });
}
