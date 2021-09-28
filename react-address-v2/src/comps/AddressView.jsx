import React from "react";

// 비구조화
// const {addressList} = props 대신 직접 분해하면서 받기
function AddressView({ addressList }) {
  const viewList = addressList.map((address, index) => {
    return (
      <tr key={address.r_id}>
        <td>{index + 1}</td>
        <td>{address.u_name}</td>
        <td>{address.u_addr}</td>
        <td>{address.u_tel}</td>
        <td>{address.u_age}</td>
      </tr>
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>이름</th>
            <th>주소</th>
            <th>전화번호</th>
            <th>나이</th>
          </tr>
        </thead>
        <tbody>{viewList}</tbody>
      </table>
    </div>
  );
}

export default AddressView;
