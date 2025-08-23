import React, { useState } from 'react';
import Digi5 from "../../assets/CompanyIcons/Digi5.jpeg";
import Tech from "../../assets/CompanyIcons/tech.png";
import Organicz from "../../assets/CompanyIcons/Organicz.png";
import WEb from "../../assets/CompanyIcons/webtouch4_logo.jpeg";

const ExperienceSection = () => {
  const [showMore, setShowMore] = useState(false);

  const experiences = [
    {
      id: 1,
      title: "Image Editor",
      company: "Digi5 Media",
      period: "Nov 2019 — May 2025 · 5 yrs 7 mo (Full-time)",
      icon: Digi5,
      bgColor: "bg-blue-500"
    },
    {
      id: 2,
      title: " full stack developer ",
      company: "Tech safety",
      period: "mar 2024 — may 2024(Freelance)",
      icon: Tech,
      bgColor: "bg-gray-800"
    },
    {
      id: 3,
      title: "full stack developer",
      company: "organicz ",
      period: " sep-2024 — Nov 2025 (Freelance)",
      icon: Organicz,
      bgColor: "bg-gray-900"
    },
    {
      id: 4,
      title: "Image Editor",
      company: "WEBTOUCH-SEO & Digital Marketing Agency ",
      period: "Dec 2022 - Present · 2 yrs 9 mos (Freelance)",
      icon: WEb,
      bgColor: "bg-blue-400"
    }
  ];

  const visibleExperiences = showMore ? experiences : experiences.slice(0, 3);

  return (
   <div className='bg-gray-50'>
     <div className="max-w-7xl   flex flex-col lg:flex-row gap-10  mx-auto p-8 bg-gray-50">
      {/* Header Section */}
      <div className="mb-12 space-y-4 px-10 ">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-600 text-sm font-medium uppercase tracking-wide">
            WORK HISTORY
          </span>
        </div>
        
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience</h2>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          I have worked with some of the most innovative industry leaders to help build their top-notch products.
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-5 w-full  b ">

        {visibleExperiences.map((exp) => (
          <div key={exp.id} className="flex items-center justify-between group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200 border-b-2">
            {/* Left side - Icon and details */}
            <div className="flex items-center gap-4 px-5">
            
              <div className={`w-12 h-12 ${exp.bgColor} rounded-full flex items-center justify-center text-white text-xl`}>
              <img src={exp.icon} alt="" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-gray-600">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Right side - Period */}
            <div className="text-gray-500 text-sm font-medium ">
              {exp.period}
            </div>
          </div>
        ))}

        {/* Show More Button */}
        {experiences.length > 3 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full mt-8 py-3 px-6 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium "
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
   </div> 
   
  );
};

export default ExperienceSection;