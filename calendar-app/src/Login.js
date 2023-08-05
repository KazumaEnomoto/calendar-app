import React, { useState } from 'react'
import './Login.css';

function Login() {
  const initinalValues = { username: "", mailAddress: "", password: "" };
  const [formValues, setFromValues] = useState(initinalValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    
  }

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              placeholder="パスワード"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="loginButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default Login;