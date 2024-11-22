import React from "react";
// import hex from "../../../assets/images/completeHex.svg";
// import incompleteHex from "../../../assets/images/incompleteHex.svg";
import bot from "../assets/images/bot.png";

const Pattern5: React.FC<PatternProps> = ({ isActive, hex, title }) => {
  return (
    <div className="w-full justify-center items-start flex relative -mt-[8%]">
      <div className="z-40 absolute -top-14 left-1/2 -translate-x-1/2 max-w-[184px] h-[182px] w-full flex flex-col items-center justify-center">
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
      <div className="w-full h-[14rem] shrink-0 text-[#DDDFE3] ">
        <svg viewBox="0 0 454 168" focusable="false">
          <path
            d="M124 130L184.963 165.804C186.22 166.542 187.778 166.538 189.031 165.794L341.177 75.4576C343.794 73.9035 343.785 70.1114 341.161 68.5694L227 1.5"
            stroke="currentColor"
            stroke-width="4"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Pattern5;
