import * as React from "react";
import "./Chat.css";

interface Chat {
  message: string;
  username: string;
  time: Date;
}

interface Props {
  key: string;
  name: string;
  chat: Chat;
}

const Chat: React.SFC<Props> = ({ name, chat }) => {
  return (
    <div className="chat">
      <p className="username">{chat.username}</p>
      <p className="time">{chat.time}</p>
      <p className="chat-text">{chat.message}</p>
    </div>
  );
};

export default Chat;
