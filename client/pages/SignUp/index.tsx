import React, { FC, useCallback, useState } from "react";
import "./styles.scss";
import useInput from "@hooks/useInput";
import { useNavigate } from "react-router";

const SignUp: FC = () => {
  const [id, , onChangeId] = useInput("");
  const [nickName, , onChangeNickName] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const [checkPassword, , onChangeCheckPassword] = useInput("");
  const [showPassWordError, setShowPasswordError] = useState(false);
  const [showIdError, setShowIdError] = useState(false);
  const [showNickNameError, setShowNickNameError] = useState(false);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      console.log(id.trim());
      if (!id || !id.trim()) {
        setShowIdError(true);
        return;
      } else {
        setShowIdError(false);
      }

      if (!nickName || !nickName.trim()) {
        setShowNickNameError(true);
        return;
      } else {
        setShowNickNameError(false);
      }

      if (password && checkPassword && password !== checkPassword) {
        setShowPasswordError(true);
        return;
      }

      console.log(id, nickName, password, checkPassword);
      navigate("/login");
    },
    [id, nickName, password, checkPassword]
  );

  return (
    <main className="signUp">
      <header className="signUp__header">회원가입</header>
      <form className="signUp__form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={onChangeId}
        />
        <input
          type="text"
          placeholder="닉네임"
          value={nickName}
          onChange={onChangeNickName}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <input
          type="password"
          placeholder="비밀번호 재확인"
          value={checkPassword}
          onChange={onChangeCheckPassword}
        />
        <button type="submit">회원가입</button>
        {showPassWordError && (
          <span className="signUp__error">* 비밀번호가 다릅니다</span>
        )}
        {showIdError && (
          <span className="signUp__error">* 아이디를 확인해주세요</span>
        )}
        {showNickNameError && (
          <span className="signUp__error">* 닉네임을 확인해주세요</span>
        )}
      </form>
    </main>
  );
};

export default SignUp;
