import { Action } from "redux";
import { ActionTypes } from "./actionTypes";

// 型
interface LoginAction extends Action {
  type: ActionTypes.APP_LOGIN;
  login_user_name: string;
}

interface LogoutAction extends Action {
  type: ActionTypes.APP_LOGOUT;
  login_user_name: string;
}

// Action Creator
export const login = (name: string): LoginAction => {
  return {
    type: ActionTypes.APP_LOGIN,
    login_user_name: name
  };
};

export const logout = (): LogoutAction => {
  return {
    type: ActionTypes.APP_LOGOUT,
    login_user_name: "ゲスト"
  };
};

export type AppActions = LoginAction | LogoutAction;
