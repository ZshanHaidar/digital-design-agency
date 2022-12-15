import React from "react";
import student from "../Assets/student.jpg";
const Solutions = () => {
  return (
    <div className="bg-[#3a50f9]">
      <div className="max-w-[1240px] mx-auto py-10">
        <div className="flex justify-center items-center py-10">
          <div className="flex justify-center items-center bg-white rounded-full w-64 h-64">
            <img
              src={student}
              alt="/"
              class="w-56 h-56 rounded-full object-cover hover:scale-105 duration-200"
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-white text-5xl font-bold py-4">
            We create exceptional design solutions
          </h1>
          <p className="text-white text-lg py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            illum molestias, voluptatibus odit neque corporis.
          </p>
        </div>
        <div>
          <form className="mx-8 flex flex-col sm:flex-row gap-4 ">
            <input
              className="py-3 rounded-full px-2 w-full"
              type="text"
              placeholder="Enter your Name"
            />
            <input
              className="py-3 rounded-full px-2 w-full"
              type="email"
              placeholder="Enter a valid email address"
            />
            <button className="py-3 text-white bg-[#ee4dc6] hover:bg-[#c7269f] w-full">
              Submit
            </button>
          </form>
          <h1 className="text-white text-center py-6">
            Image from <span className="underline">Freepik</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
