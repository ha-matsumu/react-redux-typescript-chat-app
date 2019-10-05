import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import styled from "styled-components";
import * as App_actions from "../actions/app";
import * as Chat_actions from "../actions/chat";
import Header from "../components/Header/Header";
import Main from "./Main/Main";

interface Props {
  name: string;
  chatList: object;
  app_actions: any;
  fetchChatList: Function;
  addChat: Function;
}

interface State {}

export class App extends React.Component<Props, State> {
  componentDidMount() {
    this.props.fetchChatList();
  }

  render() {
    const { app_actions, name, chatList } = this.props;

    return (
      <Container>
        <Header name={name} clickSubmitHnadler={app_actions.login} />
        <Main name={name} chatList={chatList} addChat={this.props.addChat} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.app.get("login_user_name"),
    chatList: state.cahtReducer.chatList,
    loading: state.cahtReducer.loading,
    error: state.cahtReducer.error
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    app_actions: bindActionCreators(App_actions, dispatch),
    fetchChatList: () => dispatch(Chat_actions.fetchChatList()),
    addChat: inputData => dispatch(Chat_actions.addChat(inputData))
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
