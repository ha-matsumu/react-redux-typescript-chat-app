import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import styled from "styled-components";
import { firebaseDb } from "../../firebase/index";
import * as App_actions from "../actions/app";
import Header from "../components/Header/Header";

// Firebaseと接続
const messagesRef = firebaseDb.ref("messages");

interface Props {
  name: string;
  app_actions: any;
}

interface State {}

export class App extends React.Component<Props, State> {
  componentDidMount() {
    // TODO:後で削除
    // Realtime Databaseと接続できているかの確認用
    messagesRef.on("value", snapshot => {
      let messages = snapshot.val();
      console.log("@@@@@@@@", messages);
    });
  }

  render() {
    const { app_actions, name } = this.props;

    return (
      <Container>
        <Header name={name} clickSubmitHnadler={app_actions.login} />
        <Main>
          <div>messages</div>
          {name ? "メッセージフォーム" : null}
        </Main>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.app.get("login_user_name")
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    app_actions: bindActionCreators(App_actions, dispatch)
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

const Main = styled.div`
  margin-top: 56px;
  height: 100px;
`;
