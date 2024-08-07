import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Skills",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  const toggleMenu = () => {
    setMenu(!menu);
  };
  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <>
      <div className="bg-[#543310] max-w-screen-2xl container mx-auto px-4 md:px-20 h-auto shadow-md fixed top-0 left-0 right-0 z-50 text-white p-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            {/* Replace with your logo or text */}
            <span className=" text-5xl">&lt;</span>
            <span className=" font-semibold  text-5xl">Anshul</span>
            <span className=" text-5xl">&#47;</span>
            <span className=" text-5xl">&gt;</span>
          </div>
          {/* Desktop navbar */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <Link
                key={id}
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                spy={true}
                className="hover:scale-105 duration-200 cursor-pointer"
              >
                {text}
              </Link>
            ))}
          </div>
          {/* Mobile menu toggle */}
          <div className="md:hidden">
            {menu ? (
              <IoCloseSharp size={24} onClick={toggleMenu} />
            ) : (
              <AiOutlineMenu size={24} onClick={toggleMenu} />
            )}
          </div>
        </div>
        {/* Mobile navbar menu */}
        {menu && (
          <div className="bg-gray-200 text-gray-800 md:hidden absolute top-16 left-0 w-full">
            <ul className="flex flex-col items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  onClick={handleLinkClick} // Close menu when a link is clicked
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    key={id}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                    onClick={toggleMenu}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
