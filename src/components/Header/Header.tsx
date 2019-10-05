import * as React from "react";
import "./Header.css";

interface Props {
  name: string;
}

const Navbar: React.SFC<Props> = ({ name }) => {
  return (
    <header>
      <div className="wrapper">
        <h2 className="logo">CHAT APP</h2>
        <div className="spacer" />
        {name ? (
          <h4 className="user-name">{"ようこそ, " + name + " さん"}</h4>
        ) : (
          <h4 className="user-name">{"ようこそ, ゲスト さん"}</h4>
        )}
      </div>
    </header>
  );
};

export default Navbar;
