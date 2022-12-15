import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-8 py-10">
        <h1 className="text-6xl sm:text-center font-bold py-10">About Us</h1>
        <h1 className="text-white back bg-[#3a50f9] px-8 py-2 text-lg max-w-[140px] flex justify-center">
          Overview
        </h1>
        <div className="bg-white px-4 py-8">
          <p className="font-bold text-2xl">
            AAA STUDIO is a creative digital agency. We create intelligent,
            living systems for people to experience. We believe in building
            systems that are useful, usable, and desirable.
          </p>
          <p className="text-[#3a50f9] font-bold py-8">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className=" py-4">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
