import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [index, setIndex] = useState(2); // Example index 3/30 (0-based)
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Divya Walia",
      role: "Senior Java Developer @Nagarro",
      text: "I am writing to highly recommend Devraj for any Java fullstack role. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the application...",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg", // placeholder avatar
    },
        {
      name: "Divya Walia",
      role: "Senior Java Developer @Nagarro",
      text: "I am writing to highly recommend Devraj for any Java fullstack role. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the application...",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg", // placeholder avatar
    },
        {
      name: "Divya Walia",
      role: "Senior Java Developer @Nagarro",
      text: "I am writing to highly recommend Devraj for any Java fullstack role. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the application...",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg", // placeholder avatar
    },
    // Add more testimonials here...
  ];

  const testimonial = testimonials[0];
    const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
    const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };
   const currentTest = testimonials[currentTestimonial];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <span className="text-green-600 text-sm font-semibold flex items-center gap-1">
            ✦ TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold mt-3 leading-tight">
            What others <br /> say
          </h2>
          <p className="text-gray-600 mt-4">
            I've worked with some amazing people over the years, here is what
            they have to say about me.
          </p>
          <a
            href="#"
            className="inline-block mt-8 text-sm font-medium text-black border-b border-gray-300 hover:border-black transition"
          >
            Check it out on Linkedin →
          </a>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-4">
              <img
                src={currentTest.image}
                alt={currentTest.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-lg">{currentTest.name}</h4>
                <p className="text-sm text-gray-500">{currentTest.role}</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4 text-sm leading-relaxed">
              {currentTest.text}{" "}
              <span className="text-gray-500 cursor-pointer">see more</span>
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setIndex((prev) => Math.max(0, prev - 1))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
            >
              <ArrowLeft className="w-5 h-5"  onClick={prevTestimonial} />
            </button>
            <span className="text-sm text-gray-500">{index + 1} / 30</span>
            <button
              onClick={() => setIndex((prev) => Math.min(29, prev + 1))}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
