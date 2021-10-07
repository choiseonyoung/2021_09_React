import React, { useState } from "react";
import "../css/LoginForm.css";
import { useUserContext } from "../context/UserContextProvider";
import MyButton from "../mycustom/MyButton";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefinded 또는 null 값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다
    // res가 정상이 아닐 때는 res.ok에서 오류가 발생한다
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다
    // res가 정상(null, undefined 가 아니면 .ok 속성을 검사하라)
    // null 로 인한 오류를 방지하는 코드다
    console.log("res", res);
    if (res.status === 401) {
      alert("아이디 또는 비밀번호를 확인하세요");
    }
    if (res?.ok) {
      const resultUser = await res.json();
      //   const user = users.find((item) => {
      //     return item.userid === account.userid;
      //   });

      console.log("userid", resultUser);

      if (!resultUser?.userid) {
        alert("존재하지 않는 ID입니다");
        return;
      }
      if (resultUser.password !== account.password) {
        alert("비번 오류");
        return;
      }
      alert("로그인 성공");
      setUser(resultUser);
      history.replace("/");
    }
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <MyButton backgroundColor={"skyblue"} onClick={onLogin}>
        로그인
      </MyButton>
    </div>
  );
}

export default LoginForm;
