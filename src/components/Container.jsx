import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full !bg-red-600 max-w-[1200px] mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default Container;
