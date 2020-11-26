import React from "react";
import { Switch, Route } from "react-router";
import { SignUp, SignIn, Home } from "./pages";
import Auth from "./Auth";

const Router = () => {
  return (
    //<Switch>でラップしたものに<Route>内でexactを併用することで、URLが完全一致した場合にコンポーネントを表示する
    //<Route path={"/posts/:id"} components={Posts} /> これでidにどんな値が入ってきても動的なページ遷移する際に使える
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      {/* <Route exact path={"/signin/reset"} components={Reset} /> */}

      {/* <Auth> */}
      <Route exact path={"(/)?"} component={Home} />
      {/* </Auth> */}
    </Switch>
  );
};

export default Router;
