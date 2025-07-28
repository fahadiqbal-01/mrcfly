import React from "react";

const TrackServicesBanner = () => {
  return (
    <div
      id="track-services-banner"
      className=" pt-[80px] pb-[120px] drop-shadow-lg "
    >
      <h1 className=" font-G-Sans-bold text-[48px] text-center ">
        <p className=" text-[#FFFFFF] ">Track Your</p>
        <p className=" text-orange mt-[-18px] ">Service Progress</p>
      </h1>
      <p className=" font-Gambetta text-[20px] leading-[32.5px] text-white w-[741px] mx-auto mt-[23px] text-wrap text-center ">
        Stay updated on your visa application, job application, or any other
        service with our <br /> real- time tracking system. Enter your
        Passport/National ID number to get instant updates.
      </p>
    </div>
  );
};

export default TrackServicesBanner;
