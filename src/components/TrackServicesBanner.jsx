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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className=" h-full max-h-screen drop-shadow-lg overflow-hidden relative "
    >
      <video autoPlay loop playsInline muted className=" ">
        <source src="video/trackvid2.mp4" type="video/mp4" />
      </video>
      <Link
        to="#track-mid-sec"
        smooth
        className=" text-[26px] text-white absolute left-4 top-4 px-[16px] py-[8px] bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-[6px] "
      >
        <GiClick />
        Track your services
      </Link>
    </motion.div>
  );
};

export default TrackServicesBanner;
