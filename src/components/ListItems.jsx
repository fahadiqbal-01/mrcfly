import React from "react";

const ListItems = ({ className, children }) => {
  return <li className={` select-none cursor-pointer font-G-Sans text-[14px] leading-[20px] text-black hover:text-green duration-300 ease-out ${className} `}>{children}</li>;
};

export default ListItems;
