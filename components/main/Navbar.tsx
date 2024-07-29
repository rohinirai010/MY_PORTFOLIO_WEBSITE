"use client"

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { BiCertification, BiCode } from "react-icons/bi";
import { BsFilePerson, BsFillProjectorFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-2 sm:ml-4 hidden lg:block text-gray-300">
            Rohini's Portfolio
          </span>
        </a>

        <div className="hidden md:flex w-full md:w-[700px] h-full flex-row items-center justify-between mr-10 lg:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="flex flex-row justify-center items-center gap-1 cursor-pointer">
              <BsFilePerson /> About me
            </a>
            <a href="#skills" className="flex flex-row justify-center items-center gap-1 cursor-pointer">
              <BiCode /> Skills
            </a>
            <a href="#projects" className="flex flex-row justify-center items-center gap-1 cursor-pointer">
              <BsFillProjectorFill /> Projects
            </a>
            <a href="#certificates" className="flex flex-row justify-center items-center gap-1 cursor-pointer">
              <BiCertification /> Certificates
            </a>
            <a href="#experience" className="flex flex-row justify-center items-center gap-1 cursor-pointer">
              <MdWork /> Experience
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-300 focus:outline-none">
            {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-2">
          <div className="flex flex-col items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-lg text-gray-200">
            <a href="#about-me" className="flex flex-row justify-center items-center gap-1 cursor-pointer my-1">
              <BsFilePerson /> About me
            </a>
            <a href="#skills" className="flex flex-row justify-center items-center gap-1 cursor-pointer my-1">
              <BiCode /> Skills
            </a>
            <a href="#projects" className="flex flex-row justify-center items-center gap-1 cursor-pointer my-1">
              <BsFillProjectorFill /> Projects
            </a>
            <a href="#certificates" className="flex flex-row justify-center items-center gap-1 cursor-pointer my-1">
              <BiCertification /> Certificates
            </a>
            <a href="#experience" className="flex flex-row justify-center items-center gap-1 cursor-pointer my-1">
              <MdWork /> Experience
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
