import React from "react";
// import hex from "../../../assets/images/completeHex.svg";
// import incompleteHex from "../../../assets/images/incompleteHex.svg";
import bot from "../assets/images/bot.png";
import { Link } from "react-router-dom";

const Pattern1: React.FC<PatternProps> = ({ title, isActive, hex }) => {
  return (
    <Link
      to={`?q=lessons`}
      className="w-full flex items-center justify-start relative mt-[10%]"
    >
      <div className="z-40 absolute left-1/2 -translate-x-1/2  max-w-[184px] h-[182px] w-full flex flex-col items-center justify-center">
        {isActive && (
          <img
            src={bot}
            alt=""
            className="scale-x-[-1] h-[115px] w-[110px] object-cover absolute -top-10"
          />
        )}

        <img src={hex} alt="" className=" h-[50%] w-full object-contain" />
        <p className=" max-w-[11.625rem] font-plus_jakarta font-medium text-[#242222] text-[22px] leading-7 text-center">
          {" "}
          {title}
        </p>
      </div>
      <div className=" w-[100%] h-[14rem]  text-[#DDDFE3] ">
        <svg
          viewBox="-2 -2 454 160"
          focusable="false"
          className="w-full h-full relative"
        >
          <path
            d="M194.5 27L152.992 2.19083C151.76 1.45444 150.228 1.43462 148.978 2.13888L54.1875 55.5158C51.4715 57.0452 51.4709 60.9558 54.1865 62.486L167.882 126.553C170.583 128.074 170.601 131.957 167.914 133.504L124.5 158.5"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          ></path>
        </svg>
      </div>
    </Link>
  );
};

export default Pattern1;
