import React from 'react'
import { Container, Row } from 'reactstrap'
import Network from '../assets/img/network.jpg'
import Accounting from '../assets/img/accounting.jpg'
import Frontend from '../assets/img/free.jpeg'
import Android from '../assets/img/mobile.webp'
import BgCyber from '../assets/img/bg-cyber.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function LatestOffers() {
  const bgCyber = BgCyber;
  return (
    <>
    <section style={{backgroundImage: `url(${bgCyber})`}} className='relative mt-20 bg-cyber w-full h-full py-14 bg-no-repeat bg-cover overflow-hidden'>
      <Container>
        <Row>
          <div className='w-full mx-auto'>
            <motion.h1 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='text-center text-3xl font-medium text-red-600 '>Latest Offers</motion.h1>
            
            <motion.div 
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='border-b border-red-600 w-20 border-2 mx-auto'></motion.div>
            <motion.p 
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='text-center text-white py-5 text-lg'>We are Offering Free Courses For You</motion.p>
          </div>
        </Row>

        <Row>
          <div className='flex justify-center items-center gap-6 flex-wrap mt-5 '>
            <motion.div 
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='border border-red-600 w-[350px] md:w-[360px] lg:w-[430px] rounded-lg shadow-xl bg-white mx-2'>
              <div><img className='w-full h-60 rounded-t-lg object-center ' src={Frontend} alt="" /></div>
              <div className='py-4 px-6 '>
                <h1 className='text-lg font-semibold pb-2'>Free Machine Learning Course</h1>
                <p className='pb-3 text-sm'>CCNA is an information technology certification from Cisco Systems. CCNA certification is an associate-level Cisco Career certification. The Cisco exams have changed several times in response to changing IT trends.</p>
                <hr />
                <div className='flex justify-between items-center flex-wrap'>
                <button className='text-white bg-red-600 py-3 px-5 rounded-full  mt-5 '>Read More</button>
                <div className='text-lg font-medium mt-4'>Duration : <span>6 Months</span></div>
                </div>
              </div>
            </motion.div>
            <motion.div 
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='border border-red-600 w-[350px] md:w-[360px] lg:w-[430px]   rounded-lg shadow-xl bg-white '>
              <div><img className='w-full h-60 rounded-t-lg object-center' src={Frontend} alt="" /></div>
              <div className='py-4 px-6'>
                <h1 className='text-lg font-semibold pb-2'>Free Cyber Security Course</h1>
                <p className='pb-3 text-sm'>In this project based course you will learn to develop interactive and responsive websites and front-end web development of a enterprise application. It includes HTML5 and CSS3 for creating beautiful web pages
                <br /></p>
                <hr />
                <div className='flex justify-between items-center'>
                <button className='text-white bg-red-600 py-3 px-5 rounded-full  mt-5 '>Read More</button>
                <div className='text-lg font-medium mt-4'>Duration : <span>6 Months</span></div>
                </div>
              </div>
            </motion.div>
            
          </div>
        </Row>
      </Container>
    </section>
    </>
  )
}
