import React, { useState, useEffect, useRef } from 'react';
import { useParallax } from 'react-scroll-parallax';

const DesignProcess = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollContainerRef = useRef(null);

  const processSteps = [
    {
      id: '01',
      title: 'Research',
      subtitle: 'Discovery Phase',
      icon: '🔍',
      description: 'Understanding user needs and market requirements through comprehensive analysis.',
      longDescription: 'Deep dive into user personas, competitive analysis, market research, and stakeholder interviews to establish a solid foundation for the project.',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      accentColor: 'text-blue-600'
    },
    {
      id: '02',
      title: 'Wireframe',
      subtitle: 'Structure Planning',
      icon: '📝',
      description: 'After hashing out the details of the website, it\'s easy to throw the ideas onto pen & paper.',
      longDescription: 'Creating low-fidelity wireframes to establish information architecture, user flow patterns, and content hierarchy for optimal user experience.',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      accentColor: 'text-emerald-600'
    },
    {
      id: '03',
      title: 'Design',
      subtitle: 'Visual Creation',
      icon: '🎨',
      description: 'The most fun part of all - adding pizzaz to the wireframes and bring it to life.',
      longDescription: 'Transforming wireframes into high-fidelity designs with attention to visual hierarchy, brand consistency, and engaging user interfaces.',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      accentColor: 'text-purple-600'
    },
    {
      id: '04',
      title: 'Development',
      subtitle: 'Code Implementation',
      icon: '💻',
      description: 'The design may be final but it needs to be functional and practical. Development is key.',
      longDescription: 'Converting designs into responsive, interactive experiences using modern web technologies, ensuring cross-browser compatibility and performance.',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      accentColor: 'text-orange-600'
    },
    {
      id: '05',
      title: 'Quality Assurance',
      subtitle: 'Testing & Optimization',
      icon: '✅',
      description: 'Website load times, SEO optimization, etc., weighing the quality of the site.',
      longDescription: 'Comprehensive testing across devices, browsers, accessibility checks, and performance optimization to ensure the highest quality user experience.',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      accentColor: 'text-pink-600'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const nextIndex = prev + direction;
        
        // Reverse direction at boundaries for ping-pong effect
        if (nextIndex >= processSteps.length - 1) {
          setDirection(-1);
          return processSteps.length - 1;
        } else if (nextIndex <= 0) {
          setDirection(1);
          return 0;
        }
        
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, direction, processSteps.length]);

  // Smooth scroll to specific index
  const scrollToIndex = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate transform based on current index
  const getTransform = () => {
    const cardWidth = 320;
    const gap = 32;
    const offset = currentIndex * (cardWidth + gap);
    return `translateX(-${offset}px)`;
  };
  const parallax = useParallax({
    onProgressChange: (progress) => {
      if (parallax.ref.current) {
        // set progress to CSS variable
        parallax.ref.current.style.setProperty(
          "--progress",
          progress.toString()
        );
      }
    },
  });


  return (
    <div className="min-h-screen bg-gradient-to-br bg-gray-50 overflow-hidden ">
      {/* Header Section */}
      <div className="px-6 md:px-12 py-16 animate-fadeInUp ">
        <div className="max-w-6xl mx-auto ">
          <div className="flex items-center space-x-2 mb-8 opacity-0 animate-slideInLeft">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-emerald-500 text-sm font-medium uppercase tracking-wide">
              Steps I Follow
            </span>
          </div>
          
         <h1 ref={parallax.ref} style={{ textStrokeWidth: `calc(20px * var(--progress))` }} className=" text-stroke text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-200 dark:to-gray-300 bg-clip-text text-transparent">
              My Design Process
            </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8 opacity-0 animate-slideInUp">
            I have worked with some of the most innovative industry leaders to help build their top-notch products.
          </p>

          {/* Controls */}
          <div className="flex items-center space-x-4 opacity-0 animate-fadeIn">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isAutoPlaying 
                  ? 'bg-emerald-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            
            <div className="flex space-x-2">
              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-emerald-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="relative py-16 overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 md:w-32  bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 md:w-32 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent z-10 pointer-events-none"></div>
        
        <div 
          ref={scrollContainerRef}
          className="flex space-x-8 transition-transform duration-1000 ease-out px-32"
          style={{
            transform: getTransform(),
            width: 'max-content'
          }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-shrink-0 w-80 group cursor-pointer transition-all duration-300 ${
                hoveredCard === index ? 'transform scale-105 -translate-y-2' : ''
              }`}
              onClick={() => scrollToIndex(index)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${
                index === currentIndex ? step.borderColor : 'border-gray-100'
              } h-96 relative overflow-hidden`}>
                
                {/* Background decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${step.bgColor} rounded-full -mr-16 -mt-16 opacity-30 group-hover:opacity-50 transition-all duration-300`}></div>
                
                {/* Step number */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {step.id}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 transform transition-all duration-300 shadow-lg ${
                  hoveredCard === index ? 'scale-110 rotate-6' : ''
                }`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-gray-700">
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium ${step.accentColor} opacity-80`}>
                      {step.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-800">
                    {index === currentIndex ? step.longDescription : step.description}
                  </p>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-100 rounded-b-3xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                      index === currentIndex ? 'w-full' : 'w-0'
                    }`}
                  />
                </div>

                {/* Active indicator */}
                {index === currentIndex && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 rounded-3xl transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-5' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center space-x-4 pb-16">
        <button
          className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => currentIndex > 0 && scrollToIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <span className="text-xl">←</span>
        </button>
        
        <button
          className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            currentIndex === processSteps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => currentIndex < processSteps.length - 1 && scrollToIndex(currentIndex + 1)}
          disabled={currentIndex === processSteps.length - 1}
        >
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Call to Action */}
      {/* <div className="px-6 md:px-12 py-16 opacity-0 animate-fadeInUp">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 via-purple-500 via-orange-500 to-pink-500"></div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Let's work together to bring your vision to life with a structured, proven design process.
            </p>
            
            <button className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div> */}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out 0.2s forwards;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out 0.4s forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.8s forwards;
        }
      `}</style>
    </div>
  );
};

export default DesignProcess;