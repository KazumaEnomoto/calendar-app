import React, { useState } from 'react'
import './Login.css';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const initialValues = { mailAddress: "", password: "" };
  const [formValues, setFromValues] = useState(initialValues);
  const initialErrors = { mailAddress: "", password: "" };
  const [formErrors, setFormErrors] = useState({ initialErrors });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (Object.keys(formErrors).length === 0) {
      signInWithEmailAndPassword(auth, formValues.mailAddress, formValues.password)
        .then(() => {
          alert("ログイン成功");
        })
        .catch(() => {
          alert("メールアドレスまたはパスワードが間違っています");
        })
    }
  }

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors;
  }

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.mailAddress}</p>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="password"
              placeholder="パスワード"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.password}</p>
          <button className="loginButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default Login;