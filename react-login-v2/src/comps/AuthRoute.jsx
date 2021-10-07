/**
 * 로그인을 수행해야 열어볼 수 있는 페이지들을 통합 관리할 컴포넌트
 * 로그인을 수행해야 접근할 수 있는 Route들을 모아서 관리
 */

import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";
import { useCallback, useEffect } from "react";
import { fetchUser } from "../modules/fetchModule";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext(); // 로그인한 유저 정보 관련 사용
  const history = useHistory(); // 라우터 관련 사용

  // user state 정보가 정말 로그인한 정상 사용자인지 ??
  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  // 페이지가 열리려고 시도되면 자동으로 실행하도록
  useEffect(fetchCb, [fetchCb]);

  // <AuthRoute>내용</AutoRoute>
  return <>{children}</>;
};

export default AuthRoute;
