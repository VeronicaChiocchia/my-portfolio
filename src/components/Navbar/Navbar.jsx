import React from "react";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {

  const name = "<Verónica Chiocchia/>"
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-800 py-4 px-12 text-white max-h-[60px]">
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-md md:text-xl font-bold brand-name">{name}</a>
        <button className="md:hidden block cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul className="hidden md:flex space-x-4">
          <li><a href="" className="hover:text-gray-300">About</a></li>
          <li><a href="#tools" className="hover:text-gray-300">Tools</a></li>
          {/* <li><a href="#services" className="hover:text-gray-300">Experience</a></li> */}
          <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        </ul>
      </div>
      <div 
        className={`md:hidden flex flex-col mt-2 space-y-2 text-center transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <a href="" className="hover:text-gray-300">About</a>
        <a href="#tools" className="hover:text-gray-300">Tools</a>
        {/* <a href="#services" className="hover:text-gray-300">Experience</a> */}
        <a href="#projects" className="hover:text-gray-300">Projects</a>
      </div>
    </nav>
  );
};



export default Navbar;
