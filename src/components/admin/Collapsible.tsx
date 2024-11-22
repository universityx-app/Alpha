import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface CollapsibleProp {
  question: string;
  answer: string;
}

const Collapsible: React.FC<CollapsibleProp> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-3 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${
            isOpen && "rotate-45"
          } transition outline-none ease-in-out duration-200`}
        >
          <FaPlus color="#1a1a1a" />
        </button>{" "}
        <p className="font-medium text-lg text-[#1A1A1A]">{question}</p>
      </div>
      <div
        className={`${
          isOpen ? "max-h-[100px] opacity-100 " : "max-h-0 opacity-0"
        } overflow-hidden transition-all pt-5 px-8 duration-300 ease-in-out flex gap-3 items-center`}
      >
        <p className="font-light text-black">{answer}</p>
      </div>
    </div>
  );
};

export default Collapsible;
