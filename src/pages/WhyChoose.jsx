import React from 'react'
import { Container, Row } from 'reactstrap'
import { FaRegHandPointRight } from "react-icons/fa6";
import vector from '../assets/img/vector.svg'
import whyChoose from '../assets/img/whychoose.png'
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function WhyChoose() {
  const vec = vector
  return (
    <section className='mt-20 w-full overflow-hidden'>
      <Container>
       <Row>
        <div className='flex flex-wrap justify-around gap-14 px-4'>
          <div className=''>
          <motion.h1 
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='text-4xl font-semibold text-red-600 mb-8'>Why Choose US?</motion.h1>
          <motion.p 
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Money Making Skills</span> </motion.p>
          <motion.p 
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Hands on Experience during Training</span> </motion.p>
          <motion.p 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Internship & Job Opportunities</span> </motion.p>
          <motion.p 
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Highly Experienced Instructors</span> </motion.p>
          <motion.p 
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Professional Learning Environment</span> </motion.p>
          <motion.p 
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex items-center gap-5 pb-4'><FaRegHandPointRight className='text-2xl text-red-600 ' /><span className='text-lg font-medium'>Learning Management System</span> </motion.p>
          </div>
          <div>
            <motion.img  
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            src={whyChoose} className='w-[500px]' alt="" />
          </div>
        </div>
       </Row>
      </Container>

      <div style={{backgroundImage: `url(${vec})`}} className='w-full h-20 object-cover md:flex hidden'></div>
    </section>
  )
}
