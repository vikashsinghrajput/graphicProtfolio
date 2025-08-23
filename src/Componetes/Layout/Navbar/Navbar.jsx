import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [color, setcolor] = useState(false);
  const changecolor = () => {
    if (window.scrollY >= 90) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };
  window.addEventListener("scroll", changecolor);

  return (
    <>
      <div
        className={
          color
            ? "  sticky top-0 flex items-center justify-between max-w-7xl  z-30  mx-auto bg-white rounded-full shadow     backdrop-filter backdrop-blur-md bg-opacity-40 border "
            : "  bg-gray-50  min-w-full flex flex-col items-center font-sans "
        }
      >
        <div className="flex justify-between items-center w-full max-w-7xl px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">DC</span>
          <nav className="flex space-x-6 text-gray-700 text-sm">
            <NavLink to="/" className="hover:underline">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:underline">
              About
            </NavLink>
            <NavLink to="/projects" className="hover:underline">
              Projects
            </NavLink>
            <NavLink to="/contact" className="hover:underline">
              Contact
            </NavLink>
          </nav>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <span role="img" aria-label="theme">
              🌞
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
