import React, { useState } from "react";
import bot from "../assets/images/bot.png";
import { RiLayoutGridLine, RiTriangleFill } from "react-icons/ri";
import { MdFormatListBulleted } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import sec from "../assets/images/Wema_Bank_Plc.jpg";
import algebra from "../assets/images/sec5.png";
import opt from "../assets/images/sec3.png";
import CourseCard from "../components/CourseCard";

const Dashboard: React.FC = () => {
  const [isGrid, setIsGrid] = useState(false);
  const firstName = useOutletContext<{ firstName: string }>();
  const mock_streak = [
    {
      name: "mon",
      streak: "true",
    },
    {
      name: "tues",
      streak: "false",
    },
    {
      name: "Wed",
      streak: "false",
    },
    {
      name: "thurs",
      streak: "false",
    },
    {
      name: "fri",
      streak: "false",
    },
  ];
  const mock_courses = [
    {
      name: "Microeconomics 1:Supply and Demand",
      completed: 0,
      uncompleted: 11,
      image: sec,
    },
    {
      name: "Enterpreneurship 1:Customer Recovery",
      completed: 0,
      uncompleted: 20,
      image: algebra,
    },
    {
      name: "Market 1:Fundamentals of Marketing",
      completed: 0,
      uncompleted: 20,
      image: opt,
    },
    {
      name: "Finance 1: Time Value of Money",
      completed: 0,
      uncompleted: 20,
      image: sec,
    },
    {
      name: "Power and Influence",
      completed: 0,
      uncompleted: 10,
      image: algebra,
    },
  ];
  const course_list = mock_courses.map((course, index) => (
    <CourseCard key={index} isGrid={isGrid} course={course} />
  ));
  const streak_list = mock_streak.map((items, index) => (
    <div key={index} className="flex flex-col gap-2 md:gap-5 items-center">
      <span
        className={`${
          items.streak == "true"
            ? "border-[#9C2C9C] text-[#9C2C9C]"
            : "border-[#66708538] text-[#66708538]"
        } w-12 h-12 p-3 md:w-20 md:h-20  rounded-full border-[3px]  flex items-center justify-center`}
      >
        {" "}
        <svg
          width="36"
          height="50"
          viewBox="0 0 36 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7309 18.977C31.596 18.8081 31.4325 18.8413 31.3469 18.8757C31.2751 18.9048 31.1106 18.9978 31.1334 19.2308C31.1607 19.5106 31.1761 19.7958 31.179 20.0788C31.1912 21.2524 30.7204 22.4022 29.8874 23.2334C29.0597 24.0591 27.971 24.5041 26.8118 24.4912C25.2284 24.4709 23.9151 23.6451 23.0139 22.1028C22.2687 20.8275 22.5962 19.1827 22.943 17.4412C23.1459 16.4218 23.3558 15.3677 23.3558 14.3645C23.3558 6.55308 18.1044 2.04644 14.9741 0.0553223C14.9094 0.014209 14.8478 -0.000244141 14.7932 -0.000244141C14.7044 -0.000244141 14.6341 0.0380371 14.5994 0.0614746C14.5322 0.106982 14.4247 0.210693 14.4593 0.394287C15.6558 6.748 12.087 10.5694 8.30869 14.6151C4.41416 18.7853 0 23.512 0 32.0366C0 41.9417 8.0583 50 17.9634 50C26.1188 50 33.3094 44.314 35.4492 36.1728C36.9084 30.6217 35.3793 23.5506 31.7309 18.977ZM18.4115 46.1657C15.9312 46.2788 13.5725 45.3892 11.7708 43.6666C9.98848 41.9623 8.96621 39.5838 8.96621 37.1411C8.96621 32.557 10.7189 29.1917 15.4332 24.7242C15.5104 24.651 15.5894 24.6279 15.6582 24.6279C15.7206 24.6279 15.7747 24.6469 15.8119 24.6648C15.8903 24.7026 16.0192 24.7961 16.0019 24.9985C15.8333 26.9599 15.8362 28.5879 16.0104 29.8375C16.4558 33.0294 18.7924 35.1741 21.8251 35.1741C23.312 35.1741 24.7283 34.6145 25.8132 33.5984C25.8551 33.5581 25.9062 33.5288 25.962 33.5128C26.0179 33.4969 26.0768 33.4948 26.1336 33.5069C26.205 33.5223 26.3006 33.5661 26.3507 33.6869C26.8005 34.7729 27.0304 35.9257 27.0339 37.1131C27.0482 41.891 23.1803 45.952 18.4115 46.1657Z"
            fill="currentColor"
            fill-opacity="1"
          />
        </svg>
      </span>

      <span
        className={`${
          !items.streak ? "text-[#667085] " : "text-[#242222]"
        } text-lg md:text-[22px] leading-7 font-bold font-plus_jakarta text-center capitalize`}
      >
        {items.name}
      </span>
    </div>
  ));
  return (
    <div className="max-w-[100vw] overflow-x-clip w-full flex flex-col lg:flex-row items-start justify-between gap-5">
      <div className="lg:sticky top-0  w-full lg:w-1/2 flex flex-col items-center gap-y-5 md:gap-y-10">
        <div
          style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
          className="bg-white py-5 px-4 md:px-10  w-full min-h-[18rem] md:min-h-[22rem] rounded-2xl border border-[#66708538]"
        >
          <p className="flex items-center gap-5">
            <span className="text-[7rem] font-bold font-inter text-black ">
              0
            </span>{" "}
            <svg
              width="71"
              height="98"
              viewBox="0 0 71 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.1399 37.3154C61.8783 36.9876 61.5611 37.052 61.395 37.1189C61.2557 37.1754 60.9367 37.3557 60.9808 37.8078C61.0339 38.3505 61.0636 38.9039 61.0693 39.4528C61.093 41.7296 60.1796 43.9602 58.5636 45.5727C56.9578 47.1747 54.8458 48.0378 52.5969 48.0128C49.5252 47.9736 46.9774 46.3714 45.2289 43.3794C43.7832 40.9053 44.4186 37.7144 45.0914 34.3358C45.4851 32.3583 45.8922 30.3134 45.8922 28.3671C45.8922 13.213 35.7046 4.47007 29.6318 0.607311C29.5062 0.527551 29.3867 0.499512 29.2808 0.499512C29.1086 0.499512 28.9721 0.573777 28.9049 0.619246C28.7745 0.707531 28.566 0.90873 28.633 1.2649C30.9542 13.5911 24.0308 21.0046 16.7009 28.8533C9.1455 36.9435 0.582031 46.1132 0.582031 62.6509C0.582031 81.8668 16.2151 97.4999 35.431 97.4999C51.2526 97.4999 65.2022 86.4692 69.3535 70.6752C72.1843 59.9061 69.2179 46.1882 62.1399 37.3154ZM36.3004 90.0614C31.4887 90.2808 26.9126 88.5551 23.4174 85.2131C19.9597 81.9068 17.9765 77.2926 17.9765 72.5537C17.9765 63.6605 21.3768 57.132 30.5224 48.4649C30.6721 48.323 30.8254 48.2781 30.9589 48.2781C31.08 48.2781 31.185 48.315 31.2571 48.3497C31.4093 48.423 31.6594 48.6045 31.6256 48.997C31.2986 52.8022 31.3043 55.9606 31.6423 58.3848C32.5062 64.5771 37.0392 68.7377 42.9227 68.7377C45.8073 68.7377 48.555 67.6521 50.6596 65.6809C50.7408 65.6028 50.84 65.5458 50.9483 65.5148C51.0567 65.4839 51.171 65.4799 51.2812 65.5033C51.4197 65.5333 51.6052 65.6182 51.7024 65.8525C52.575 67.9594 53.0209 70.1959 53.0278 72.4995C53.0556 81.7685 45.5518 89.6469 36.3004 90.0614Z"
                fill="#667085"
              />
            </svg>
          </p>
          <div className="flex items-center justify-between gap-2 md:gap-4">
            {streak_list}
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
          className="relative w-full h-[14.5rem]  flex items-center justify-center px-8 rounded-[3px] border border-[#66708538] bg-white"
        >
          <p className="font-medium text-[2rem] leading-10 text-black">
            {`Hello ${firstName}, you are doing great. Keep up the good work my guy!`}
          </p>
          <span className="absolute -bottom-6 left-8 rotate-[19deg]">
            <RiTriangleFill size={80} color="white" />
          </span>
        </div>
        <div className="md:w-[23.69rem] md:h-[24.75rem]">
          <img
            src={bot}
            alt=""
            className=" scale-x-[-1] w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 min-h-[30rem] space-y-5 ">
        <div
          style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
          className="bg-white border border-[#66708538] p-5 flex items-center justify-between"
        >
          <p className="font-semibold text-4xl text-[#242222]">Courses</p>
          <div className="flex items-center gap-5">
            <button onClick={() => setIsGrid(false)} className="outline-none">
              <MdFormatListBulleted size={32} color="#1a1a1a" />
            </button>
            <button onClick={() => setIsGrid(true)} className="outline-none">
              <RiLayoutGridLine size={32} color="#1a1a1a" />
            </button>
          </div>
        </div>
        <div
          className={`grid  ${
            !isGrid ? "gap-5" : "grid-cols-2 auto-cols-[50%] gap-2 md:gap-4"
          } `}
        >
          {course_list.length > 0 ? course_list : <p>No courses available</p>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
