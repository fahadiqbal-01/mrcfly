import React from "react";
import Container from "./Container";
import List from "./List";
import ListItems from "./ListItems";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMenu5Line } from "react-icons/ri";

const activeClass = "text-blue-800 font-G-Sans font-bold"; // Only color and font, no border

const Navbar = () => {
  const [handleToogle, sethandleToogle] = React.useState(false);
  const handleToogleChangeBack = () => {
    sethandleToogle(true);
  };
  const handleToogleChange = () => {
    sethandleToogle(!handleToogle);
  };
  const handleClose = () => {
    sethandleToogle(false);
  };
  const handleToggle = () => {
    sethandleToogle(!handleToogle);
  };

  return (
    <nav className="py-[16px] bg-[#FFFFFF] relative ">
      <Container className="flex flex-row items-center justify-between ">
        <NavLink to="/">
          <motion.img
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="/images/logomrc.png"
            alt="weblogo"
            className=" h-[44px] pl-[15px] select-none  "
          />
        </NavLink>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={` ${
            handleToogle
              ? "block absolute left-0 top-[70px] bg-[#ffffff] pb-[36px] z-50 "
              : " xl:flex lg:flex md:flex sm:hidden hidden"
          }   items-center justify-end w-full 
        xl:gap-[140px] lg:gap-[100px] md:gap-[50px] sm:gap-[40px] gap-[20px] `}
        >
          <List className="xl:lg:md:gap-[24px] sm:gap-[12px] gap-[8px]">
            <NavLink
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
            <button
              className="font-G-Sans px-[24px] py-[8px] xl:text-[14px] lg:text-[10px] md:text-[8px] xl:mt-0 lg:mt-0 md:mt-0 sm:mt-[18px] mt-[18px] 
               rounded-[8px] text-white bg-orange border-4 border-transparent hover:bg-transparent 
          hover:border-orange hover:text-orange duration-200 ease-out select-none cursor-pointer"
            >
              Free Consultation
            </button>
          </div>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          onClick={handleToggle}
          className=" xl:hidden lg:hidden md:hidden block xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 mr-[20px] "
        >
          <RiMenu5Line
            onClick={handleToogleChange}
            className={` ${handleToogle ? "block" : "hidden"} text-[28px]`}
          />
          <AiOutlineMenu
            onClick={handleToogleChangeBack}
            className={` ${handleToogle ? "hidden" : "block"} text-[28px] `}
          />
        </motion.button>
      </Container>
    </nav>
  );
};

export default Navbar;
