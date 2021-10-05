import UUID from "react-uuid";

function AddressInput({ stateGroup }) {
  //   const { stateGroup } = props;
  const { address, setAddress, addressList, setAddressList } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const addressInsert = () => {
    setAddress({ ...address, u_id: UUID() });
    setAddressList([...addressList, address]);
  };
  return (
    <div class="input_box">
      <input
        value={address.u_name}
        name="u_name"
        placeholder="이름"
        onChange={onChangeHandler}
      ></input>
      <input
        value={address.u_addr}
        name="u_addr"
        placeholder="주소"
        onChange={onChangeHandler}
      ></input>
      <input
        value={address.u_tel}
        name="u_tel"
        placeholder="전화번호"
        onChange={onChangeHandler}
      ></input>
      <input
        value={address.u_age}
        name="u_age"
        placeholder="나이"
        onChange={onChangeHandler}
      ></input>
      <button onClick={addressInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
