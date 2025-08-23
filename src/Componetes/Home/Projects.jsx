import React from "react";
import { Link } from "react-router-dom";
import Tech from '../../assets/WebsiteMookup/Techsaftey.jpg'
import organiz from '../../assets/WebsiteMookup/organiz.jpg'
import AutomotiveRetouching from '../../assets/WebsiteMookup/Automotive Retouching.jpg'
import ProductRetouching from '../../assets/WebsiteMookup/Product Retouching.jpg'

const projects = [
  {
    title: "thetechsafety",
    category: "Development",
    year: "2025",
    images: Tech,
    bg: "bg-yellow-100"
  },
  {
    title: "organicz",
    category: "Development ",
    year: "2025",
    images:organiz,
    bg: "bg-pink-100"
  },
  {
    title: "Automotive Retouching",
    category: "Design",
    year: "2019",
    images:AutomotiveRetouching,

    bg: "bg-gray-100"
  },
  {
    title: "Product Retouching",
    category: "Design",
    year: "2019",
    images: ProductRetouching,
     
    bg: "bg-green-100"
  },
];
  
const Projects = () => 
  
  (
  <section className="bg-gray-50 py-14 px-3 w-full ">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-green-500 text-sm font-medium tracking-widest mb-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
            <path d="M10 2L12 7H17L13 11L15 16L10 13L5 16L7 11L3 7H8L10 2Z" fill="currentColor"/>
          </svg>
          MY WORK
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Selected Projects</h2>
        <p className="text-gray-600 text-base">
          Here’s a curated selection showcasing my expertise and the achieved results.
        </p>
      </div>

      {/* Projects Grid */}
     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project) => (
          <div key={project.title} className={`${project.bg} rounded-2xl p-8 flex flex-col items-center`}>
            <img
              src={project.images}
              alt={project.title}
              className="h-60 mx-auto drop-shadow-xl rounded-xl"
            />
            <div className="mt-5 w-full">
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mt-1">
                <span>{project.subtitle}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="flex justify-center mt-10">
      <Link to='/projects'>
        <button  className="px-7 py-2 border border-gray-900 rounded-full text-base bg-white hover:bg-gray-100 transition">
          View All Projects
        </button>
      </Link>
        
      </div>
    </div>
  </section>
);

export default Projects;
