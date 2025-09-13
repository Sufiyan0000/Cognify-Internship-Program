import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/heroImg.png";
import { MdDownload, MdFileDownload } from "react-icons/md";

function HeroSection() {
  return (
    <div className="flex flex-col lg:gap-20">
      {/* <Navbar /> */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-2 md:gap-10 lg:gap-20 md:mx-auto">
        <img
          src={heroImg}
          alt=""
          className="w-100 h-70 md:h-100 object-cover "
        />
        <div className="w-3/4 md:w-[600px] lg:w-[500px] flex flex-col items-center gap-1 lg:gap-10 p-3 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Hi, I'm <span className="name text-blue-600"> Md Sufiyan Ali </span>
          </h1>
          <p className="text-lg mb-8 text-gray-700 leading-[35px]">
            I'm a passionate{" "}
            <span className="font-semibold text-blue-600">Frontend Developer</span> who loves
            building responsive, user-friendly, and visually appealing web
            applications. I specialize in{" "}
            <span className="bg-blue-600 text-gray-100 px-1 rounded-lg mx-1"> React.js</span>,
            <span className="border-2  px-1 rounded-lg mx-1">Tailwind CSS</span>,
            and modern <span className="bg-yellow-300 font-semibold px-1 rounded-lg">JavaScript</span> , always striving to create elegant solutions
            for real-world problems.
          </p>
          <a href="" download className="flex items-center gap-2 text-lg rounded-lg bg-blue-600 text-white px-4 py-2 transition-colors duration-300 mt-[-4px] hover:bg-blue-700">
            <span>
                <MdDownload />
            </span>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
