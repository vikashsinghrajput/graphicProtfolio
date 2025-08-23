import { useState } from "react";
import Test from "./Test";
import AppleStoreLayout from "./Test";
import { Link, useNavigate } from "react-router-dom";
import JustTest from "../Home/JustTest";



const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");

    const projects = [
    {
      title: "Aora",
      category: "Development",
      year: "2024",
      image:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=640&q=100",
      bg: "bg-yellow-100",

    },
    {
      title: "Code Screenshot",
      category: "Development & Design",
      year: "2024",
      image:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=640&q=100",
      bg: "bg-pink-100",
    },
     {
      title: "Code Screenshot",
      category: "Development & Design",
      year: "2024",
      image:
        "https://devrajchatribin.com/_next/image?url=%2Fprojects%2Faora.webp&w=640&q=100",
      bg: "bg-pink-100",
    },
  ];
    const navigate = useNavigate();
    const handleClick = () => {

    navigate();
  };

    const filters = ["All", "Development", "Design"];
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
        <div className="flex gap-4 mt-6 md:mt-0">
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

      {/* Projects Grid */}
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
 <Link to='/text'>
   <img
           
                  src={project.image}
                  alt={project.title}
                  className="h-70 mx-auto drop-shadow-xl rounded-xl"
                />
 </Link>
               
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-gray-500 text-sm">{project.category}</p>
                </div>
                <span      onClick={handleClick} className="text-gray-400 text-sm">{project.year}</span>
              </div>
            </div>
          ))}
      </div>
    </section>
    </div>
 
    </>
   
  )


}

export default ProjectsSection
