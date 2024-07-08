import React from "react";
import Marquee from "react-fast-marquee";
import { skillSet } from "../assets/exports.js";

function Skills() {
  return (
    <div
      name="Skills"
      className="bg-[#E9E0BB] max-w-screen-2xl container mx-auto p-8 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Skills</h1>
        {/* <p className="text-center mb-8">
          I've more than 2 years of experience in the technologies listed below.
        </p> */}
        <div className="flex flex-col items-center">
          <Marquee gradient={false} speed={100} pauseOnHover className="w-full">
            <div className="flex flex-nowrap">
              {skillSet.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center border-2 rounded-full shadow-md p-3 bg-gray-100  h-32 w-32 mx-4"
                >
                  <img
                    src={logo}
                    className="h-16 w-16 rounded-full mb-2"
                    alt={name}
                  />
                  <div className="text-sm font-semibold text-center">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee
            gradient={false}
            speed={100}
            direction="right"
            pauseOnHover
            className="w-full mt-8"
          >
            <div className="flex flex-nowrap">
              {skillSet.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center border-2 rounded-full shadow-md p-3 bg-gray-100 font-semibold h-32 w-32 mx-4"
                >
                  <img
                    src={logo}
                    className="h-16 w-16 rounded-full mb-2"
                    alt={name}
                  />
                  <div className="text-sm font-semibold text-center">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
