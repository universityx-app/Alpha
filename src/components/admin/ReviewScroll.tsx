import React, { useRef } from "react";
import { MdArrowBackIos } from "react-icons/md";
import cu from "../../assets/images/cu-logo.png";
import miva from "../../assets/images/miva logo.png";
import wema from "../../assets/images/Wema_Bank_Plc.jpg";
import gradely from "../../assets/images/gradely.png";
import yabatech from "../../assets/images/YabaTech-logo.jpg";
import pau from "../../assets/images/pau.png";
import dp from "../../assets/images/sec3.png";

const ReviewScroll: React.FC = () => {
  const ReviewScrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;
  const scrollLeft = () => {
    if (ReviewScrollRef.current) {
      ReviewScrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (ReviewScrollRef.current) {
      ReviewScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  // fetched reviews
  const review_list = [
    {
      logo: cu,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
    {
      logo: miva,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
    {
      logo: pau,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
    {
      logo: gradely,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
    {
      logo: yabatech,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
    {
      logo: wema,
      review:
        "Its an easy to use interface, you don't need to explain it to anyone",
      name: "Jennifer Osato",
      dp,
      position: "Onboarding",
    },
  ];
  const reviews_items = review_list.map((items, index) => (
    <div
      key={index}
      className="shadow-xl shadow-gray-200 border border-red-100 rounded-sm space-y-5 py-5 px-2 md:px-10"
    >
      <div className=" w-full h-20 flex justify-start">
        <img
          src={items.logo}
          width={150}
          height={150}
          className="w-fit h-full object-contain"
        />
      </div>

      <p className="w-4/5 pr-5 text-lg text-gray-700">{items.review}</p>
      <div className="flex items-center gap-2">
        <img src={items.dp} className="w-10 h-10 object-cover rounded-full" />{" "}
        <div>
          <p className="font-semibold font-inter text-black">{items.name}</p>
          <span className="text-gray-500 text-sm">{items.position}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="md:px-16 py-10 w-full min-h-[26.5rem] mt-10 md:mt-20 space-y-10 bg-white">
      <div className="flex  items-center justify-between bg-gradient-to-r from-pink-50 py-5 px-2">
        <p className="text-2xl md:text-4xl text-[#1A1A1A] md:w-[50%] font-semibold">
          Hear from other educators transforming learning with UniversityX
        </p>
        <div className="flex items-center gap-5 p-3 md:p-5 bg-gray-100 shadow">
          <button onClick={scrollLeft} className="outline-none text-blue-500">
            <MdArrowBackIos size={36} />
          </button>
          <button onClick={scrollRight} className="outline-none text-blue-500">
            <MdArrowBackIos size={36} className="rotate-180" />
          </button>
        </div>
      </div>
      <div
        ref={ReviewScrollRef}
        className="grid px-3 hide_scrollbar grid-flow-col gap-4 md:gap-8 auto-cols-[65%] md:auto-cols-[35%] lg:auto-cols-[30%] overflow-x-auto overscroll-contain"
      >
        {reviews_items}
      </div>
    </div>
  );
};

export default ReviewScroll;
