import React from "react";
import BucketItem from "./BucketItem";

function BucketList(props) {
  /**
   * 부모 컴포넌트로부터 전달받은 bucketList를 사용하기 위해 변수로 선언하기
   *
   * BucketMain에서 보낸 배열변수와 2개의 함수를 props로부터 분리해내기
   */
  const { bucketList, flag_change, bucket_update, bucket_complete } =
    props.args;
  const bucketBody = bucketList.map((bucket) => {
    return (
      <BucketItem
        args={props.args}
        bucket={bucket}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    );
  });
  return (
    <table className="w3-table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
      </thead>
      <tbody>{bucketBody}</tbody>
    </table>
  );
}

export default BucketList;
