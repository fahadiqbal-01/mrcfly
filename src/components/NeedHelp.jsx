import React from "react";
import { motion } from "framer-motion";

const NeedHelp = () => {
  const whatsappRedirect = "https://wa.me/8801825419803.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="NeedHelp"
      className=" bg-transparent text-center overflow-hidden py-[80px] xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 mb-[-65px] relative "
    >
      <div className=" relative z-10  ">
        <h2 className=" font-G-Sans-bold xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] leading-[40px] text-orange">
          Need Help?
        </h2>
        <p
          className=" font-Gambetta xl:text-[20px] lg:text-[16px] md:text-[12px] text-[14px] xl:leading-[28px] lg:leading-[24px]
         leading-[20px] text-[#ffffff] xl:mt-[18px] lg:mt-[16px] md:mt-[12px] mt-[8px] xl:w-[670px] lg:w-[500px] md:w-[400px] w-[70%] mx-auto"
        >
          Our support team is here to help you track your service or answer any
          questions about your application.
        </p>
      </div>

      <a
        href={whatsappRedirect}
        target="_blank"
        rel="noopener noreferrer"
        className=" inline-block bg-orange xl:px-[32px] xl:py-[18px] lg:px-[28px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px]
         py-[10px]] border-2 border-transparent rounded-[8px] xl:text-[18px] lg:text-[14px] md:text-[12px] text-[#ffffff] leading-[28px] 
         xl:mt-[22px] lg:mt-[18px] md:mt-[14px] mt-[12px] hover:bg-transparent hover:text-white hover:border-orange duration-200 ease-out select-none relative z-50 "
      >
        Contact Support
      </a>

      <video
        autoPlay
        loop
        playsInline
        muted
        className=" absolute left-0 top-[50%] translate-y-[-50%] w-full grayscale-75 "
      >
        <source src="video/trackvid2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default NeedHelp;
