import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import laravel from "../assets/laravel.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: laravel,
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
  ];
  return (
    <div name="skills" className="bg-gradient-to-b from-black to-gray-800" style={{paddingTop:'80px'}}>
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-10">These technologies I've worked with</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-center">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
