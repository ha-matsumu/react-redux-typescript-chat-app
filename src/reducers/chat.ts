import { Map } from "immutable";
import { ActionTypes } from "../actions/actionTypes";
import { ChatActions } from "../actions/chat";

const chatReducer = (state: any, action: ChatActions) => {
  switch (action.type) {
    case ActionTypes.REQUSET_ERROR:
      return state.set("error", action.error);
    case ActionTypes.FETCH_CHAT_LIST_SUCCESS:
      return state.set("fetch_chat_list", action.fetch_chat_list);
    case ActionTypes.ADD_CHAT_SUCCESS:
      return state.set("add_chat", action.add_chat);
    default:
      return state || Map({ fetch_chat_list: {}, add_chat: {} });
  }
};

export default chatReducer;
