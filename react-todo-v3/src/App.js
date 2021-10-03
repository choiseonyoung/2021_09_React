import logo from "./logo.svg";
import "./App.css";
import TodoMain from "./comps/TodoMain";
import TodoList from "./comps/TodoList";
import CompButton from "./comps/CompButton";
import TodoInput from "./comps/TodoInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* TodoMain.jsx Layout을 사용하여 TODO 화면을 구현 */}
      <TodoMain header="할 일" form={<TodoInput />}>
        <TodoList />
        {/* 이렇게 끼워넣으면 children 으로 전달된다 */}
      </TodoMain>

      {/* <TodoInput />
      <TodoList />
      <MyButton />
      <HomeButton />
      <CompButton onClick={() => alert("집")}>우리집</CompButton> */}
    </div>
  );
}

export default App;
