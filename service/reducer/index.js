import { combineReducers } from "redux";
import { adminReducer } from "./admin";
import { authenticationReducer } from "./authentication";
import { commonReducer } from "./common";
import { developerReducer } from "./developer";
import { clientReducer } from "./client/index";

const appReducer = combineReducers({
  adminReducer,
  authenticationReducer,
  commonReducer,
  developerReducer,
  clientReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
