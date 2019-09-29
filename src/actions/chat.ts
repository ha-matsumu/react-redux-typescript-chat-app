import { firebaseDb } from "../../firebase/index";

// Firebaseと接続
const messagesRef = firebaseDb.ref("messages");

const requestStart = () => {
  return {
    type: "REQUEST_START"
  };
};

const requestError = error => {
  return {
    type: "REQUEST_ERROR",
    error: error
  };
};

const fetchChatListSuccess = (chatList: []) => {
  return {
    type: "FETCH_CHAT_LIST_SUCCESS",
    chatList: chatList
  };
};

export const fetchChatList = () => async dispatch => {
  try {
    await dispatch(requestStart());
    messagesRef.on("value", async snapshot => {
      let chatList = snapshot.val();
      await dispatch(fetchChatListSuccess(chatList));
    });
  } catch (error) {
    await dispatch(requestError(error));
  }
};
