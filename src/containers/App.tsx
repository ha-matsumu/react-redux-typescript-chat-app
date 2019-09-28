import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import styled from "styled-components";
import * as App_actions from "../actions/app";
import { firebaseDb } from "../../firebase/index";

interface Props {
  name: string;
  app_actions: any;
}

const messagesRef = firebaseDb.ref("messages");

export class App extends React.Component<Props> {
  componentDidMount() {
    //TODO:後で削除
    // Realtime Databaseと接続できているかの確認用
    messagesRef.on("value", snapshot => {
      let messages = snapshot.val();
      console.log("@@@@@@@@", messages);
    });
  }

  render() {
    const { app_actions, name } = this.props;

    return (
      <div>
        <Container>
          {name ? (
            `${name} さん、こんにちは。`
          ) : (
            <button onClick={() => app_actions.login("test")}>
              こんにちは
            </button>
          )}
        </Container>
      </div>
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
