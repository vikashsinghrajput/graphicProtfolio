import { useState } from "react";
import { motion, useScroll } from "motion/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./Componetes/Home/About";

import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "./Componetes/Layout/Footer/Footer";
import ExpertiseSection from "./Componetes/Home/ExpertiseSection";
import ExperienceSection from "./Componetes/AboutUs/ExperienceSection";
import HeroSection from "./Componetes/Home/HeroSection";
import DesignProcess from "./Componetes/AboutUs/DesignProcess";
import AboutUs from "./Componetes/AboutUs/AboutUs";
import Navbar from "./Componetes/Layout/Navbar/Navbar";
import ProjectsSection from "./Componetes/Projects/ProjectsSection";
import ProtectedRouter from "./Utils/ProtectedRouter";


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          zIndex: 50,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#8f44fd",
        }}
      />
      <ParallaxProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />

          

          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ProjectsSection />} />
        </Routes>
        <Footer />
      </ParallaxProvider>
    </>
  );
}

export default App;
