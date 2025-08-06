import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center xl:gap-[16px] lg:gap-[14px] md:gap-[12px] gap-[8] ">
      <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-center items-center gap-[16px] ">
        <img
          src="images/logomrcsec.png"
          alt="mrc_logo"
          className=" xl:w-[150px] lg:w-[130px] md:w-[110px] w-[100px] "
        />
        <h1 className=" xl:text-[60px] lg:text-[50px] md:text-[40px] text-[30px] text-white font-G-Sans-bold ">
          404 Not Found
        </h1>
      </div>
      <p className=" text-white/80 xl:text-[28px] lg:text-[26px] md:text-[24px] text-[20px] mt-0 ">
        Whoops! That page doesn’t exist.
      </p>
      <p className=" text-white text-[18px] flex items-center justify-center gap-[16px] mt-[36px] ">
        Return 
        <Link to="/">
          <b className=" text-orange ">Home</b>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
