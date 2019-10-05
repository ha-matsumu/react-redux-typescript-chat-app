import * as React from "react";
import "./Chat.css";

interface Chat {
  message: string;
  username: string;
  time: Date;
}

interface Props {
  key: string;
  chat: Chat;
}

const Chat: React.SFC<Props> = ({ chat }) => {
  return (
    <div className="chat">
      <p className="username">{chat.username}</p>
      <p className="chat-text">{chat.message}</p>
      <span className="time">{chat.time}</span>
    </div>
  );
};

export default Chat;
