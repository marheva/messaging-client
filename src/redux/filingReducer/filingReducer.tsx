import { FilingPropsTypes } from './types/Filing'
import { FilingActionTypes, SET_FILING_FILES, ADD_FILE, DELETE_FILE } from "./types/types";

const initialState: FilingPropsTypes = {
    filesToProcessing: []
};

export default function filingReducer(state = initialState, { type, payload }: FilingActionTypes | any) {
    switch (type) {
        case SET_FILING_FILES:
            return { ...state, filesToProcessing: payload };
        case ADD_FILE:
            return { ...state, filesToProcessing: [...state.filesToProcessing, payload] }
        case DELETE_FILE:
            return { ...state, filesToProcessing: state.filesToProcessing.filter(file => file !== payload) }
        default:
            return state;
    }
}