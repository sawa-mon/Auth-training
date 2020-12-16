import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { tweetRetention } from "../reducks/tweets/operetions";

// import styled from "styled-components";

const TweetApp = () => {
  const dispatch = useDispatch();
  let id = window.location.pathname.split("/product/edit")[1];

  // if (id !== "") {
  //   id = id.split("/")[1];
  // }

  const [tweets, setTweets] = useState("");
  const [tweetsList, setTweetsList] = useState([]);

  const onChangeTweetText = useCallback(
    (event) => {
      setTweets(event.target.value);
    },
    [setTweets]
  );

  useEffect(() => {
    if (id !== "") {
      db.collection("tweets")
        .doc(id)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();
          setTweets(data.tweets);
          setTweetsList(data.tweetsList);
        });
    }
  }, [id]);

  useEffect(() => {
    //データベースの商品情報から引っ張ってきて反映する
    db.collection("tweets")
      .orderBy("order", "asc") //昇順で並べ替える
      .get()
      .then((snapshots) => {
        const list = [];
        snapshots.forEach((snapshots) => {
          const data = snapshots.data();
          list.push({
            id: data.id,
          });
        });
        setTweetsList(list);
      });
  }, []);

  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="Tweet the now happen"
          onChange={onChangeTweetText}
          value={tweets}
        />
        <button onClick={() => dispatch(tweetRetention(id, tweets))}>
          Tweet
        </button>
      </div>
    </section>
  );
};

export default TweetApp;

// const Wrap = styled.div``;
