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
  const handleCloseResult = (e) => {
    setShowResult(false);
    setData(null);
    setImageLoaded(false);
    setId("");
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
            bg-orange border-2 border-transparent xl:px-[34px] xl:py-[17px] lg:px-[30px] lg:py-[14px] md:px-[24px] md:py-[10px] px-[10px] py-[6px] rounded-[8px] cursor-pointer 
            hover:border-orange hover:text-orange hover:bg-transparent transition-colors duration-300 ease-out select-none "
                      disabled={loading}
                    >
                      <IoMdSearch className="text-[22px]" /> Track
                    </button>
                  </form>
                ) : (
                  <div
                    id="result"
                    className="w-full mx-auto bg-transparent border border-gray-200 rounded-lg shadow-sm "
                  >
                    <div className="flex flex-col items-center py-10 relative ">
                      <img
                        className="w-32 mb-3 rounded-lg shadow-lg"
                        src={data.imageUrl}
                        alt="Bonnie image"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                        {data.name}
                      </h5>
                      <span className="text-sm text-gray-500 ">
                        {data.serviceType}
                      </span>
                      <span className="text-sm text-gray-500 ">
                        Last Updated: {data.date}
                      </span>
                      <span className="text-sm text-[#000000] w-[70%] text-center ">
                        {data.shortNote}
                      </span>
                      <div className="flex mt-4 md:mt-6">
                        {data.status === "Complete" ? (
                          <div>
                            <h2 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-green-700 bg-green-200 rounded-lg ">
                              {data.status}
                            </h2>
                            <a
                              href={data.driveLink}
                              target="_blank"
                              className="py-2 px-4 ms-2 text-sm font-medium text-orange focus:outline-none bg-white rounded-lg border border-orange
                               hover:bg-orange hover:text-white duration-300 ease-out "
                            >
                              Download
                            </a>
                          </div>
                        ) : (
                          <a className="py-2 px-4 ms-2 text-sm font-medium text-blue-700 focus:outline-none bg-blue-300 rounded-lg border border-blue-700 ">
                            {data.status}
                          </a>
                        )}
                      </div>
                      <button
                        onClick={handleCloseResult}
                        className=" absolute top-3 right-4 text-red-600 border-2 border-transparent px-[8px] py-[4px] rounded-lg 
                        hover:bg-red-600 hover:text-white duration-300 ease-out cursor-pointer "
                      >
                        Close
                      </button>
                      <div></div>
                    </div>
                  </div>
                )}

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
            )}

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

