import { AppActions } from "../../rootTypes";
import { HIDE_LOADER, SHOW_LOADER } from "../types/types";

export function showLoader(): AppActions {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader(): AppActions {
  return {
    type: HIDE_LOADER,
  };
}
