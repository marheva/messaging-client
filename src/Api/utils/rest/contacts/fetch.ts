import { AxiosPromise } from "axios";
import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getContacts(customerId: string): AxiosPromise<any> {
  const url = `${urls.contacts.getContacts}${customerId}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}
