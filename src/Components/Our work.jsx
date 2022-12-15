import React from "react";
import CountUp from "react-countup";

const Ourwork = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold mb-8">About Us & Our Work</h1>
        <p className="max-w-[700px] text-center mb-10">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </div>
      <div className="flex sm:flex-row flex-col gap-8 mx-8">
        <div className="h-[300px] bg-gray-300 border-t-[15px] border-[#3a50f9] flex flex-col items-center">
          <CountUp
            start={0}
            end={236}
            delay={0}
            enableScrollSpy={true}
            duration={4}
          >
            {({ countUpRef }) => (
              <div className="text-7xl font-bold my-6">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p className="uppercase tracking-widest font-bold my-4">
            Cups of Coffee
          </p>
          <p className="mx-8 text-center">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
        <div className="h-[300px] bg-gray-300 border-t-[15px] border-[#3a50f9] flex flex-col items-center">
          <CountUp
            start={0}
            end={17}
            delay={0}
            enableScrollSpy={true}
            duration={4}
          >
            {({ countUpRef }) => (
              <div className="text-7xl font-bold my-6">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p className="uppercase tracking-widest font-bold my-4">AWARDS WON</p>
          <p className="mx-8 text-center">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
        <div className="h-[300px] bg-gray-300 border-t-[15px] border-[#3a50f9] flex flex-col items-center">
          <CountUp
            start={0}
            end={108}
            delay={0}
            enableScrollSpy={true}
            duration={4}
          >
            {({ countUpRef }) => (
              <div className="text-7xl font-bold my-6">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p className="uppercase tracking-widest font-bold my-4">
            HAPPY CLIENTS
          </p>
          <p className="mx-8 text-center">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
        <div className="h-[300px] bg-gray-300 border-t-[15px] border-[#3a50f9] flex flex-col items-center">
          <CountUp
            start={0}
            end={150}
            delay={0}
            enableScrollSpy={true}
            scrollSpyOnce={false}
            duration={4}
          >
            {({ countUpRef }) => (
              <div className="text-7xl font-bold my-6">
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
          <p className="uppercase tracking-widest font-bold my-4">
            PROJECTS FINISHED
          </p>
          <p className="mx-8 text-center">
            Sample text. Click to select the text box. Click again or double
            click to start editing the text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
