import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function activeStyle({isActive}){
    return {
      color : isActive ? '#155dfc' : '#040F0F', 
      textDecoration : isActive ? "underline" : "none",
    }
  }

  return (
    <header className="w-full sticky top-0 left-0 z-50">
      <nav className="navbar w-full flex items-center justify-around h-20 shadow-md bg-white">
        <h1 className="logo text-4xl font-semibold  text-[var(--primary-color)] tracking-[2px]">
          Cognify-Internship{" "}
          <span className="text-blue-600 rounded-full">.</span>
        </h1>

        <div className="nav-links hidden md:flex items-center gap-8 text-lg font-normal mr-3">
          <NavLink to='' style={activeStyle}> Home </NavLink>
          <NavLink to="/beginner" style={activeStyle}> Beginner </NavLink>
          <NavLink to="/intermediate" style={activeStyle}> Intermediate </NavLink>
          <NavLink to="/expert" style={activeStyle}> Expert </NavLink>
        </div>

        <button
          className="flex flex-col justify-center gap-2 md:hidden hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`w-8 h-[2px] bg-[var(--primary-color)] transition-all duration-300 ${
              isOpen ? "translate-y-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-9 h-[2px] bg-red-600 transition-all duration-300 ${
              isOpen ? "opacity-0 " : ""
            }`}
          ></span>
          <span
            className={`w-8 h-[2px] bg-[var(--primary-color)] transition-all duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </nav>

      <div className={`mobile-nav-links flex flex-col items-center gap-3 text-lg font-normal py-4 bg-white shadow-md md:hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 overflow-hidden opacity-0 -translate-y-3"}`}>
        <NavLink to='' style={activeStyle}> Home </NavLink>
        <NavLink to="/beginner" style={activeStyle}> Beginner </NavLink>
        <NavLink to="/intermediate" style={activeStyle}> Intermediate </NavLink>
        <NavLink to="/expert" style={activeStyle}> Expert </NavLink>
      </div>
    </header>
  );
}

export default Navbar;
