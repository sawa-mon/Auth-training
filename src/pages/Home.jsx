import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../reducks/users/operations";
import {
  getUserEmail,
  getUserIcon,
  getUserName,
} from "../reducks/users/selectors";
import styled from "styled-components";
import TweetUp from "./TweetUp";
// import TweetView from "./TweetView";

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const email = getUserEmail(selector);
  const icon = getUserIcon(selector);
  const name = getUserName(selector);

  return (
    <Section>
      <h2>ログインしました</h2>
      <button onClick={() => dispatch(signOut())}>ログアウトする</button>
      <StyledIcon src={icon} />
      <p>ユーザーID:{email}</p>
      <p>ユーザー名:{name}</p>
      <TweetUp />
      {/* <TweetView /> */}
    </Section>
  );
};

export default Home;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const Section = styled.div``;
