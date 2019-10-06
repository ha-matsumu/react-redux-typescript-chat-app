import { Action } from "redux";
import { ActionTypes } from "./actionTypes";

interface LoginAction extends Action {
  type: ActionTypes.APP_LOGIN;
  login_user_name: string;
}

export function login(name: string): LoginAction {
  return {
    type: ActionTypes.APP_LOGIN,
    login_user_name: name
  };
}

export type AppActions = LoginAction;
