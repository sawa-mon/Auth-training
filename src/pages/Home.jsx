import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TweetUp } from "./TweetUp";
import { TweetView } from "./TweetView";

const Home = (props) => {
  console.log(props);
  return (
    <Section>
      <Stylestitle>コソコソつぶやく部屋</Stylestitle>
      <StyledContainer>
        <TweetUp />
        <TweetView />
      </StyledContainer>
    </Section>
  );
};

export default Home;

const Section = styled.div`
  height: 100vh;
  margin: auto;
  background-color: gray;
`;

const Stylestitle = styled.h2`
  margin: 0;
  padding: 25px;
  font-size: 30px;
  display: grid;
  place-items: center;
`;

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
`;
