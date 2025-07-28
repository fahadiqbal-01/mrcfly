import React from "react";
import Container from "./Container";
import List from "./List";
import ListItems from "./ListItems";
import { IoCallOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const activeClass = "text-blue-800 font-G-Sans font-bold"; // Only color and font, no border

const Navbar = () => {
  return (
    <nav className="py-[16px] bg-[#FFFFFF]">
      <Container className="flex flex-row items-center justify-between">
        <NavLink to="/">
          <img src="/images/logomrc.png" alt="weblogo" className=" h-[44px] pl-[15px] select-none " />
        </NavLink>

        <List className="gap-[18px]">
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Home
              </ListItems>
            )}
          </NavLink>
          <NavLink
            to="/jobapplication"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Job Applications
              </ListItems>
            )}
          </NavLink>
          <NavLink
            to="/workpermit"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Work Permit
              </ListItems>
            )}
          </NavLink>
          <NavLink
            to="/studentvisa"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Student visa
              </ListItems>
            )}
          </NavLink>
             <NavLink
            to="/touristvisa"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Tourist Visa
              </ListItems>
            )}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Services
              </ListItems>
            )}
          </NavLink>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? activeClass : undefined)}
          >
            {({ isActive }) => (
              <ListItems className={isActive ? activeClass : ""}>
                Track Service
              </ListItems>
            )}
          </NavLink>
        </List>
        <div className="flex justify-center items-center gap-[16px]">
          <h2 className="text-[14px] text-[#4B5563] flex items-center justify-center gap-[5px]">
            <IoCallOutline className="text-[14px] " />
            +88 017 1234 5678
          </h2>

          <button
            className="font-G-Sans px-[24px] py-[8px] rounded-[8px] text-white bg-orange border-4 border-transparent hover:bg-transparent 
          hover:border-orange hover:text-orange duration-200 ease-out select-none cursor-pointer"
          >
            Free Consultation
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
