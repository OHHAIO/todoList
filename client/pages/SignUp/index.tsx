import React, { FC, useCallback, useState } from "react";
import "./styles.scss";
import useInput from "@hooks/useInput";

const SignUp: FC = () => {
  const [id, , onChangeId] = useInput("");
  const [nickName, , onChangeNickName] = useInput("");
  const [password, , onChangePassword] = useInput("");
  const [checkPassword, , onChangeCheckPassword] = useInput("");
  const [showPassWordError, setShowPasswordError] = useState(false);

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(id, nickName, password, checkPassword);
    },
    [id, nickName, password, checkPassword]
  );

  return (
    <main className="signUp">
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
      </form>
    </main>
  );
};

export default SignUp;
