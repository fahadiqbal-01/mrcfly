// src/pages/SearchStatus.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import TrackServicesBanner from "../components/TrackServicesBanner";
import { CiMail, CiSearch } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import ContainerSec from "../components/ContainerSec";
import NeedHelp from "../components/NeedHelp";
import { motion } from "framer-motion";
import Toastify from "toastify-js";
import lottie from "lottie-web";

export default function TrackServices() {
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
  const handleBackdropClick = (e) => {
    if (e.target.id === "result-backdrop") {
      setShowResult(false);
      setData(null);
      setImageLoaded(false);
      setId("");
    }
  };

  return (
    <section id="track-mid" className=" bg-[#ffffff] ">
      <TrackServicesBanner />
      <ContainerSec className=" mb-[120px] ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
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
          className="mt-[48px] bg-transparent border-2 border-[#9CA3AF] rounded-2xl xl:mx-0 mx-[50px]  relative"
        >
          <div className="p-[24px] ">
            {!loading && (!data || !imageLoaded) && !showResult ? (
              <>
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
                    type="number"
                    value={id}
                    placeholder="Enter Passport/NID Number"
                    onChange={(e) => setId(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="flex justify-center items-center gap-[6px] font-G-Sans xl:text-[18px] lg:text-[14px] md:text-[12px] text-[10px] text-white leading-[28px] tracking-[6px]
                      bg-orange border-2 border-transparent xl:px-[34px] xl:py-[17px] lg:px-[30px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px] py-[6px] rounded-[8px] cursor-pointer 
                      hover:border-orange hover:text-orange hover:bg-transparent transition-colors duration-300 ease-out select-none "
                    disabled={loading}
                  >
                    <IoMdSearch className="text-[22px]" /> Track
                  </button>
                  {loading && (
                    <div
                      id="paperplane-animation"
                      style={{ width: 300, height: 300 }}
                    />
                  )}
                </form>

                <div className="mt-[24px]">
                  <h2 className="font-Gambetta xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#4B5563] text-center">
                    <b>Need help with any of our services?</b> <br />
                    Just reach out to our support team — we’re here for you!
                  </h2>
                  <div
                    className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-row flex-col items-center justify-center
                   xl:gap-[16px] lg:gap-[16px] md:gap-[12px] gap-[4px] xl:mt-[16px] lg:mt-[16px] md:mt-[16px] mt-[18px] "
                  >
                    <h3 className="flex items-center justify-center gap-[6px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#4B5563]">
                      <IoCallOutline className="xl:text-[14px] lg:text-[12px] md:text-[10px]" />
                      +880 182 5419803
                    </h3>
                    <h4 className="flex items-center justify-center gap-[6px] xl:text-[14px] lg:text-[12px] md:text-[10px] leading-[20px] text-[#4B5563]">
                      <CiMail className="xl:text-[14px] lg:text-[12px] md:text-[10px]" />
                      moonrajchowdhury@gmail.com
                    </h4>
                  </div>
                </div>
              </>
            ) : null}

            {/* Show loading while fetching and image not loaded */}
            {loading && (
              <div className=" flex justify-center items-center ">
                <img
                  src="images/Paperplane.gif"
                  alt="planeLoadingAnimation"
                  className=" w-[250px] "
                />
              </div>
            )}
          </div>

          {/* Preload image but keep hidden until loaded */}
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

          {/* Popup result card */}
          {showResult && !loading && data && imageLoaded && (
            <div
              id="result-backdrop"
              onClick={handleBackdropClick}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            >
              <div
                className="bg-transparent backdrop-blur-2xl border-2 border-orange rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center animate-popup"
                style={{
                  minWidth: "320px",
                  maxWidth: "95vw",
                  width: "400px",
                  transition: "all 0.3s ease-out",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={data.imageUrl}
                  alt="client_image"
                  className="w-[120px] h-[120px] object-cover rounded-xl mb-4 shadow"
                />
                <h2 className="font-G-Sans-bold text-[28px] text-[#ffffff] mt-2 text-center">
                  {data.name}
                </h2>
                <div className="flex flex-col gap-2 mt-4 justify-center items-center">
                  <h3 className="font-Gambetta text-[18px] text-gray-200">
                    {data.serviceType}
                  </h3>
                  <h4 className="font-Gambetta text-[18px] text-gray-200">
                   Last update: {data.date}
                  </h4>
                </div>
                <h3 className="font-Gambetta text-[18px] text-[#ffffff] leading-[28px] mt-4 text-center">
                  {data.shortNote}
                </h3>
                <div className="mt-6">
                  {data.status === "Complete" ? (
                    <div className=" flex flex-wrap gap-[16px] ">
                      <span className="bg-[#DCFCE7] font-Gambetta text-[16px] text-green px-[16px] py-[8px] rounded-xl select-none ">
                        Status: {data.status}
                      </span>
                      <a
                        href={data.driveLink}
                        target="blank"
                        className=" font-Gambetta text-[16px] text-[#ffffff] bg-orange px-[16px] py-[8px] border-2 border-transparent
                       rounded-xl hover:bg-transparent hover:border-orange hover:text-orange duration-200 ease-out cursor-default select-none z-50 "
                      >
                        Download
                      </a>
                    </div>
                  ) : (
                    <span className="bg-[#DBEAFE] font-Gambetta text-[16px] text-[#1E40AF] px-[16px] py-[8px] rounded-xl">
                      Status: {data.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </ContainerSec>

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
