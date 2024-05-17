import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href="https://www.linkedin.com/in/subal-chandra-roy-43b933189/"
            className="flex justify-between items-center w-full text-white"
            target="_Blank"
            rel="noreferrer"
          >
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href="https://github.com/Subal-Roy"
            className="flex justify-between items-center w-full text-white"
            target="_Blank"
            rel="noreferrer"
            >
            <>
              Github <FaGithub size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href="mailto:subalroy5561@gmail.com"
            className="flex justify-between items-center w-full text-white"
          >
            <>
              Email <HiOutlineMail size={30} />
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300">
          <a
            href="/Resume_of_Subal_Chandra_Roy.pdf"
            className="flex justify-between items-center w-full text-white"
            download={true}
          >
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
