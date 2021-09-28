import React from "react";

function TodoInput(props) {
  const { todo, setTodo, todoList, setTodoList } = props;

  // 입력박스에 text를 입력하면 한개의 TODO 데이터 만들기
  const onChangeHandler = (e) => {
    setTodo({
      t_id: todoList.length, // 이것도 썩 좋은 방법은 아님. 더 유니크한(ex UUID) 값으로 쓰는 게 좋음
      t_text: e.target.value,
      t_date: Date().toString(),
    }); // 자바스크립트에서 기본적으로 제공하는 날짜 함수
    // 객체
  };

  const todoInsert = () => {
    setTodoList([...todoList, todo]);
    // 배열
  };

  return (
    <div className="todo_input_box">
      <input
        placeholder="할일입력"
        defaultValue={todo.t_text}
        onChange={onChangeHandler}
      />
      <button onClick={todoInsert}>추가</button>
    </div>
  );
}

export default TodoInput;
