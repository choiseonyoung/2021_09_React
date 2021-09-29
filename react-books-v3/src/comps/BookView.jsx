import React, { useContext } from "react";
import BookContext from "../context/BookContext";

/**
 * inline 방식으로 style을 만들고 직접 각 컴포넌트에 지정하기
 */
function BookView() {
  const { book } = useContext(BookContext);
  // 썩 좋은 방법은 아니지만 이런 방법도 있다
  const viewStyle = {
    width: "70vw",
    margin: "20px auto",
    display: "flex",
    border: "1px solid lightgray",
    padding: "1rem",
    backgroundColor: "#aaa",
  };

  const pStyle = {
    flex: "1",
    border: "1px solid gray",
    margin: "10px",
  };
  return (
    <div className="book_view" style={viewStyle}>
      <p style={pStyle}>도서명: {book.b_name}</p>
      <p style={pStyle}>장르: {book.b_genre}</p>
    </div>
  );
}

export default BookView;
