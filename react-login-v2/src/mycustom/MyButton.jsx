import React from "react";

/**
 * props로 전달받은 변수에 기본값을 지정하여
 * props 값이 전달되지 않더라도 기본을 설정할 수 있도록 기본값 설정하기
 */
function MyButton({
  children,
  onClick,
  backgroundColor = "skyblue", // 기본값 설정
  color = "black", // 기본값 설정
}) {
  const MyButtonStyle = {
    backgroundColor: backgroundColor,
    width: "60px",
    height: "50px",
    color: color,
    fontSize: "15px",
    fontWeight: "700px",
    lineHeight: "49px",
    margin: "16px auto",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
  };
  return (
    <button style={MyButtonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default MyButton;
