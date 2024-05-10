import React from "react";
import MyImage from "../assets/MyImage.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white sm: pt-[260px]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center items-center justify-center h-full px-4 sm:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="w-5/6">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-10 mx-w-sm">
            I am a recent graduate in CSE form KUET with a strong problem solving skill. With a passion for
            programming and problem solving I developed my skills in languages
            like C, C++ and JavaScript. I have also explored frameworks
            like Laravel, React through some projects.
          </p>
          </div>
          <div>
            <Link to="projects" smooth duration={1000} className="group text-white w-fit px-6 py-3 my-2 gap-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer">
              Projects
              
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight />
                
              </span>
              
            </Link >
          </div>
        </div>
        <div>
            <img src={MyImage} alt="myImage" className="rounded-2xl mx-auto w-2/3 sm:w-full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
