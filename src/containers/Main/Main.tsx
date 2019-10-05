import * as React from "react";
import "./Main.css";
import Chat from "../../components/Chat/Chat";
import ChatForm from "../../components/Form/ChatForm/ChatForm";

interface Props {
  name: string;
  chatList: object;
  addChat: Function;
}

class Main extends React.Component<Props> {
  render() {
    const { chatList } = this.props;

    let keys = [];
    for (let key in chatList) {
      keys.unshift(key); // keyを逆順で取得
    }

    return (
      <div className="chat-list-wrapper">
        {this.props.name ? (
          <ChatForm name={this.props.name} addChat={this.props.addChat} />
        ) : null}
        {chatList
          ? keys.map(key => {
              return <Chat key={key} chat={chatList[key]} />;
            })
          : null}
      </div>
    );
  }
}

export default Main;
