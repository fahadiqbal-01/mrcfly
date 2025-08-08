import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import lottie from "lottie-web";

const TrackServicesBanner = () => {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.getElementById("hand-click-animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/images/Hand tap.json", // Make sure this path is correct for your hand-clicking animation
    });

    return () => anim.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className=" h-full max-h-screen drop-shadow-lg overflow-hidden relative ">
      <Link to="#mid-form-top" smooth>
        <video autoPlay loop playsInline muted className=" w-full mx-auto ">
          <source
            src="video/trackvid2.mp4"
            type="video/mp4"
            media="(min-width: 768px)"
          />
        </video>
      </Link>

      <Link
        to="#mid-form-top"
        smooth
        className=" xl:text-[26px] lg:text-[23px] md:text-[20px] sm:text-[17px] text-[14px] text-white absolute left-4 top-4 
        xl:px-[16px] xl:py-[8px] lg:px-[12px] lg:py-[6px] md:px-[8px] md:py-[4px] px-[6px] py-[3px] bg-black/60 backdrop-blur-sm rounded-lg flex items-center gap-[6px] "
      >
        <div
          id="hand-click-animation"
          className="xl:w-[55px] lg:w-[45px] md:w-[35px] w-[30px] invert-100"
        ></div>
        Click here to Track your services
      </Link>
    </div>
  );
};

export default TrackServicesBanner;
