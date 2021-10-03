import React from "react";

function AddOld() {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>{header}</div>
        <section>{form}</section>
        <section>{children} </section>
      </main>
      <TodoInput />
      <TodoList />
    </AppContextProvider>
  );
}
