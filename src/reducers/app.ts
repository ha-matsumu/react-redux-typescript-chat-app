import { Map } from "immutable";
import { ActionTypes } from "../actions/actionTypes";
import { AppActions } from "../actions/app";

const appReducer = (state: any, action: AppActions) => {
  switch (action.type) {
    case ActionTypes.APP_LOGIN:
      return state.set("login_user_name", action.login_user_name);
    case ActionTypes.APP_LOGOUT:
      return state.set("login_user_name", action.login_user_name);
    default:
  }
  return state || Map({ login_user_name: "ゲスト" });
};

export default appReducer;
