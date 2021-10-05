import React from "react";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressView from "./comps/AddressView";
import { useState } from "react";
import UUID from "react-uuid";

function App() {
  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    u_id: UUID(),
    u_name: "",
    u_addr: "",
    u_tel: "",
    u_age: 0,
  });
  const [addressList, setAddressList] = useState([]);
  //   (데이터 저장하기 위해 json 형식으로 ~)
  const stateGroup = {
    address,
    setAddress,
    addressList,
    setAddressList,
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <AddressInput stateGroup={stateGroup} />
      <AddressView addressList={addressList} />
    </div>
  );
}

export default App;
