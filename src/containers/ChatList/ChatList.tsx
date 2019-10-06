import * as React from "react";
import "./ChatList.css";
import Chat from "../../components/Chat/Chat";

interface Props {
  chatList: object;
  addChat: Function;
}

class ChatList extends React.Component<Props> {
  private messageEndRef: React.RefObject<HTMLDivElement>;

  constructor(props) {
    super(props);
    this.messageEndRef = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  // スクロール制御
  scrollToBottom = () => {
    this.messageEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const { chatList } = this.props;

    return (
      <div className="chat-list-wrapper">
        {chatList
          ? Object.keys(chatList).map(key => {
              return <Chat key={key} chat={chatList[key]} />;
            })
          : null}
        <div className="message-end" ref={this.messageEndRef} />
      </div>
    );
  }
}

export default ChatList;