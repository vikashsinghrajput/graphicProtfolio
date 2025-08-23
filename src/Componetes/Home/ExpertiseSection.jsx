import React, { useState } from "react";
import Reacticons from "../../assets/Tech_Ions/React.js.svg";
import javascrpiticons from "../../assets/Tech_Ions/JavaScript.svg";
import TailwindCSS from "../../assets/Tech_Ions/TailwindCSS.svg";
import css from "../../assets/Tech_Ions/CSS.svg";
import Nodejs from "../../assets/Tech_Ions/Node.js.svg";
import MangoDB from "../../assets/Tech_Ions/MongoDB.svg";
import html from "../../assets/Tech_Ions/HTML.svg";
import Expressjs from "../../assets/Tech_Ions/Express.js.svg";
import framer from "../../assets/Tech_Ions/FramerMotion.svg";
import git from "../../assets/Tech_Ions/GIT.svg";
import Illustrator from "../../assets/Tech_Ions/adobe-illustrator-icon.svg";
import Photoshop from "../../assets/Tech_Ions/adobe-photoshop-icon.svg";
import InDesign from "../../assets/Tech_Ions/indesign-icon.svg";
import Canva from "../../assets/Tech_Ions/canva-icon.svg";
import Capcut from "../../assets/Tech_Ions/capcut-icon.svg";
import PremierePro from "../../assets/Tech_Ions/adobe-premiere-pro-icon.svg";
import Marquee from "react-fast-marquee";

