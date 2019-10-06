import { Action } from "redux";
import { firebaseDb } from "../../firebase/index";
import { ActionTypes } from "./actionTypes";

// Firebaseと接続
const messagesRef = firebaseDb.ref("messages");

// 型
interface RequsetErrorAction extends Action {
  type: ActionTypes.REQUSET_ERROR;
  error: object;
}

interface FetchChatListSuccessAction extends Action {
  type: ActionTypes.FETCH_CHAT_LIST_SUCCESS;
  fetch_chat_list: object;
}

interface AddChatSuccessAction extends Action {
  type: ActionTypes.ADD_CHAT_SUCCESS;
  add_chat: object;
}

// Action Creator
const requestError = (error: object): RequsetErrorAction => {
  return {
    type: ActionTypes.REQUSET_ERROR,
    error: error
  };
};

const fetchChatListSuccess = (chatList: object): FetchChatListSuccessAction => {
  return {
    type: ActionTypes.FETCH_CHAT_LIST_SUCCESS,
    fetch_chat_list: chatList
  };
};

const addChatSuccess = (inputData: object): AddChatSuccessAction => {
  return {
    type: ActionTypes.ADD_CHAT_SUCCESS,
    add_chat: inputData
  };
};

// Actions
export const fetchChatList = () => async dispatch => {
  try {
    messagesRef.on("value", async snapshot => {
      let chatList = snapshot.val();
      await dispatch(fetchChatListSuccess(chatList));
    });
  } catch (error) {
    await dispatch(requestError(error));
  }
};

export const addChat = inputData => async dispatch => {
  try {
    let chat = firebaseDb.ref("messages/").push();
    await chat.set(inputData);

    await dispatch(addChatSuccess(inputData));
  } catch (error) {
    await dispatch(requestError(error));
  }
};

export type ChatActions =
  | RequsetErrorAction
  | FetchChatListSuccessAction
  | AddChatSuccessAction;
