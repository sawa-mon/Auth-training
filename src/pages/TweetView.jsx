import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { View } from "./View";

export const TweetView = () => {
  const [addTweets, setAddTweets] = useState([
    {
      id: "",
      avatar: "",
      name: "",
      text: "",
      timestamp: null,
    },
  ]);

  useEffect(() => {
    const unSub = db
      .collection("tweets")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setAddTweets(
          snapshot.docs.map((doc) => ({
            key: doc,
            id: doc.id,
            avatar: doc.data().avatar,
            name: doc.data().name,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
          }))
        )
      );
    return () => {
      unSub();
    };
  }, []);

  return (
    <div>
      {addTweets.length >= 1 && (
        <StyledScrollWrap>
          {addTweets.map((addTweet) => (
            <View
              key={addTweet.id}
              avatar={addTweet.avatar}
              name={addTweet.name}
              text={addTweet.text}
              timestamp={addTweet.timestamp}
            />
          ))}
        </StyledScrollWrap>
      )}
    </div>
  );
};

const StyledScrollWrap = styled.div`
  height: 55vh;
  width: 350px;
  overflow: auto;
  padding: 0;
  border-radius: 10px;
  border-style: groove;
`;
