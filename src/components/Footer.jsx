import React from "react";
import Container from "./Container";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const footerLinkItemClass = "xl:mt-[8px] lg:mt-[2px] md:mt-0 mt-[-4px] ";
const footerLinkClass =
  "text-[#9CA3AF] xl:text-[18px] lg:text-[14px] md:text-[12px] text-[12px] xl:leading-[24px] lg:leading-[16px] md:leading-[12px] font-Gsans hover:text-gray-500 duration-200 ease-out cursor-pointer";

const Footer = () => {
  return (
    <footer
      className=" bg-black "
    >
      <Container>
        <div className=" grid grid-cols-4 pt-[48px] pb-[32px] border-b-2 border-[#1F2937] xl:px-0 lg:px-0 md:px-0 px-[20px] ">
          <div className=" col-span-2 ">
            <img
              src="/images/logomrc.png"
              alt="mrclogo"
              className=" xl:w-[100px] lg:w-[80px] md:w-[60px] w-[76px] xl:mb-[16px] lg:mb-[12px] md:mb-[8px] mb-[4px]  "
            />
            <p className=" text-[#9CA3AF] xl:text-[16px] lg:text-[12px] text-[10px] xl:leading-[24px] lg:leading-[16px] leading-[14px] font-Gsans xl:w-[570px] lg:w-[440px] md:w-[320px] sm:w-[240px] w-[150px] ">
              Your trusted partner for professional visa services, CV creation,
              and application assistance. We help you achieve your international
              dreams with expert guidance and support.
            </p>
          </div>

          <div className=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-2 xl:ml-0 lg:ml-0 md:ml-0 ml-auto ">
            <label className=" font-G-Sans xl:text-[18px] lg:text-[14px] md:text-[12px] text-[12px] leading-[28px] text-orange ">
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
          <div className=" xl:col-span-1 lg:col-span-1 md:col-span-1 col-span-3 w-fit ">
            <label className=" font-G-Sans xl:text-[18px] lg:text-[14px] md:text-[12px] text-[12px] leading-[28px] text-orange ">
              Contact Info
            </label>
            <div className="flex flex-col items-start xl:gap-[10px] lg:gap-[10px] md:gap-[10px] gap-[-8px] xl:mt-[16px] lg:mt-[12px] md:mt-[8px] mt-[4px] ">
              <h3 className="flex items-center justify-center gap-[6px] font-Gsans xl:text-[14px] text-[10px] leading-[20px] text-[#9CA3AF] ">
                <IoCallOutline className="xl:text-[14px] text-[10px] " />
                +880 182 5419803
              </h3>
              <h4 className="flex items-center justify-center gap-[6px] font-Gsans xl:text-[14px] text-[10px] leading-[20px] text-[#9CA3AF] ">
                <CiMail className="xl:text-[14px]  md:text-[8px]" />
                moonrajchowdhury@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className=" pt-[33px] pb-[48px] flex justify-center items-center  ">
          <p className=" text-[#9CA3AF] xl:text-[14px] lg:text-[12px] text-[10px] ">
            © 2025 MRC. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
