import * as React from "react";
import "./Main.css";
import Chat, { Chat as ChatTypes } from "../../components/Chat/Chat";

interface Props {
  name: string;
  chatList: ChatTypes[];
}

class Main extends React.Component<Props> {
  render() {
    const chatList = this.props.chatList.map((chat, index) => {
      return <Chat key={index} name={name} chat={chat} />;
    });
    return (
      <div className="chat-list-wrapper">
        {chatList}
        {this.props.name ? "チャットフォーム" : null}
      </div>
    );
  }
}

export default Main;
