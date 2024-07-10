import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-gradient-to-r from-[#543310] to-[#2c1a0e] text-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col items-center justify-center">
          {/* <div className="flex space-x-6">
            <div className="transform transition duration-500 hover:scale-125">
              <FaGithub size={24} />
            </div>
            <div className="transform transition duration-500 hover:scale-125">
              <FaTwitter size={24} />
            </div>
            <div className="transform transition duration-500 hover:scale-125">
              <FaInstagram size={24} />
            </div>
            <div className="transform transition duration-500 hover:scale-125">
              <FaLinkedinIn size={24} />
            </div>
          </div> */}
          <div className="mt-8 border-gray-500 text-center">
            <p className="text-3xl">Made with ❤️ By Anshul</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
