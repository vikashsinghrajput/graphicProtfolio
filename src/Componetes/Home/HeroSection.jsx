import React from 'react'
import Heroimg from '../../assets/Heroimg.jpg'
import About from './About';
import Projects from './projects';
import ExpertiseSection from './ExpertiseSection';
import TestimonialsSection from './TestimonialsSection';
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {

  const projects = [
  "Aora Development 2024",
  "Code Screenshot Development & Design 2024",
  "iPhone 15 Pro Development & Design 2024",
  "Ochi Design Development & Design 2024"
];


  const navigate = useNavigate();
    const handleClick = () => {
    navigate('/about');
  };
const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js",
  "Angular", "Redux", "Node.js", "Express.js", "MySQL", "MongoDB",
  "PostgreSQL", "Cypress", "Docker", "Firebase", "AWS",
  "GSAP", "Framer Motion", "Figma", "Tailwind CSS", "Git"
];

const testimonials = [
  {
    name: "Vritika Naik",
    role: "Regional Head @GirlScript",
    quote:
      "I am amazed at Devraj's ability to create intriguing designs. ... His energy t..."
  },
  {
    name: "Amrit Raj",
    role: "Senior Developer @Ignite Solutions",
    quote:
      "Devraj's design proficiency is remarkable, consistently delivering top-notch work..."
  }
];
const marqueeItems = [
  "Community", "Development", "Mentor", "Websites", "Designing", "Graphics", "Animation"
];
  return (
    <div className="bg-gray-50 min-h-screen min-w-full flex flex-col items-center font-sans">
      {/* Navbar */}
    

      {/* Hero Section */}
      <div className="flex flex-col items-center mt-24 w-full px-4">
        <div className="flex items-center space-x-5 mb-4">
          <span className="text-green-500 text-xl">🖐</span>
          <span className="text-sm text-gray-800">Hey! It's me Vikash,</span>
        </div>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-4 md:px-6">
      {/* Profile Image and Lets Talk */}
      <div className="relative flex-shrink-0 mb-8 md:mb-0">
        <img
          src={Heroimg}
          alt="Profile"
          className="rounded-b-[300px] rounded-t-[3px] w-80 h-90 object-cover shadow-lg"
        />
        {/* Rotating Lets Talk Button */}
        <div className="absolute bottom-4 left-3/4 transform -translate-x-1/2 flex items-center justify-center">
            <div className="relative w-36 h-36 flex items-center justify-center select-none">
    {/* Rotating Circle Text */}
    <svg
      className="absolute inset-0 w-full h-full animate-spin-slow"
      viewBox="0 0 144 144"
      fill="none"
    >
      <defs>
        <path
          id="circlePath"
          d="M72,12
             a60,60 0 1,1 0,120
             a60,60 0 1,1 0,-120"
        />
      </defs>
      <text
        fontSize="15"
        fill="#8f44fd"
        fontFamily="sans-serif"
        letterSpacing="2px"
      >
        <textPath href="#circlePath" startOffset="0" >
          • LETS TALK • LETS TALK • LETS TALK • LETS TALK •
        </textPath>
      </text>
    </svg>
    {/* Center Button */}
    <button className="relative w-16 h-16 flex items-center justify-center bg-white rounded-full border border-gray-300 shadow-md focus:outline-none">
      <span className="text-lg text-gray-700">&#8594;</span>
    </button>
    {/* Animation Keyframes */}
    <style>
      {`
        .animate-spin-slow {
          animation: spin 7s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg);}
        }
      `}
    </style>
  </div>
        </div>
      </div>

      {/* Hero Text */}
      <div className="flex-1 md:ml-10 md:px-8  text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-4">
          A <span className="text-green-500 animate-text-pop">creative developer</span>
          <br />
          &amp; graphic  designer
        </h1>
        <p className="text-gray-700 text-base md:text-lg max-w-xl mb-7 mx-auto md:mx-0">
          I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals.
        </p>
        <button onClick={handleClick} className="px-8 py-3 border border-gray-900 rounded-full text-base hover:bg-gray-100 transition">
        Know me better
      </button>
       <div className="flex flex-col  md:flex-row items-center  mt-12 max-w-4xl">
          <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0 md:mr-6 space-x-6 text-xs text-gray-700 uppercase tracking-wider">
            <Link to="https://www.linkedin.com/in/vikash-singh-rajput-a392892aa/" target="_blank" className="hover:underline hover:text-green-500">LinkedIn ↗</Link>
            <Link to="https://github.com/vikashsinghrajput" target="_blank" className="hover:underline hover:text-green-500">GitHub ↗</Link>
            <Link to="https://www.instagram.com/vikash_singh_rajput_000/" target="_blank"  className="hover:underline hover:text-green-500">Instagram ↗</Link>
            <a href="mailto:vsr81150@gmail.com" className="hover:underline hover:text-green-500">Gmail ↗</a>
          </div>
        
        </div>

      </div>
    </div>
       
      </div>
      

      {/* Scrolling text */}
      <div className="relative w-full bg-gray-50 border-t border-b border-gray-200 overflow-hidden py-5 mt-20">
    <style>
      {`
        .marquee {
          display: flex;
          animation: scrollMarquee 22s linear infinite;
        }
        @keyframes scrollMarquee {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}
    </style>
    <div className="flex items-center opacity-30 text-4xl font-semibold whitespace-nowrap text-gray-400 select-none">
      <div className="marquee min-w-full flex">
        {Array(2).fill(0).map((_, repeatIdx) => (
          <span key={repeatIdx} className="flex items-center">
            {marqueeItems.map((item, idx) => (
              <span key={idx} className="mx-6">
                {item}
                {idx < marqueeItems.length - 1 ? (
                  <span className="mx-4 text-2xl align-middle">✦</span>
                ) : null}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  </div>
      <About/>
      <Projects/>
      <ExpertiseSection/>
      
      <TestimonialsSection/>

    </div>
  )
}

export default HeroSection
