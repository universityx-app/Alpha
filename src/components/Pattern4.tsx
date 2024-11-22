import React from "react";
// import hex from "../../../assets/images/completeHex.svg";
// import incompleteHex from "../../../assets/images/incompleteHex.svg";
import bot from "../assets/images/bot.png";

const Pattern4: React.FC<PatternProps> = ({ isActive, hex, title }) => {
  return (
    <div className="w-full justify-end items-start flex relative border border-yellow-500 mt-1">
      <div className="z-40 absolute max-w-[184px] h-[182px] right-5 -top-[40%] w-full flex flex-col items-center justify-center">
        {isActive && (
          <img
            src={bot}
            alt=""
            className={`scale-x-[-1] h-[115px] w-[110px] object-cover absolute -top-10 transition-transform duration-700 ease-in-out `}
          />
        )}
        <img src={hex} alt="" className=" h-[50%] w-full object-contain" />
        <p className=" max-w-[11.625rem] font-plus_jakarta font-medium text-[#242222] text-[22px] leading-7 text-center">
          {" "}
          {title}
        </p>
      </div>
      <div className="w-full h-[14rem] shrink-0 text-[#DDDFE3] ">
        <svg viewBox="0 0 454 126" focusable="false">
          <path
            d="M331 1.5L179.357 90.5601C176.728 92.1041 176.724 95.9035 179.349 97.4536L226 125"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pattern4;
