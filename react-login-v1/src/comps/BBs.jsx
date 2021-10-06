import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../context/UserContextProvider";

function BBs() {
  const { user, setUser } = useUserContext();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        header: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const result = await res.json();
      await setUser(result);
    };
    fetchData();
  }, []);
  if (!user.userid) {
    history.replace("/login");
  }
  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
}

export default BBs;
