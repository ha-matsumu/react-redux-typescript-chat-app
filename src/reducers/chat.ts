interface InitialState {
  chatList: [];
  loading: boolean;
  error: boolean;
}

const initialState: InitialState = {
  chatList: [],
  loading: false,
  error: false
};

const requestStart = (state, action) => {
  return {
    ...state,
    loading: true
  };
};

const requestError = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true
  };
};

const fetchChatListSuccess = (state, action) => {
  return {
    ...state,
    chatList: action.chatList,
    loading: false,
    error: false
  };
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQEST_START":
      return requestStart(state, action);
    case "REQEST_ERROR":
      return requestError(state, action);
    case "FETCH_CHAT_LIST_SUCCESS":
      return fetchChatListSuccess(state, action);
    default:
      return state;
  }
};

export default chatReducer;
