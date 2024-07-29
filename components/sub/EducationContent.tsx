import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface Props {
    year: string;
    name: string;
    clgName: string;
}

const EducationContent = ({year,name,clgName}: Props) => {
  return (
    <>
    <div className="flex flex-row items-baseline gap-[2rem]">
      <div className="flex flex-col text-center">
        <div className="w-[0.8rem] h-[0.8rem] rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex"></div>
        <div className="w-[1px] h-[8.5rem] ml-[0.4rem] bg-gradient-to-r from-purple-500 to-cyan-500 flex]"></div>
      </div>
      <div>
      <motion.h2
            variants={slideInFromTop}
            className="text-lg text-gray-400 my-4 max-w-[600px]"
          >
            {year}
          </motion.h2>
          <motion.h1
            variants={slideInFromTop}
            className="text-2xl text-[#fff] my-4 max-w-[600px]"
          >
            {name}
          </motion.h1>
          <motion.p
            variants={slideInFromTop}
            className="text-base text-gray-400 my-4 max-w-[600px]"
          >
            {clgName}
          </motion.p>
      </div>
    </div>
    </>
  );
};

export default EducationContent;
