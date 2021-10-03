import { Route } from "react-router-dom";
import BookInput from "./BookInput";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

function BookMain() {
  return (
    <AppContextProvider>
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
    </AppContextProvider>
  );
}

export default BookMain;
