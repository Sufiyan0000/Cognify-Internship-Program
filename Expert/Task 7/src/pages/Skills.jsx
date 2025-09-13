import React from "react";
import htmlImg from "../assets/images/htmlImg.png";
import cssImg from "../assets/images/cssImg.png";
import jsImg from "../assets/images/js.png";
import reactImg from "../assets/images/reactImg.png";
import githubImg from "../assets/images/githubImg.png";
import bootstrapImg from "../assets/images/bootstrapImg.png";
import javaImg from "../assets/images/javaImg.png";
import pythonImg from "../assets/images/pythonImg.png";
import djangoImg from "../assets/images/djangoImg.png";
import sqlImg from "../assets/images/sqlImg.png";

function Skills() {
  const UsingSkill = [
    {
      id: 1,
      skill: "HTML",
      img: htmlImg,
    },
    {
      id: 2,
      skill: "CSS",
      img: cssImg,
    },
    {
      id: 3,
      skill: "JavaScript",
      img: jsImg,
    },
    {
      id: 4,
      skill: "ReactJS",
      img: reactImg,
    },
    {
      id: 5,
      skill: "Github",
      img: githubImg,
    },
    {
      id: 6,
      skill: "Bootstrap",
      img: bootstrapImg,
    },
  ];
  const learning = [
    {
      id: 1,
      skill: "Python",
      img: pythonImg,
    },
    {
      id: 2,
      skill: "Django",
      img: djangoImg,
    },
    {
      id: 3,
      skill: "SQL",
      img: sqlImg,
    },
  ];

  return (
    <div className=" w-full my-30 flex flex-col justify-center items-center gap-10">
      <h1 className="w-fit text-center font-semibold text-3xl tracking-[2px] border-2 border-neutral-800  px-10 py-1">
        SKILLS
      </h1>

      {/* USING NOW Starts */}

      <div className="w-3/4 p-3 flex flex-col gap-5 items-start">
        <h3 className="text-2xl">USING NOW : </h3>
        <div className="flex flex-wrap items-center justify-center p-5 gap-7 md:gap-20 ">
          {UsingSkill.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex flex-col gap-2 transition duration-500 hover:scale-105 hover:cursor-pointer"
            >
              <img src={item.img} alt="icon" className="w-20 h-20 " />
              <h3
                className={`font-semibold ${
                  item.skill.length < 5 ? "mx-5" : ""
                } ${item.skill.length < 8 ? "mx-3" : ""}`}
              >
                {item.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* USING NOW ends */}

      {/* LEARNING stars */}

      <div className="w-3/4 p-3 flex flex-col gap-5 items-start">
        <h3 className="text-2xl">LEARNING : </h3>
        <div className="flex flex-wrap items-center justify-center p-5 gap-15 md:gap-21 ">
          {learning.map((item) => (
            <div
              key={item.id}
              className="mx-auto flex flex-col gap-2 transition duration-500 hover:scale-105 hover:cursor-pointer"
            >
              <img src={item.img} alt="icon" className="w-20 h-20 " />
              <h3
                className={`font-semibold ${
                  item.skill.length < 5 ? "mx-5" : ""
                } ${item.skill.length < 8 ? "mx-3" : ""}`}
              >
                {item.skill}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* LEARNING ends */}
    </div>
  );
}

export default Skills;
