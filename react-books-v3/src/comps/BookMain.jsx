import React, { useState } from "react";
import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookContext from "../context/BookContext";
import BookList from "./BookList";
import UUID from "react-uuid";

/**
 * 컴포넌트의 선택적 Rendering
 * 어떤 조건에 따라 컴포넌트를 보이거나 보이지 않도록 하는 방법
 * NavLink를 클릭했을 때 선택적으로 화면을 보여주기
 */
function BookMain() {
  const [book, setBook] = useState({
    b_id: UUID(),
    b_name: "자바를 자바라",
    b_genre: "IT 개발서",
  });

  const [bookList, setBookList] = useState([]);

  // (이런 함수도 provider에 보낼 수 있다)
  // 상위 컴포넌트에서 이벤트를 생성하고 하위 컴포넌트로 전달할 때는 반드시 e(event) 매개변수를 같이 포함하는 것이 좋다
  const onClick = (e) => {
    alert("여기는 onClick");
  };

  const providerData = { book, setBook, bookList, setBookList, onClick };
  return (
    // 제일 바깥쪽 태그는 이름을 지워도 됨
    <>
      <BookContext.Provider value={providerData}>
        <Route path="/" exact>
          여기는 홈화면
        </Route>
        <Route path="/insert" exact>
          <BookInput />
          {/* 컴포넌트는 가급적 태그처럼 써주는 게 좋음
		{BookInput} 으로 하면 나중에 불편해짐 */}
        </Route>
        <Route path="/list" exact>
          <BookList />
        </Route>
      </BookContext.Provider>
    </>
  );
}

export default BookMain;
