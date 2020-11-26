import React, { useEffect } from "react";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducks/users/operations";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログインに成功しました</h2>
      <p>ユーザーID</p>
      <p>ユーザー名</p>
      <button onClick={() => dispatch(push("/signin"))}>ログイン画面</button>
    </div>
  );
};

export default Home;
