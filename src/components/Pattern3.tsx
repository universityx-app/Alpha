import React from "react";
// import hex from "../../../assets/images/completeHex.svg";
// import incompleteHex from "../../../assets/images/incompleteHex.svg";
import bot from "../assets/images/bot.png";
const Pattern3: React.FC<PatternProps> = ({ isActive, hex, title }) => {
  return (
    <div className="w-full justify-end items-start flex relative -mt-[20%]">
      <div className="z-40 absolute left-1/2 -translate-x-1/2 top-5   max-w-[184px] h-[182px] w-full flex flex-col items-center justify-center">
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
      <div className="w-[45%] h-[14rem] shrink-0  rotate-180 text-[#DDDFE3]">
        <svg viewBox="0 0 228 263" focusable="false" className="relative">
          <path
            d="M124 1.5L10.4044 68.5038C7.76628 70.0599 7.78428 73.8823 10.4369 75.4134L168.977 166.927C170.227 167.648 171.769 167.64 173.011 166.906L227 135"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pattern3;
