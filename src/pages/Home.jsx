import { useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import React from "react";
import WhatsAppLogo from "../assets/img/WhatsApp.svg.webp";
// import img1 from '../assets/img/1.jpeg'
// import img2 from '../assets/img/2.2jpg'
// import img3 from '../assets/img/3.png'
// import video from '../assets/img/clip.webp'
import img1 from "../assets/img/1.1.jpg";
import img2 from "../assets/img/2.2.jpg";
import img3 from "../assets/img/3.3.jpg";
import video2 from "../assets/img/mainvid.mp4";
import Carousele from "./Carousel";
import { RxDotFilled } from "react-icons/rx";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { FaArrowUp, FaRegIdBadge } from "react-icons/fa";
import { IoTrendingUpSharp } from "react-icons/io5";
import LatestOffers from "./LatestOffers";
import CEO from "./CEO";
import OurCourses from "./OurCourses";
import WhyChoose from "./WhyChoose";
import OurClients from "../components/OurClients";
import ContactMain from "./ContectMain";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import HomeMain from "./HomeMain";
import { WiSnow } from "react-icons/wi";
import OurCoursesM from "./OurCoursesM";
import OurClientsM from "../components/OurClientsM";
import Slider from "./Slider";
const slide = [
  img1,
  img2,
  img3,
  // vide,
];
export default function Home() {
  const [scrollTop, setScrollTop] = useState(false);
  const toTop = useRef();
  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScroll = (event) => {
      // setScrollTop(window.scrollY);
      // console.log('window.scrollY', window.scrollY);
      if (window.scrollY > 400) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Slider />

      <section className=" mt-10 flex justify-center items-center w-full">
        <Container>
          <Row className=" ">
            <div className="w-full text-center flex flex-col justify-center flex-wrap">
              <h1
                // variants={fadeIn("up", 0.3)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                className=" text-2xl text-red-600 font-semibold py-3 text-center"
              >
                Benefits Of Learning With Corvit
              </h1>
              <p
                // variants={fadeIn("up", 0.4)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                className="pb-5 lg:px-52 px-3"
              >
                The vision got wider when Corvit started to expand its roots in
                different cities of Pakistan like Bahawalpur, Lahore, Islamabad,
                Peshawar, and Multan. Corvit envisions to make a skillful and
                successful Pakistan therefore is working tirelessly to become an
                epitome of skilled house.
              </p>
            </div>
          </Row>
          <Row>
            <div className="w-full flex justify-center items-center gap-5 flex-wrap px-3 md:px-0">
              <div
                // variants={fadeIn("up", 0.5)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                className="card1 border-red-600 border w-[340px] flex items-center gap-3 justify-center py-3 px-4 rounded shadow-xl hover:scale-110 duration-300"
              >
                <div>
                  <GiSkills className="text-red-600 text-4xl" />
                </div>
                <div>
                  <h1 className="text-lg font-medium">
                    Learn The Latest Skills
                  </h1>
                  <p>In Designing, Development, Business and more</p>
                </div>
              </div>
              <div
                // variants={fadeIn("up", 0.4)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                className="card2 border-red-600 border w-[340px] flex items-center gap-3 justify-center py-3 px-4 rounded shadow-xl hover:scale-110 duration-300"
              >
                <div>
                  <FaRegIdBadge className="text-red-600 text-4xl" />
                </div>
                <div>
                  <h1 className="text-lg font-medium">
                    Highly Experienced Trainers
                  </h1>
                  <p>Well equipped with latest training methodologies</p>
                </div>
              </div>
              <div
                // variants={fadeIn("up", 0.5)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{ once: false, amount: 0.3 }}
                className="card3 border-red-600 border w-[340px] flex items-center gap-3 justify-center py-3 px-4 rounded shadow-xl hover:scale-110 duration-300"
              >
                <div>
                  <IoTrendingUpSharp className="text-red-600 text-4xl" />
                </div>
                <div>
                  <h1 className="text-lg font-medium">
                    UpSkill Your Organization
                  </h1>
                  <p>With on-demand training and development programs</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      {/* <HomeMain /> */}
     
      <LatestOffers />
      <CEO />
      <OurCourses />
      <OurCoursesM />
      <WhyChoose />
      <OurClients />
      <OurClientsM />
      {scrollTop && (
        <div
          className="fixed right-7 md:right-3 bottom-2 md:bottom-0 bg-red-500 cursor-pointer p-2 text-white text-lg rounded-full animate-bounce"
          onClick={() => scrollToTop(toTop)}
        >
          <FaArrowUp />
        </div>
      )}

      <div class="fixed z-50 bottom-10 md:bottom-9 right-3 md:right-0 p-3 flex justify-center items-center">
        <span className="hidden md:block cursor-pointer bg-white p-[6px] text-[12px] rounded-md">
          Need Help? <span className="font-semibold">Chat with us</span>
        </span>
        <a
          href="https://wa.me/923078683925?text=Hello My Name is ?"
          target="_blank"
          className="inline"
        >
          <img src={WhatsAppLogo} width="45" alt="aaaa" className="inline" />
        </a>
      </div>
    </>
  );
}
