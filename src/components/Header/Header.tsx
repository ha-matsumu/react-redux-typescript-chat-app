import * as React from "react";
import "./Header.css";

interface Props {
  name: string;
  logout: Function;
}

const Navbar: React.SFC<Props> = ({ name, logout }) => {
  return (
    <header>
      <div className="wrapper">
        <h2 className="logo">CHAT APP</h2>
        <div className="spacer" />
        <h4 className="user-name">{"ようこそ, " + name + " さん"}</h4>
        {name !== "ゲスト" ? (
          <button className="logout-button" onClick={() => logout()}>
            ログアウト
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Navbar;
