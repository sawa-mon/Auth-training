import { fetchCreatetweetAction } from "./actions";
import { push } from "connected-react-router";
import { db, FirebaseTimestamp } from "../../firebase";

const tweetsRef = db.collection("tweets");

export const tweetRetention = (id, username, icon, tweets) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      created_at: timestamp,
      tweets: tweets,
      icon: icon,
      name: username,
    };

    return tweetsRef
      .doc(id)
      .set(data, { marge: true })
      .then(() => {
        dispatch(push("/"));
      })
      .catch(() => {
        throw new Error("ツイートに失敗しました。再度お試し下さい");
      });
  };
};
