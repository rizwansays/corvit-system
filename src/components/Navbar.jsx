import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import NavLinks from "./NavLinks";
import Logo from "../assets/img/logo.webp";
export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const headerRef = useRef(null);
  const stickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeader();
    return () => window.removeEventListener("scroll", stickyHeader);
  });
  return (
    <div>
      <nav
        ref={headerRef}
        className="bg-white h-[65px] w-full flex justify-center shadow-md z-50 "
      >
        <div className="flex items-center font-medium lg:justify-around justify-center py-[4px]  w-full ">
          <div className="z-50   flex justify-between items-center lg:w-auto w-full px-5 lg:px-0">
            {/* <img src={Logo} alt="" className="md:cursor-pointer h-14" /> */}
            <Link to="home">
              <img className="w-[110px] cursor-pointer" src={Logo} alt="" />
            </Link>
            <div
              className="lg:hidden text-3xl cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <MdOutlineClose className="text-red-600" />
              ) : (
                <FiMenu className="text-red-600" />
              )}
            </div>
          </div>
          <div className="navigation">
            <ul className="lg:flex hidden uppercase items-center gap-6 menu duration-500 font-[Poppins]">
              <NavLinks />
            </ul>
          </div>

          <div className="lg:flex hidden items-center justify-center gap-4">
            <button className="bg-[#CB2025] text-white py-2 px-3 rounded-full ">
              Contact Us
            </button>
            
          </div>

          {/*Mobile Navbar */}
          <ul
            className={`lg:hidden bg-white  absolute w-full top-0 flex flex-col  justify-center py-24 px-8 duration-500 z-40  ${
              menu ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className="flex flex-col  text-[16px] ">
              <NavLinks />
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
