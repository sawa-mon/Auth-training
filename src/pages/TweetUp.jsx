import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { db, FirebaseTimestamp } from "../firebase";
import { getUserIcon, getUserName } from "../reducks/users/selectors";
import { signOut } from "../reducks/users/operations";
import { Button } from "../components/UIkit/Button";

export const TweetUp = () => {
  const selector = useSelector((state) => state);
  const icon = getUserIcon(selector);
  const name = getUserName(selector);
  const timestamp = FirebaseTimestamp.now();
  const [tweets, setTweets] = useState("");
  const dispatch = useDispatch();

  const sendTweet = async () => {
    await db.collection("tweets").add({
      avatar: icon,
      text: tweets,
      timestamp: timestamp,
      name: name,
    });
    setTweets("");
  };

  return (
    <Section>
      <WrapFrom>
        <StyledIcon src={icon} />
        <StyledInputForm>
          <textarea
            placeholder="Tweet the now happen"
            value={tweets}
            onChange={(event) => setTweets(event.target.value)}
            cols={38}
            rows={3}
          />
        </StyledInputForm>
      </WrapFrom>
      <WrapButton>
        {tweets ? (
          <Button
            addTweet
            type="submit"
            onClick={() => dispatch(sendTweet)}
            label="ポチっと投稿"
          />
        ) : (
          <Button onClick={() => dispatch(signOut())} label="退室" />
        )}
      </WrapButton>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
`;

const StyledIcon = styled.img`
  padding: 5px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const WrapFrom = styled.div`
  display: flex;
`;

const StyledInputForm = styled.div`
  textarea {
    border-radius: 10px;
  }
`;

const WrapButton = styled.div`
  margin: 10px;
  display: grid;
  place-items: center;
  padding: 5px;
`;
