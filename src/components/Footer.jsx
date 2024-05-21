import React from "react";
import { Container, Row } from "reactstrap";
import footerLogo from "../assets/img/footer-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaStaylinked, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="mt-10 w-full flex justify-center  bg-black">
        <Container className="w-[90%] ">
          <Row>
            <div className="w-[90%] lg:ms-10 flex lg:flex-nowrap flex-wrap  md:justify-center gap-8 py-14 text-white ">
              <div className="md:w-[25%]  ">
                <div>
                  <img className="w-[150px] pb-5" src={footerLogo} alt="" />
                </div>
                <p className="text-white text-[15px]">
                  We focus on technologies like Routing & Switching, Cyber
                  Security, Cloud Computing, DevOps, Ethical Hacking, Web
                  Development, Graphic Designing, SEO, Digital Marketing,
                  Operating Systems, etc.
                </p>
                <div className="flex gap-3 mt-3 text-xl">
                  <FaWhatsapp className="cursor-pointer hover:text-red-600 hover:scale-125 duration-300" />
                  <FaFacebook className="cursor-pointer hover:text-red-600 hover:scale-125 duration-300" />
                  <FaInstagram className="cursor-pointer hover:text-red-600 hover:scale-125 duration-300" />
                  <FaTwitter className="cursor-pointer hover:text-red-600 hover:scale-125 duration-300" />
                  <FaLinkedin className="cursor-pointer hover:text-red-600 hover:scale-125 duration-300" />
                  
                </div>
              </div>
              <div className="md:w-[20%] ">
                <h1 className='text-xl font-semibold text-red-600'>Quick Links</h1>
                <div className="py-4 text-[16px] flex flex-col gap-2  ">
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">FAQs </h1>
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">Admission</h1>
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">Online IT Training</h1>
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">Class Schedule</h1>
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">Best IT Training</h1>
                  <h1 className="hover:text-red-600 cursor-pointer hover:translate-x-2 duration-300">Job Opportunities</h1>
                </div>
              </div>
              <div className="md:w-[25%] ">
                <h1 className='text-xl font-semibold text-red-600'>Contact Us</h1>
              <div className="py-4 text-[16px] flex flex-col gap-2  ">
              <div className='ps-0 border-0 flex items-center gap-3'>
                <span><MdLocationPin className="text-2xl text-red-600"/></span>
                <p className="text-[18px]">CB-1299 Opposite Circuit Bahawalpur Pakistan</p>
              </div>
              <div className='ps-0 border-0 flex items-center gap-3'>
              <span><MdLocalPhone className="text-2xl text-red-600"/></span>
                <p className="text-[18px]">+923008578889</p>
              </div>
              <div className='ps-0 border-0 flex items-center gap-3'>
              <span><MdContactMail className="text-2xl text-red-600"/></span>
                <p className="text-[18px]">example@gmail.com</p>
              </div>
              </div>
              </div>
              <div className="md:w-[25%] ">
                <h1 className='text-xl font-semibold text-red-600'>Our Location</h1>
                <div className="pt-5 ">
                  <iframe className="rounded"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.3786788853513!2d71.66421307441172!3d29.388476449354016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b97077e2ff945%3A0xe579d42283f9c31!2sCorvit%20Systems%20Bahawalpur!5e0!3m2!1sen!2sch!4v1713577854572!5m2!1sen!2sch"
                    width="300"
                    height="250"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
  <hr />
      <section className="bg-black  text-white ">
        <Container>
        <Row className="w-full  text-center pt-2 -mb-32  pb-2">
          <p className="copyright">
          © Copyright {year} Corvit Systems (Pvt) Ltd. All rights reserved.
          </p>
        </Row>
        </Container>
      </section>
    </>
  );
}
