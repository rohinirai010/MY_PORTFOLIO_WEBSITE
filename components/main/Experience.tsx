"use client"

import React from 'react'
import ExperienceContent from '../sub/ExperienceContent'
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
  } from "@/utils/motion";
import { motion } from "framer-motion";
import { MdWork } from 'react-icons/md';

const Experience = () => {
  return (
    <div className='flex flex-col items-center gap-[2rem] mt-[5rem] px-4 md:px-0' id='experience'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <MdWork className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
             WORK EXPERIENCE
          </h1>
        </motion.div>
        <ExperienceContent duration='06/2022 - 12/2022' cmpName='iTDAY INDIA pvt ltd. (Jr. Frontend Web Developer Intern)' description='jkkkkkkk' link='internship.pdf'/>
    </div>
  )
}

export default Experience