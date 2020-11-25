import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as History from "history";

const history = History.createBrowserHistory(); //ブラウザのhistory(今までどのpathにいた、現在はどのpathにいるのかなど)を作り出して定数化する
export const store = createStore(history);

ReactDOM.render(
  //<Provider>では↓Appコンポーネントでstoreの情報を参照したり変更できる
  //<ConnectedRouter>ではブラウザのURL遷移の履歴管理ができる
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
