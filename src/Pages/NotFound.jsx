import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" w-full h-[100vh] flex flex-col justify-center items-center gap-[16px] ">
      <div className="flex justify-center items-center gap-[16px] ">
        <img src="images/logomrc.png" alt="mrc_logo" className=" w-[150px] " />
        <h1 className=" text-[60px] text-[#033961] font-G-Sans-bold ">
          404 Not Found
        </h1>
      </div>
      <p className=" text-gray-600 text-[28px] mt-0 ">
        Whoops! That page doesn’t exist.
      </p>
      <p className=" text-[18px] flex items-center justify-center gap-[16px] mt-[36px] " >
        Return
        <Link to="/" >
          <b className=" text-orange " >Home</b>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
