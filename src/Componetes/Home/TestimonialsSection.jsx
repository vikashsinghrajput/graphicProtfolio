import { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Divya Walia",
    title: "Senior Java Developer @Nagarro",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    content: "I am writing to highly recommend Devraj for any Java fullstack role. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the application...",
    linkedinUrl: "#"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Product Manager @TechCorp",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    content: "Working with Devraj has been an incredible experience. His technical expertise combined with his collaborative approach makes him stand out. He consistently delivers high-quality solutions and brings innovative ideas to every project...",
    linkedinUrl: "#"
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "Lead Engineer @StartupX",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    content: "Devraj's problem-solving abilities are exceptional. He approaches challenges with a methodical mindset and always finds elegant solutions. His dedication to code quality and best practices is truly commendable...",
    linkedinUrl: "#"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600 font-medium tracking-wide uppercase text-sm">
              TESTIMONIALS
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            What others
            <br />
            say
          </h2>
          
          <p className="text-gray-600 text-base leading-relaxed max-w-md">
            I've worked with some amazing people over the years, here is what they have to say about me.
          </p>

          {/* LinkedIn Link - positioned in left section */}
          <div className="pt-4">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group">
              <span className="text-sm font-medium">Check it out on LinkedIn</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Section - Testimonial Card */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            {/* Profile Section */}
            <div className="flex items-center gap-4">
              <img
                src={currentTestimonial.avatar}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            {/* Testimonial Content */}
            <p className="text-gray-700 leading-relaxed text-base mb-6">
              {currentTestimonial.content}
            </p>

            <button className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
              see more
            </button>
          </div>

          {/* Navigation - positioned at bottom right */}
          <div className="flex items-center justify-end space-x-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>15</span>
              <span>/</span>
              <span>30</span>
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}