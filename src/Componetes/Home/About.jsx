import React from 'react'

const About = () => {
  return (
    <div>
      <section className="bg-gray-50 py-16 w-full">
    <div className="max-w-5xl mx-auto text-center">
      {/* Highlighted Heading with Sparkle Icon */}
      <div className="flex flex-col items-center mb-5">
        <span className="flex items-center gap-2 text-green-500 text-sm font-medium tracking-widest mb-2">
          <svg width="18" height="18" fill="none" viewBox="0 0 20 20" className="inline-block">
            <path d="M10 2L12 7H17L13 11L15 16L10 13L5 16L7 11L3 7H8L10 2Z" fill="currentColor"/>
          </svg>
          ABOUT ME
        </span>
      </div>
      {/* Main Text */}
      <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3 leading-snug">
        I'm Vikash Singh Rajput, with over 5+ years of experience in Image &amp; editor <br />
        with strong focus on producing high quality &amp; impactful digital experiences. I<br />
        have worked with some of <span className="text-gray-300">
        the most innovative industry leaders to help build<br />
        their top-notch products.
        </span>
      </h2>
    </div>
  </section>
    </div>
  )
}

export default About
