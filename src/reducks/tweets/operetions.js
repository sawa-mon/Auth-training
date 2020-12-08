import { fetchCreatetweetAction } from "./actions";
import { db, FirebaseTimestamp } from "../../firebase";

const tweetsRef = db.collection("tweets");

export const tweetRetention = () => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();
    tweetsRef
      .doc()
      .set({
        created_at: timestamp,
        list: uid.list,
      })
      .then(() => {
        dispatch(fetchCreatetweetAction());
      });
  };
};
