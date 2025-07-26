import React from "react";

const NeedHelp = () => {
  return (
    <div id="NeedHelp" className=" text-center py-[80px] ">
      <div>
        <h2 className=" font-G-Sans-bold text-[36px] leading-[40px] text-[#ffffff] ">
          Need Help?
        </h2>
        <p className=" font-Gambetta text-[20px] leading-[28px] text-[#DCFCE7] mt-[16px] w-[670px] mx-auto">
          Our support team is here to help you track your service or answer any
          questions about your application.
        </p>
      </div>

      <a
        href=""
        className=" inline-block bg-[#EAB308] px-[32px] py-[18px] border-2 border-transparent rounded-[8px] text-[18px]
         text-[#14532D] leading-[28px] mt-[32px] hover:bg-transparent hover:text-[#EAB308] hover:border-[#EAB308] duration-200 ease-out "
      >
        Contact Support
      </a>
    </div>
  );
};

export default NeedHelp;