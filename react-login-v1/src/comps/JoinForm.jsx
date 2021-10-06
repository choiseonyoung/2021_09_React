import React, { useState } from "react";
import "../css/JoinForm.css";

function JoinForm() {
  const [joinUser, setJoinUser] = useState({
    userid: "",
    password: "",
    re_password: "",
    email: "",
  });

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setJoinUser({ ...joinUser, [name]: value });
  };

  const onSubmitAccount = async (e) => {
    //   if(user.userid === "") { // 보통 문자열이 비어있는 걸 검사할 땐 보통 이걸 쓰긴 하지만
    if (!joinUser?.userid) {
      // 버전이 높아지면서 이게 더 정확한 값?
      alert("아이디를 입력해야 합니다");
      return;
    }

    if (!joinUser?.password) {
      alert("비밀번호를 입력해야 합니다");
      return;
    }

    if (!joinUser.re_password) {
      alert("비밀번호 확인을 입력해야 합니다");
      return;
    }

    if (joinUser.password !== joinUser.re_password) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    if (!joinUser?.email) {
      alert("이메일 주소를 입력해야 합니다");
      return;
    }

    const joinData = {
      userid: joinUser.userid,
      password: joinUser.password,
      email: joinUser.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      // fetch는 오류가 나도 ok를 보냄
      const json = await response.json();
      alert(JSON.stringify(json));
    }
  };

  return (
    <div className="join_form">
      <input
        name="userid"
        value={joinUser.userid}
        placeholder="아이디를 입력해주세요"
        onChange={onChangeAccount}
      ></input>
      <input
        name="password"
        type="password"
        value={joinUser.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      ></input>
      <input
        name="re_password"
        type="password"
        value={joinUser.re_password}
        placeholder="비밀번호를 한번 더 입력해주세요"
        onChange={onChangeAccount}
      ></input>
      <input
        name="email"
        type="email"
        value={joinUser.email}
        placeholder="E-mail을 입력해주세요"
        onChange={onChangeAccount}
      ></input>
      <button onClick={onSubmitAccount}>회원가입</button>
    </div>
  );
}

export default JoinForm;
