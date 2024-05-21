import React, {Component} from 'react'
import { Container, Row } from 'reactstrap'
import Network from '../assets/img/network.jpg'
import BgCyber from '../assets/img/bg3.jpg'
import Cyber from '../assets/img/cyber.jpg'
import Digital from '../assets/img/digital.jpg'
import Frontend from '../assets/img/front.jpeg'
import Android from '../assets/img/mobile.webp'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const data = [
  {
    id: '1',
    title: 'Cyber Security & Ethical Hacking',
    img: Cyber,
    detail: 'The term "Cybersecurity" is used to describe the process of preventing harm to computer systems, networks, and private data through intrusion, misuse, disruption, modification, or destruction.'
  },
  {
    id: '2',
    title: 'SEO & Digital Marketing',
    img: Digital,
    detail: 'Promote your goods and services through digital mediums like the web, search engines, social media, and mobile apps with the help of digital marketing. Marketing is the process of developing and deploying plans to expand exposure to and....'
  },
  {
    id: '3',
    title: 'Network & Cloud Computing',
    img: Network,
    detail: 'The term "networking" refers to the use of computer networks to enable computers and other devices to communicate and share resources. Yet, cloud computing provides scalable and inexpensive solutions by making computing resources like servers '
  },
  {
    id: '4',
    title: 'FRONT END WEB DEVELOPMENT COURSE',
    img: Frontend,
    detail: 'In this project based course you will learn to develop interactive and responsive websites and front-end web development of a enterprise application. It includes HTML5 and CSS3 for creating beautiful web pages'
  },
  {
    id: '5',
    title: 'ANDROID MOBILE APP DEVELOPMENT COURSE',
    img: Android,
    detail: 'This extensive course is designed to provide good understanding of Android mobile app development using latest versions of Java SE, Android SDK, Android Studio and FireBase. Participants of the course will learn...'
  }
]
class OurCourses extends Component {
  render(){
    const bgCyber = BgCyber;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      // cssEase: "linear"
    }
  return (
    <>
    <section style={{backgroundImage: `url(${bgCyber})`}} className='hidden relative bg-cyber w-full h-full py-14 bg-no-repeat bg-cover md:flex justify-center'>
      <Container className='w-[90%]'>
        <Row>
          <div className='w-full mx-auto'>
            <h1 
            // variants={fadeIn("up", 0.3)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className='text-center text-3xl font-semibold text-red-600 '>Top IT Courses Near You</h1>
            
            <div 
            // variants={fadeIn("up", 0.4)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className='border-b border-red-600 w-52 border-2 mx-auto'></div>
            <p
            // variants={fadeIn("up", 0.4)}
            // initial="hidden"
            // whileInView={"show"}
            // viewport={{ once: false, amount: 0.3 }}
            className='text-center text-white py-5 text-lg'>Learn in-demand skills with courses</p>
          </div>
        </Row>

        <Row>
          <div className=' mt-5'>
            <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className='border  border-red-600 w-[330px]  rounded-lg shadow-xl bg-white '>
              <div><img className='w-full h-60 rounded-t-lg object-cover' src={item.img} alt="" /></div>
              <div className='py-4 px-6 '>
                <h1 className='text-lg font-semibold pb-2'>{item.title}</h1>
                <p className='pb-3 text-sm hidden md:flex'>{item.detail}</p>
                <hr />
                <div className='flex justify-between items-center flex-wrap'>
                <button className='text-white bg-red-600 py-3 px-5 rounded-full  mt-5 '>Read More</button>
                <div className='text-lg font-medium mt-4'>Duration : <span>6 Months</span></div>
                </div>
              </div>
            </div>
            ))}
            </Slider>
            
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
  }
}

export default OurCourses;