import React from "react";
import "../css/TodoList.css";
import TodoItem from "./TodoItem";
import { useTodoContext } from "../context/AppContextProvider";

function TodoList() {
  const { todoList, todoDelete } = useTodoContext();

  const listView = todoList.map((item) => {
    return <TodoItem todo={item} key={item.t_id} todoDelete={todoDelete} />;
  });

  return <div>{listView}</div>;
}

export default TodoList;
