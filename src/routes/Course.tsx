import React from "react";
import { BsGlobe } from "react-icons/bs";
import { FiFeather } from "react-icons/fi";
import { TbCube } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import ProgressMap from "../components/ProgressMap";
// import hex from "../assets/images/completeHex.svg";
import incompleteHex from "../assets/images/incompleteHex.svg";
import { useSearchParams, useNavigate } from "react-router-dom";
import lessonBg from "../assets/images/lessonBg.jpg";
import { IoIosArrowBack } from "react-icons/io";
import Pattern1 from "../components/Pattern1";
import Pattern2 from "../components/Pattern2";

const Course: React.FC = () => {
  const { course_id: course_name } = useParams();
  const [searchParams] = useSearchParams();
  const lessons = searchParams.get("q");
  // const [isActive] = useState("");
  const navigate = useNavigate();
  // const elements = [
  //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
  //   { id: "5", title: "Utility and Elasticity", completed: false },
  //   //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
  //   //   { id: "5", title: "Utility and Elasticity", completed: false },
  //   //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
  //   //   { id: "5", title: "Utility and Elasticity", completed: false },
  //   //   { id: "5", title: "Utility and Elasticity", completed: false },
  //   //   { id: "4", title: "Fundamentals of Supply and Demand", completed: false },
  //   //   { id: "5", title: "Utility and Elasticity", completed: false },
  // ];
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
        <div className="flex flex-col w-full lg:w-3/5 md:px-5 ">
          <Pattern1
            hex={incompleteHex}
            title="Fundamentals of Supply and Demand"
            isActive={true}
          />

          <Pattern2
            hex={incompleteHex}
            title="Fundamentals of Supply and Demand"
            isActive={false}
          />
          <div className="flex items-center justify-center">
            <svg
              width="115"
              height="64"
              viewBox="0 0 115 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_3448_8491)">
                <path
                  d="M82.8485 3H32.2424L8 27.2424L32.2424 53H82.8485L107.697 27.2424L82.8485 3Z"
                  fill="#A4A4A4"
                />
                <path
                  d="M82.8485 3H32.2424L8 27.2424L32.2424 53H82.8485L107.697 27.2424L82.8485 3Z"
                  stroke="#A4A4A4"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_3448_8491"
                  x="0.804688"
                  y="0"
                  width="114.098"
                  height="64"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="3.25" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_3448_8491"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_3448_8491"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      ) : (
        // <ProgressMap
        //   activeElement={isActive}
        //   hex={hex}
        //   incompleteHex={incompleteHex}
        //   elements={elements}
        // />
        //         <div>

        //         </div>

        <div className="w-full lg:w-1/2 max-w-[45rem] bg-white border border-[#66708538]">
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
              <p className=" font-plus_jakarta font-medium text-[22px] leading-7 text-[#667085]">
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
