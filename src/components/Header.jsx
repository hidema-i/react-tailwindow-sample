import React from "react";

export const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900 mb-9 md:mb-0">
          <span className="text-xl ml-3">Portfolio</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-200">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-blue-400 duration-200">
            About
          </a>
          <a href="#skills" className="mr-5 hover:text-blue-400 duration-200">
            Skills
          </a>
          <a href="#contact" className=" hover:text-blue-400 duration-200">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
