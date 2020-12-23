import React from "react";
import {
  googleSignIn,
  twitterSignIn,
  githubSignIn,
} from "../reducks/users/operations";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import GoogleIcon from "../assets/Images/google.svg";
import TwitterIcon from "../assets/Images/twitter.svg";
import GithubIcon from "../assets/Images/github.svg";

const SignIn = () => {
  const dispatch = useDispatch();

  const selectLogin = (id) => {
    switch (id) {
      case "google":
        dispatch(googleSignIn());
        break;
      case "twitter":
        dispatch(twitterSignIn());
        break;
      case "github":
        dispatch(githubSignIn());
        break;
      default:
        break;
    }
  };

  const loginMenus = [
    {
      func: selectLogin,
      label: "Googleアカウントでログイン",
      icon: GoogleIcon,
      id: "google",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "245px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "7px 0 7px 0",
        borderRadius: "5px",
      },
    },
    {
      func: selectLogin,
      label: "Twitterアカウントでログイン",
      icon: TwitterIcon,
      id: "twitter",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "245px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "7px 0 7px 0",
        borderRadius: "5px",
      },
    },
    {
      func: selectLogin,
      label: "Githubアカウントでログイン",
      icon: GithubIcon,
      id: "github",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "245px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "7px 0 7px 0",
        borderRadius: "5px",
      },
    },
  ];

  return (
    <Section>
      {loginMenus.map((menu) => (
        <StyledButton
          key={menu.id}
          style={menu.style}
          onClick={() => menu.func(menu.id)}
        >
          <StyledLoginIcon src={menu.icon} alt="LoginIcon" />
          {menu.label}
        </StyledButton>
      ))}
    </Section>
  );
};

export default SignIn;

const Section = styled.div`
  width: 245px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const StyledLoginIcon = styled.img`
  height: 26px;
  width: 26px;
  margin-right: 5px;
`;
