import React from "react";
import { motion } from "framer-motion";

const TrackServicesBannerSec = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="track-mid-sec"
      className="pt-[80px] pb-[120px] bg-[#343839] drop-shadow-lg "
    >
      <h1 className=" font-switzer-i xl:text-[48px] lg:text-[38px] text-[28px] text-center ">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-white "
        >
          Track Your
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className=" text-orange xl:mt-[-18px] lg:mt-[-14px] md:mt-[-10px] mt-[-4px] "
        >
          Service Progress
        </motion.p>
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" font-G-Sans-medium xl:text-[20px] lg:text-[18px] md:text-[14px] xl:leading-[32.5px] lg:leading-[32.5px] md:leading-[20px] leading-[20px] text-white 
      xl:w-[741px] lg:w-[741px] md:w-[741px] w-[90%] mx-auto mt-[23px] text-wrap text-center xl:px-0 px-[20px] "
      >
        Stay updated on your visa application, job application or any other
        service with our real- time tracking system. Enter your
        Passport/National ID number to get instant updates
      </motion.p>
    </motion.div>
  );
};

export default TrackServicesBannerSec;
