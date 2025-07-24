import React from "react";

const ContainerSec = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default ContainerSec;
