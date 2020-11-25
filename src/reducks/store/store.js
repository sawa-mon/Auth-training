import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware, //パッケージのMiddlewareの追加をする
  compose,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router"; //routerのモジュールをインポート
import thunk from "redux-thunk";

import { UsersReducer } from "../users/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function createStore(history) {
  //引数でhistoryを指定
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history), //historyが持っている情報をreduxのstoreのrouterのStateで管理できるようにする
      users: UsersReducer,
    }),
    composeEnhancers(
      //DevToolsの使用用
      applyMiddleware(
        //引数にrouterMiddlewareを指定
        routerMiddleware(history), //引数にhistoryを指定
        thunk
      )
    )
  );
}
