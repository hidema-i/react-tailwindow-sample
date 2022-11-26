import React from "react";

export const Skills = () => {
  return (
    <section className="text-gray-700 border-t border-gray-200">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* left */}
        <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <img src="./images/pc.jpg" alt="" className="rounded" />
        </div>
        {/* right */}
        <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
            My Skills
          </h1>
          <div className="w-full">
            <h2>HTML</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "85%" }}
              >
                85%
              </div>
            </div>
            <h2>CSS</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "70%" }}
              >
                70%
              </div>
            </div>
            <h2>Javascript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "75%" }}
              >
                75%
              </div>
            </div>
            <h2>React</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                style={{ width: "60%" }}
              >
                60%
              </div>
            </div>
            <h2>Typescript</h2>
            <div className="shadow bg-green-100 mt-2 w-full">
              <div
                className="bg-yellow-500 text-xs leading-none py-1 text-center text-white"
                style={{ width: "50%" }}
              >
                50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
