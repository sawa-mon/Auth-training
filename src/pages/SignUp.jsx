import React, {useState} from 'react';
import {signUp} from '../reducks/users/operations';
import {useDispatch} from 'react-redux';
import {push} from 'connected-react-router';

const SignUp = () => {
  const dispatch = useDispatch();
  
  return(
      <div>
        <h2 className="u-text__headline u-text-center">アカウント登録</h2>
        {/* <div className="module-spacer--medium" />
        <div
          fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
          rows={1} value={username} type={"text"} onChange={inputUsername}
        />
        
        <div
          fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
          rows={1} value={email} type={"email"} onChange={inputEmail}
        />
        <div
          fullWidth={true} label={"パスワード"} multiline={false} required={true}
          rows={1} value={password} type={"password"} onChange={inputPassword}
        /> 
        <div
          fullWidth={true} label={"パスワード(再確認)"} multiline={false} required={true}
          rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
        />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
          label={"アカウントを登録する"} onClick={() =>dispatch(signUp(username, email, password, confirmPassword))}
          />
          <div className="module-spacer--medium" />
        </div> */}
        <p onClick={() => dispatch(push('/signin'))}>Google、Twitter、でログインまたはアカウントを既にお持ちの方はこちら</p>
      </div>
  )
}

export default SignUp;