import { providerGoogle, providerTwitter } from "../../firebase/index";
import firebase from "firebase";
import { signInAction } from "./acitons";
import { push } from "connected-react-router";

export const googleSignIn = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then((result) => {
        const user = result.user;
        const userdata = {
          email: user.email,
          icon: user.photoURL,
          username: user.displayName,
        };
        dispatch(signInAction(userdata));
      })
      .then(() => {
        dispatch(push("/"));
      })
      .catch(() => {
        alert("ログイン失敗しました");
      });
  };
};

export const twitterSignIn = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userdata = {
          email: user.email,
          icon: user.photoURL,
          username: user.displayName,
        };
        dispatch(signInAction(userdata));
      })
      .then(() => {
        dispatch(push("/"));
      })
      .catch(() => {
        alert("ログイン失敗しました");
      });
  };
};
