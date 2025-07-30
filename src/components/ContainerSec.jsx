import React from "react";

const ContainerSec = ({ children, className }) => {
  return (
    <div className={`w-full xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[800px] mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default ContainerSec;
