import React, { useState } from "react";
import "../css/LoginForm.css";
import { useUserContext } from "../context/UserContextProvider";
import MyButton from "../mycustom/MyButton";
import { useHistory } from "react-router-dom";
import { fetchLogin } from "../modules/fetchModule";

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
    const { userid, password } = account;
    const resultUser = await fetchLogin(userid, password);
    await setUser(resultUser);
    history.replace("/");
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
