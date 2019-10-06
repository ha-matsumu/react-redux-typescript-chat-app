import * as React from "react";
import moment = require("moment");
import "moment-timezone";
import "./Form.css";
import { useInput } from "../../customHooks/useInput";

interface Props {
  name: string;
  addChat: Function;
}

interface UseInput {
  value: any;
  bind: { value: any; onChange: (event: any) => void };
  reset: () => void;
}

interface Chat {
  username: string;
  message: string;
  date: string;
}

const ChatForm: React.FC<Props> = ({ name, addChat }) => {
  const { value, bind, reset }: UseInput = useInput("");

  const addChatHandler = e => {
    e.preventDefault();

    // 何も入力されていない場合は、処理終了
    if (value === "") {
      return;
    }

    moment.tz.setDefault("Asia/Tokyo");

    const chat: Chat = {
      username: name,
      message: value,
      date: moment().toISOString()
    };

    addChat(chat);

    reset(); // フォーム初期化
  };

  return (
    <form onSubmit={addChatHandler}>
      <input type="text" {...bind} placeholder="メッセージ" />
      <input type="submit" value="送信" />
    </form>
  );
};

export default ChatForm;
