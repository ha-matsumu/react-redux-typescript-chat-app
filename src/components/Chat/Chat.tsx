import * as React from "react";
import Moment from "react-moment";
import moment = require("moment");
import "./Chat.css";

interface Chat {
  message: string;
  username: string;
  date: string;
}

interface Props {
  key: string;
  chat: Chat;
}

const Chat: React.SFC<Props> = ({ chat }) => {
  moment.locale("ja");
  const regexp = new RegExp("日前|ヶ月前|年前");

  return (
    <div className="chat">
      <p className="username">{chat.username}</p>
      {regexp.test(moment(chat.date).fromNow()) ? (
        <Moment className="time" format="YYYY年MM月DD日 HH:mm">
          {chat.date}
        </Moment>
      ) : (
        <p className="time">{moment(chat.date).fromNow()}</p>
      )}
      <p className="chat-text">{chat.message}</p>
    </div>
  );
};

export default Chat;
