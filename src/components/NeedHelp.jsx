import React from "react";
import { easeOut, motion } from "framer-motion";

const NeedHelp = () => {
  const whatsappRedirect = "https://wa.me/8801825419803";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="NeedHelp"
      className=" bg-transparent text-center overflow-hidden py-[80px] xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0 mb-[-65px] relative "
    >
      <div className=" relative z-10  ">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
          className=" font-switzer-i xl:text-[48px] lg:text-[38px] text-[28px]  leading-[40px] text-orange"
        >
          Need Help?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: easeOut }}
          viewport={{ once: true }}
          className=" font-G-Sans-medium xl:text-[20px] lg:text-[16px] md:text-[12px] text-[14px] xl:leading-[28px] lg:leading-[24px]
         leading-[20px] text-[#ffffff] xl:mt-[18px] lg:mt-[16px] md:mt-[12px] mt-[8px] xl:w-[670px] lg:w-[500px] md:w-[400px] w-[70%] mx-auto"
        >
          Our support team is here to help you track your service or answer any
          questions about your application
        </motion.p>
      </div>

      <motion.a
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.7, ease: easeOut }}
        viewport={{ once: true }}
        href={whatsappRedirect}
        target="_blank"
        rel="noopener noreferrer"
        className=" inline-block bg-orange px-[24px] py-[8px] font-switzer-i border-4 border-transparent rounded-[8px] text-white
         xl:text-[20px] lg:text-[18px] md:text-[14px] xl:leading-[32.5px] lg:leading-[32.5px] md:leading-[20px] leading-[20px]
         xl:mt-[22px] lg:mt-[18px] md:mt-[14px] mt-[12px] hover:bg-transparent hover:text-orange hover:border-orange duration-200 ease-out select-none relative z-50 "
      >
        Contact Support
      </motion.a>

      <video
        autoPlay
        loop
        playsInline
        muted
        className=" absolute left-0 top-[50%] translate-y-[-50%] w-full grayscale-75 "
      >
        <source src="video/serviceVID.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default NeedHelp;
