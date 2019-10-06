import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import styled from "styled-components";
import * as App_actions from "../actions/app";
import * as Chat_actions from "../actions/chat";
import Header from "../components/Header/Header";
import ChatList from "./ChatList/ChatList";
import UserForm from "../components/Form/UserForm";
import ChatForm from "../components/Form/ChatForm";

interface Props {
  name: string;
  chatList: object;
  app_actions: any;
  chat_actions: any;
}

export class App extends React.Component<Props> {
  componentDidMount() {
    this.props.chat_actions.fetchChatList();
  }

  render() {
    const { app_actions, chat_actions, name, chatList } = this.props;

    return (
      <Container>
        <Header name={name} logout={app_actions.logout} />
        <ChatList chatList={chatList} addChat={chat_actions.addChat} />
        <Form>
          {this.props.name === "ゲスト" ? (
            <UserForm clickSubmitHnadler={app_actions.login} />
          ) : (
            <ChatForm name={this.props.name} addChat={chat_actions.addChat} />
          )}
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.appReducer.get("login_user_name"),
    chatList: state.cahtReducer.get("fetch_chat_list"),
    error: state.cahtReducer.get("error")
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    app_actions: bindActionCreators(App_actions, dispatch),
    chat_actions: bindActionCreators(Chat_actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.div`
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #2e3339;
  line-height: 80px;
  padding: 0 5px;
  box-sizing: border-box;
  border-top: solid 1px #ccc;
`;
