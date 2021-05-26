import { Loader } from "./types/Loader";
import { AppActionTypes, HIDE_LOADER, SHOW_LOADER } from "./types/types";

const initialState: Loader = {
  loading: false,
};

export default function appReducer(state = initialState, action: AppActionTypes) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
}
