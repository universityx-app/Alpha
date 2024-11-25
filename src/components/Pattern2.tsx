import React from "react";
import bot from "../assets/images/bot.png";

interface PatternProps {
  title: string;
  isActive: boolean;
  hex: string;
}

const Pattern2: React.FC<PatternProps> = ({ isActive, title, hex }) => {
  return (
    <div className="w-full flex justify-start relative -mt-8 lg:mt-0">
      <div className="z-40 w-1/2  md:h-[182px] flex flex-col items-center justify-center">
        {isActive && (
          <img
            src={bot}
            alt="bot"
            className="scale-x-[-1] h-[115px] w-[110px] object-cover absolute -top-10 sm:h-[130px] sm:w-[125px] lg:h-[150px] lg:w-[140px]"
          />
        )}

        <img
          src={hex}
          alt="hex"
          className="w-2/3 h-[50%] sm:h-[60%] lg:h-[70%] lg:w-full object-contain"
        />
        <p className="max-w-[9rem] leading-5 md:max-w-[11.625rem] font-plus_jakarta font-medium text-[#242222] md:text-[22px] md:leading-7 text-center sm:text-[24px] lg:text-[26px]">
          {title}
        </p>
      </div>
      {/* <div className="absolute h-[14rem] md:h-[21rem] -left-5 md:left-0 top-14 shrink-0 text-[#DDDFE3]">
        <svg
          viewBox="0 0 228 263"
          focusable="false"
          className="relative w-full h-full"
          width="100%"
          height="100%"
        >
          <path
            d="M124 1.5L10.4044 68.5038C7.76628 70.0599 7.78428 73.8823 10.4369 75.4134L168.977 166.927C170.227 167.648 171.769 167.64 173.011 166.906L227 135"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default Pattern2;
