import React, { useState } from 'react'
import './Login.css';

function Login() {
  const initinalValues = {username: "", mailAddress: "", password: ""};
  const [formValues, setFromValues] = useState(initinalValues);


  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
            />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
            />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              name="password"
            />
          </div>
          <button className="loginButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default Login;