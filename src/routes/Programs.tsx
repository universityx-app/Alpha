import React from "react";
// import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import miva from "../assets/images/mivamobile.png";
import nexford from "../assets/images/nexford.png";
import sec1 from "../assets/images/main2.png";
import phonepart from "..//assets/images/fullphone.png";
import learn2 from "../assets/images/learn2.jpg";
import learn3 from "../assets/images/learn3.jpg";
import dashboard from "../assets/images/dashboard.png";

const Programs: React.FC = () => {
  const scrollToDemoForm = () => {
    const faqElement = document.getElementById("book_demo");
    if (faqElement) {
      faqElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <header className="md:px-16 px-5 pt-10 flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            className="object-contain w-[8rem] md:w-[15rem]"
            alt="UniversityX"
          />
        </Link>

        <nav className="flex items-center justify-between md:gap-5 font-inter">
          <div className="md:flex items-center gap-5 hidden">
            {/* <button className="outline-none flex items-center gap-1 text-sm md:text-xl font-medium text-[#242222]">
              For Teachers
              <IoIosArrowDown />
            </button>
            <button className="outline-none flex items-center gap-1 text-xl font-medium text-[#242222]">
              For Schools
              <IoIosArrowDown />
            </button>
            <button className="outline-none flex items-center gap-1 text-xl font-medium text-[#242222]">
              Resources
              <IoIosArrowDown />
            </button> */}
            <Link
              to="/programs"
              className="outline-none flex items-center gap-1 text-xl font-medium text-[#242222]"
            >
              Programs
            </Link>
          </div>

          <Link
            // to="/signup"
            to="/dashboard"
            className="bg-[#9C2D9C] text-white font-semibold font-inter text-[0.8rem] md:text-xl px-3 md:px-10 py-2 md:py-3 rounded-full border border-transparent"
          >
            {/* Sign Up */}
            Try Demo Now
          </Link>
        </nav>
      </header>
      <div className="flex flex-col gap-2 md:gap-y-5 items-center justify-center md:w-2/3 w-full px-2 mx-auto mt-20">
        <h3 className=" text-4xl lg:text-7xl font-bold font-inter text-center text-[#9C2D9C]">
          Level up your career without putting your life on Hold
        </h3>
        <p className=" md:text-2xl text-center py-3  md:w-2/3 text-[#3b3838]">
          Curious about how UniversityX can transform learning for your school?
          Book a free demo today and experience the future of education
          firsthand.
        </p>
        <button
          onClick={scrollToDemoForm}
          className="bg-[#9C2D9C] text-white font-semibold font-inter text-xl px-5 md:px-10 py-4 md:py-5 rounded-full whitespace-nowrap"
        >
          Book a Demo
        </button>{" "}
      </div>

      <div className="px-5 md:px-20 mt-5 md:mt-20 space-y-20 lg:space-y-32">
        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="w-full md:w-[45%] h-[18rem] md:h-[24rem] ">
            <img
              src={learn3}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-[45%] space-y-3 text-[#1A1A1A]">
            <h4 className="font-semibold text-2xl md:text-4xl">
              Flexible Learning for Busy Professionals
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Elevate your career with UniversityX. Experience personalized
              learning paths, AI-powered course design, and interactive gamified
              elements, all tailored to fit your goals and schedule—helping you
              pursue an MBA or postgraduate degree without compromising your
              lifestyle.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-around flex-wrap">
          <div className="w-full md:w-[45%] h-[18rem] md:h-[24rem]">
            <img
              src={learn2}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1A1A1A]">
              Learn at Your Own Pace
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Progress through lessons in manageable chunks, ensuring steady
              improvement without feeling overwhelmed. With UniversityX, you
              control the learning speed to fit your schedule and goals, making
              every step towards mastery achievable.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="w-full md:w-[45%] h-[18rem] md:h-[24rem] ">
            <img
              src={dashboard}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-[45%] space-y-3 text-[#1A1A1A]">
            <h4 className="font-semibold text-2xl md:text-4xl">
              Personalized Dashboard
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Whether you learn best through videos, podcasts, slides, text, or
              interactive modules, UniversityX adapts to your preferred learning
              style, delivering content that works for you. Enjoy a seamless
              experience that prioritizes your unique needs.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-around flex-wrap">
          <div className="w-full md:w-[45%] h-[18rem] md:h-[24rem]">
            <img
              src={sec1}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1A1A1A]">
              24/7 Conversational AI Tutor
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Get real-time help with explanations, answers, and guidance. Our
              AI tutor is always available to walk you through concepts and
              challenges, making learning interactive and engaging, no matter
              the time.
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-full h-[24rem] gap-3 md:gap-5 mt-20">
        <div>
          <img src={nexford} alt="" className="w-full max-w-[15rem]" />
        </div>

        <div className="relative w-[50rem]  md:w-1/3 lg:h-full  overflow-y-clip">
          <img src={phonepart} alt="" className="w-full" />
        </div>

        <div>
          <img
            src={miva}
            alt=""
            className="w-full max-w-[15rem] bg-[#0A3150] p-4"
          />
        </div>
      </div>
      <div
        id="book_demo"
        className="p-4 md:p-12 w-full lg:w-3/5 mx-auto flex flex-col gap-8 items-center border border-[#66708538] rounded-[20px] bg-white text-[#242222]"
      >
        <div className="space-y-5">
          <p className="font-inter font-bold text-3xl md:text-6xl text-black">
            Book a Spot
          </p>
          <p className="font-plus_jakarta font-semibold text-xl md:text-[1.8rem] md:leading-8 text-[#667085]">
            Learn about our product with a live demonstration and have your
            questions answered by one of our experts.
          </p>
        </div>

        <form
          name="try_demo_form"
          method="POST"
          action="/dashboard"
          className="w-full flex flex-col gap-10"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="try_demo_form" />
          <div className="flex flex-col gap-4">
            <label
              htmlFor="name"
              className="font-plus_jakarta font-semibold text-xl md:text-[2rem] leading-6 text-[#242222]"
            >
              Name <span className="text-[#A02240]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="full_name"
              className="w-full min-h-[5rem] outline-none text-3xl text-[#242222] rounded-lg border border-[#B9B3B3] bg-white py-2.5 px-[14px]"
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="email"
              className="font-plus_jakarta  font-semibold text-xl md:text-[2rem] leading-6 text-[#242222]"
            >
              Email <span className="text-[#A02240]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full min-h-[5rem] outline-none text-3xl text-[#242222] rounded-lg border border-[#B9B3B3] bg-white py-2.5 px-[14px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="interest"
              className="font-plus_jakarta font-semibold text-xl md:text-[2rem] leading-6 text-[#242222]"
            >
              Which of our partner institutions interests you?{" "}
              <span className="text-[#A02240]">*</span>
            </label>
            <select
              required
              name="interest"
              id="interest"
              className="w-full min-h-[5rem] outline-none rounded-lg border text-2xl md:text-3xl text-[#242222] border-[#B9B3B3] bg-white py-2.5 px-[14px]"
            >
              <option value="" className="text-xl md:text-2xl text-[#242222]">
                Select an option
              </option>
              <option
                value="Miva Open University"
                className="text-xl mdtext-2xl text-[#242222]"
              >
                Miva Open University
              </option>
              <option
                value="Nexford University"
                className="text-xl md:text-2xl text-[#242222]"
              >
                Nexford University
              </option>
              <option
                value="Pan Atlantic University"
                className="text-xl md:text-2xl text-[#242222]"
              >
                Pan Atlantic University
              </option>
              <option
                value="Convenant University"
                className="text-xl md:text-2xl text-[#242222]"
              >
                Covenant University
              </option>
              <option
                value="Others"
                className="text-xl md:text-2xl  text-[#242222]"
              >
                Others
              </option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-[#9c2d9c] p-5 text-white font-plus_jakarta font-bold text-2xl md:text-4xl"
          >
            Book a spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default Programs;
