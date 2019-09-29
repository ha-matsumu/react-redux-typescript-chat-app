import * as React from "react";
import "./Chat.css";

export interface Chat {
  message: string;
  username: string;
  time: string;
}

interface Props {
  key: number;
  name: string;
  chat: Chat;
}

const Chat: React.SFC<Props> = ({ name, chat }) => {
  return (
    <div className="chat">
      <p className="username">{chat.username}</p>
      <p className="chat-text">{chat.message}</p>
      <span className="time">{chat.time}</span>
    </div>
  );
};

export default Chat;
