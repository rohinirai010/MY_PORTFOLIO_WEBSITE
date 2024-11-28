"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  site: string;
}

const ProjectCard = ({ src, title, description, site }: Props) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-300 hover:animate-pulse">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-gray-700">
          {isExpanded ? description : `${description.substring(0, 150)}... `}
          <button 
            onClick={toggleDescription} 
            className="text-blue-500 ml-1"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </p>
        <Link href={site} passHref legacyBehavior>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Go to Site
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
