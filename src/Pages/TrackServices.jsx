// src/pages/SearchStatus.jsx
import { useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import TrackServicesBanner from "../components/TrackServicesBanner";
import { CiMail, CiSearch } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import ContainerSec from "../components/ContainerSec";
import { div } from "framer-motion/client";
import NeedHelp from "../components/NeedHelp";

export default function TrackServices() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = async () => {
    if (!id.trim()) {
      alert("Please enter an ID number");
      return;
    }
    setLoading(true);
    setImageLoaded(false);
    const docRef = doc(db, "entries", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      // Don't set loading to false here!
      // Wait until image loads
    } else {
      setData(null);
      setLoading(false);
      alert("ID not found.");
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
    <section>
      <TrackServicesBanner />
      <ContainerSec className=" mb-[120px] " >
        <div className="pt-[80px] text-center">
          <h3 className="font-G-Sans-bold text-[30px] leading-[36px] text-black">
            Track Your Service
          </h3>
          <h4 className="mt-[16px] text-[#4B5563] font-Gambetta text-[18px] leading-[28px]">
            Enter your service ID or registered email address to view the
            current status of your request
          </h4>
        </div>

        <div className="mt-[48px] bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-2xl relative">
          <div className="p-[33px]">
            {/* Show search box and help text ONLY when not loading and not showing result */}
            {!loading && (!data || !imageLoaded) && !showResult ? (
              <>
                <div className="flex items-center justify-center gap-[16px]">
                  <input
                    className="bg-[#ffffff] px-[25px] py-[19px] w-full max-w-[610px] border-2 border-[#9CA3AF] rounded-[8px] focus:outline-none focus:border-green placeholder:text-[18px] placeholder:font-Gambetta"
                    type="text"
                    placeholder="Enter Passport/NID Number"
                    onChange={(e) => setId(e.target.value)}
                  />
                  <button
                    onClick={handleSearch}
                    className="flex justify-center items-center gap-[6px] font-G-Sans text-[18px] text-white leading-[28px] bg-[#16A34A] opacity-50 px-[34px] py-[17px] rounded-[8px] select-auto cursor-pointer"
                  >
                    <IoMdSearch className="text-[22px]" /> Track
                  </button>
                </div>
                {/* Help/support text */}
                <div className="mt-[24px]">
                  <h2 className="font-Gambetta text-[14px] leading-[20px] text-[#4B5563] text-center">
                    Need help finding your service ID? Check your email
                    confirmation or contact our support team.
                  </h2>
                  <div className="flex items-center justify-center gap-[16px] mt-[16px]">
                    <h3 className="flex items-center justify-center gap-[6px] font-Gambetta text-[14px] leading-[20px] text-[#4B5563]">
                      <IoCallOutline className="text-[14px]" />
                      +1 (234) 567-890
                    </h3>
                    <h4 className="flex items-center justify-center gap-[6px] font-Gambetta text-[14px] leading-[20px] text-[#4B5563]">
                      <CiMail className="text-[14px]" />
                      support@mrs.com
                    </h4>
                  </div>
                </div>
              </>
            ) : null}

            {/* Show loading while fetching and image not loaded */}
            {loading && (
              <div className="text-center py-8 text-lg font-bold">
                Loading...
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            >
              <div
                className="bg-[#F0FDF4] border-2 border-[#BBF7D0] rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center animate-popup"
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
                <h2 className="font-G-Sans-bold text-[28px] text-black mt-2 text-center">
                  {data.name}
                </h2>
                <div className="flex gap-2 mt-4 justify-center items-center">
                  <h3 className="font-Gambetta text-[18px] text-gray-500">
                    {data.serviceType}
                  </h3>
                  <span className="text-gray-400">|</span>
                  <h4 className="font-Gambetta text-[18px] text-gray-500">
                    {data.date}
                  </h4>
                </div>
                <h3 className="font-Gambetta text-[18px] text-black leading-[28px] mt-4 text-center">
                  {data.shortNote}
                </h3>
                <div className="mt-6">
                  {data.status === "Complete" ? (
                    <span className="bg-[#DCFCE7] font-Gambetta text-[16px] text-green-600 px-[16px] py-[8px] rounded-xl">
                      Status: {data.status}
                    </span>
                  ) : (
                    <span className="bg-[#DBEAFE] font-Gambetta text-[16px] text-[#1E40AF] px-[16px] py-[8px] rounded-xl">
                      Status: {data.status}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
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
