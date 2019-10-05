import * as React from "react";
import "./Form.css";

interface Props {
  clickSubmitHnadler: Function;
}

const UserForm: React.FC<Props> = ({ clickSubmitHnadler }) => {
  const [name, setName] = React.useState("");

  return (
    <div className="form">
      <input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="お名前"
      />
      <button onClick={() => clickSubmitHnadler(name)}>ログイン</button>
    </div>
  );
};

export default UserForm;
