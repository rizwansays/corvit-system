import React from 'react'
import { Container, Row, Form, FormGroup } from 'reactstrap'
import contact from '../assets/img/software.jpg'
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export default function ContactMain() {
  return (
    <section className='w-full flex justify-center my-20 overflow-hidden'>
      <Container className='w-[90%]'>
       <Row>
        <div className='flex gap-20 flex-wrap'>
          <div className='md:w-[40%] lg:w-[50%]'> <motion.img 
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='w-[600px] rounded-2xl' src={contact}  alt="" /></div>
          <div className='md:w-[40%]'>
            <motion.h1 
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className='text-3xl font-semibold text-red-600'>Quick Inquiry</motion.h1>
            <Form className='mt-5'>
              <FormGroup>
               <motion.div 
               variants={fadeIn("left", 0.3)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='py-2 flex justify-center items-center'>
                <IoMdPerson className='text-2xl text-red-600' />
                <input required className='py-2 px-2 outline-none border-b border-red-600 text-[18px] w-full' type="text" placeholder='Enter Full Name' /></motion.div>
               <motion.div 
               variants={fadeIn("left", 0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='py-2 flex justify-center items-center'>
                <MdEmail className='text-2xl text-red-600' />
                <input required className='py-2 px-2 outline-none border-b border-red-600 text-[18px] w-full' type="email" placeholder='Enter Your Email' /></motion.div>
               <motion.div 
               variants={fadeIn("left", 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='py-2 flex justify-center items-center'>
                <MdLocalPhone className='text-2xl text-red-600' />
                <input required className='py-2 px-2 outline-none border-b border-red-600 text-[18px] w-full' type="number" placeholder='Enter Your Number' /></motion.div>
               <motion.div 
               variants={fadeIn("left", 0.6)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='py-2 flex justify-center '>
                <FaMessage className='text-2xl text-red-600 mt-2'/>
                <textarea required className='py-2 px-2 outline-none border-b border-red-600 text-[18px] w-full' placeholder='Enter Your Message' name="" id="" cols="30" rows="4"></textarea></motion.div>
  
               <div className='text-center'><motion.button 
               variants={fadeIn("left", 0.6)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.3 }}
               className='bg-[#CB2025] text-white text-lg py-2 px-5 mt-3  rounded-full ' type='submit'>Send</motion.button></div>
              </FormGroup>
            </Form>
          </div>
        </div>
       </Row>
      </Container>
    </section>
  )
}
