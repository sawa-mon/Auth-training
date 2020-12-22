import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  return (
    <StyledButton
      addTweet={props.addTweet}
      type={"button"}
      onClick={() => props.onClick()}
    >
      {props.label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: ${(props) => (props.addTweet ? "#9f9cd6" : "#a9d69c")};

  display: grid;
  place-items: center;
  width: 150px;
  height: 50px;
  border: 5px;
  border-radius: 20%;
  border-style: groove;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;
