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
          background: "#000000", // Red background
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
          background: "#000000", // Red background
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
      <Container className=" mb-[80px] ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          id="mid-form-top"
          className="pt-[80px] text-center"
        >
          <motion.h3
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-switzer-i xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] leading-[36px] text-black"
          >
            Track Your Service
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-[16px] text-[#4B5563] font-G-Sans-medium text-[18px] leading-[28px] xl:px-0 lg:px-0 md:px-0 px-[20px]"
          >
            Enter your{" "}
            <span className=" text-orange ">Passport or National ID</span>{" "}
            number to view the current status of your request
          </motion.h4>
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
                      className=" font-G-Sans-medium bg-[#ffffff] xl:px-[25px] xl:py-[19px] lg:px-[20px] lg:py-[16px] px-[16px] py-[12px]
          w-full xl:max-w-[610px] lg:max-w-[510px] md:max-w-[410px] max-w-[310px] border-2 border-[#9CA3AF] rounded-[8px]
          focus:outline-none focus:border-orange xl:placeholder:text-[18px] lg:placeholder:text-[16px] md:placeholder:text-[14px] placeholder:select-none placeholder:font-G-Sans no-arrows "
                      type="text"
                      value={id}
                      placeholder="Enter Passport/NID Number"
                      onChange={(e) => setId(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="flex justify-center items-center gap-[6px] font-G-Sans-medium xl:text-[18px] lg:text-[14px] md:text-[12px] text-[10px] text-white leading-[28px] tracking-[6px]
            bg-orange border-2 border-transparent xl:px-[34px] xl:py-[17px] lg:px-[30px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px] py-[6px] rounded-[8px] cursor-pointer  select-none "
                      disabled={loading}
                    >
                      <IoMdSearch className="text-[22px]" /> Track
                    </button>
                  </form>
                ) : (
                  <div className=" w-full mx-auto py-4 ">
                    <div className="flex flex-col lg:flex-row bg-transparent rounded-xl drop-shadow-2xl shadow-2xl ">
                      <div className="lg:w-1/2 w-full relative">
                        <img
                          src={data.imageUrl}
                          alt="Cindy Crawford"
                          className="object-cover w-full rounded-lg"
                        />
                        <button
                          className=" w-fit absolute right-2 top-2 px-[8px] py-[4px] text-white border-2 border-red-700 bg-red-700
                          rounded-lg hover:bg-transparent hover:text-red-700 hover:border-red-700 duration-200 ease-out select-none cursor-pointer z-50 "
                          onClick={handleCloseResult}
                        >
                          Close
                        </button>
                        <img
                          src="images/ribbone.png"
                          alt="ribbone-mrc"
                          className=" absolute xl:left-[-80px] xl:top-2 lg:left-[-70px] lg:top-2 md:left-[-60px] md:top-2 sm:left-[-50px] sm:top-2 left-[-50px] top-2 z-50 rotate-[-45deg] xl:w-[250px] lg:w-[220px] md:w-[190px] w-[160px] "
                        />
                      </div>

                      <div
                        id="result-container"
                        className="lg:w-1/2 w-fullf flex flex-col justify-between pt-8 "
                      >
                        <div className=" flex flex-col justify-baseline ">
                          <h2 className=" font-stardom tracking-normal xl:text-[42px] lg:text-[34px] md:text-[30px] text-[24px] font-bold text-white mb-2 text-center">
                            {data.name}
                          </h2>

                          <p className="xl:text-lg lg:text-lg text-md text-center text-gray-300 font-G-Sans-medium mb-1">
                            Service Type -{" "}
                            <span className=" font-G-Sans ">
                              {data.serviceType}
                            </span>
                          </p>
                          <p className="xl:text-lg lg:text-lg text-md text-center text-gray-300 font-G-Sans-medium mb-1">
                            Last Update -{" "}
                            <span className=" font-G-Sans ">{data.date}</span>
                          </p>

                          <p className="xl:text-2xl lg:text-lg text-md text-center text-gray-300 font-G-Sans-medium mb-4 w-[80%] mx-auto ">
                            {data.shortNote}
                          </p>
                          <div className=" w-full ">
                            {data.status === "Complete" ? (
                              <div className=" w-full flex justify-center items-center xl:gap[16px] lg:gap-[16px] md:gap-[16px] gap-[8px] ">
                                <span
                                  className=" text-green-800 px-[8px] py-[4px] bg-transparent rounded-lg
                                 text-[16px] flex items-center gap-[8px] "
                                >
                                  Status:
                                  <p className=" flex items-center gap-[4px] ">
                                    {data.status}
                                    <IoMdCloudDone />
                                  </p>
                                </span>
                                <a
                                  href={data.driveLink}
                                  target="_blank"
                                  id="download-link"
                                  className=" flex items-center gap-[6px] px-[8px] py-[4px] rounded-lg bg-gray-400
                                  xl:text-[16px] lg:text-[14px] md:text-[12px] sm:text-[10px] text-[12px] text-black select-none 
                                  hover:bg-transparent hover:text-white duration-300 ease-out "
                                >
                                  <FaCloudDownloadAlt />
                                  Download
                                </a>
                              </div>
                            ) : (
                              <p
                                className="text-blue-500 px-[8px] py-[4px] bg-transparent rounded-lg w-fit 
                                text-[16px] flex justify-center items-center gap-[8px] mx-auto "
                              >
                                Status:
                                <span className=" flex justify-center items-center gap-[6px] ">
                                  {data.status}
                                  <VscServerProcess className=" text-blue-500 " />
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className=" flex justify-between items-center mt-[32px]">
                          <div className=" p-4 flex items-center gap-2  ">
                            <p className=" text-white xl:text-lg lg:text-lg md:text-md text-sm text-center ">
                              @mrcfly
                            </p>
                            <div className=" flex justify-center items-center gap-3 ">
                              <img
                                src="images/instagram.png"
                                alt=""
                                className="xl:w-[25px] w-[20px] select-none cursor-pointer grayscale-0 hover:grayscale-100 duration-300 ease-out "
                              />
                              <img
                                src="images/facebook.png"
                                alt=""
                                className="xl:w-[25px] w-[20px] select-none cursor-pointer grayscale-0 hover:grayscale-100 duration-300 ease-out "
                              />
                              <img
                                src="images/whatsapp.png"
                                alt=""
                                className="xl:w-[25px] w-[20px] select-none cursor-pointer grayscale-0 hover:grayscale-100 duration-300 ease-out "
                              />
                            </div>
                          </div>
                          <img
                            src="images/logomrcsec.png"
                            alt="mrclogo"
                            className="xl:w-[60px] lg:w-[60px] md:w-[50px] w-[40px] "
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-[24px]  ">
                      <p className="text-white font-bold xl:text-xl lg:text-xl md:text-xl text-[14px]">
                        Thanks for choosing our services!
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}

            {loading && (
              <div className=" w-full h-full flex justify-center items-center ">
                <img
                  src="images/loading.gif"
                  alt="planeLoadingAnimation"
                  className="w-[70%] rounded-lg "
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
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-G-Sans-medium px-[26px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#000000] text-center"
          >
            <b>Need help with any of our services?</b> <br />
            Just reach out to our support team — we’re here for you!
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
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
          </motion.div>
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
