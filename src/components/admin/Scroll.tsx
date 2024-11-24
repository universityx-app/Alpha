import React, { useRef, useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import sec6 from "../../assets/images/sec6.png";
import sec7 from "../../assets/images/sec7.png";
import sec8 from "../../assets/images/sec8.png";

const Scroll: React.FC = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;

  // Handle scroll events and update button states
  const handleScroll = () => {
    const container = horizontalScrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0); // Can scroll left if scrollLeft > 0
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      ); // Can scroll right if not at the end
    }
  };

  useEffect(() => {
    const container = horizontalScrollRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll); // Cleanup event listener on unmount
    }
  }, []);

  const scrollLeft = () => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (horizontalScrollRef.current) {
      horizontalScrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scroll_data = [
    {
      title: "For Universities",
      image: sec6,
      paragraph:
        "Deliver scalable, high-quality healthcare training and group therapy with a HIPAA certified solution that ensures engaging live sessions for providers and patients",
    },
    {
      title: "For Businesses",
      image: sec7,
      paragraph:
        "Deliver scalable, high-quality healthcare training and group therapy with a HIPAA certified solution that ensures engaging live sessions for providers and patients",
    },
    {
      title: "For Government",
      image: sec8,
      paragraph:
        "Deliver scalable, high-quality healthcare training and group therapy with a HIPAA certified solution that ensures engaging live sessions for providers and patients",
    },
    {
      title: "For Creators",
      image: sec6,
      paragraph:
        "Deliver scalable, high-quality healthcare training and group therapy with a HIPAA certified solution that ensures engaging live sessions for providers and patients",
    },
  ];

  const scroll_items = scroll_data.map((items, index) => (
    <div key={index} className="bg-white rounded-xl shadow-lg">
      <div>
        <img src={items.image} className="rounded-t-xl" />
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
    <div className="px-5 md:px-16 py-10 w-full min-h-[26.5rem] mt-5 md:mt-20 bg-white space-y-5 md:space-y-10">
      <div className="flex items-center justify-between">
        <p className="text-2xl md:text-4xl text-[#1A1A1A]">
          One platform, Endless possibilities
        </p>
        <div className="flex items-center gap-5">
          <button
            onClick={scrollLeft}
            className={`${
              canScrollLeft
                ? "bg-[#9c2d9c] text-white shadow-[#9c2d9c]/40 "
                : "bg-[#fff] text-[#9c2d9c] shadow-[#66708538]"
            } outline-none rounded-full flex items-center justify-end w-14 h-14 shadow-md`}
            disabled={!canScrollLeft}
          >
            <MdArrowBackIos size={40} />
          </button>
          <button
            onClick={scrollRight}
            className={`${
              canScrollRight
                ? "bg-[#9c2d9c] text-white shadow-[#9c2d9c]"
                : "bg-[#fff] text-[#9c2d9c] shadow-[#66708538]"
            } outline-none rounded-full flex items-center justify-start w-14 h-14 shadow-md`}
            disabled={!canScrollRight}
          >
            <MdArrowBackIos size={40} className="rotate-180" />
          </button>
        </div>
      </div>
      <div
        ref={horizontalScrollRef}
        className="grid hide_scrollbar grid-flow-col gap-4 auto-cols-[85%] md:auto-cols-[45%] lg:auto-cols-[30%] overflow-x-auto overscroll-contain py-5"
      >
        {scroll_items}
      </div>
    </div>
  );
};

export default Scroll;
