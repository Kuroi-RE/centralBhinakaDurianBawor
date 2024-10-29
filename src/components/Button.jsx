import React from "react";

const Button = ({ children, className, bg }) => {
  return (
    <button className={className} style={{ backgroundColor: bg }}>
      {children}
    </button>
  );
};

export default Button;
