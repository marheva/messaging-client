const SET_FILING_FILES = "FILING/SET_FILING_FILES";
const ADD_FILE = "FILING/ADD_FILE";
const DELETE_FILE = "FILING/DELETE_FILE";
export interface SetFilingFilesAction {
  type: typeof SET_FILING_FILES;
  payload: CSVFiles[];
}

export interface AddFileFilesAction {
  type: typeof ADD_FILE;
  payload: string;
}

export interface DeleteFileFilesAction {
  type: typeof DELETE_FILE;
  payload: string;
}

export type FilingActionTypes = SetFilingFilesAction | AddFileFilesAction | DeleteFileFilesAction;

export { SET_FILING_FILES, ADD_FILE, DELETE_FILE };
