import React from "react";
import smiling from "../Assets/smiling.jpg";

const Platform = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10">
      <div className="grid sm:grid-cols-2">
        {/* left Side */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center bg-[#3a50f9] rounded-full w-[400px] h-[400px] hover:scale-105 duration-300">
            <img
              src={smiling}
              alt="/"
              class="w-96 h-96 rounded-full object-cover"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col  justify-center max-w-[400px] mx-4">
          <p className="tracking-[0.25rem] text-xl py-4">WEB SESIGN</p>
          <h1 className="text-3xl sm:text-5xl font-bold py-4">
            Web Design Plateform for All Creatives
          </h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit
            esse id maxime, reiciendis libero!
          </p>
          <p className="py-4">
            Image by <span className="underline"> Freepik</span>
          </p>
          <button className="bg-[#3a50f9] text-white py-4 max-w-[200px]">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
