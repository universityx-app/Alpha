import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FiFeather } from "react-icons/fi";
import { TbCube } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProgressMap from "../components/ProgressMap";
import hex from "../assets/images/completeHex.svg";
import incompleteHex from "../assets/images/incompleteHex.svg";

const Course: React.FC = () => {
  const { course_id: course_name } = useParams();
  const [isActive, setIsActive] = useState("");
  const elements = [
    { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
    { id: "5", title: "Utility and Elasticity", completed: false },
    //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
    //   { id: "5", title: "Utility and Elasticity", completed: false },
    //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
    //   { id: "5", title: "Utility and Elasticity", completed: false },
    //   { id: "5", title: "Utility and Elasticity", completed: false },
    //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
    //   { id: "5", title: "Utility and Elasticity", completed: false },
  ];

  return (
    <div
      style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
      className="flex flex-col md:flex-row justify-between px-2 md:px-8 py-5 w-full min-h-[50rem] bg-white border border-[#66708538]"
    >
      <div
        style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
        className="lg:sticky top-0 px-4 py-5 md:px-8 flex flex-col justify-center gap-5 w-full lg:w-1/2 lg:h-[25.625rem] border border-[#66708538] bg-white"
      >
        <div className="flex items-center justify-between">
          <BsGlobe size={60} color="#667085" />
          <Link to="" className="font-medium text-2xl text-[#9c2d9c] underline">
            See all
          </Link>
        </div>
        <p className="font-semibold text-4xl text-[#242222]">
          {/* Microeconomics Demand */}
          {course_name}
        </p>
        <progress id="progress-bar" value={4} max={11} />
        <p className="font-medium text-lg text-[#667085]">
          {/* {course?.description} */}
          Examine foundational aspects of microeconomics such as supply and
          demand & explore how market determine prices
        </p>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <TbCube size={28} color="#667085" />
            <span className="font-medium text-lg text-[#667085]">
              11 Modules
              {/* 6 Modules */}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FiFeather size={28} color="#667085" />
            <span className="font-medium text-lg text-[#667085]">
              9 Quizzes
              {/* 10 Quizzes */}
            </span>
          </div>
        </div>
      </div>
      <ProgressMap
        activeElement={isActive}
        hex={hex}
        incompleteHex={incompleteHex}
        elements={elements}
      />
    </div>
  );
};

export default Course;
