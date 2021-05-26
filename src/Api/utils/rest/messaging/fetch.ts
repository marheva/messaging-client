import { AxiosPromise } from "axios";
import { axiosInstance } from "../../axios";
import urls from "../urls";

export function getMessagingType(customerId: string, messagingId: string): AxiosPromise<any> {
  const url = `${urls.messaging.getMessagingType}${messagingId}/${customerId}`;

  return axiosInstance({
    method: "GET",
    url,
  });
}

export function postSendTwilioSMS(customerId: string, messagingId: string): AxiosPromise<any> {
  const url = `${urls.messaging.postSendNotification}${messagingId}/${customerId}`;

  return axiosInstance({
    method: "POST",
    url,
  });
}
