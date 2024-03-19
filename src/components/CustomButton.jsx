import React from "react";

const CustomButton = ({ onClick, children, style }) => {
  // custom button
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#9A8350",
        width: "300px",
        border: "none",
        padding: "12px 24px",
        borderRadius: "4px",
        cursor: "pointer",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
