import Navbar from '@/components/main/Navbar';
import StarsCanvas from '@/components/main/StarBackground';
import React from 'react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Socials } from '@/constants';
import { BiHome } from 'react-icons/bi';
import Footer from '@/components/main/Footer';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { IoSchoolSharp } from 'react-icons/io5';
import EducationContent from '@/components/sub/EducationContent';

const Star = dynamic(() => import('../components/main/StarBackground'), {
  ssr: false // Disable server-side rendering for this component
});

const letterVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const learnMore = () => {
  const namePart1 = "ROHINI";
  const namePart2 = "RAI";

  const lettersPart1 = namePart1.split("");
  const lettersPart2 = namePart2.split("");

  return (
    <div className='relative flex flex-col w-full h-full bg-[#030014] z-[0]'>
      <StarsCanvas />
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a href="/" className="h-auto w-auto flex flex-row items-center">
            <Image
              src="/NavLogo.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />
            <span className="font-bold ml-[10px] hidden md:block text-gray-300">
              Rohini's Portfolio
            </span>
          </a>
          <div className="h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="/" className="flex flex-row justify-center items-center gap-2 cursor-pointer">
                <BiHome /> Home
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                <Image src={social.src} alt={social.name} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center px-5 md:px-20 mt-24 md:mt-40 mb-20 md:mb-40  md:w-full z-[20]"
      >
        <div className="h-full md:w-full flex-col gap-5 justify-center text-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="flex flex-row md:flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Hi there! I&apos;m <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 flex">
                <span className="flex">
                  {lettersPart1.map((letter, index) => (
                    <motion.span key={index} variants={letterVariant}>
                      {letter}
                    </motion.span>
                  ))}
                </span>
                <span className="mx-4">  </span>
                <span className="flex">
                  {lettersPart2.map((letter, index) => (
                    <motion.span key={index} variants={letterVariant}>
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            A passionate Web Developer and Designer dedicated to crafting beautiful and functional web experiences. With a keen eye for design and a love for clean, efficient code, I transform ideas into stunning, user-friendly websites.
          </motion.p>

          <div className="flex flex-col gap-[2.5rem]">
          <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <IoSchoolSharp className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            EDUCATION
          </h1>
        </motion.div>
        <div>
        <EducationContent year="2020-2024" name="Bachelor of Engineering (BE/Btech) in Computer Science" clgName="Terna Engineering College Nerul Navi Mumbai, Mumbai University"/>
        <EducationContent year="2018-2020" name="HSC" clgName="Fr. Agnel Multipurpose School and Jr. College Vashi, Navi Mumbai"/>
        <EducationContent year="2008-2018" name="SSC" clgName="Pune Vidyarthi Griha&apos;s Vidya Bhawan Nerul, Navi Mumbai"/>
        </div>
          </div>


        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full hidden lg:flex justify-center items-center"
        >
          <Image
            src="/rohini1.jpg"
            alt="work icons"
            height={100}
            width={500}
            className="opacity-[0.7]"
          />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default learnMore;
