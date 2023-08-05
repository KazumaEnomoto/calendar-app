import React from 'react'

function Login() {
  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
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
        </div>
      </form>
    </div>
  );
}

export default Login;