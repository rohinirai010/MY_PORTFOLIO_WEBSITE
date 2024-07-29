import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/in/rohini0110/" target="_blank">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://github.com/rohinirai010" target="_blank">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/in/rohini0110/" target="_blank">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.instagram.com/rohini.rai.969?igsh=d3p4aHUybWVpYnU=" target="_blank">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/in/rohini0110/" target="_blank">
                        <FaTwitter />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/in/rohini0110/" target="_blank">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <Link href="/learnMore" passHref>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    </Link>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">rairohini2001@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Rohini Rai 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer