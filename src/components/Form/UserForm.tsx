import * as React from "react";
import "./Form.css";

interface Props {
  clickSubmitHnadler: Function;
}

const UserForm: React.FC<Props> = ({ clickSubmitHnadler }) => {
  const [name, setName] = React.useState("");

  return (
    <form onSubmit={() => clickSubmitHnadler(name)}>
      <input
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="お名前"
      />
      <input type="submit" value="ログイン" />
    </form>
  );
};

export default UserForm;
