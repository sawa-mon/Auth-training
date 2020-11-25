import React from "react";
import { useDispatch } from "react-redux";
import GoogleSignIn from "../assets/Images/google_signin.png";
import { push } from "connected-react-router";

const SignIn = () => {
  const dispatch = useDispatch();

  // ui.start('#firebaseui-auth-container', {
  //   signInOptions: [
  //     {
  //       provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       scopes: [
  //         'https://www.googleapis.com/auth/contacts.readonly'
  //       ],
  //       customParameters: {
  //         prompt: 'select_account'
  //       }
  //     },
  //     firebase.auth.TwitterAuthProvider.PROVIDER_ID,]
  //   })

  return (
    <div>
      <h2>サインイン</h2>
      <button onClick={() => dispatch(push("/"))}>HOME</button>
      <img src={GoogleSignIn} />
      {/* <GoogleSignIn src="https://apis.google.com/js/platform.js" async defer/> */}
    </div>
  );
};

export default SignIn;
