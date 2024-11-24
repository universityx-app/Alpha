import React, { useState } from "react";
import StudentSidebar from "../components/StudentSidebar";
import { useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { PiBellSimple } from "react-icons/pi";
import bot from "../assets/images/bot.png";
import { Outlet } from "react-router-dom";
import profile from "../assets/images/oluwatobi-fasipe-e8etaVo85AY-unsplash.jpg";
import { CiMenuFries, CiSearch } from "react-icons/ci";

const Layout: React.FC = () => {
  const location = useLocation();
  const [collapseNav, setCollapseNav] = useState(false);

  const firstName = "Jennifer";

  return (
    <div>
      <StudentSidebar
        pathname={location.pathname}
        onClick={() => setCollapseNav((prev) => !prev)}
        collapseNav={collapseNav}
      />
      <div>
        <div
          className={`${
            collapseNav
              ? "lg:w-[calc(100%-18.565rem)]"
              : "lg:w-[calc(100%-8.5rem)]"
          } w-full z-40 transition-all duration-300 fixed shadow shadow-gray-100 to-0 right-0 bg-white py-3 h-[6.5rem] border-b border-l border-[#66708538] flex items-center justify-between gap-x-5 gap-y-5 lg:px-10 px-3 `}
        >
          <div className="flex items-center gap-2 w-2/3 lg:w-1/3">
            <div className="relative overflow-hidden w-[59px] h-[2.5rem] overflow-y-clip hidden md:flex items-start">
              <img
                src={bot}
                alt=""
                className="w-[5.75rem] h-[4.5rem] object-contain scale-x-[-1] p-1 absolute top-1"
              />
            </div>
            <div className="w-[4rem] h-[2.5rem] rounded-full md:hidden">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            <span className="font-medium text-lg md:text-2xl text-black md:whitespace-nowrap">
              {`Hi ${firstName}, nice to see you again`}
            </span>
          </div>

          <div className=" hidden w-1/2 max-w-[43rem] h-[3.875rem] rounded-full bg-[#F3F3F6] py-[5px] px-2.5 lg:flex items-center ">
            <input
              type="search"
              placeholder="Search your courses"
              className="w-full h-full rounded-full outline-none bg-inherit text-xl font-medium text-[#667085] px-5"
            />
            <button className="w-[3.125rem] h-[3.125rem] rounded-full bg-[#9C2C9C] text-white flex items-center justify-center">
              <IoSearchOutline size={30} />
            </button>
          </div>
          <div className="w-1/3 md:w-[35%] lg:w-[15%] flex items-center justify-between md:justify-end md:gap-5">
            <button className="lg:hidden">
              <CiSearch color="#242222" size={28} />
            </button>
            <button>
              <PiBellSimple size={32} color="#242222" />
            </button>

            <button
              onClick={() => setCollapseNav((prev) => !prev)}
              className="lg:hidden"
            >
              <CiMenuFries color="#242222" size={28} />
            </button>

            <div className="w-[3.2rem] h-[3.2rem] hidden md:flex">
              <img
                src={profile}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
        <div
          className={`bg-[#F3F3F6] z-10 mt-[6.5rem] p-4 md:p-7 lg:p-10 min-h-screen absolute right-0 transition-all duration-300 ${
            collapseNav
              ? "lg:w-[calc(100%-18.565rem)] w-full"
              : "w-full lg:w-[calc(100%-8.5rem)]"
          }`}
        >
          <Outlet context={firstName} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
