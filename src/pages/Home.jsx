import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducks/users/operations";
import {
  getUserEmail,
  getUserIcon,
  getUserName,
} from "../reducks/users/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const email = getUserEmail(selector);
  const icon = getUserIcon(selector);
  const name = getUserName(selector);

  return (
    <div>
      <h2>ログインに成功しました</h2>
      <img src={icon} />
      <p>ユーザーID(email):{email}</p>
      <p>ユーザー名:{name}</p>
      <button onClick={() => dispatch(push("/signin"))}>ログイン画面</button>
    </div>
  );
};

export default Home;
