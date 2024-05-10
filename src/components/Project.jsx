import React from "react";
import jobcraft from "../assets/projects/jobcraft.png";
import emart from "../assets/projects/emart.png";
import shopease from "../assets/projects/shopease.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Job portal website ",
      tech:"( Laravel )",
      src: jobcraft,
      link:"https://github.com/Subal-Roy/JobCraft/tree/main"
    },
    {
      id: 2,
      title: "Ecommerce website",
      tech:"( Laravel )",
      src: emart,
      link:"https://github.com/Subal-Roy/Emart"
    },
    {
      id: 3,
      title: "Ecommerce website",
      tech:"( MERN )",
      src: shopease,
      link:"https://github.com/Subal-Roy/ShopEase"
    },
  ];
  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white sm:h-screen"
      style={{paddingTop:'80px'}}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="p-6">Check out some of my works here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, tech, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center">
              <h3 className="pt-2 font-bold">{title}</h3>
              <h3 className="font-bold">{tech}</h3>
              <img
                src={src}
                alt="p1"
                className="rounded-md duration-300 hover:scale-105 p-2"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                 Live
                </button> */}
                <a href={link} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Github
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
