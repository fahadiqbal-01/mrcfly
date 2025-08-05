import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[800px] sm:max-w-[700px] max-w-[600px] mx-auto ${className} `}>
      {children}
    </div>
  );
};

export default Container;
