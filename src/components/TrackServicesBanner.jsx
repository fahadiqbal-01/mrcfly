import React from "react";
import { easeOut, motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { GiClick } from "react-icons/gi";

const TrackServicesBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{delay:0.5, duration: 0.7, ease: "easeInOut" }}
      viewport={{ once: true }}
      className=" h-full max-h-screen drop-shadow-lg overflow-hidden relative "
    >
      <Link to="#mid-form-top" smooth  >
        <video autoPlay loop playsInline muted className=" w-full mx-auto ">
          <source src="video/trackvid2.mp4" type="video/mp4" />
        </video>
      </Link>

      <Link
        to="#mid-form-top"
        smooth
        className=" xl:text-[26px] lg:text-[23px] md:text-[20px] sm:text-[17px] text-[14px] text-white absolute left-4 top-4 
        xl:px-[16px] xl:py-[8px] lg:px-[12px] lg:py-[6px] md:px-[8px] md:py-[4px] px-[6px] py-[3px] bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-[6px] "
      >
        <GiClick />
        Track your services
      </Link>
    </motion.div>
  );
};

export default TrackServicesBanner;
