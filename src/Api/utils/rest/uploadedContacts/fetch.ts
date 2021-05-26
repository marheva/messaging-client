import { AxiosPromise } from "axios";
import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getUploadedContacts(customerId: string): AxiosPromise<any> {
  const url = `${urls.uploadedContacts.getContacts}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}

export function createUploadedContacts(customerId: string, fileName: string): AxiosPromise<any> {
  const url = `${urls.uploadedContacts.createContacts}${customerId}`;

  return axiosInstance({
    method: "POST",
    url,
    data: { fileName: fileName },
  });
}
