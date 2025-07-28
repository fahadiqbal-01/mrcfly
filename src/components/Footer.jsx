import React from "react";
import Container from "./Container";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const footerLinkItemClass = "mt-[8px]";
const footerLinkClass =
  "text-[#9CA3AF] text-[18px] leading-[24px] font-Gsans hover:text-gray-500 duration-200 ease-out cursor-pointer";

const Footer = () => {
  return (
    <footer className=" bg-black ">
      <Container>
        <div className=" grid grid-cols-4 pt-[48px] pb-[32px] border-b-2 border-[#1F2937] ">
          <div className=" col-span-2 ">
            <img
              src="/images/logomrc.png"
              alt="mrclogo"
              className=" w-[100px] mb-[16px] "
            />
            <p className=" text-[#9CA3AF] text-[16px] leading-[24px] font-Gsans w-[570px] ">
              Your trusted partner for professional visa services, CV creation,
              and application assistance. We help you achieve your international
              dreams with expert guidance and support.
            </p>
            <div className="flex items-center gap-[16px] mt-[16px]">
              <h3 className="flex items-center justify-center gap-[6px] font-Gsans text-[14px] leading-[20px] text-[#9CA3AF]">
                <IoCallOutline className="text-[14px]" />
                +1 (234) 567-890
              </h3>
              <h4 className="flex items-center justify-center gap-[6px] font-Gsans text-[14px] leading-[20px] text-[#9CA3AF]">
                <CiMail className="text-[14px]" />
                support@mrs.com
              </h4>
            </div>
          </div>
          <div>
            <label className=" font-G-Sans text-[18px] leading-[28px] text-orange ">
              Quick Links
            </label>
            <ul className=" mt-[16px] ">
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
          <div>
            <label className=" font-G-Sans text-[18px] leading-[28px] text-orange ">
              Contact Info
            </label>
            <div className=" flex items-start gap-[8px] mt-[16px] ">
              <IoLocationOutline className=" text-[20px] text-[#60A5FA] " />
              <p className=" text-[14px] font-Gsans leading-[20px] text-[#9CA3AF] ">
                123 Business Avenue <br />
                Suite 456 <br />
                New York, NY 10001
              </p>
            </div>
          </div>
        </div>
        <div className=" pt-[33px] pb-[48px] flex justify-center items-center  ">
          <p className=" text-[#9CA3AF] ">© 2025 MRC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
