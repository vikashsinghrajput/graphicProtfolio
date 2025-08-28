import React, { useEffect } from "react";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { Link, Outlet } from "react-router-dom";

// import plugins if you need
import Data from "./Data";


const Photoshop = () => {
  return (
    <>
      <div>
    
        {Data.map((val) => (
          <section
          
            key={val.id}
            className="w-full mt-20 pt-12 pb-30 max-w-7xl px-4 md:px-5 lg:px-5 mx-auto pb-20 bg-red relative"
          >
          
            <h1 className="text-2xl md:text-3xl pl-2  my-2 border-l-4     font-sans font-bold border-main text-textOne ">
              {val.heading}
            </h1>
            
            <hr />
            <div className=" responsive-col container mx-auto pt-10 flex px-5 py-24 md:flex-row  flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-green-500">
                  {val.subheadingone}
                  <br className=" lg:inline-block text-gray-400" />
                  {val.subheadingtwo}
                </h1>
                <p className="mb-8 leading-relaxed text-gray-400">
                  {val.paratext}
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/contact-us">
                    <div className="border-2  cursor-pointer border-main text-textOne emibold px-8 py-3 rounded-full  flex  hover:bg-cardcolor  ">
                      Get a free trial
                    </div>
                  </Link>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-6/6">
                <ImgComparisonSlider
                  hover="hover"
                  keyboard="enabled"
                  className=" object-cover object-center  cursor-pointer rounded w-612 h-464 "
                >
                  <svg
                    slot="handle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    viewBox="-8 -3 16 6"
                  >
                    <path
                      stroke="#fff"
                      d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                      stroke-width="1"
                      fill="#fff"
                      vector-effect="non-scaling-stroke"
                    ></path>
                  </svg>
                  <figure slot="first" className="before">
                    <img width="100%" src={val.herorow} />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure slot="second" class="after">
                    <img width="100%" src={val.herodone} />
                    <figcaption>After</figcaption>
                  </figure>
                </ImgComparisonSlider>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 cursor-pointer ">
                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example1row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example1done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>

                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example2row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example2done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example3row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example3done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example4row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example4done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example5row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example5done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
                <div>
                  <ImgComparisonSlider
                    hover="hover"
                    keyboard="enabled"
                    className="h-513px w-664px rounded-lg cursor-pointer"
                  >
                    <svg
                      slot="handle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      viewBox="-8 -3 16 6"
                    >
                      <path
                        stroke="#fff"
                        d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2"
                        stroke-width="1"
                        fill="#fff"
                        vector-effect="non-scaling-stroke"
                      ></path>
                    </svg>
                    <figure slot="first" className="before">
                      <img width="100%" src={val.example6row} />
                      <figcaption>Before</figcaption>
                    </figure>
                    <figure slot="second" class="after">
                      <img width="100%" src={val.example6done} />
                      <figcaption>After</figcaption>
                    </figure>
                  </ImgComparisonSlider>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    <Outlet/>
  
   
    </>
  );
};

export default Photoshop;
