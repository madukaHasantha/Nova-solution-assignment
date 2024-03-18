import React from "react";

const CustomButton = ({ onClick, children, style }) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#9A8350",
        color: "#fff", 
        border: "none", 
        padding: "12px 24px",
        borderRadius: "4px", 
        cursor: "pointer", 
        width: "300px",
        fontFamily: "Poppins, sans-serif", 
        ...style, 
      }}
    >
      {children}
    </button>
  );
};

export default CustomButton;
