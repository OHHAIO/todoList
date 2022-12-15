import React, { useCallback, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import useInput from "@hooks/useInput";

const Login = () => {
  const [id, , onChangeId] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const [showIdError, setShowIdError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!id || !id.trim()) {
        setShowIdError(true);
        return;
      } else {
        setShowIdError(false);
      }

      if (!password || !password.trim()) {
        setShowPasswordError(true);
        return;
      } else {
        setShowPasswordError(false);
      }
      console.log(id, password);
    },
    [id, password]
  );

  return (
    <main className="login">
      <header className="login__header">로그인</header>
      <form className="login__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChangeId}
        />
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChangePassword}
        />
        <button type="submit">로그인</button>
        {showIdError && (
          <span className="login__error">* 아이디를 확인해주세요</span>
        )}
        {showPasswordError && (
          <span className="login__error">* 비밀번호를 확인해주세요</span>
        )}
      </form>
      <Link className="login__signUp" to={"/signUp"}>
        회원가입
      </Link>
    </main>
  );
};

export default Login;
