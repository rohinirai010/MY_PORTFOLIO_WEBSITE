"use client";

import Link from "next/link";
import React from "react";
import CertificateCard from "../sub/CertificateCard";

const Certificates = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="certificates"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Certificates
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row md:flex-row gap-10 px-10">
        <CertificateCard
          title="TCS iON Career Edge - Young Professional"
          description="This was a soft skill course which covers: Communication Skills │ Presentation Skills│ Soft Skills │ Career Guidance Framework │ Resume Writing │ Group Discussion Skills│ Interview Skills │ Business Etiquette │ Effective Email Writing │ Telephone Etiquette │ Accounting Fundamentals │ IT Foundational Skills │ Overview of Artificial Intelligence*(Source: NPTEL)"
          link="tcs.pdf"
        />
        <CertificateCard
          title="IBM Blockchain Essentials"
          description="IBM Blockchain Essentials on cognitive.ai covers the basics of blockchain technology, including its principles, components, and operation. The course explains how transactions are validated and added to the blockchain, explores different types of blockchain networks, and highlights potential industry applications and benefits."
          link="https://courses.cognitiveclass.ai/certificates/e2397dc2250540f1a9a18a65f5ec703e"
        />
        <CertificateCard
          title="Google Developer Student Clubs"
          description="I had volunteered as Core Team Member of Google Developer Student Clubs Terna Engineering College in year of 2022-23. Where I was responsible for planning and conducting various technical events"
          link="gdsc.pdf"
        />
        <CertificateCard
          title="Hacktoberfest"
          description="Hacktoberfest is an annual, month-long event which occurs in October in which I participated and successfully contributed to open-source projects on GitHub by completing all 4 pull merge requests."
          link="https://www.holopin.io/@rohini_010#badges"
        />
        <CertificateCard
          title="TCS iON National Qualifier Test (NQT) "
          description="Achieved a strong performance in the TCS iON NQT, showcasing proficiency in
 cognitive skills, problem-solving, and aptitude, validated for employability across
 multiple industries."
          link="https://drive.google.com/file/d/1OVia9YgDWDvLweHkdvt4VC0_U9vAMW57/view?usp=sharing"
        />
        <CertificateCard
          title="Great Learning: Introduction to ML"
          description="This course provides me with a foundational understanding of machine learning concepts and techniques. It covers key topics such as supervised and unsupervised learning, model evaluation, and common algorithms like linear regression, decision trees, and clustering. The course aims to equip me with the skills needed to apply machine learning to real-world problems."
          link="ml.jpeg"
        />
        <CertificateCard
          title="Smart India Hackathon"
          description="Smart India Hackathon is a nationwide event where teams of students and professionals work to develop innovative solutions to real-world problems set by government and industry. Participants collaborate intensively to address challenges and create impactful prototypes."
          link="sih.pdf"
        />
      </div>
    </div>
  );
};

export default Certificates;
