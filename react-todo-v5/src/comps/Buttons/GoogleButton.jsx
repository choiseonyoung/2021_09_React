import "../../css/GoogleButton.css";
import { useEffect, useRef } from "react";

function GoogleButton() {
  const buttonRef = useRef();
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
          "79085239520-v2tp676gabkirqqu6qen690b71gkpbhi.apps.googleusercontent.com",
        scope: "profile email",
      });
      await auth2.attachClickHandler(buttonRef.current, {});
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
