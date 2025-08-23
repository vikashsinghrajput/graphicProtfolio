import React, { useState } from 'react'
import ExperienceSection from './ExperienceSection'
import DesignProcess from './DesignProcess'
import AwardsRecognition from './AwardsRecognition'
import Comparison from './Comparison'
import SkillsSection from './Comparison'


const AboutUs = () => {


  return (
    
    <>
       <div className="bg-gray-50  min-w-full flex flex-col items-center font-sans">
 
   

      {/* Hero Section */}
      <div className="flex flex-col items-center mt-24 w-full px-4">
       
        <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-3">
          Crafting{" "}
          <span className="text-green-500">purpose driven<br />experiences</span>
          {" "}that inspire<br />&amp; engage.
        </h1>
        <div className="flex flex-col md:flex-row items-center md:mt-5 w-full max-w-4xl">
          
          <div className="flex-1 flex flex-col items-center   ">
            <span className="text-gray-700 text-sm mb-4">
              I work with brands globally to build pixel-perfect,
              engaging, and accessible digital experiences that drive results and achieve business goals.
            </span>
            <button className="w-44 py-2 border-2 border-gray-900 rounded-full hover:bg-gray-100 transition">
              Know me better
            </button>
          </div>
        </div>

      </div>

      {/* Scrolling text */}
      {/* <div className="w-full mt-10 py-5 bg-white opacity-60 text-2xl text-center font-semibold tracking-wide whitespace-nowrap">
        <span className="mx-8 text-gray-400">
          Community ✦ Development ✦ Mentor ✦ Websites ✦ Designing ✦
        </span>
      </div> */}
          
    </div>
        <SkillsSection/>
  <ExperienceSection/>
  <DesignProcess/>



 
</>
  )
}

export default AboutUs
  //mobile res
   