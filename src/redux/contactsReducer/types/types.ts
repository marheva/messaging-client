const SET_UPLOADED_CONTACTS = "UPLOADED_CONTACTS/SET_UPLOADED_CONTACTS";

export interface SetUploadedContactsAction {
  type: typeof SET_UPLOADED_CONTACTS;
  payload: string[];
}

export type UploadedContactsActionTypes = SetUploadedContactsAction;

export { SET_UPLOADED_CONTACTS };
