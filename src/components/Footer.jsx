import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div  className="flex bg-gray-800 text-white h-fit p-10  gap-8 items-center justify-center border-t border-gray-300">
      <div>
        <a href="https://www.linkedin.com/in/subal-chandra-roy-43b933189/">
          <FaLinkedin size={25} className="text-blue-500" target="_Blank" rel="noreferrer"/>
        </a>
      </div>
      <div>
        <a href="https://github.com/Subal-Roy" target="_Blank" rel="noreferrer">
          <FaGithub size={25}/>
        </a>
      </div>
      <div>
      <a href="mailto:subalroy5561@gmail.com">
          <HiOutlineMail size={25} className="text-red-500" />
        </a>
      </div>
      <div>
      <a href="/Resume_of_Subal_Chandra_Roy.pdf" download={true} >
          <BsFillPersonLinesFill size={25} className="text-gray-300" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
