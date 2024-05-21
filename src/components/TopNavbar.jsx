import React from "react";
import { FaWhatsapp, FaMailBulk, FaFolder, FaFacebook } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
export default function TopNavbar() {
  return (
    <nav className=" w-full  bg-blue-900 hidden lg:flex">
      <div className="flex items-center lg:gap-4  justify-between py-[10px] lg:ml-14 text-white">
        <div className="hidden lg:flex">
          <h1 className="font-[500] text-sm ">
            Opening Hours: Monday - Saturday 09:00AM - 09:00PM
          </h1>
        </div>
  
          
           
        <div className=' md:w-[890px] flex ps-20 lg:ps-40 '>
        <span className="  flex pr-3 items-center gap-2"><h4 className="font-semibold text-lg">Annoucement</h4> <FaArrowRight /></span>
          <div className="marquee-container mt-1" >
            <div className="marquee-content ">
              Free Microsoft Azure with CCNA -Online / On campus -Schedule 22nd
              Apr 2024 7:30PM -Instructor: Haroon Malik Free Cisco Firewall with
              CCNP -Online / On campus -Schedule 24th Apr 2024 6:30PM
              -Instructor: Haroon Malik Certified Ethical Hacking
            </div>
          </div>
        </div>

        {/* <div className="flex items-center font-medium justify-between gap-6">
          <div className="flex items-center gap-1 text-sm hover:text-red-600 cursor-pointer">
            <FaWhatsapp/>
            <p>+92-3038888555</p>
          </div>
          
          <div className="flex items-center gap-1 text-sm hover:text-red-600 cursor-pointer"><MdOutlineMailOutline /> info@corvit.com</div>
          <div className="flex items-center gap-1 text-sm hover:text-red-600 cursor-pointer"> <FaRegFileAlt /> Inquiry Form | </div>
          <div className="flex items-center gap-1 text-sm hover:text-red-600 cursor-pointer"> <FaFacebook /></div>
        </div>
         */}
      </div>
    </nav>
  );
}
