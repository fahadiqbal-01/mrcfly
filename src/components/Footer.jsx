import React from "react";
import Container from "./Container";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const footerLinkItemClass = "xl:mt-[8px] lg:mt-[2px] md:mt-0 mt-[-4px] ";
const footerLinkClass =
  "text-white/80 xl:text-[18px] text-[14px] xl:leading-[24px] lg:leading-[16px] md:leading-[12px] font-G-Sans hover:text-gray-500 duration-200 ease-out cursor-pointer";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className=" grid grid-cols-4 pt-[48px] pb-[32px] border-b-2 border-white/50 xl:px-0 lg:px-0 md:px-4 px-[20px] ">
          <div className=" col-span-2 ">
            <Link to="/">
              <img
                src="/images/logomrcsec.png"
                alt="mrclogo"
                className=" xl:w-[100px] lg:w-[80px] md:w-[60px] w-[76px] xl:mb-[16px] lg:mb-[12px] mb-[8px]  "
              />
            </Link>

            <p
              className=" text-white/80 xl:text-[16px] text-[14px] xl:leading-[24px] lg:leading-[16px] leading-[14px] 
            font-G-Sans xl:w-[570px] lg:w-[440px] md:w-[320px] sm:w-[240px] w-[150px] "
            >
              Your trusted partner for job applications, work permits, student
              visas, and tourist visa services — providing expert guidance,
              personalized support, and a hassle-free experience to help you
              achieve your global goals with confidence.
            </p>
          </div>

          <div className=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 xl:ml-0 lg:ml-0 md:ml-0 ml-auto ">
            <label className=" font-switzer-i text-[18px] leading-[28px] text-orange ">
              Quick Links
            </label>
            <ul className=" xl:mt-[16px] lg:mt-[12px] md:mt-[8px] ">
              <li className={footerLinkItemClass}>
                <Link to="/home" className={footerLinkClass}>
                  Home
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/jobapplication" className={footerLinkClass}>
                  Job Applications
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/workpermit" className={footerLinkClass}>
                  Work Permit
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/studentvisa" className={footerLinkClass}>
                  Student visa
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/touristvisa" className={footerLinkClass}>
                  Tourist Visa
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/workpermit" className={footerLinkClass}>
                  Work Permit
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/services" className={footerLinkClass}>
                  Services
                </Link>
              </li>
              <li className={footerLinkItemClass}>
                <Link to="/" className={footerLinkClass}>
                  Track Services
                </Link>
              </li>
            </ul>
          </div>
          <div className=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-3 w-fit xl:mt-0 lg:mt-0 md:mt-0 mt-[16px] ">
            <label className=" font-switzer-i text-[18px] leading-[28px] text-orange ">
              Contact Info
            </label>
            <div className=" font-G-Sans flex flex-col items-start xl:gap-[10px] lg:gap-[10px] md:gap-[10px] gap-[-8px] xl:mt-[16px] lg:mt-[12px] md:mt-[8px] mt-[4px] ">
              <h3 className="flex items-center justify-center gap-[6px] font-Gsans text-[14px] leading-[20px] text-white/80 ">
                <IoCallOutline className="text-[14px] " />
                +880 182 5419803
              </h3>
              <h4 className="font-G-Sans flex items-center justify-center gap-[6px] font-Gsans text-[14px] leading-[20px] text-white/80 ">
                <CiMail className="text-[14px] " />
                info@mrcfly.com
              </h4>
            </div>
          </div>
        </div>
        <div className=" pt-[33px] pb-[48px] flex flex-col justify-center items-center  ">
          <p className="font-G-Sans  text-white/80 xl:text-[14px] lg:text-[12px] text-[10px] ">
            © 2025 MRC. All rights reserved.
          </p>
          <p className=" text-white/80 xl:text-[14px] lg:text-[12px] text-[10px] mt-[6px] flex items-center gap-[8px] ">
            Made by
            {/* <a
              href="https://fahadiqbal.vercel.app/"
              target="_blank"
              className=" text-orange select-none  "
            >
              Fahad Iqbal
            </a>  */}
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
