import React, { useState } from "react";
import { BsGlobe } from "react-icons/bs";
import { FiFeather } from "react-icons/fi";
import { TbCube } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProgressMap from "../components/ProgressMap";
import hex from "../assets/images/completeHex.svg";
import incompleteHex from "../assets/images/incompleteHex.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
import lessonBg from "../assets/images/lessonBg.jpg";
import { IoIosArrowBack } from "react-icons/io";

const Course: React.FC = () => {
  const { course_id: course_name } = useParams();
  const [searchParams] = useSearchParams();
  const lessons = searchParams.get("q");
  const [isActive] = useState("");
  const navigate = useNavigate();
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
  const lessons_list = [
    { title: "What is Microeconomics", id: 1 },
    { title: "The Demand Curve", id: 2 },
    { title: "The Suppy Curve", id: 3 },
    { title: "Law of Supply and Demand", id: 4 },
  ];

  return (
    <div
      style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
      className="flex flex-col md:flex-row justify-between gap-5 px-2 md:px-8 py-5 w-full min-h-[50rem] bg-white border border-[#66708538]"
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
      {!lessons ? (
        <ProgressMap
          activeElement={isActive}
          hex={hex}
          incompleteHex={incompleteHex}
          elements={elements}
        />
      ) : (
        <div className="w-1/2 max-w-[45rem] bg-white border border-[#66708538]">
          <div className="w-full h-[11.25rem] relative">
            <img src={lessonBg} alt="" className="w-full h-full object-cover" />
            <button
              onClick={() => navigate(-1)}
              className="absolute top-5 left-5"
            >
              <IoIosArrowBack color="#1a1a1a" size={20} />
            </button>
          </div>
          <div className=" p-2 space-y-5">
            <div>
              <h2 className="font-plus_jakarta font-semibold text-center text-[#242222] text-[2rem] leading-10">
                Fundamentals of Supply and Demand
              </h2>
              <p className="p-2 font-plus_jakarta font-medium text-[22px] leading-7 text-[#667085]">
                {" "}
                Examine foundational aspects of microeconomics such as supply
                and demand & explore how market determine prices
              </p>
            </div>

            <div className="p-2 w-full ">
              <Link
                to={`/dashboard/${course_name}/module`}
                className="w-full h-[4.75rem] flex justify-center items-center font-semibold font-plus_jakarta text-[26px] leading-8 py-3 bg-[#9c2d9c] text-white rounded-full"
              >
                Begin Lesson
              </Link>
            </div>
            <div className="p-2 space-y-10">
              {lessons_list.map((lesson) => (
                <Link
                  to={`/dashboard/${course_name}/module?id=${lesson.id}`}
                  key={lesson.id}
                  style={{ boxShadow: "-4px 4px 0px 0px #EEEEEE" }}
                  className="w-full rounded-xl border border-[#66708538] py-5 px-6 flex flex-col gap-3"
                >
                  <p className="font-inter font-bold text-lg text-[#242222] uppercase">
                    Level {lesson.id}
                  </p>
                  <p className="font-plus_jakarta font-medium text-[26px] leading-8 text-[#667085]">
                    {lesson.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
