import React from "react";
import Container from "./Container";
import List from "./List";
import ListItems from "./ListItems";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" py-[16px] bg-[#FFFFFF] ">
      <Container className=" flex flex-row items-center justify-between ">
        <Link to="/">
          <img src="/images/logo.png" alt="weblogo" />
        </Link>

        <List className=" gap-[32px] ">
          <Link to="/home">
            <ListItems>Home</ListItems>
          </Link>

          <Link to="/jobapplication">
            <ListItems>Job Applications</ListItems>
          </Link>
          <Link to="/applications">
            <ListItems>Applications</ListItems>
          </Link>

          <Link to="/services">
            <ListItems>Services</ListItems>
          </Link>
          <Link to="/">
            <ListItems>Track Service</ListItems>
          </Link>
        </List>
        <div className=" flex justify-center items-center gap-[16px] ">
          <h2 className=" text-[18px] text-[#4B5563] flex items-center justify-center  gap-[5px] ">
            <IoCallOutline className=" text-[20px] " />
            +88 017 1234 5678
          </h2>

          <button
            className=" font-G-Sans px-[24px] py-[8px] rounded-[8px] bg-[#2563EB] border-4 border-transparent hover:bg-transparent 
          hover:border-[#2563EB] hover:text-[#2563EB] select-none cursor-pointer  "
          >
            Free Consultation
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
