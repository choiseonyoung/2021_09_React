import "../../css/GoogleButton.css";
import { useEffect, useRef } from "react";
import { useUserContext } from "../../context";

function GoogleButton() {
  const buttonRef = useRef();
  const { setUser } = useUserContext();

  const googleResponse = (result) => {
    const profile = result.getBasicProfile();
    const email = profile.getEmail();
    const id = profile.getId();
    const name = profile.getName();
    const image = profile.getImageUrl();

    const Token = result.getAuthResponse().id_token;

    setUser({
      userid: email,
      login_source: "GOOGLE",
    });
    alert(email + " 님 반갑습니다 !");
  };

  /**
   * public/index.html 파일에 script를 import 한다
   * src="https://apis.google.com/js/api:client.js"
   */
  const googleSDK_init = () => {
    if (!window.gapi) {
      // * window에 gapi 가 있는지 검사
      alert("Google API NOT Found");
      // * F5 계속 누르면 ~ 이게 뜰 것
      return;
    }

    // google에 API가 활성화되고
    // 활성화된 API 중에서 auth2가 loading(사용할 준비가 되면)
    window.gapi.load("auth2", async () => {
      const auth2 = await window.gapi.auth2.init({
        // * 초기화시키기
        client_id:
          "25572880857-ghl9be0u1s0jq2uku9t01v8ql1vamt6u.apps.googleusercontent.com",
        scope: "profile email",
      });
      if (auth2?.isSignedIn.get()) {
        // * 구글로부터 로그인을 이미 한 적이 있으면 true가 됨
        console.log("로그인이 이미 된 상태");
        // 원하는 곳으로 redirect
      }
      await auth2.attachClickHandler(buttonRef.current, {}, googleResponse);
    });
  };

  useEffect(googleSDK_init, []);

  const logout = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2?.disconnect();
    alert("Logout OK !!");
  };

  return (
    <div id="buttonWrapper">
      <div id="myGoogleBtn" ref={buttonRef}>
        {/* * 앞에 id는 css만 쓸 수 있는 아이디, 뒤에 id는 react에서 사용하는 아이디 */}
        <span className="icon"></span>
        <span className="buttonText">Google 로그인</span>
        <span className="buttonText" onClick={logout}>
          {/* * 임시로 사용하는 코드 */}
          Google 로그아웃
        </span>
      </div>
    </div>
  );
}

export default GoogleButton;
