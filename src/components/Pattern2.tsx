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
      <div className="z-40 max-w-[184px] sm:max-w-[220px] lg:max-w-[250px] md:h-[182px] w-full flex flex-col items-center justify-center">
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
      <div className="absolute h-[14rem] md:h-[21rem] -left-5 md:left-0 top-14 shrink-0 text-[#DDDFE3]">
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
      </div>
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-24 md:-bottom-16">
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
      </span>
    </div>
  );
};

export default Pattern2;
