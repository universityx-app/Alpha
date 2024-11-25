// import React, { useState } from "react";
// import CorrectBox from "./CorrectBox";
// import { motion } from "framer-motion";
// import IncorrectBox from "./IncorrectBox";

// // interface Option {
// //   text: string;
// //   value: string;
// // }

// // interface DragNDropCardProps {
// //   options: Option[];
// //   onAnswerChange?: (answer: string | null) => void;
// // }

// const options = [
//   { text: "Cab drivers", value: "cab driver" },
//   { text: "Economists", value: "economist" },
//   { text: "Veterinarian", value: "veterinarian" },
// ];
// const DragNDropCard: React.FC<{
//   onClick: () => void;
//   toggleModal: () => void;
// }> = ({ onClick, toggleModal }) => {
//   const answer = "economist";

//   const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();
//   const [isNotCorrectAnswer, setIsNotCorrectAnswer] = useState<boolean>();
//   const [availableOptions, setAvailableOptions] = useState(options);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

//   const handleDrop = (value: string) => {
//     setSelectedAnswer(value);
//     setAvailableOptions(options.filter((option) => option.value !== value));
//     if (value == answer) {
//       setIsCorrectAnswer(true);
//       setIsNotCorrectAnswer(false);
//     } else {
//       setIsCorrectAnswer(false);
//       setIsNotCorrectAnswer(true);
//     }
//   };

//   const handleDragStart = (e: React.DragEvent, value: string) => {
//     e.dataTransfer.setData("value", value);
//   };

//   const handleDragOver = (e: React.DragEvent) => {
//     e.preventDefault();
//   };

