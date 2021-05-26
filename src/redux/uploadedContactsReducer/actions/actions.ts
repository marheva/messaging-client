import { UploadedContactsActions } from "../../rootTypes";
import { SET_UPLOADED_CONTACTS } from "../types/types";

export function setUploadedContacts(files: ContactPropsTypes[]): UploadedContactsActions {
  return {
    type: SET_UPLOADED_CONTACTS,
    payload: files,
  };
}
