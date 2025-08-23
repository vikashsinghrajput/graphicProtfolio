import React from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { Link, Outlet } from 'react-router-dom'

const JustTest = () => {
  return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Back Navigation */}
     

      {/* Project Header */}
      <div className="max-w-5xl mx-auto px-6">
<div className="flex justify- w-full mt-4">

<Link to="/projects">
    <button
        className="
          flex items-center px-6 py-4
          rounded-xl border border-gray-200
          bg-white
          shadow-sm
          text-gray-700
          hover:bg-gray-50
          transition
        "
      >  
        <span className="mr-2 text-base font-medium">← Back</span>
        <span className="text-xs text-gray-500"> to Projects</span>
      
      </button>
</Link>
      
    </div>

       <div className="p-6">
        <a href="/projects" className="text-sm text-gray-600 hover:text-black">
           Back to Projects
        </a>
        <span className="ml-3 bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
          2024
        </span>
      </div>
        <div className="bg-black rounded-2xl overflow-hidden">
          <img
            src="https://devrajchatribin.com/_next/image?url=https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fct2epucbo91koigl3xmr.png&w=828&q=75" // replace with your image
            alt="Aora Project Preview"
            className="w-full object-cover"
          />
        </div>

        {/* Title & Description */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Aora</h1>
            <p className="mt-3 text-gray-700 max-w-2xl">
              The Video Sharing App is an engaging platform that empowers users to
              connect through video content. It allows users to seamlessly upload,
              view, and share videos with others in the app&apos;s community,
              fostering creativity and interaction.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["React-Native", "Expo", "AppWrite", "NativeWind", "Animatable"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Side Info */}
          <div className="mt-6 lg:mt-0">
            <a
              href="#"
              className="inline-block border border-gray-700 px-5 py-2 rounded-full hover:bg-gray-800 hover:text-white transition"
            >
              Check it out
            </a>
            <div className="mt-4 text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-medium">Roles:</span> App Developer
              </p>
              <p>
                <span className="font-medium">Client:</span> Personal Project
              </p>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Built using React Native, this app delivers a fast, responsive, and
            platform-agnostic experience, making it accessible across Android and
            iOS devices. By leveraging the power of modern video streaming
            technologies, the app ensures smooth playback and minimal buffering,
            even on low-bandwidth networks.
          </p>
        </div>
        
      <h1 className='text-2xl py-3 font-semibold'>Design Screens</h1>
      <hr className='mt- border-t border-gray-200 pt-6' />
      <div className='flex flex-wrap gap-5'>

        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hfbkhcbqx76uo0wfls3q.png" className='' alt="" /> 
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hfbkhcbqx76uo0wfls3q.png" alt="" />
      <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hfbkhcbqx76uo0wfls3q.png" alt="" />
      </div>
      
            <hr className='mt- border-t border-gray-200 pt-6 ' />


              <div className="max-w-4xl mx-auto py-10 px-4 ">
      <section >
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <hr className="border-gray-200 mb-4 w-full" />
        <ul className="list-disc pl-6 text-gray-700  flex flex-row gap-8">
          <li>React Native</li>
          <li>Expo</li>
          <li>Nativewind</li>
          <li>Animatable</li>
          <li>Appwrite</li>
        </ul>
      </section>

     
    </div>
    <div className="flex justify-end w-full mt-4">
      <button
        className="
          flex items-center px-6 py-4
          rounded-xl border border-gray-200
          bg-white
          shadow-sm
          text-gray-700
          hover:bg-gray-50
          transition
        "
      >
        <span className="mr-2 text-base font-medium">Next</span>
        <span className="text-xs text-gray-500">Code Screenshot</span>
        <HiChevronRight className="ml-3 text-xl" />
      </button>
    </div>
      </div>
      
    </div>
  
  )
}

export default JustTest