//   const handleDropEvent = (e: React.DragEvent) => {
//     e.preventDefault();
//     const value = e.dataTransfer.getData("value");
//     handleDrop(value);
//   };
//   const delta = 1;
//   return (
//     <div className="space-y-5 px-5">
//       <div className="flex items-center gap-2">
//         <div className="w-[3rem] h-[3rem] rounded-full bg-[#667085] flex items-center justify-center">
// <svg
//   width="20"
//   height="19"
//   viewBox="0 0 20 19"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <path
//     d="M16.0938 1.71865C15.7051 1.71742 15.3195 1.78623 14.9552 1.92178C14.7421 1.48284 14.4329 1.09753 14.0505 0.794422C13.6681 0.491318 13.2224 0.278202 12.7464 0.170887C12.2704 0.0635715 11.7764 0.0648116 11.3009 0.174515C10.8255 0.284218 10.3809 0.499568 10 0.804588C9.52189 0.421793 8.94534 0.181889 8.33681 0.112527C7.72828 0.0431642 7.11253 0.147166 6.56054 0.412547C6.00855 0.677928 5.54278 1.09388 5.21692 1.61247C4.89106 2.13106 4.71837 2.73118 4.71875 3.34365V4.96865H3.90625C3.0443 4.96865 2.21765 5.31106 1.60815 5.92055C0.99866 6.53005 0.65625 7.3567 0.65625 8.21865V9.4374C0.65625 11.9155 1.64068 14.2921 3.39297 16.0444C5.14526 17.7967 7.52188 18.7811 10 18.7811C12.4781 18.7811 14.8547 17.7967 16.607 16.0444C18.3593 14.2921 19.3438 11.9155 19.3438 9.4374V4.96865C19.3438 4.1067 19.0013 3.28005 18.3918 2.67055C17.7824 2.06106 16.9557 1.71865 16.0938 1.71865ZM16.9062 9.4374C16.9062 11.2691 16.1786 13.0257 14.8835 14.3209C13.5883 15.616 11.8317 16.3436 10 16.3436C8.16835 16.3436 6.41172 15.616 5.11654 14.3209C3.82137 13.0257 3.09375 11.2691 3.09375 9.4374V8.21865C3.09375 8.00316 3.17935 7.7965 3.33173 7.64412C3.4841 7.49175 3.69076 7.40615 3.90625 7.40615H4.71875V9.4374C4.71875 9.76063 4.84715 10.0706 5.07571 10.2992C5.30427 10.5277 5.61427 10.6561 5.9375 10.6561C6.26073 10.6561 6.57073 10.5277 6.79929 10.2992C7.02785 10.0706 7.15625 9.76063 7.15625 9.4374V3.34365C7.15625 3.12816 7.24185 2.9215 7.39423 2.76913C7.5466 2.61675 7.75326 2.53115 7.96875 2.53115C8.18424 2.53115 8.3909 2.61675 8.54327 2.76913C8.69565 2.9215 8.78125 3.12816 8.78125 3.34365V6.1874C8.78125 6.51063 8.90965 6.82063 9.13821 7.04919C9.36677 7.27775 9.67677 7.40615 10 7.40615C10.3232 7.40615 10.6332 7.27775 10.8618 7.04919C11.0903 6.82063 11.2188 6.51063 11.2188 6.1874V3.34365C11.2188 3.12816 11.3044 2.9215 11.4567 2.76913C11.6091 2.61675 11.8158 2.53115 12.0312 2.53115C12.2467 2.53115 12.4534 2.61675 12.6058 2.76913C12.7581 2.9215 12.8438 3.12816 12.8438 3.34365V6.1874C12.8438 6.51063 12.9722 6.82063 13.2007 7.04919C13.4293 7.27775 13.7393 7.40615 14.0625 7.40615C14.3857 7.40615 14.6957 7.27775 14.9243 7.04919C15.1528 6.82063 15.2812 6.51063 15.2812 6.1874V4.96865C15.2812 4.75316 15.3669 4.5465 15.5192 4.39413C15.6716 4.24175 15.8783 4.15615 16.0938 4.15615C16.3092 4.15615 16.5159 4.24175 16.6683 4.39413C16.8206 4.5465 16.9062 4.75316 16.9062 4.96865V9.4374Z"
//     fill="white"
//   />
// </svg>
//         </div>
//         <span className="font-plus_jakarta font-semibold text-2xl text-[#667085]">
//           Drag and Drop
//         </span>
//       </div>
//       <div className="flex flex-col items-center gap-10 pb-10">
//         <p className="font-medium text-[2.5rem] leading-[3rem] text-[#242222]">
//           Since her planet's resources are limitless, Minerva has no need for
//         </p>
//         <div
//           className={`${isCorrectAnswer
//             ? "border-[#34C759] text-[#34C759]"
//             : "border-[#9c2d9c] text-[#242222]"
//             } w-[19.5rem] h-[5rem]  p-2 font-medium text-[2.5rem] leading-[3rem] rounded-sm border-[7px]  bg-[#9C2D9C14] flex items-center justify-center`}
//           onDragOver={handleDragOver}
//           onDrop={handleDropEvent}
//         >
//           {selectedAnswer || ""}
//         </div>
//         <div className="flex flex-wrap gap-10 justify-center w-full">
//           {availableOptions.map((option, index) => (
//             <div
//               key={index}
//               className="max-w-[555px] w-full h-[169px] flex items-center justify-center border border-[#66708538] bg-white"
//               draggable
//               onDragStart={(e) => handleDragStart(e, option.value)}
//               style={{
//                 boxShadow: "0px 1px 10.4px 0px #0000002B",
//                 cursor: "grab",
//               }}
//             >
//               <div
//                 className={`bg-white cursor-pointer font-medium text-[2.5rem] leading-[3rem] text-[#242222] w-full h-full flex items-center justify-center transition duration-100 ease-in-out`}
//               >
//                 {option.text}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {isCorrectAnswer && (
//         <motion.div
//           initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <CorrectBox onClick={onClick} />
//         </motion.div>
//       )}
//       {isNotCorrectAnswer && (
//         <motion.div
//           initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <IncorrectBox onClick={onClick} />
//         </motion.div>
//       )}
//       <div className="flex justify-end w-full mt-10 ">
//         <button
//           onClick={toggleModal}
//           className="text-2xl font-semibold text-[#242222] w-[22rem] h-[4.75rem] rounded-[71px] p-2.5 flex items-center justify-center border border-[#66708538] bg-[#F3F3F6]"
//         >
//           Chat with AI tutor{" "}
//           <svg
//             width="36"
//             height="44"
//             viewBox="0 0 36 44"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M26.5168 23.6453C27.2104 23.3975 27.6762 22.7352 27.6762 21.9988C27.6762 21.2624 27.2104 20.6001 26.5196 20.3523L23.3434 19.2071C21.7981 18.6527 20.3947 17.7632 19.2338 16.6024C18.073 15.4415 17.1834 14.0381 16.6291 12.4928L15.4839 9.31654C15.3614 8.97862 15.138 8.68649 14.8441 8.47964C14.5501 8.27279 14.1997 8.16121 13.8402 8.15998C13.1053 8.15998 12.443 8.62432 12.1923 9.31654L11.0485 12.4928C10.4943 14.0384 9.60464 15.442 8.44349 16.6029C7.28234 17.7638 5.8785 18.6532 4.33282 19.2071L1.15941 20.3523C0.465757 20.6015 0 21.2624 0 21.9988C0 22.7352 0.465757 23.3961 1.15656 23.6453L4.33282 24.7905C5.87819 25.3447 7.2817 26.2341 8.44258 27.395C9.60347 28.5559 10.4929 29.9594 11.0471 31.5048L12.1923 34.6825C12.4415 35.3733 13.1039 35.8376 13.8388 35.8376C14.5738 35.8376 15.2361 35.3718 15.4839 34.681L16.6291 31.5048C17.1834 29.9595 18.073 28.5561 19.2338 27.3952C20.3947 26.2344 21.7981 25.3448 23.3434 24.7905L26.5168 23.6453ZM22.3777 22.1099C20.4376 22.8056 18.6756 23.9222 17.2182 25.3796C15.7608 26.837 14.6442 28.599 13.9485 30.5391L13.8374 30.8467L13.7263 30.5391C13.0301 28.5992 11.9133 26.8375 10.456 25.3802C8.99869 23.9228 7.23693 22.806 5.29709 22.1099L4.99086 21.9988L5.29852 21.8877C7.2386 21.192 9.00059 20.0753 10.458 18.618C11.9154 17.1606 13.032 15.3986 13.7277 13.4585L13.8388 13.1508L13.9499 13.4585C14.6456 15.3984 15.762 17.1602 17.2191 18.6176C18.6762 20.075 20.4379 21.1917 22.3777 21.8877L22.6853 21.9988L22.3777 22.1099ZM21.6285 9.83927L23.2366 10.419C23.9216 10.6648 24.5439 11.0592 25.0585 11.5739C25.5732 12.0885 25.9676 12.7107 26.2134 13.3958L26.7917 15.0025C27.0182 15.632 27.6192 16.0551 28.2872 16.0551C28.9552 16.0551 29.5577 15.632 29.7828 15.0039L30.3625 13.3958C30.608 12.7106 31.0023 12.0882 31.517 11.5735C32.0318 11.0588 32.6541 10.6645 33.3393 10.419L34.9488 9.83927C35.5741 9.6128 35.9971 9.01316 35.9986 8.34799C36 7.68283 35.5812 7.08034 34.9488 6.8496L33.3393 6.26989C32.6543 6.0239 32.0322 5.62945 31.5176 5.1148C31.0029 4.60015 30.6085 3.97804 30.3625 3.29304L29.7828 1.68497C29.671 1.37829 29.4677 1.1134 29.2003 0.926234C28.9329 0.739065 28.6144 0.638672 28.2879 0.638672C27.9615 0.638672 27.643 0.739065 27.3756 0.926234C27.1082 1.1134 26.9049 1.37829 26.7931 1.68497L26.2134 3.29304C25.9676 3.97814 25.5732 4.60034 25.0585 5.11501C24.5439 5.62969 23.9216 6.02408 23.2366 6.26989L21.6242 6.85102C20.9975 7.07891 20.5759 7.68141 20.5773 8.34799C20.5788 9.01458 21.0018 9.61423 21.6285 9.83927ZM28.2887 5.55488C28.962 6.7096 29.9228 7.67038 31.0775 8.34372C29.9228 9.01707 28.962 9.97784 28.2887 11.1326C27.615 9.97812 26.6543 9.01743 25.4998 8.34372C26.6539 7.6696 27.6145 6.70901 28.2887 5.55488ZM34.9474 34.1583L33.3393 33.5786C32.6543 33.3326 32.0322 32.9382 31.5176 32.4235C31.0029 31.9089 30.6085 31.2868 30.3625 30.6018L29.7828 28.9937C29.6707 28.6872 29.4671 28.4225 29.1996 28.2355C28.9321 28.0485 28.6136 27.9482 28.2872 27.9482C27.9609 27.9482 27.6423 28.0485 27.3748 28.2355C27.1074 28.4225 26.9038 28.6872 26.7917 28.9937L26.212 30.6018C25.9664 31.287 25.5721 31.9093 25.0574 32.424C24.5427 32.9388 23.9204 33.3331 23.2351 33.5786L21.6285 34.1569C21.0004 34.3819 20.5773 34.983 20.5759 35.6496C20.5745 36.3162 20.9947 36.9187 21.6271 37.148L23.2351 37.7277C23.9205 37.9731 24.5429 38.3673 25.0576 38.882C25.5724 39.3968 25.9666 40.0192 26.212 40.7045L26.7903 42.3112C26.9016 42.6187 27.105 42.8845 27.3728 43.0724C27.6405 43.2603 27.9596 43.3612 28.2867 43.3613C28.6138 43.3615 28.933 43.2609 29.201 43.0733C29.4689 42.8856 29.6725 42.6201 29.7842 42.3126L30.3639 40.7045C30.6099 40.0195 31.0044 39.3974 31.519 38.8828C32.0337 38.3681 32.6558 37.9737 33.3408 37.7277L34.956 37.1466C35.5812 36.9172 36.0014 36.3162 36 35.6496C35.9986 34.983 35.5741 34.3848 34.9474 34.1583ZM28.2887 38.4427C27.6153 37.288 26.6545 36.3272 25.4998 35.6539C26.6543 34.9802 27.615 34.0195 28.2887 32.865C28.9624 34.0195 29.9231 34.9802 31.0775 35.6539C29.9231 36.3276 28.9624 37.2883 28.2887 38.4427Z"
//               fill="#9C2D9C"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DragNDropCard;

