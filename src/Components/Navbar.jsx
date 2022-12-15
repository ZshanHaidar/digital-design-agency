import React, { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <div className="mx-auto bg-white">
      <div className="flex  justify-between items-center py-4 px-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-400">logo</h1>
        </div>
        <div onClick={() => setnav(!nav)}>
          <AiOutlineMenuUnfold
            size={30}
            className="active:text-[#ee4dc6] focus:text-[#ee4dc6] hover:text-[#ee4dc6] cursor-pointer "
          />
        </div>
        {/* overlay*/}
        {nav ? (
          <div
            onClick={() => setnav(!nav)}
            className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "
          ></div>
        ) : (
          ""
        )}
        {/* Side drawer menu */}
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[300px] h-screen bg-black z-10 ease-in-out duration-1000"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 ease-in-out duration-1000 "
          }
        >
          <AiOutlineCloseCircle
            onClick={() => setnav(!nav)}
            size={30}
            className="absolute right-4 top-4 cursor-pointer text-white hover:text-[#ee4dc6]"
          />
          <nav>
            <ul className="flex flex-col p-4 text-gray-400 space-y-4 space-x-4 py-8">
              <li className="px-4">Home</li>
              <li>About</li>
              <li>Contect</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
