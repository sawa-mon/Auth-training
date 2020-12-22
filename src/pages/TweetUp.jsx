import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { db, FirebaseTimestamp } from "../firebase";
import { getUserIcon, getUserName } from "../reducks/users/selectors";

// import styled from "styled-components";

const TweetApp = () => {
  const selector = useSelector((state) => state);
  const icon = getUserIcon(selector);
  const name = getUserName(selector);
  const timestamp = FirebaseTimestamp.now();
  const [tweets, setTweets] = useState("");
  const dispatch = useDispatch();

  const sendTweet = async () => {
    await db.collection("tweets").add({
      avater: icon,
      text: tweets,
      timestamp: timestamp,
      name: name,
    });
    setTweets("");
  };

  return (
    <section>
      <div>
        <StyledIcon src={icon} />
        <input
          type="text"
          placeholder="Tweet the now happen"
          // onChange={onChangeTweetText}
          value={tweets}
          onChange={(event) => setTweets(event.target.value)}
        />
        <button type="submit" onClick={() => dispatch(sendTweet)}>
          Tweet
        </button>
      </div>
    </section>
  );
};

export default TweetApp;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;
