import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Database,
  Palette,
  Globe,
  Server,
  Brain,
  GitBranch,
  Shield,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";

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
export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skillCategories = {
    frontend: {
      title: "MERN Stack Developer",
      icon: Globe,
      color: "from-[#0674e4] to-[#0674e4]",
      skills: [
        {
          name: "HTML",
          level: 95,
          icon: <img src={html} className="w-5" />,
        },
        { name: "Css", level: 90,  icon: <img src={css} className="w-5" />, },
        { name: "JavaScript", level: 98, icon: <img src={javascrpiticons} className="w-5" />, },
        { name: "Tailwind CSS", level: 92, icon: <img src={TailwindCSS} className="w-5" />, },
        { name: "React.js", level: 92, icon: <img src={Reacticons} className="w-5" />, },
        { name: "Node.js", level: 92, icon: <img src={Nodejs} className="w-5" />, },
        { name: "MangoDB", level: 92, icon: <img src={MangoDB} className="w-5" />, },
        { name: "Express.js", level: 92, icon: <img src={Expressjs} className="w-5" />, },
       
      ],
    },
    Graphic: {
      title: "Graphic Design",
      icon: Server,
      color: "from-[#159ab7] to-[#159ab7]",
      skills: [
         { name: "Adobe Illustrator", level: 90,  icon: <img src={Illustrator} className="w-5" />, },
        { name: "Adobe Photoshop", level: 98, icon: <img src={Photoshop} className="w-5" />, },
        { name: "Adobe InDesign", level: 92, icon: <img src={InDesign} className="w-5" />, },
        { name: "Canva", level: 92, icon: <img src={Canva} className="w-5" />, },
      
      ],
    },
    mobile: {
      title: "Video Editing",
      icon: Smartphone,
      color: "from-gray-500 to-gray-500",
      skills: [
         { name: "Adobe Premiere Pro", level: 90,  icon: <img src={PremierePro} className="w-5" />, },
        { name: "Capcut", level: 98, icon: <img src={Capcut} className="w-5" />, },
      
      ],
    },
    // tools: {
    //   title: 'Tools & DevOps',
    //   icon: GitBranch,
    //   color: 'from-[#9e1ed3] to-[#9e1ed3]',
    //   skills: [
    //     { name: 'Git & GitHub', level: 96, icon: '🐙' },
    //     { name: 'Docker', level: 84, icon: '🐳' },
    //     { name: 'AWS', level: 81, icon: '☁️' },
    //     { name: 'Vercel', level: 90, icon: '△' },
    //     { name: 'Webpack', level: 83, icon: '📦' },
    //     { name: 'Jest', level: 87, icon: '🃏' },
    //   ]
    // }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedSkills = {};
      skillCategories[activeCategory].skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => ({
            ...prev,
            [skill.name]: skill.level,
          }));
        }, index * 100);
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const SkillBar = ({ skill, index }) => {
    const animatedLevel = animatedSkills[skill.name] || 0;

    return (
      <div
        className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-y-auto  "
        style={{ animationDelay: `${index * 50}ms` }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">{skill.icon}</span>
            <h4 className="font-semibold text-gray-600">{skill.name}</h4>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-bold text-gray-600">
              {skill.level}%
            </span>
            {/* <Star className="w-4 h-4 text-yellow-400 fill-current" /> */}
          </div>
        </div>

        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
              style={{ width: `${animatedLevel}%` }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -mt-1">
            <TrendingUp className="w-4 h-4 text-green-500" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  bg-gray-50 py-1 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Brain className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
          My Skills
            </span>
          </div> */}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 sticky top-20 z-10 bg-gray-50 ">
          {Object.entries(skillCategories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
              
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.color} text-white scale-105`
                    : "border-2 border-gray-900 bg-gray-50  hover:bg-gray-100 transition rounded-2xl"
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Stats Section */}

        {/* Call to Action */}
      </div>
    </div>
  );
}
