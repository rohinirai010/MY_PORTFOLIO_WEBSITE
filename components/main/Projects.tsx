import React, { useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";


const Projects = () => {
  
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row md:flex-row gap-10 px-10">
        <ProjectCard
          src="/movierating.png"
          title="Movie Rating System"
          description="A web application built with React and Redux Toolkit for managing and displaying movie ratings. Users can browse movies, rate them, and view aggregated ratings and reviews. The system features dynamic state management using Redux and efficient asynchronous operations with Thunk Middleware. Styled with SCSS for a modern and responsive design."
          site="https://movie-rating-system-rohinirai.netlify.app/"
        />
        <ProjectCard
          src="/event.png"
          title="Event Planning Website"
          description="A full-stack web application developed using the MERN stack (MongoDB, Express.js, React, Node.js) designed for organizing and managing events. Users can contact in order to paln an events, and access real-time updates and notifications. The frontend is deployed on Vercel and the backend on Render, ensuring a seamless and responsive experience."
          site="https://mern-stack-event-planning-website-silk.vercel.app/"
        />
        <ProjectCard
          src="/portfolio.png"
          title="Space Themed Portfolio Website"
          description="A visually striking portfolio website created with Next.js, featuring a space-themed design. The site showcases personal projects, skills, and achievements with a modern and interactive interface. Utilizes Next.js for server-side rendering and performance optimization, providing a smooth and engaging user experience."
          site="https://rohinirai-portfolio.netlify.app/"
        />
        <ProjectCard
          src="/internship.png"
          title="Accoladez Rewards Hub"
          description="A rewards management system developed using React.js and styled with Tailwind CSS. This application allows users to track and redeem rewards, view their points balance, and manage their accounts through a sleek and responsive interface. The use of React.js ensures a dynamic user experience, while Tailwind CSS provides a modern and customizable design."
          site="https://rohinirai010.github.io/React_JS_Website/"
        />
        <ProjectCard
          src="/mslr.png"
          title="Real Time Marathi Sign Language Regognizer (ML)"
          description="An advanced machine learning application designed to recognize Marathi sign language gestures in real-time. Using deep learning models, the system translates sign language into text, facilitating communication for the hearing-impaired community. Built with cutting-edge ML techniques to ensure accurate and swift recognition."
          site="https://github.com/rohinirai010/Marathi-Sign-Language-Recognizer"
        />
        <ProjectCard
          src="/chatgptclone.png"
          title="Chat Gpt Clone"
          description="A web-based application replicating the core functionalities of ChatGPT, built using HTML, CSS, and JavaScript. The clone features a conversational interface that simulates interactive dialogue with an AI model, providing users with an engaging and responsive chat experience. Deployed for real-time interactions and user engagement. The frontend is deployed on vercel and backend is deployed on render"
          site="https://rohinichatapp.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
