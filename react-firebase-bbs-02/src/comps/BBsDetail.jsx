import React, { useEffect, useState, useCallback } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../config/BBSConfig";

function BBsDetail() {
  const router = useHistory();
  const match = useRouteMatch();
  const docId = match.params.id;
  // (라우팅과 매개변수 받을 준비됨)

  const [bbs, setBbs] = useState({
    b_date: "",
    b_time: "",
    b_writer: "",
    b_subject: "",
    b_content: "",
  });
  const findByIdFetch = useCallback(async () => {
    if (docId) {
      const result = await firestore.collection("bbs").doc(docId).get();
      if (result.data()) {
        setBbs(result.data());
      }
    }
  }, [docId]);

  useEffect(findByIdFetch, [findByIdFetch]);

  const onDelete = (e) => {
    if (window.confirm("삭제할까여?")) {
      firestore
        .collection("bbs")
        .doc(docId)
        .delete()
        .then((result) => {
          router.push(`/`);
        });
    }
  };

  return (
    <div className="bbs_detail">
      <h1>DETAIL</h1>
      <div>
        <label>작성일자</label>
        <span>{bbs.b_date}</span>
      </div>
      <div>
        <label>작성시각</label>
        <span>{bbs.b_time}</span>
      </div>
      <div>
        <label>작성자</label>
        <span>{bbs.b_writer}</span>
      </div>
      <div>
        <label>제목</label>
        <span>{bbs.b_subject}</span>
      </div>
      <div>
        <label>내용</label>
        <span>{bbs.b_content}</span>
      </div>
      <div class="bbs_btn_box">
        <button
          onClick={() => {
            router.push("/");
          }}
        >
          처음으로
        </button>
        <button
          onClick={() => {
            router.push(`/write/${docId}`);
          }}
        >
          수정
        </button>
        <button onClick={onDelete}>삭제</button>
        {/* (onDelete 라는 함수를 만들겠다) */}
      </div>
    </div>
  );
}

export default BBsDetail;
