import React from "react";

const NeedHelp = () => {
  return (
    <div id="NeedHelp" className=" text-center py-[80px] ">
      <div>
        <h2 className=" font-G-Sans-bold xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] leading-[40px] text-orange ">
          Need Help?
        </h2>
        <p
          className=" font-Gambetta xl:text-[20px] lg:text-[16px] md:text-[12px] xl:leading-[28px] lg:leading-[24px]
         leading-[20px] text-[#DCFCE7] mt-[16px] xl:w-[670px] lg:w-[500px] md:w-[400px] w-[70%] mx-auto"
        >
          Our support team is here to help you track your service or answer any
          questions about your application.
        </p>
      </div>

      <a
        href="https://wa.me/8801825419803?text=Hi, I’m interested in your services. Could you help me find the best option?"
        target="blank"
        className=" inline-block bg-orange xl:px-[32px] xl:py-[18px] lg:px-[28px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px]
         py-[10px]] border-2 border-transparent rounded-[8px] xl:text-[18px] lg:text-[14px] md:text-[12px]
         text-[#ffffff] leading-[28px] mt-[32px] sm:mt-[18px] hover:bg-transparent hover:text-orange hover:border-orange duration-200 ease-out select-none "
      >
        Contact Support
      </a>
    </div>
  );
};

export default NeedHelp;
