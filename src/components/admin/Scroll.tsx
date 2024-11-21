import React, { useRef } from "react";
import { MdArrowBackIos } from "react-icons/md";
import sec6 from "../../assets/images/sec6.png";
import sec7 from "../../assets/images/sec7.png";
import sec8 from "../../assets/images/sec8.png";

const Scroll: React.FC = () => {
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;

  const scrollLeft = () => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  //
  const scroll_data = [
    {
      title: "For Universities",
      image: sec6,
      paragraph:
        "Deliver scalabel, high-quality healthcare training and group therapy with a HIPAA certified solution that ensure engaging live sessions for providers and patients",
    },
    {
      title: "For Businesses",
      image: sec7,
      paragraph:
        "Deliver scalabel, high-quality healthcare training and group therapy with a HIPAA certified solution that ensure engaging live sessions for providers and patients",
    },
    {
      title: "For Government",
      image: sec8,
      paragraph:
        "Deliver scalabel, high-quality healthcare training and group therapy with a HIPAA certified solution that ensure engaging live sessions for providers and patients",
    },
    {
      title: "For Creators",
      image: sec6,
      paragraph:
        "Deliver scalabel, high-quality healthcare training and group therapy with a HIPAA certified solution that ensure engaging live sessions for providers and patients",
    },
  ];
  const scrollRight = () => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const scroll_items = scroll_data.map((items, index) => (
    <div key={index} className="bg-white rounded-xl shadow-lg ">
      <div>
        <img src={items.image} className="rounded-t-xl " />
      </div>
      <div className="p-4 md:p-8 space-y-3 md:space-y-5">
        <p className="font-medium font-inter text-2xl text-black/80">
          {items.title}
        </p>
        <p className="text-lg text-gray-600">{items.paragraph}</p>
      </div>
    </div>
  ));

  return (
    <div className="px-5 md:px-16 py-10 w-full min-h-[26.5rem] mt-10 md:mt-20 bg-gray-200 space-y-5 md:space-y-10">
      <div className="flex items-center justify-between">
        <p className="text-4xl text-[#1A1A1A]">
          One platform, Endless possibilities
        </p>
        <div className="flex items-center gap-5">
          <button onClick={scrollLeft} className="outline-none">
            <MdArrowBackIos size={40} />
          </button>
          <button onClick={scrollRight} className="outline-none">
            <MdArrowBackIos size={40} className="rotate-180" />
          </button>
        </div>
      </div>
      <div
        ref={horizontalScrollRef}
        className="grid hide_scrollbar grid-flow-col gap-4 auto-cols-[65%] md:auto-cols-[45%] lg:auto-cols-[30%] overflow-x-auto overscroll-contain"
      >
        {scroll_items}
      </div>
    </div>
  );
};

export default Scroll;
