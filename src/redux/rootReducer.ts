import { combineReducers } from "redux";
import appReducer from "./appReducer";
import userReducer from "./userReducer";
import filingReducer from "./filingReducer";
import uploadedContactsReducer from "./uploadedContactsReducer";
// import { forbiddenWordsMiddleware } from "./middleware/middleware";

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  filing: filingReducer,
  uploadedContacts: uploadedContactsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
