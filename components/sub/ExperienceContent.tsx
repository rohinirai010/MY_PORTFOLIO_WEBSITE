import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Link from "next/link";

interface Props {
  duration: string;
  cmpName: string;
  description: string;
  link: string;
}

const ExperienceContent = ({ duration, cmpName, description, link }: Props) => {
  return (
    <>
      <div className="flex flex-col items-center gap-[2rem]">
      <motion.h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
        My Experience
      </motion.h1>
        <div className="flex flex-row items-baseline gap-[2rem]">
        <div className="flex flex-col text-center">
          <div className="w-[0.8rem] h-[0.8rem] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex"></div>
          <div className="w-[1px] h-[29rem] ml-[0.4rem] bg-gradient-to-r from-purple-500 to-cyan-500 flex]"></div>
        </div>
        <div>
          <motion.h2
            variants={slideInFromTop}
            className="text-lg text-gray-400 my-4 max-w-[600px]"
          >
            {duration}
          </motion.h2>
          <motion.h1
            variants={slideInFromLeft(0.8)}
            className="text-2xl text-[#fff] my-4 max-w-[600px]"
          >
            {cmpName}
          </motion.h1>
          <motion.ul
            variants={slideInFromTop}
            className="text-base text-gray-400 my-4 max-w-[600px] list-disc leading-7"
          >
              <li>Designed and implemented user-friendly web interfaces using HTML, CSS, JavaScript, and modern frontend frameworks.</li>
              <li>Gained proficiency in React, version control with Git, and web development best practices.</li>
              <li>Contributed to successful web application launches, enhancing user engagement and satisfaction. </li>
              <li>Worked closely with cross-functional teams, including designers and backend developers, to deliver high-quality web solutions.</li>
              <li>Improved problem-solving skills and gained insights into the software development lifecycle and agile methodologies.</li>
          </motion.ul>
          <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex items-center justify-center gap-2"
          href="/internship.pdf" target="_blank"
        >
            View Certificate
        </motion.a>
        </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceContent;
