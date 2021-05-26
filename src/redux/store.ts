import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from "./";

// import { forbiddenWordsMiddleware } from "./middleware/middleware";
const middlewares: any[] = [];

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, ...middlewares),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
