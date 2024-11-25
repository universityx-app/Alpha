import React from "react";
import bot from "../assets/images/bot.png";
import { Link } from "react-router-dom";

interface PatternProps {
  title: string;
  isActive: boolean;
  hex: string;
}

const Pattern1: React.FC<PatternProps> = ({ title, hex }) => {
  return (
    <div className="w-full flex items-center justify-center relative mt-10 sm:mt-16 ">
      <Link
        to={"?q=lessons"}
        className="z-40   max-w-[184px] md:h-[182px] w-full flex flex-col items-center justify-center sm:max-w-[220px] lg:max-w-[250px]"
      >
        <img
          src={bot}
          alt="bot"
          className="scale-x-[-1] w-20 h-20 md:h-[115px] md:w-[110px] object-cover absolute -top-12 md:-top-[55%] sm:h-[130px] sm:w-[125px] lg:h-[150px] lg:w-[140px]"
        />

        <img
          src={hex}
          alt="hex"
          className="h-[50%] w-2/3 lg:w-full object-contain sm:h-[60%] lg:h-[70%]"
        />
        <p className="max-w-[9rem] leading-5 md:max-w-[11.625rem] font-plus_jakarta font-medium text-[#242222] md:text-[22px] md:leading-7 text-center sm:text-[24px] lg:text-[26px]">
          {title}
        </p>
      </Link>
      {/* <div className="w-full absolute left-1/2 top-2 -translate-x-1/2 lg:h-[16rem] text-[#DDDFE3] flex justify-center items-center">
        <svg viewBox="-2 -2 454 160" focusable="false" className="">
          <path
            d="M194.5 27L152.992 2.19083C151.76 1.45444 150.228 1.43462 148.978 2.13888L54.1875 55.5158C51.4715 57.0452 51.4709 60.9558 54.1865 62.486L167.882 126.553C170.583 128.074 170.601 131.957 167.914 133.504L124.5 158.5"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Pattern1;
