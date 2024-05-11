import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 shadow-md shadow-gray-600">
      <div>
        <h1 className="text-xl ml-2">Subal Chandra Roy</h1>
      </div>
      <ul className="hidden sm:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-bold text-md text-gray-300 hover:scale-105 hover:text-blue-500 duration-200 capitalize"
          >
            <Link to={link} smooth duration={700}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-5 z-10 text-gray-500 sm:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav &&
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-200 bg-gradient-to-b from-black to-gray-800 text-gray-500 mt-8">
          {links.map(({ id, link }) => (
            <div>
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-5 text-xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
            </div>
            
            
          ))}
        </ul>
      }
    </div>
  );
};

export default Navbar;
