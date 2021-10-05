import React from "react";

function JoinForm() {
  return (
    <div className="join_form">
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 한번 더 입력해주세요"
        onChange={onChange}
      ></input>
      <input
        name="password"
        type="email"
        placeholder="E-mail을 입력해주세요"
        onChange={onChange}
      ></input>
      <button onClick={onLogin}>회원가입</button>
    </div>
  );
}

export default JoinForm;
