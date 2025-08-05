import React from "react";
import { motion } from "framer-motion";

const TrackServicesBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="track-services-banner"
      className=" xl:h-[880px] max-h-screen pt-[80px] pb-[120px] drop-shadow-lg overflow-y-hidden relative z-50 "
    >
      {/* <h1 className=" font-G-Sans-bold xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] text-center ">
        <p className=" text-[#FFFFFF] ">Track Your</p>
        <p className=" text-orange xl:mt-[-18px] lg:mt-[-14px] md:mt-[-10px] ">
          Service Progress
        </p>
      </h1>
      <p
        className=" font-Gambetta xl:text-[20px] lg:text-[18px] md:text-[14px] xl:leading-[32.5px] lg:leading-[32.5px] md:leading-[20px] leading-[20px] text-white 
      xl:w-[741px] lg:w-[741px] md:w-[741px] w-[85%] mx-auto mt-[23px] text-wrap text-center xl:px-0 px-[20px] "
      >
        Stay updated on your visa application, job application or any other
        service with our real- time tracking system. Enter your
        Passport/National ID number to get instant updates.
      </p> */}
      <video
        autoPlay
        loop
        playsInline
        muted
        className=" absolute left-0 top-0 w-full grayscale-25 -z-10 "
      >
        <source src="video/www.mrcfly.com.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default TrackServicesBanner;
