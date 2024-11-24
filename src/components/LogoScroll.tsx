import React from "react";
import cu from "../assets/images/cu-logo.png";
import miva from "../assets/images/miva logo.png";
import nexford from "../assets/images/nexford.png";
import quantic from "../assets/images/quantic.png";
import pau from "../assets/images/pau.png";
import noun from "../assets/images/noun.jpg";
import nutm from "../assets/images/nutm.png";

const logos = [cu, miva, nexford, quantic, pau, noun, nutm];

const LogoScroll: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex gap-5 md:gap-10 animate-marquee whitespace-nowrap w-[200%]">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-[5rem] md:w-[8rem] lg:w-[10rem] object-contain"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={index + logos.length}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-[5rem] md:w-[8rem] lg:w-[10rem] object-contain"
          />
        ))}
      </div>
    </div>
  );
};
export default LogoScroll;
