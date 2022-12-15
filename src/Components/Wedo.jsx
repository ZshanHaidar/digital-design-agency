import React from "react";
import ManPresenting from "../Assets/man-presenting.jpg";

const Wedo = () => {
  return (
    <div className="max-w-[1240px] mx-auto ">
      <div className="py-4 flex sm:flex-row flex-col-reverse mx-6">
        {/* Left Side */}
        <div className="flex justify-center items-center">
          <img className="h-[80%]" src={ManPresenting} alt="" />
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-center mx-4 ">
          <h1 className="text-lg font-bold my-4 tracking-widest">WHAT WE DO</h1>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            The Secrets Great Design
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <h1 className="my-4">
            Imange by <span className="underline">Freepik</span>
          </h1>
          <button className="bg-[#3a50f9] text-white max-w-[250px] my-4 tracking-widest">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
