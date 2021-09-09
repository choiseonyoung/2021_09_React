import React, { useState } from "react";
import { firestore } from "../config/BBSConfig";
import moment from "moment";

// import "../css/BBs.css";

// props.history
/**
 * react-router-dom을 사용하여 Routing을 구현하면
 * 메뉴에서 글쓰기를 클릭했을 때 호출(렌더링)된 컴포넌트이다
 *
 * 이때 react-router-dom은 매개변수로 history라는 변수를 전달한다
 * history 변수는 routing과 관련된 변수이다
 * history.push(URL) : URL로 redirect 하라
 */
function BBsWrite({ history }) {
  const [bbs, setBBs] = useState({
    b_write: "",
    b_subject: "",
    b_content: "",
  });

  // onChange Event 핸들러
  // 키보드로 입력한 데이터를 bbs 객체에 setting 하는 일을 수행한다
  const onChange = (e) => {
    const { value, name } = e.target;
    setBBs({ ...bbs, [name]: value });
  };

  const onClickSave = () => {
    // JSON 데이터를 JSONString으로 바꾸기
    // const str = JSON.stringify(bbs);
    // alert(str);

    // bbs의 데이터를 복제하면서
    // b_date, b_time 컬럼을 추가하겠다
    const saveBBS = {
      ...bbs,
      b_date: moment().format("YYYY[-]MM[-]DD"),
      b_time: moment().format("HH:mm:ss"),
    };
    // firestore
    //   .collection("bbs")
    //   .add(saveBBS)
    //   .then((doc) => {
    //     console.log(doc);
    //   });

    /**
     * firestore에 데이터 저장하기
     * add()를 사용하여 저장하는데 이건 only insert
     * doc(key).set()을 병행하여 사용하면 Update Or Insert
     */
    firestore
      .collection("bbs")
      .add(saveBBS)
      //   .doc("12341234")
      // (.doc() 로 하면 이름 임의로 만들어짐)
      //   .set(saveBBS)
      // (위두줄: 위 데이터를 업데이트해라. 이 문서 없으면 새로 만들어라)
      .then((result) => {
        console.log(result);
        history.push("/");
      });
  };

  return (
    <div className="bbs_write">
      <div>
        <input
          type="text"
          name="b_write"
          onChange={onChange}
          placeholder="작성자"
        />
      </div>
      <div>
        {/* tag code 내에 작성하는 주석문 */}
        {/*
		  input tag의 onChange 이벤트 핸들러
		  input box에 데이터(문자열)를 입력하면
		  입력된 데이터를 상태(변수, 객체)에 보관하는 역할을 수행
		  */}
        <input
          type="text"
          name="b_subject"
          onChange={onChange}
          placeholder="제목"
        />
      </div>
      <div>
        <input
          type="text"
          name="b_content"
          onChange={onChange}
          placeholder="내용"
        />
      </div>
      <button onClick={onClickSave}>저장</button>
    </div>
  );
}

export default BBsWrite;
