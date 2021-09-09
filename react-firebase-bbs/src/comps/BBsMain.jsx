import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const activeNavStyle = {
    backgroundColor: "pink",
  };
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/write" activeStyle={activeNavStyle}>
          글쓰기
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={activeNavStyle}>
          로그인
        </NavLink>
      </li>
      <li>
        <NavLink to="/join" activeStyle={activeNavStyle}>
          회원가입
        </NavLink>
      </li>
    </ul>
  );
}

export default MainNav;
