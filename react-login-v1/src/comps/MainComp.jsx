import React from "react";
import LoginForm from "./LoginForm";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import { Route } from "react-router-dom";
import Notice from "./Notice";
import BBs from "./BBs";
import { useUserContext } from "../context/UserContextProvider";

function MainComp() {
  const { user, setUser } = useUserContext();
  const NavList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "/bbs" },
    user?.userid
      ? { id: 3, title: "로그아웃", link: "/logout", align: true }
      : { id: 3, title: "로그인", link: "/login", align: true },
    user?.userid
      ? { id: 4, title: "마이페이지", link: "/mypage" }
      : { id: 4, title: "회원가입", link: "/join" },
  ];
  return (
    <MainNav NavList={NavList}>
      <Route path="/" exact>
        <div>홈화면</div>
      </Route>
      <Route path="/notice" exact>
        <Notice />
      </Route>
      <Route path="/bbs" exact>
        <BBs />
      </Route>
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>

      {/* 좋은 코드는 아니나 테스트 */}
      <Route path="/logout"></Route>
    </MainNav>
  );
}

export default MainComp;
