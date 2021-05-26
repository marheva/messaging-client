const SHOW_LOADER = "APP/SHOW_LOADER";
const HIDE_LOADER = "APP/HIDE_LOADER";

export interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

export interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}

export type AppActionTypes = ShowLoaderAction | HideLoaderAction;

export { SHOW_LOADER, HIDE_LOADER };
