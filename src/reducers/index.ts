// 複数の reducer を合体するメソッドです。
// このファイルについては理解できなくて OK です

import { combineReducers } from "redux";
import appReducer from "./app";
import cahtReducer from "./chat";

export default combineReducers({
  appReducer,
  cahtReducer
});