import React from "react";
import icon from "../assets/icons/UniXIcon.png";
import { Link } from "react-router-dom";
import { RxHome } from "react-icons/rx";
// import { PiVideo } from "react-icons/pi";
import { TiWorldOutline } from "react-icons/ti";
import { PiMailbox, PiToolbox } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";

interface SideBarProps {
  pathname: string;
  collapseNav: boolean;
  onClick: () => void;
}
// className={`${
//     isList ? "max-w-[18.565rem] opacity-100" : "max-h-0 opacity-0"
//   } overflow-hidden transition-all duration-300 ease-in-out flex flex-col items-center border border-[#66708538] bg-white`}
// >

const StudentSideBar: React.FC<SideBarProps> = ({
  pathname,
  collapseNav,
  onClick,
}) => {
  return (
    <div
      className={`${
        collapseNav
          ? "max-w-2/3 md:max-w-[18.565rem] opacity-100 left-0"
          : "-left-[100%] md:left-0 max-w-[8.5rem] "
      } z-50 fixed w-full h-screen top-0 bg-white flex flex-col items-center gap-y-4 md:gap-y-8 py-7 border-r border-[#66708538] transition-all duration-300`}
    >
      <div className=" flex items-center gap-3">
        <img
          src={icon}
          alt="Logo"
          width={100}
          height={100}
          className="w-14 h-14 object-contain "
        />
        <span
          className={`${
            collapseNav ? "w-[10.5rem] opacity-100" : "w-0 opacity-0"
          } font-medium font-inter text-[#1A1A1A] text-3xl leading-[31.5px] overflow-hidden transition-all duration-300`}
        >
          UniversityX
        </span>
      </div>
      <nav className=" flex flex-col gap-2">
        <Link
          to="/dashboard"
          className={`${
            pathname === "/dashboard"
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : "bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <RxHome size={40} />
          <span
            className={`${
              collapseNav ? "w-[5rem] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Home
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname.includes("/dasboard/browse")
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : " bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <TiWorldOutline size={40} />
          <span
            className={`${
              collapseNav ? "w-[90px] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Browse
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname.includes("/lecturer/dashboard/module")
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : " bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <PiMailbox size={40} />
          <span
            className={`${
              collapseNav ? "w-[7.5rem] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Messages
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname === "/student/dashboard/groups"
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : "bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <GrGroup size={40} />
          <span
            className={`${
              collapseNav ? "w-[5rem] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Groups
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname.includes("/lecturer/dashboard/module")
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : " bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <IoChatbubblesOutline size={40} />
          <span
            className={`${
              collapseNav ? "w-[90px] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Forums
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname.includes("/lecturer/dashboard/module")
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : " bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <PiToolbox size={40} />
          <span
            className={`${
              collapseNav ? "w-[7.5rem] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300`}
          >
            Tools
          </span>
        </Link>
        <Link
          to="/dashboard"
          className={`${
            pathname.includes("/lecturer/dashboard/module")
              ? "bg-[#FFF0FF] text-[#9C2C9C]"
              : " bg-white text-[#667085]"
          } flex items-center gap-4 px-7 py-3 rounded-[17px]`}
        >
          <FiAlertCircle size={40} />
          <span
            className={`${
              collapseNav ? "w-[7.5rem] opacity-100" : "w-0 opacity-0"
            } font-medium text-[25px] leading-[31.5px] overflow-hidden transition-all duration-300 z-50`}
          >
            Help
          </span>
        </Link>
      </nav>
      <button
        onClick={onClick}
        className={`absolute bottom-5 ${collapseNav && "rotate-180"}`}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.0007 0.0834961H13.0007C3.94565 0.0834961 0.0839844 3.94516 0.0839844 13.0002V23.0002C0.0839844 32.0552 3.94565 35.9168 13.0007 35.9168H23.0007C32.0557 35.9168 35.9173 32.0552 35.9173 23.0002V13.0002C35.9173 3.94516 32.0557 0.0834961 23.0007 0.0834961ZM21.7507 33.4168H13.0007C5.31065 33.4168 2.58398 30.6902 2.58398 23.0002V13.0002C2.58398 5.31016 5.31065 2.5835 13.0007 2.5835H21.7507V33.4168ZM33.4173 23.0002C33.4173 30.2568 30.9857 33.0902 24.2507 33.3868V2.6135C30.9857 2.91016 33.4173 5.7435 33.4173 13.0002V23.0002ZM12.2173 12.8502L16.484 17.1168C16.6001 17.2328 16.6922 17.3705 16.755 17.522C16.8179 17.6736 16.8502 17.8361 16.8502 18.0002C16.8502 18.1642 16.8179 18.3267 16.755 18.4783C16.6922 18.6299 16.6001 18.7676 16.484 18.8835L12.2173 23.1502C11.9815 23.3778 11.6656 23.5036 11.3379 23.5006C11.0102 23.4976 10.6967 23.366 10.465 23.1341C10.2334 22.9022 10.1021 22.5887 10.0994 22.2609C10.0967 21.9332 10.2228 21.6175 10.4507 21.3818L13.834 18.0002L10.4507 14.6185C10.2228 14.3829 10.0967 14.0672 10.0994 13.7394C10.1021 13.4117 10.2334 13.0981 10.465 12.8662C10.6967 12.6343 11.0102 12.5027 11.3379 12.4997C11.6656 12.4967 11.9815 12.6226 12.2173 12.8502Z"
            fill="#667085"
          />
        </svg>
      </button>
    </div>
  );
};

export default StudentSideBar;
