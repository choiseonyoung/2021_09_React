import React, { useContext } from "react";
import "../css/BookInput.css";
import BookView from "./BookView";
import BookContext from "../context/BookContext";
import MyButton from "../My/MyButton";

function BookInput() {
  const { book, setBook } = useContext(BookContext);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <>
      <div class="input_box">
        <label>도서명</label>
        <input name="b_name" value={book.b_name} onChange={onChangeHandler} />
        {/* (name 이름은 value 와 같게 써줘야 함) */}
        <label>장르</label>
        <input name="b_genre" value={book.b_genre} onChange={onChangeHandler} />
        <MyButton onClick={() => alert("방가방가")}>리스트 추가</MyButton>
      </div>
      <BookView />
    </>
  );
}

export default BookInput;