const ExpertiseSection = () => {
  const [open, setOpen] = useState([false, false, false]);

  const toggle = (idx) =>
    setOpen((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  const expertise = [
    {
      icon: (
        <svg
          width="20"
          height="20"
          fill="none"
          className="mr-2 inline-block"
          viewBox="0 0 24 24"
        >
          <path stroke="#1E293B" d="m8 16-4-4 4-4" />
          <path stroke="#1E293B" d="m16 8 4 4-4 4" />
          <path stroke="#1E293B" d="M12 20V4" />
        </svg>
      ),
      title: " Mern Development ",
      desc: "Building responsive websites. Providing the users an enriching experience that responds to any device and screen size.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          className="mr-2 inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5.99985L6.50182 7.29948C6.13883 7.37208 5.95733 7.40838 5.80952 7.49665C5.67886 7.57469 5.56772 7.68152 5.4846 7.80901C5.39057 7.95321 5.34714 8.13314 5.26028 8.49299L2 21.9998M2 21.9998L15.5069 18.7396C15.8667 18.6527 16.0466 18.6093 16.1908 18.5153C16.3183 18.4321 16.4252 18.321 16.5032 18.1903C16.5915 18.0425 16.6278 17.861 16.7004 17.498L18 10.9998M2 21.9998L9.586 14.4138M20.8686 7.86848L16.1314 3.13122C15.7354 2.7352 15.5373 2.53719 15.309 2.46301C15.1082 2.39775 14.8918 2.39775 14.691 2.46301C14.4627 2.53719 14.2646 2.7352 13.8686 3.13122L13.1314 3.86848C12.7354 4.2645 12.5373 4.4625 12.4632 4.69083C12.3979 4.89168 12.3979 5.10802 12.4632 5.30887C12.5373 5.53719 12.7354 5.7352 13.1314 6.13122L17.8686 10.8685C18.2646 11.2645 18.4627 11.4625 18.691 11.5367C18.8918 11.6019 19.1082 11.6019 19.309 11.5367C19.5373 11.4625 19.7354 11.2645 20.1314 10.8685L20.8686 10.1312C21.2646 9.7352 21.4627 9.53719 21.5368 9.30887C21.6021 9.10802 21.6021 8.89168 21.5368 8.69083C21.4627 8.4625 21.2646 8.2645 20.8686 7.86848ZM11 10.9998C12.1046 10.9998 13 11.8953 13 12.9998C13 14.1044 12.1046 14.9998 11 14.9998C9.89543 14.9998 9 14.1044 9 12.9998C9 11.8953 9.89543 10.9998 11 10.9998Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Graphic Design",
      desc: "Building brand identities including working on logo, typography, iconography, colour palette, visual language, and brand personality.",
    },
    {
      icon: (
        <svg
          width="20"
          height="20"
          className="mr-2 inline-block"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 2V6M7 16V20M17 4V8M17 18V22M2 6H12M2 16H12M12 8H22M12 18H22M12 20V3.6C12 3.03995 12 2.75992 11.891 2.54601C11.7951 2.35785 11.6422 2.20487 11.454 2.10899C11.2401 2 10.9601 2 10.4 2H6.8C5.11984 2 4.27976 2 3.63803 2.32698C3.07354 2.6146 2.6146 3.07354 2.32698 3.63803C2 4.27976 2 5.11984 2 6.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20H12ZM12 4H17.2C18.8802 4 19.7202 4 20.362 4.32698C20.9265 4.6146 21.3854 5.07354 21.673 5.63803C22 6.27976 22 7.11984 22 8.8V17.2C22 18.8802 22 19.7202 21.673 20.362C21.3854 20.9265 20.9265 21.3854 20.362 21.673C19.7202 22 18.8802 22 17.2 22H13.6C13.0399 22 12.7599 22 12.546 21.891C12.3578 21.7951 12.2049 21.6422 12.109 21.454C12 21.2401 12 20.9601 12 20.4V4Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Video Editing",
      desc: "Video editing involves assembling and manipulating video clips to create a cohesive, engaging final product. Basic principles include organizing footage, planning the sequence, trimming unnecessary parts, using establishing shots for context, applying smooth match cuts and appropriate transitions, and ensuring the video flows well to tell a story effectively.",
    },
  ];

  const logos = [
    { id: 1, TechIcon: Reacticons, text: "React.js" },
    { id: 2, TechIcon: javascrpiticons, text: "javascrpit" },
    { id: 3, TechIcon: TailwindCSS, text: "Tailwind CSS" },
    { id: 4, TechIcon: css, text: "Css" },
    { id: 5, TechIcon: Nodejs, text: "Node.js" },
    { id: 6, TechIcon: MangoDB, text: "MangoDB" },
    { id: 7, TechIcon: html, text: "HTML" },
    { id: 8, TechIcon: Expressjs, text: "Express.js" },
    { id: 9, TechIcon: framer, text: "framer motion" },
    { id: 10, TechIcon: git, text: "GIT" },
    { id: 11, TechIcon: Illustrator, text: "Adobe Illustrator" },
    { id: 12, TechIcon: Photoshop, text: "Adove Photoshop" },
    { id: 13, TechIcon: InDesign, text: "Adove InDesign" },
    { id: 14, TechIcon: Canva, text: "Canva" },
    { id: 15, TechIcon: Capcut, text: "Capcut" },
    { id: 16, TechIcon: PremierePro, text: "Adobe Premiere Pro" },
  ];

  console.log(logos);
  return (
    <>
      <div className="  ">
        <section>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Accordions */}
            <div className="flex-1 max-w-7xl space-y-4">
              <div className="  mb-10 bottom-5 relative  px-8 ">
                <span className="text-green-600 font-semibold uppercase tracking-wider  ">
                  Speciality
                </span>
                <h2 className="mt-2 text-4xl font-bold text-gray-900">
                  Areas of Expertise
                </h2>
              </div>
              {expertise.map((item, idx) => (
                <div key={item.title} className="bg-white rounded-xl shadow-sm">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between py-4 px-6 text-lg font-medium text-gray-700 focus:outline-none"
                  >
                    <span className="flex items-center">
                      {item.icon}
                      {item.title}
                    </span>
                    <svg
                      className={`transition-transform duration-200 ${
                        open[idx] ? "rotate-180" : ""
                      }`}
                      width="18"
                      height="18"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="#374151"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {open[idx] && (
                    <div className="px-6 pb-4 text-gray-600">
                      Content about {item.desc} ...
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" // Example image, replace with your own if needed
                alt="Workspace with coding"
                className="rounded-2xl shadow-md object-cover w-full "
              />
            </div>
          </div>

          {/* Technologies */}
        </section>
      </div>

      <div className=" relative w-5/12 bg-gray-50 border-t border-b border-gray-200 overflow-hidden py-5 mt-20">
        <div className="relative w-full">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>


          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
          
            <div className="flex items-center space-x-16 px-8  ">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  
                  className="flex-shrink-0 flex text-black bg-white px-5 rounded-full font-semibold tracking-wide opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ minWidth: "120px", textAlign: "center" }}
                >
                  <img src={logo.TechIcon} alt="" className="w-5" />
                  &nbsp; &nbsp;
                  <p>{logo.text}</p>
                </div>
              ))}
            </div>

            {/* Duplicate set for seamless loop */}
           
          </div>
        </div>

        {/* Custom CSS for animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            animation: scroll 4s linear infinite;
          }

          /* Pause animation on hover */
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </>
  );
};

export default ExpertiseSection;
