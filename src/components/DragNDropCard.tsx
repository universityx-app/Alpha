import React, { useState } from "react";
import CorrectBox from "./CorrectBox";

interface Option {
  text: string;
  value: string;
}

interface DragNDropCardProps {
  options: Option[];
  onAnswerChange?: (answer: string | null) => void;
}
const DragNDropCard: React.FC<DragNDropCardProps> = ({
  options,
  onAnswerChange,
}) => {
  const [availableOptions, setAvailableOptions] = useState(options);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  //   const options = [
  //     { text: "Cab drivers", value: "cab driver" },
  //     { text: "Economists", value: "economist" },
  //     { text: "Veterinarian", value: "veterinarian" },
  //   ];

  const handleDrop = (value: string) => {
    setSelectedAnswer(value);
    setAvailableOptions(options.filter((option) => option.value !== value));
    if (onAnswerChange) {
      onAnswerChange(value);
    }
  };

  const handleDragStart = (e: React.DragEvent, value: string) => {
    e.dataTransfer.setData("value", value);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDropEvent = (e: React.DragEvent) => {
    e.preventDefault();
    const value = e.dataTransfer.getData("value");
    handleDrop(value);
  };
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-[3rem] h-[3rem] rounded-full bg-[#667085] flex items-center justify-center">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0938 1.71865C15.7051 1.71742 15.3195 1.78623 14.9552 1.92178C14.7421 1.48284 14.4329 1.09753 14.0505 0.794422C13.6681 0.491318 13.2224 0.278202 12.7464 0.170887C12.2704 0.0635715 11.7764 0.0648116 11.3009 0.174515C10.8255 0.284218 10.3809 0.499568 10 0.804588C9.52189 0.421793 8.94534 0.181889 8.33681 0.112527C7.72828 0.0431642 7.11253 0.147166 6.56054 0.412547C6.00855 0.677928 5.54278 1.09388 5.21692 1.61247C4.89106 2.13106 4.71837 2.73118 4.71875 3.34365V4.96865H3.90625C3.0443 4.96865 2.21765 5.31106 1.60815 5.92055C0.99866 6.53005 0.65625 7.3567 0.65625 8.21865V9.4374C0.65625 11.9155 1.64068 14.2921 3.39297 16.0444C5.14526 17.7967 7.52188 18.7811 10 18.7811C12.4781 18.7811 14.8547 17.7967 16.607 16.0444C18.3593 14.2921 19.3438 11.9155 19.3438 9.4374V4.96865C19.3438 4.1067 19.0013 3.28005 18.3918 2.67055C17.7824 2.06106 16.9557 1.71865 16.0938 1.71865ZM16.9062 9.4374C16.9062 11.2691 16.1786 13.0257 14.8835 14.3209C13.5883 15.616 11.8317 16.3436 10 16.3436C8.16835 16.3436 6.41172 15.616 5.11654 14.3209C3.82137 13.0257 3.09375 11.2691 3.09375 9.4374V8.21865C3.09375 8.00316 3.17935 7.7965 3.33173 7.64412C3.4841 7.49175 3.69076 7.40615 3.90625 7.40615H4.71875V9.4374C4.71875 9.76063 4.84715 10.0706 5.07571 10.2992C5.30427 10.5277 5.61427 10.6561 5.9375 10.6561C6.26073 10.6561 6.57073 10.5277 6.79929 10.2992C7.02785 10.0706 7.15625 9.76063 7.15625 9.4374V3.34365C7.15625 3.12816 7.24185 2.9215 7.39423 2.76913C7.5466 2.61675 7.75326 2.53115 7.96875 2.53115C8.18424 2.53115 8.3909 2.61675 8.54327 2.76913C8.69565 2.9215 8.78125 3.12816 8.78125 3.34365V6.1874C8.78125 6.51063 8.90965 6.82063 9.13821 7.04919C9.36677 7.27775 9.67677 7.40615 10 7.40615C10.3232 7.40615 10.6332 7.27775 10.8618 7.04919C11.0903 6.82063 11.2188 6.51063 11.2188 6.1874V3.34365C11.2188 3.12816 11.3044 2.9215 11.4567 2.76913C11.6091 2.61675 11.8158 2.53115 12.0312 2.53115C12.2467 2.53115 12.4534 2.61675 12.6058 2.76913C12.7581 2.9215 12.8438 3.12816 12.8438 3.34365V6.1874C12.8438 6.51063 12.9722 6.82063 13.2007 7.04919C13.4293 7.27775 13.7393 7.40615 14.0625 7.40615C14.3857 7.40615 14.6957 7.27775 14.9243 7.04919C15.1528 6.82063 15.2812 6.51063 15.2812 6.1874V4.96865C15.2812 4.75316 15.3669 4.5465 15.5192 4.39413C15.6716 4.24175 15.8783 4.15615 16.0938 4.15615C16.3092 4.15615 16.5159 4.24175 16.6683 4.39413C16.8206 4.5465 16.9062 4.75316 16.9062 4.96865V9.4374Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="font-plus_jakarta font-semibold text-2xl text-[#667085]">
          Drag and Drop
        </span>
      </div>
      <div className="flex flex-col items-center gap-10 pb-10">
        <p className="font-medium text-[2.5rem] leading-[3rem] text-[#242222]">
          Since her planet's resources are limitless, Minerva has no need for
        </p>
        <div
          className="w-[19.5rem] h-[5rem] text-[#242222] p-2 font-medium text-[2.5rem] leading-[3rem] rounded-sm border-[7px] border-[#9c2d9c] bg-[#9C2D9C14] flex items-center justify-center"
          onDragOver={handleDragOver}
          onDrop={handleDropEvent}
        >
          {selectedAnswer || ""}
        </div>
        <div className="flex flex-wrap gap-10 justify-center w-full">
          {availableOptions.map((option, index) => (
            <div
              key={index}
              className="max-w-[555px] w-full h-[169px] flex items-center justify-center border border-[#66708538] bg-white"
              draggable
              onDragStart={(e) => handleDragStart(e, option.value)}
              style={{
                boxShadow: "0px 1px 10.4px 0px #0000002B",
                cursor: "grab",
              }}
            >
              <div
                className={`bg-white cursor-pointer font-medium text-[2.5rem] leading-[3rem] text-[#242222] w-full h-full flex items-center justify-center transition duration-100 ease-in-out`}
              >
                {option.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CorrectBox />
    </div>
  );
};

export default DragNDropCard;
