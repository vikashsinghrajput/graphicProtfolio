import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css"
import projects from "./ProtectedProject/PortfolioData";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate();
  };
  const filters = [ "All","Video Editing"," Graphic Design","image retouching",];


  return (

    <>
      <div className="bg-gray-50 py-14 px-3 w-full ">
        <section className="bg-gray-50 py-20 px-6 md:px-20 max-w-7xl mx-auto ">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between ">
            <div>
              <p className="text-green-600 uppercase text-sm font-semibold flex items-center gap-1">
                ✦ My Work
              </p>
              <h2 className="text-4xl font-bold mt-3 leading-tight">
                Creating next level <br /> digital products
              </h2>
            </div>

            {/* Filters */}
            <div className="flex md:gap-4 mt-6 md:mt-0">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1 text-sm rounded-full ${
                    filter === f
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          {/* Image Grid  Start*/}
          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {projects
              .filter(
                (p) =>
                  filter === "All" ||
                  p.category.toLowerCase().includes(filter.toLowerCase())
              )
              .map((project, index) => (
                <div key={index} className="group">
                  <div
                    className={`${project.bg} p-6 rounded-2xl overflow-hidden flex items-center justify-center`}
                  >
                    {project.type === "video" ? (
                   <video
                    src={project.image}
                     height={300} width={300}
                     controls
                   />
                 ) : (
                  <PhotoProvider>
                   <PhotoView  src={project.image}>

                     <img
                        src={project.image}
                  alt={project.title}
                     className="w-full h-full object-cover"
                   />
                   </PhotoView>
                  
                   </PhotoProvider>
                 )}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-gray-500 text-sm">
                        {project.category}
                      </p>
                    </div>
                    <span
                      onClick={handleClick}
                      className="text-gray-400 text-sm"
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              ))}
          </div>        
        </section>
    
      </div>
 
      <Outlet />
    </>
  );
};

export default ProjectsSection;
