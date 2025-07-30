import React from "react";
import { motion } from "framer-motion";

const ListItems = ({ className, children }) => {
  return (
    <li
      className={` select-none cursor-pointer font-G-Sans xl:text-[14px] lg:text-[10px] md:text-[8px] 
        leading-[20px] text-black hover:text-blue-800 duration-300 ease-out ${className} `}
    >
      {children}
    </li>
  );
};

export default ListItems;
