import React from "react";
import "../css/BBsMain.css";

function Main() {
  return (
    <div class="main_box">
      <input placeholder="추가할 내용을 입력하세요"></input>
      <table>
        <thead>
          <tr>
            <th>FLAG</th>
            <th>날짜</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default Main;
