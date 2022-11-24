import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <section className="text-gray-700 id=home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I am a raccoon.
              <br />
              Go to my web site and check it out.
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur consectetur nemo dolor at ab architecto doloribus
              veniam. Dolores, necessitatibus officia?
            </p>
            <button className="text-white bg-green-400 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-200">
              Click!
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./images/tanuki4.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
