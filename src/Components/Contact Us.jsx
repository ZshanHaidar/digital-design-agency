import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[800px] mx-auto py-12">
      <h1 className="text-center mb-12 text-4xl font-bold">Contact Us</h1>
      <div className="grid sm:grid-cols-2">
        {/* Leftt Side */}
        <div className="w-full px-4">
          <div className="my-4">
            <h1>Name</h1>
            <input
              type="text"
              placeholder="Enter your Name"
              className=" border-b-4 border-black px-4 w-full  py-4"
            />
          </div>
          <div className="my-4">
            <h1>Eamil</h1>
            <input
              type="email"
              placeholder="Enter your Name"
              className=" border-b-4 border-black px-4 w-full  py-4"
            />
          </div>
          <div className="my-4">
            <h1>Message</h1>
            <textarea
              type="text"
              className=" border-b-4 border-black px-4 w-full  py-4"
            />
          </div>
          <div className="flex items-center my-4">
            <input type="checkbox" />
            <h1 className="mx-2">
              I accepte the
              <span className="text-[#3a50f9]"> Term of Service </span>
            </h1>
          </div>
          <button className="w-full bg-[#3a50f9] text-white py-2 my-4">
            SUBMIT
          </button>
        </div>
        {/* Right Side */}
        <div className="w-full bg-gray-200 px-4 flex items-center justify-center flex-col">
          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#3a50f9] text-lg font-bold py-4">CALL US</h1>
            <p>1 (234) 567-891</p>
            <p>1 (234) 987-654</p>
          </div>
          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#3a50f9] text-lg font-bold py-4">LOCATION</h1>
            <p>121 Rock Sreet, 21 Avenue,</p>
            <p>New York, NY 92103-9000</p>
          </div>
          <div className="py-4 flex flex-col items-center">
            <h1 className="text-[#3a50f9] text-lg font-bold py-4">
              OUR TOP SERVICES
            </h1>
            <p className="font-bold">Local transfers</p>
            <p className="font-bold">Airport Transfers</p>
            <p className="font-bold">Excursions and Tours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
