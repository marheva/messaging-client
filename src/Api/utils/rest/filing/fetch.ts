import { AxiosPromise } from "axios";
import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getFilingFiles(customerId: string): AxiosPromise<any> {
  const url = `${urls.filing.files}${customerId}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}

export function postUploadFile(customerId: string, requestFormData: any): AxiosPromise<any> | any {
  const url = `${urls.filing.uploadFile}${customerId}`;

  return axiosInstance({
    method: "POST",
    url,
    data: requestFormData,
  });
}

export function deleteFile(customerId: string, fileName: string): AxiosPromise<any> | any {
  const url = `${urls.filing.deleteFile}${customerId}`;

  return axiosInstance({
    method: "DELETE",
    url,
    data: { fileName },
  });
}