import React, { useState, useEffect } from "react";
import CorrectBox from "./CorrectBox";
import { motion } from "framer-motion";
import IncorrectBox from "./IncorrectBox";

const options = [
  { text: "Cab drivers", value: "cab driver" },
  { text: "Economists", value: "economist" },
  { text: "Veterinarian", value: "veterinarian" },
];

const DragNDropCard: React.FC<{
  onClick: () => void;
  toggleModal: () => void;
}> = ({ onClick, toggleModal }) => {
  const answer = "economist";

  const [isMobile, setIsMobile] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState("");
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>();
  const [isNotCorrectAnswer, setIsNotCorrectAnswer] = useState<boolean>();
  const [availableOptions, setAvailableOptions] = useState(options);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  console.log(clickedAnswer);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDrop = (value: string) => {
    setSelectedAnswer(value);
    setAvailableOptions(options.filter((option) => option.value !== value));
    if (value === answer) {
      setIsCorrectAnswer(true);
      setIsNotCorrectAnswer(false);
    } else {
      setIsCorrectAnswer(false);
      setIsNotCorrectAnswer(true);
    }
  };

  const handleDragStart = (value: string) => setDraggedItem(value);

  const handleDropEvent = () => {
    if (draggedItem) {
      handleDrop(draggedItem);
      setDraggedItem(null);
    }
  };

  const handleClickOption = (value: string) => {
    setClickedAnswer(value);
    handleDrop(value);
  };

  const delta = 1;

  return (
    <div className="space-y-5 px-5">
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
          {isMobile ? "Tap to Select" : "Drag and Drop"}
        </span>
      </div>
      <div className="flex flex-col items-center gap-10 pb-10">
        <p className="font-medium text-[2rem] md:text-[3rem] leading-[3rem] text-[#242222]">
          Since her planet's resources are limitless, Minerva has no need for
        </p>
        <div
          id="drop-zone"
          className={`${
            isCorrectAnswer
              ? "border-[#34C759] text-[#34C759]"
              : "border-[#9c2d9c] text-[#242222]"
          } w-[19.5rem] h-[5rem]  p-2 font-medium text-[2.5rem] leading-[3rem] rounded-sm border-[7px]  bg-[#9C2D9C14] flex items-center justify-center`}
          onDragOver={(e) => !isMobile && e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleDropEvent();
          }}
        >
          {selectedAnswer || ""}
        </div>
        <div className="flex flex-wrap gap-10 justify-center w-full">
          {availableOptions.map((option, index) => (
            <div
              key={index}
              className="max-w-[555px] w-full h-[169px] flex items-center justify-center border border-[#66708538] bg-white"
              draggable={!isMobile}
              onDragStart={() => !isMobile && handleDragStart(option.value)}
              onClick={() => isMobile && handleClickOption(option.value)}
              style={{
                boxShadow: "0px 1px 10.4px 0px #0000002B",
                cursor: isMobile ? "pointer" : "grab",
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
      {isCorrectAnswer && (
        <motion.div
          initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <CorrectBox
            whyText="
          Minerva doesn’t need an economist because her planet has endless resources. There’s nothing to manage or divide since everyone always gets whatever they want, so there’s no need for economic planning.
          "
            onClick={onClick}
          />
        </motion.div>
      )}
      {isNotCorrectAnswer && (
        <motion.div
          initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <IncorrectBox />
        </motion.div>
      )}
      <div className="flex justify-end w-full mt-10 ">
        <button
          onClick={toggleModal}
          className="text-2xl font-semibold text-[#242222] w-[22rem] h-[4rem] rounded-[71px] p-2.5 flex items-center justify-center border border-[#66708538] bg-[#F3F3F6]"
        >
          Chat with AI tutor
          <svg
            width="36"
            height="44"
            viewBox="0 0 36 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5168 23.6453C27.2104 23.3975 27.6762 22.7352 27.6762 21.9988C27.6762 21.2624 27.2104 20.6001 26.5196 20.3523L23.3434 19.2071C21.7981 18.6527 20.3947 17.7632 19.2338 16.6024C18.073 15.4415 17.1834 14.0381 16.6291 12.4928L15.4839 9.31654C15.3614 8.97862 15.138 8.68649 14.8441 8.47964C14.5501 8.27279 14.1997 8.16121 13.8402 8.15998C13.1053 8.15998 12.443 8.62432 12.1923 9.31654L11.0485 12.4928C10.4943 14.0384 9.60464 15.442 8.44349 16.6029C7.28234 17.7638 5.8785 18.6532 4.33282 19.2071L1.15941 20.3523C0.465757 20.6015 0 21.2624 0 21.9988C0 22.7352 0.465757 23.3961 1.15656 23.6453L4.33282 24.7905C5.87819 25.3447 7.2817 26.2341 8.44258 27.395C9.60347 28.5559 10.4929 29.9594 11.0471 31.5048L12.1923 34.6825C12.4415 35.3733 13.1039 35.8376 13.8388 35.8376C14.5738 35.8376 15.2361 35.3718 15.4839 34.681L16.6291 31.5048C17.1834 29.9595 18.073 28.5561 19.2338 27.3952C20.3947 26.2344 21.7981 25.3448 23.3434 24.7905L26.5168 23.6453ZM22.3777 22.1099C20.4376 22.8056 18.6756 23.9222 17.2182 25.3796C15.7608 26.837 14.6442 28.599 13.9485 30.5391L13.8374 30.8467L13.7263 30.5391C13.0301 28.5992 11.9133 26.8375 10.456 25.3802C8.99869 23.9228 7.23693 22.806 5.29709 22.1099L4.99086 21.9988L5.29852 21.8877C7.2386 21.192 9.00059 20.0753 10.458 18.618C11.9154 17.1606 13.032 15.3986 13.7277 13.4585L13.8388 13.1508L13.9499 13.4585C14.6456 15.3984 15.762 17.1602 17.2191 18.6176C18.6762 20.075 20.4379 21.1917 22.3777 21.8877L22.6853 21.9988L22.3777 22.1099ZM21.6285 9.83927L23.2366 10.419C23.9216 10.6648 24.5439 11.0592 25.0585 11.5739C25.5732 12.0885 25.9676 12.7107 26.2134 13.3958L26.7917 15.0025C27.0182 15.632 27.6192 16.0551 28.2872 16.0551C28.9552 16.0551 29.5577 15.632 29.7828 15.0039L30.3625 13.3958C30.608 12.7106 31.0023 12.0882 31.517 11.5735C32.0318 11.0588 32.6541 10.6645 33.3393 10.419L34.9488 9.83927C35.5741 9.6128 35.9971 9.01316 35.9986 8.34799C36 7.68283 35.5812 7.08034 34.9488 6.8496L33.3393 6.26989C32.6543 6.0239 32.0322 5.62945 31.5176 5.1148C31.0029 4.60015 30.6085 3.97804 30.3625 3.29304L29.7828 1.68497C29.671 1.37829 29.4677 1.1134 29.2003 0.926234C28.9329 0.739065 28.6144 0.638672 28.2879 0.638672C27.9615 0.638672 27.643 0.739065 27.3756 0.926234C27.1082 1.1134 26.9049 1.37829 26.7931 1.68497L26.2134 3.29304C25.9676 3.97814 25.5732 4.60034 25.0585 5.11501C24.5439 5.62969 23.9216 6.02408 23.2366 6.26989L21.6242 6.85102C20.9975 7.07891 20.5759 7.68141 20.5773 8.34799C20.5788 9.01458 21.0018 9.61423 21.6285 9.83927ZM28.2887 5.55488C28.962 6.7096 29.9228 7.67038 31.0775 8.34372C29.9228 9.01707 28.962 9.97784 28.2887 11.1326C27.615 9.97812 26.6543 9.01743 25.4998 8.34372C26.6539 7.6696 27.6145 6.70901 28.2887 5.55488ZM34.9474 34.1583L33.3393 33.5786C32.6543 33.3326 32.0322 32.9382 31.5176 32.4235C31.0029 31.9089 30.6085 31.2868 30.3625 30.6018L29.7828 28.9937C29.6707 28.6872 29.4671 28.4225 29.1996 28.2355C28.9321 28.0485 28.6136 27.9482 28.2872 27.9482C27.9609 27.9482 27.6423 28.0485 27.3748 28.2355C27.1074 28.4225 26.9038 28.6872 26.7917 28.9937L26.212 30.6018C25.9664 31.287 25.5721 31.9093 25.0574 32.424C24.5427 32.9388 23.9204 33.3331 23.2351 33.5786L21.6285 34.1569C21.0004 34.3819 20.5773 34.983 20.5759 35.6496C20.5745 36.3162 20.9947 36.9187 21.6271 37.148L23.2351 37.7277C23.9205 37.9731 24.5429 38.3673 25.0576 38.882C25.5724 39.3968 25.9666 40.0192 26.212 40.7045L26.7903 42.3112C26.9016 42.6187 27.105 42.8845 27.3728 43.0724C27.6405 43.2603 27.9596 43.3612 28.2867 43.3613C28.6138 43.3615 28.933 43.2609 29.201 43.0733C29.4689 42.8856 29.6725 42.6201 29.7842 42.3126L30.3639 40.7045C30.6099 40.0195 31.0044 39.3974 31.519 38.8828C32.0337 38.3681 32.6558 37.9737 33.3408 37.7277L34.956 37.1466C35.5812 36.9172 36.0014 36.3162 36 35.6496C35.9986 34.983 35.5741 34.3848 34.9474 34.1583ZM28.2887 38.4427C27.6153 37.288 26.6545 36.3272 25.4998 35.6539C26.6543 34.9802 27.615 34.0195 28.2887 32.865C28.9624 34.0195 29.9231 34.9802 31.0775 35.6539C29.9231 36.3276 28.9624 37.2883 28.2887 38.4427Z"
              fill="#9C2D9C"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DragNDropCard;
