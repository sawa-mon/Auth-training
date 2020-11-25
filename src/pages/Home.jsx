import React from "react";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ログインに成功しました</h2>
      <span>ユーザー情報</span>
      <span>ユーザーID</span>
      <span>ユーザー名</span>
      <button onClick={() => dispatch(push("/signin"))}>ログイン画面</button>
    </div>
  );
};

export default Home;
