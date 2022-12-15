import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import man from "../Assets/man.jpg";
import woman from "../Assets/Woman.jpg";
const Teamwork = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center  ">
      <h1 className="text-[#3a50f9] text-5xl font-bold py-10">Meet our team</h1>
      <div className="grid sm:grid-cols-2 mx-4 py-10 gap-4">
        {/* Left Side */}
        <div className="grid sm:grid-cols-3 gap-4 shadow-lg hover:scale-105 duration-150">
          <div className="flex justify-center items-center">
            <img
              src={man}
              alt="/"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>
          <div className="sm:text-left sm:col-span-2">
            <h1 className="text-gray-400 py-4 text-lg">creative leader</h1>
            <h1 className="text-[#3a50f9] text-2xl font-bold">Mary Brown</h1>
            <p className="text-gray-400 py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              veniam praesentium doloremque. Fugit, beatae possimus.
            </p>

            <div className="flex text-[#3a50f9] items-center justify-between max-w-[150px] py-4">
              <BsFacebook size={30} />
              <AiFillTwitterCircle size={34} />
              <FaInstagramSquare size={30} />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="grid sm:grid-cols-3 gap-4 shadow-lg hover:scale-105 duration-150">
          <div className="flex justify-center items-center">
            <img
              src={woman}
              alt="/"
              className="h-48 w-48 rounded-full object-cover"
            />
          </div>
          <div className="sm:text-left sm:col-span-2">
            <h1 className="text-gray-400 py-4 text-lg">creative leader</h1>
            <h1 className="text-[#3a50f9] text-2xl font-bold">Mary Brown</h1>
            <p className="text-gray-400 py-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              veniam praesentium doloremque. Fugit, beatae possimus.
            </p>
            <div className="flex text-[#3a50f9] items-center justify-between max-w-[150px] py-4">
              <BsFacebook size={30} />
              <AiFillTwitterCircle size={34} />
              <FaInstagramSquare size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamwork;
