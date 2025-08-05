import React from "react";
import { motion } from "framer-motion";

const TrackServicesBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className=" h-full max-h-screen drop-shadow-lg overflow-hidden "
    >
      <video
        autoPlay
        loop
        playsInline
        muted
        className=" "
      >
        <source src="video/trackvid2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
};

export default TrackServicesBanner;
