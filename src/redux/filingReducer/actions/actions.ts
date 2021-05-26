import { FilingActions } from "../../rootTypes";
import { SET_FILING_FILES, ADD_FILE, DELETE_FILE } from "../types/types";

export function setFilingFiles(files: CSVFiles[]): FilingActions {
  return {
    type: SET_FILING_FILES,
    payload: files,
  };
}

export function addFile(file: string): FilingActions {
  return {
    type: ADD_FILE,
    payload: file,
  };
}

export function removeFile(file: string): FilingActions {
  return {
    type: DELETE_FILE,
    payload: file,
  };
}
