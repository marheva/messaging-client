import { UploadedContactsPropsTypes } from './types/UploadedContacts'
import { UploadedContactsActionTypes, SET_UPLOADED_CONTACTS } from "./types/types";

const initialState: UploadedContactsPropsTypes = {
    contacts: []
};

export default function UploadedContactsReducer(state = initialState, { type, payload }: UploadedContactsActionTypes) {
    switch (type) {
        case SET_UPLOADED_CONTACTS:
            return { ...state, contacts: payload };
        default:
            return state;
    }
}