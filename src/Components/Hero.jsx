import React from "react";
import galaxy from "../Assets/galaxy.jpg";

const Hero = () => {
  return (
    <div className="h-full relative">
      <div className=" absolute w-full h-full text-white flex flex-col justify-center items-center my-10">
        <div>
          <p className="text-3xl font-bold font-mono">SUPREME</p>
        </div>
        <h1 className="text-5xl md:text-[5.5rem] text-center font-bold">
          DIGITAL DESIGN
        </h1>
        <h1 className="text-5xl md:text-[5.5rem] text-center font-bold">
          STUDIO
        </h1>
        <p className="max-w-[600px] py-8 px-4 text-center tracking-wider">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          delectus quibusdam beatae exercitationem impedit minima fugiat nulla
          perspiciatis quasi expedita!
        </p>
        <p>
          Image from <span className="underline">Freepick</span>
        </p>
        <button className="my-10">CONTACT US</button>
      </div>
      <img src={galaxy} alt="/" className="w-full h-screen object-cover " />
    </div>
  );
};

export default Hero;
