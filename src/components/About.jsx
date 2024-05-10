import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800  to-black  text-white"
      style={{ paddingTop: "80px" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <h1 className="text-2xl font-semibold text-gray-300 mb-5">
              Educational Background
        </h1>

        <div className="p-5 flex">
          <div>
            <div className="mt-[33px] hidden sm:block">
              <span className="border-2 border-gray-400 py-5 mr-5 " />
            </div>
            <div className="mt-[105px] hidden sm:block">
              <span className="border-2 border-gray-400 py-5 mr-5 " />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-400">
              B.Sc. in Computer Science and Engineering
            </h3>
            <h3 className="font-semibold text-gray-300 py-1">
              Khulna University of Engineering & Technology (KUET)
            </h3>
            <span className="text-sm text-gray-500 py-4 font-bold">
              2019 - 2024
            </span>

            <h3 className="text-2xl font-bold text-gray-400 mt-10">
              Secondary School Certificate
            </h3>
            <h3 className="font-semibold text-gray-300 py-1">
              Saidpur Govt. Technical College
            </h3>
            <span className="text-sm text-gray-500 py-4 font-bold">
              2016 - 2018
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
