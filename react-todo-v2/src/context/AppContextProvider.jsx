import { createContext, useContext, useState } from "react";

const AppContext = createContext();

// 함수 내부에서 한줄의 return 만 있을 경우 모두 생략 가능
export const useTodoContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "TODO 연습",
    t_isComplete: false,
  });
  const [todoList, setTodoList] = useState([
    {
      t_id: 0,
      t_text: "하이",
      t_isComplete: false,
    },
  ]);
  const onChange = (e) => {
    setTodo({
      t_id: todoList[todoList.length - 1].t_id + 1,
      // todoList 가장 마지막 요소의 t_id 값을 추출하여 +1 한 후 현재 id로 삼기
      t_text: e.target.value,
      t_isComplete: false,
    });
  };
  const onClick = (e) => {
    setTodoList([...todoList, todo]);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodoList([...todoList, todo]);
    }
  };

  const completeToggle = (id) => {};
  const todoDelete = (id) => {};

  /**
   * state를 관리하기(추가, 수정, 삭제) 위하여
   * setState() 를 반드시 props에 담아서 하위 컴포넌트로 보내야 한다
   *
   * 하지만 setState() 는 어디선가 잘못 실행되면
   * 실제 데이터에 문제가 발생할 수 있다
   *
   * 어차피 setState()는 어딘가에서 발생하는 event handler에서 주로 사용하기 때문에
   * 차라리 event handler를 만들어서 배포하면
   * setState() 가 어디에서 변화되는지, 사용되는지 관리하기가 비교적 용이해진다.
   */

  // 모아주기
  const propsData = {
    onChange,
    todo,
    onClick,
    onKeyPress,
    todoList,
    completeToggle,
    todoDelete,
  };

  return (
    <AppContext.Provider value={propsData}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
