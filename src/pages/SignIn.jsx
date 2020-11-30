import React from "react";
import firebase from "../firebase/index";
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
      label: "GoogleLoginでログインする",
      icon: GoogleIcon,
      id: "google",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "233px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
      },
    },
    {
      func: selectLogin,
      label: "TwitterLoginでログインする",
      icon: TwitterIcon,
      id: "twitter",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "233px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
      },
    },
    {
      func: selectLogin,
      label: "GithubLoginでログインする",
      icon: GithubIcon,
      id: "github",
      value: "/",
      style: {
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
        width: "233px",
        display: "flex",
        placeItems: "center",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px",
      },
    },
  ];

  return (
    <div>
      {loginMenus.map((menu) => (
        <StyledButton style={menu.style} onClick={() => menu.func(menu.id)}>
          <StyledLoginIcon src={menu.icon} alt="LoginIcon" />
          {menu.label}
        </StyledButton>
      ))}
    </div>
  );
};

export default SignIn;

const StyledButton = styled.button`
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const StyledLoginIcon = styled.img`
  height: 26px;
  width: 26px;
`;
