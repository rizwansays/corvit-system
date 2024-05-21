import React from 'react'
import { Container, Row } from 'reactstrap'
import Ceo from '../assets/img/ceo.png'
import vector from '../assets/img/vector.svg'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function CEO() {
  const vec = vector
  return (
    <section className='mt-10 mb-10 md:mb-0'>
        <div className='flex items-center justify-around  flex-wrap mx-10'>
        <div>
            <div className=''><motion.img 
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }} 
            className='w-[200px] rounded-lg' src={Ceo} alt="" /></div>
          </div>

          <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }} 
          className='md:w-[500px] lg:w-[700px]'>
             <h1 
            //  
            className='text-2xl font-semibold  py-3 text-red-600'>CEO Mission Statement</h1>
             <p
            //  
            >"To empower individuals and organizations with the knowledge and skills needed to excel in the rapidly evolving field of Information Technology. We are committed to providing high-quality, comprehensive, and practical IT training programs that equip our students with the latest industry-relevant skills, tools, and technologies. Our mission is to enable our students to unlock their full potential, enhance their career prospects, and contribute to the growth of the IT industry in Pakistan and beyond. We strive to deliver exceptional training experiences through experienced instructors, state-of-the-art facilities, and hands-on learning approaches. We are dedicated to fostering a culture of continuous learning, collaboration, and innovation, and to promoting ethical and professional practices within the IT community. Our ultimate goal is to be the preferred choice for IT training in Lahore, recognized for our excellence, integrity, and commitment to customer satisfaction."</p>
             <h2 
            //  
            className='mt-4 font-medium text-[16px]'>Haroon Ahmad Malik</h2>
          </motion.div>
        </div>
             
        <div style={{backgroundImage: `url(${vec})`}} className='w-full h-20 object-cover md:flex hidden'></div>
    </section>
  )
}
