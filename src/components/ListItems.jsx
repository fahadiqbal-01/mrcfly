import React from "react";
import { motion } from "framer-motion";

const ListItems = ({ className, children }) => {
  return (
    <li
      className={` select-none cursor-pointer font-G-Sans-medium xl:text-[14px] lg:text-[10px] md:text-[8px] 
        leading-[20px] text-white after:content-[''] after:h-[3px] after:w-0 after:bg-orange after:rounded-lg after:absolute 
        xl:after:bottom-[-10px] lg:after:bottom-[-10px] md:after:bottom-[-6px] after:bottom-[-4px] after:left-[50%] after:translate-x-[-50%] after:transition-all after:duration-300 after:pointer-events-none hover:after:w-full
        xl:after:block lg:after:block md:after:block after:hidden 
         hover:text-orange duration-300 ease-out ${className} relative`}
    >
      {children}
    </li>
  );
};

export default ListItems;
