// src/pages/SearchStatus.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import TrackServicesBanner from "../components/TrackServicesBanner";
import { CiMail, CiSearch } from "react-icons/ci";
import { IoMdCloudDone, IoMdSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import ContainerSec from "../components/ContainerSec";
import NeedHelp from "../components/NeedHelp";
import { motion } from "framer-motion";
import Toastify from "toastify-js";
import lottie from "lottie-web";
import Container from "../components/Container";
import { AiOutlineGlobal } from "react-icons/ai";
import { VscServerProcess } from "react-icons/vsc";
import { FaCloudDownloadAlt } from "react-icons/fa";
import TrackServicesBannerSec from "../components/TrackServicesBannerSec";

export default function TrackServices() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("paperplane-animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/images/Paperplane.json",
    });
  }, []);

  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = async () => {
    if (!id.trim()) {
      Toastify({
        text: "Please enter your Passport/National ID number.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#f67a1b", // Red background
          color: "#ffffff", // White text
          fontFamily: "Gsans, sans-serif", // Custom font
          fontSize: "16px", // Font size// Orange border
          borderRadius: "8px", // Rounded corners
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    }
    setLoading(true);
    setImageLoaded(false);
    const docRef = doc(db, "entries", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      setData(null);
      setLoading(false);
      setId("");
      Toastify({
        text: "ID not found. Please check your Passport/National ID number.",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#f67a1b", // Red background
          color: "#ffffff", // White text
          fontFamily: "Gsans, sans-serif", // Custom font
          fontSize: "16px", // Font size// Orange border
          borderRadius: "8px", // Rounded corners
        },
        onClick: function () {}, // Callback after click
      }).showToast();
      return;
    }
  };

  // Hide popup when clicking outside
  const handleCloseResult = (e) => {
    setShowResult(false);
    setData(null);
    setImageLoaded(false);
    setId("");
  };

  return (
    <section id="track-mid" className=" bg-[#ffffff] ">
      <TrackServicesBanner />
      <TrackServicesBannerSec />
      <Container className=" mb-[120px] ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          id="mid-form-top"
          className="pt-[80px] text-center"
        >
          <h3 className="font-G-Sans-bold xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] leading-[36px] text-black">
            Track Your Service
          </h3>
          <h4 className="mt-[16px] text-[#4B5563] font-Gambetta text-[18px] leading-[28px] xl:px-0 lg:px-0 md:px-0 px-[20px]">
            Enter your Passport or National ID number to view the current status
            of your request
          </h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-[48px] bg-transparent border-2 border-white rounded-2xl xl:mx-0 mx-[10px] relative"
        >
          <div
            id="track-mid-form"
            className=" w-full px-[24px] py-[78px] rounded-xl "
          >
            <img
              src="images/logomrcsec.png"
              alt=""
              className=" w-[50px] absolute left-3 top-3 "
            />
            {!loading && (
              <>
                {!data || !imageLoaded || !showResult ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSearch();
                    }}
                    className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center gap-[16px] relative"
                    style={{ minHeight: 80 }}
                  >
                    <input
                      id="service-id-input"
                      className=" font-G-Sans-bold bg-[#ffffff] xl:px-[25px] xl:py-[19px] lg:px-[20px] lg:py-[16px] px-[16px] py-[12px]
          w-full xl:max-w-[610px] lg:max-w-[510px] md:max-w-[410px] max-w-[310px] border-2 border-[#9CA3AF] rounded-[8px]
          focus:outline-none focus:border-orange xl:placeholder:text-[18px] lg:placeholder:text-[16px] md:placeholder:text-[14px] placeholder:select-none placeholder:font-Gambetta no-arrows "
                      type="text"
                      value={id}
                      placeholder="Enter Passport/NID Number"
                      onChange={(e) => setId(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-[6px] font-G-Sans xl:text-[18px] lg:text-[14px] md:text-[12px] text-[10px] text-white leading-[28px] tracking-[6px]
            bg-orange border-2 border-transparent xl:px-[34px] xl:py-[17px] lg:px-[30px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px] py-[6px] rounded-[8px] cursor-pointer  select-none "
                      disabled={loading}
                    >
                      <IoMdSearch className="text-[22px]" /> Track
                    </button>
                  </form>
                ) : (
                  <div className=" w-full mx-auto py-4 overflow-hidden ">
                    <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-md overflow-hidden border-4 border-white">
                      <div className="lg:w-1/2 w-full ">
                        <img
                          src={data.imageUrl}
                          alt="Cindy Crawford"
                          className="object-cover w-full"
                        />
                      </div>

                      <div className="lg:w-1/2 w-fullf flex flex-col justify-between p-6 relative">
                        <button
                          className=" w-fit absolute right-2 top-2 px-[8px] py-[4px] text-white border-2 border-red-700 bg-red-700
                          rounded-lg hover:bg-transparent hover:text-red-700 hover:border-red-700 duration-200 ease-out select-none cursor-pointer z-50 "
                          onClick={handleCloseResult}
                        >
                          Close
                        </button>
                        <div className=" flex flex-col justify-baseline ">
                          <h2 className="xl:text-[32px] lg:text-[32px] md:text-[28px] text-[24px] font-bold text-gray-900 mb-2">
                            {data.name}
                          </h2>

                          <p className="text-sm text-gray-700 mb-1">
                            Service Type: {data.serviceType}
                          </p>
                          <p className="text-sm text-gray-700 mb-1">
                            Last Update: {data.date}
                          </p>

                          <p className="text-sm text-gray-600 mb-4">
                            {data.shortNote}
                          </p>
                        </div>

                        <div className="mt-[24px] ">
                          <span className="text-[#01395e] font-bold xl:text-sm lg:text-sm md:text-sm text-xs flex items-center gap-[12px] ">
                            <p>Thanks for choosing our services!</p>{" "}
                            <img
                              src="images/logomrc.png"
                              alt=""
                              className=" w-[50px] "
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" w-full mt-[16px] ">
                      {data.status === "Complete" ? (
                        <div className=" w-full flex xl:justify-end lg:justify-end md:justify-end justify-between items-center xl:gap[16px] lg:gap-[16px] md:gap-[16px] gap-0 ">
                          <span
                            className=" text-green-700 px-[12px] py-[6px] bg-green-200 rounded-lg
                          xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] flex items-center gap-[8px] "
                          >
                            <span className=" text-black  ">Status: </span>
                            <p className=" flex items-center gap-[4px] ">
                              {data.status}
                              <IoMdCloudDone />
                            </p>
                          </span>
                          <a
                            href={data.driveLink}
                            target="_blank"
                            className=" flex items-center gap-[6px] px-[12px] py-[6px] border-2 border-orange rounded-lg  bg-orange
                           xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-white select-none
                             group hover:bg-transparent hover:text-orange hover:border-orange duration-200 ease-out  "
                          >
                            <FaCloudDownloadAlt />
                            Download
                          </a>
                        </div>
                      ) : (
                        <p
                          className="text-blue-700 px-[12px] py-[6px] bg-green-200 rounded-lg w-fit
                        xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] flex items-center gap-[8px] "
                        >
                          <span className=" text-black flex items-center gap-[4px]">
                            Status:
                          </span>

                          <span className=" flex items-center gap-[6px] ">
                            {data.status}
                            <VscServerProcess className=" text-blue-700 " />
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}

            {loading && (
              <div className=" bg-gray-300/60 backdrop-blur-md rounded-xl flex justify-center items-center ">
                <img
                  src="images/Paperplane.gif"
                  alt="planeLoadingAnimation"
                  className=" w-[250px] "
                />
              </div>
            )}
          </div>

          {data && !imageLoaded && (
            <img
              src={data.imageUrl}
              alt="preload"
              style={{ display: "none" }}
              onLoad={() => {
                setImageLoaded(true);
                setLoading(false);
                setShowResult(true);
              }}
            />
          )}
        </motion.div>
        <div className="mt-[24px] bg-white ">
          <h2 className="font-Gambetta px-[26px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#000000] text-center">
            <b>Need help with any of our services?</b> <br />
            Just reach out to our support team — we’re here for you!
          </h2>
          <div
            className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center
        xl:gap-[16px] lg:gap-[16px] md:gap-[12px] gap-[4px] xl:mt-[16px] lg:mt-[16px] md:mt-[16px] mt-[18px] "
          >
            <h3 className="flex items-center justify-center gap-[6px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#000000]">
              <IoCallOutline className="xl:text-[14px] lg:text-[12px] md:text-[10px]" />
              +880 182 5419803
            </h3>
            <h4 className="flex items-center justify-center gap-[6px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#000000]">
              <CiMail className="xl:text-[14px] lg:text-[12px] md:text-[10px]" />
              info@mrcfly.com
            </h4>
          </div>
        </div>
      </Container>

      <NeedHelp />

      {/* Popup animation */}
      <style>
        {`
          @keyframes popup {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          .animate-popup {
            animation: popup 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}
      </style>
    </section>
  );
}
