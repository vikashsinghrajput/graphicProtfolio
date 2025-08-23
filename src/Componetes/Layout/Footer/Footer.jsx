import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaTwitter } from "react-icons/fa";
const Footer = () => (
  <div className="bg-gray-50 py-20  flex flex-col justify-end">
      {/* Centered Card */}
      <div className=" flex items-center justify-center">
        <div className="bg-white rounded-3xl w shadow-md w-4/5 max-w-7xl py-20 flex flex-col items-center">
          {/* Status */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100">
              <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
              <span className="text-green-700 text-sm font-medium">Available for work</span>
            </span>
          </div>
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center mb-8" style={{ fontFamily: 'monospace, sans-serif' }}>
            Let's create your <br /> next big idea.
          </h1>
          {/* Button */}
          <button className="mt-1 px-8 py-3 border border-black rounded-full text-lg font-medium hover:bg-gray-100 transition">
            Contact Me
          </button>
        </div>
        
      </div>
      {/* Footer */}
      <footer className="w-full flex flex-col items-center py-6">
        <div className="w-4/5 max-w-5xl flex justify-between items-center">
          {/* Copyright */}
          <span className="text-gray-600 text-sm">
            © 2025 Devraj Chatribin. All rights reserved.
          </span>
          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl text-black">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Email"><FaEnvelope /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </footer>
      {/* Floating Bot Icon */}
      <div className="fixed bottom-8 right-8">
        <button className="h-14 w-14 rounded-full bg-black flex items-center justify-center shadow-lg">
          <svg fill="none" className="h-6 w-6 text-white" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 21h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="8" r="2" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
);

export default Footer;
