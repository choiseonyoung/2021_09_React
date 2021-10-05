import React from "react";

// 비구조화
// const {addressList} = props 대신 직접 분해하면서 받기
function AddressView({ addressList }) {
  const viewList = addressList.map((addr, index) => {
    return (
      <tr key={addr.r_id}>
        <td>{index + 1}</td>
        <td>{addr.u_name}</td>
        <td>{addr.u_addr}</td>
        <td>{addr.u_tel}</td>
        <td>{addr.u_age}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th width="10%">ID</th>
          <th width="15%">이름</th>
          <th width="45%">주소</th>
          <th width="20%">전화번호</th>
          <th width="10%">나이</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default AddressView;
