import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  description: string;
  link?: string; // Optional prop for the certificate link
}

const CertificateCard = ({ title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group">
      {/* Card content */}
      <div className="relative flex flex-col gap-4 p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>

      {/* Hover content */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#050B22E1] text-[#a2783a] transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-300">
        {link && (
          <Link href={link} target="_blank" passHref>
            <span className="text-xl font-semibold">View Certificate</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CertificateCard;
