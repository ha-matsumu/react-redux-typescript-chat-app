import * as React from "react";
import "./Header.css";
import UserForm from "../Form/UserForm/UserForm";

interface Props {
  name: string;
  clickSubmitHnadler: Function;
}

const Navbar: React.SFC<Props> = ({ name, clickSubmitHnadler }) => {
  return (
    <header>
      <div className="wrapper">
        <h3 className="logo">CHAT APP</h3>
        <div className="spacer" />
        {name ? (
          <h4 className="user-name">{"ようこそ, " + name + " さん"}</h4>
        ) : (
          <UserForm clickSubmitHnadler={clickSubmitHnadler} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
