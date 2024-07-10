import React from "react";
import user from "../../user.json";
import Lottie from "lottie-react";
import { ReactTyped } from "react-typed";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX, BsLinkedin } from "react-icons/bs";

function Home() {
  const handleViewResume = () => {
    window.open(
      "https://drive.google.com/file/d/1PDC6iT7-v9_6T0exJXFYVub34Z6r6Q0l/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="bg-[#E9D5A1] bg-opacity-80 py-16 md:py-20 mt-4">
      <div className="max-w-screen-2xl container mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 md:order-2">
          <div className="mt-12 md:mt-0 space-y-4">
            <div className="flex md:flex-row space-x-2 text-3xl md:text-4xl lg:text-5xl">
              <h1 className="text-4xl lg:text-5xl">Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 ml-2 text-4xl lg:text-5xl font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={100}
                backSpeed={100}
                loop={true}
              />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm md:text-md lg:text-lg text-justify">
                I'm Anshul, a passionate Web developer with a keen eye for MERN
                Stack. With a background in IT, I strive to create impactful and
                visually stunning software solutions that leave a lasting
                impression.
              </p>
              <button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-red-500 hover:to-purple-500 transition duration-300 md:self-start md:ml-auto md:mr-0"
                onClick={handleViewResume}
              >
                View Resume
              </button>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/Anshul070702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  <IoLogoGithub size={28} color="#333" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anshul-336305224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-700"
                >
                  <BsLinkedin
                    size={28}
                    color="#0077B5"
                    className="hover:text-blue-800 transition duration-300"
                  />
                </a>
                <a
                  href="https://x.com/gravity_0707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-500"
                >
                  <BsTwitterX size={28} color="black" />
                </a>
                <a
                  href="https://leetcode.com/u/Anshul_0707/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-green-500"
                >
                  <SiLeetcode size={28} color="#FFA116" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8 md:order-1">
          <Lottie
            animationData={user}
            className="max-w-full h-auto md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
