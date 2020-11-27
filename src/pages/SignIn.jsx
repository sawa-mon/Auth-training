import React from "react";
import firebase from "../firebase/index";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { googleSignIn, twitterSignIn } from "../reducks/users/operations";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import GoogleIcon from "../assets/Images/googleIcon.png";
import TwitterIcon from "../assets/Images/profilenone.png";

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
      default:
        break;
    }
  };

  const loginMenus = [
    {
      func: selectLogin,
      label: "GoogleLogin",
      icon:
        "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
      id: "google",
      value: "/",
      style: { backgroundColor: "black", color: "pink" },
    },
    {
      func: selectLogin,
      label: "TwitterLogin",
      icon: "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg",
      id: "twitter",
      value: "/",
      style: { backgroundColor: "black", color: "pink" },
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
  height: 46px;
  width: 46px;
`;
