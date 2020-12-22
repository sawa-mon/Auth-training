import React from "react";
import styled from "styled-components";

export const View = (props) => {
  return (
    <Section>
      <StyledUserInfo>
        <StyledIcon src={props.avatar} alt="tweeter" />
        <StyledWrap>
          <p>@{props.name}</p>
          <p>
            投稿時間：{new Date(props.timestamp?.toDate()).toLocaleString()}
          </p>
        </StyledWrap>
      </StyledUserInfo>
      <StyledContainer>
        <StyledTextArea>{props.text}</StyledTextArea>
      </StyledContainer>
    </Section>
  );
};

const Section = styled.section`
  border-radius: 5px;
  border-style: groove;
  background-color: #ced69c;
`;

const StyledUserInfo = styled.section`
  display: flex;
`;

const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 4px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-bottom: 35px;
`;

const StyledTextArea = styled.div`
  padding: 5px;
  width: 350px;
`;
