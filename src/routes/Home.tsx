import React from "react";
import logo from "../assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsQuestionCircle, BsSend, BsEnvelope } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import bg1 from "../assets/images/bg!.png";
import generateLesson from "../assets/images/generateLesson.png";
import aiChat from "../assets/images/AIChat.png";
import courseAction from "../assets/images/CourseAction.png";
// import bg2 from "../assets/images/bg2.png";
// import bg3 from "../assets/images/bg3.png";
import sec1 from "../assets/images/sec1.png";
import sec2 from "../assets/images/sec2.png";
import sec3 from "../assets/images/sec3.png";
import sec4 from "../assets/images/sec4.png";
import sec5 from "../assets/images/sec5.png";
import Scroll from "../components/admin/Scroll";
import ReviewScroll from "../components/admin/ReviewScroll";
import Collapsible from "../components/admin/Collapsible";
// import icon from "../assets/icons/UniXIcon.png";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Home: React.FC = () => {
  const faq = [
    {
      question: "How does UniversityX help me prepare for my exams",
      answer:
        "UniversityX helps you prepare for your exams by providing a variety of study materials, including flashcards, practice questions and simulation, We also offer personalized learning path and adaptive assessments to help you reach your academic goals ",
    },
    {
      question:
        "What makes UniversityX different from other learning platforms",
      answer:
        "UniversityX helps you prepare for your exams by providing a variety of study materials, including flashcards, practice questions and simulation, We also offer personalized learning path and adaptive assessments to help you reach your academic goals ",
    },
    {
      question: "How can i track my process on UniversityX",
      answer:
        "UniversityX helps you prepare for your exams by providing a variety of study materials, including flashcards, practice questions and simulation, We also offer personalized learning path and adaptive assessments to help you reach your academic goals ",
    },
    {
      question: "Is there a community or a support system on UniversityX",
      answer:
        "UniversityX helps you prepare for your exams by providing a variety of study materials, including flashcards, practice questions and simulation, We also offer personalized learning path and adaptive assessments to help you reach your academic goals ",
    },
    {
      question: "Can i use UniversityX on my phone or tablet",
      answer:
        "UniversityX helps you prepare for your exams by providing a variety of study materials, including flashcards, practice questions and simulation, We also offer personalized learning path and adaptive assessments to help you reach your academic goals ",
    },
  ];
  const faq_list = faq.map((item, index) => (
    <Collapsible key={index} question={item.question} answer={item.answer} />
  ));
  return (
    <div className="bg-white ">
      <header className="md:px-16 px-5 pt-10 flex items-center justify-between">
        <div className="">
          <img src={logo} className="w-[10rem] md:w-[15rem]" alt="UniversityX" />
        </div>
        {/* <div className="md:hidden w-16 h-16">
          <img
            src={icon}
            alt="Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain "
          />
        </div> */}
        <nav className="flex items-center justify-between md:gap-5 font-inter">
          <div className="md:flex items-center gap-5 hidden">
            <button className="outline-none flex items-center gap-1 text-sm md:text-xl font-medium">
              For Teachers
              <IoIosArrowDown />
            </button>
            <button className="outline-none flex items-center gap-1 text-xl font-medium">
              For Schools
              <IoIosArrowDown />
            </button>
            <button className="outline-none flex items-center gap-1 text-xl font-medium">
              Resources
              <IoIosArrowDown />
            </button>
          </div>

          <Link
            to="/signup"
            className="bg-[#9C2D9C] text-white font-semibold font-inter text-[0.8rem] md:text-xl px-5 md:px-10 py-3 md:py-4 rounded-full border border-transparent"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <div className="mt-20 px-5">
        <div className="flex flex-col gap-2 md:gap-y-5 items-center justify-center md:w-2/3 w-full px-2 mx-auto">
          <h3 className=" text-4xl lg:text-7xl font-bold font-inter text-center text-[#9C2D9C]">
            The AI-Powered Future of Education is Here
          </h3>
          <p className=" md:text-2xl text-center py-3  md:w-2/3 text-[#3b3838]">
            Combine the power of artificial intelligence, gamification, and
            community learning to create engaging educational experiences that
            drive real results.
          </p>
          <div className="flex items-center gap-3 md:gap-8">
            <button className="bg-[#9C2D9C] text-white font-semibold font-inter text-[0.8rem] md:text-xl px-5 md:px-10 py-4 md:py-5 rounded-full whitespace-nowrap">
              Book a Demo
            </button>{" "}
            <button className="flex items-center gap-2 bg-[#fff] border-2 border-[#9C2C9C] text-[#9C2C9C] font-semibold font-inter text-[0.8rem] md:text-xl whitespace-nowrap md:px-10 px-3 py-4 md:py-5 rounded-full">
              <BsQuestionCircle /> Frequently Asked Question
            </button>{" "}
          </div>
        </div>

        {/*  */}
      </div>
      <div className="flex flex-col items-center relative mt-40 md:px-16  ">
        <div className="absolute -top-[20%] md:-top-[25%] left-4 md:left-10 z-10">
          <img
            // src={bg2}
            src={generateLesson}
            width={350}
            height={350}
            className="-rotate-12 rounded-xl shadow-2xl shadow-[#9c2c9c]/50 w-[9rem] md:w-[21rem]"
          />
        </div>
        <div className="absolute -top-[20%] md:-top-[25%] right-4 md:right-10 z-10">
          <img
            // src={bg3}
            src={aiChat}
            width={350}
            height={350}
            className="rotate-12 rounded-xl shadow-2xl shadow-blue-600/50 w-[9rem] md:w-[21rem]"
          />
        </div>
        <div className="z-30 px-5 flex justify-center">
          <img
            // src={bg1}
            src={courseAction}
            width={1000}
            height={800}
            className="rounded-2xl w-full h-[16rem] md:h-full md:w-[80%]"
          />
        </div>
        <div className="w-[96%] md:w-[90%] h-40 flex flex-col md:flex-row items-center p-5 md:p-10 rounded-xl shadow-lg border-2 border-[#D9D9D9]">
          <p className="font-inter md:text-xl md:w-[30%] text-[#1a1a1a]">
            Join other <span className="font-bold">forward thinking</span>{" "}
            institution <span className="italic font-bold">transforming</span>{" "}
            education
          </p>
          <div className="w-full md:w-[70%] min-h-10 border border-red-500"></div>
        </div>
      </div>
      <div className="px-5 md:px-20 mt-10 md:mt-20 space-y-20 lg:space-y-32">
        <div className="flex flex-col md:flex-row items-center justify-around w-full">
          <div className="w-full md:w-1/2">
            <img
              src={sec1}
              alt=""
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-[45%] space-y-3 text-[#1A1A1A]">
            <h4 className="font-semibold text-2xl md:text-4xl">
              No Setup, No Maintenance, Just Results
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Ensure your entire team is equipped to grow with your business.
              Enterprice integrations and course templates empowers you to
              create, replicate and refine training sections so you can develop
              talent with quality instructions at scale
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse flex-wrap items-center justify-around">
          <div className="w-full md:w-1/2">
            <img
              src={sec2}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1A1A1A]">
              AI course creation that drives engagement
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Ensure your entire team is equipped to grow with your business.
              Enterprice integrations and course templates empowers you to
              create, replicate and refine training sections so you can develop
              talent with quality instructions at scale
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={sec3}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1A1A1A]">
              Gamified learning environment for student
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Ensure your entire team is equipped to grow with your business.
              Enterprice integrations and course templates empowers you to
              create, replicate and refine training sections so you can develop
              talent with quality instructions at scale
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center justify-around flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={sec4}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1A1A1A]">
              Data-Driven Analysics and Real-Time Insights
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Ensure your entire team is equipped to grow with your business.
              Enterprice integrations and course templates empowers you to
              create, replicate and refine training sections so you can develop
              talent with quality instructions at scale
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between lg:justify-around flex-wrap">
          <div className="w-full md:w-1/2">
            <img
              src={sec5}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="w-full md:w-[45%] space-y-3">
            <h4 className="font-semibold text-2xl md:text-4xl text-[#1a1a1a]">
              Gamified learning environment for student
            </h4>
            <p className="md:text-2xl text-[#2b2a2a]">
              Ensure your entire team is equipped to grow with your business.
              Enterprice integrations and course templates empowers you to
              create, replicate and refine training sections so you can develop
              talent with quality instructions at scale
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20 w-full min-h-[22rem] bg-[#9C2C9C] flex flex-col gap-10 items-center py-10 px-5 md:px-16">
        <h3 className="font-medium font-inter text-2xl text-white text-center w-full md:w-[45%]">
          Our Innovation is Backed by Data from Top Education and Data Sources
          Around The World
        </h3>
        <div className="w-full flex flex-wrap items-center justify-between gap-y-5">
          <div className="w-full md:w-[30%] min-h-[15rem] bg-white rounded-xl p-8">
            <p className="text-lg text-gray-700">Artificial Intelligence</p>
            <span className="font-medium text-7xl text-[#9C2C9C]">47%</span>
            <p className="text-lg text-gray-700">
              higher course completion rates among institutions that use AI to
              personalize content and assessments
            </p>
          </div>
          <div className="w-full md:w-[30%] h-[15rem] bg-white rounded-xl p-8">
            <p className="text-lg text-gray-700">Gamification</p>
            <span className="font-medium text-7xl text-[#9C2C9C]">34%</span>
            <p className="text-lg text-gray-700">
              lower dropout rates in courses with gamified learning elements
            </p>
          </div>
          <div className="w-full md:w-[30%] h-[15rem] bg-white rounded-xl p-8">
            <p className="text-lg text-gray-700">Community Learning</p>
            <span className="font-medium text-7xl text-[#9C2C9C]">50%</span>
            <p className="text-lg text-gray-700">
              increase in student retention, driven by peer support and
              community engagement
            </p>
          </div>
        </div>
        <p className="text-gray-300">
          Data insights sources from leading educational and tech research by
          Deloitte, EdSurge, amd RAND
        </p>
      </div>

      <Scroll />
      <ReviewScroll />
      <div className="mt-10 md:mt-20 w-full md:py-10 md:px-16 flex flex-col gap-10 items-center">
        <p className="text-center text-4xl md:text-5xl font-semibold">
          Frequently Asked Questions
        </p>
        <div className="w-full md:w-10/12 min-h-[20rem] bg-gray-100 py-2 px-4">
          <div className="w-full h-full bg-white rounded-md shadow-md py-2 px-3">
            {faq_list}
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-20 md:mx-16 bg-blue-50 px-5 py-10 md:px-16 flex flex-col gap-5 md:gap-10 items-center ">
        <p className="font-semibold font-inter text-3xl md:text-4xl text-center leading-4">
          Get in touch
        </p>
        <p className="w-full md:w-1/2 text-center md:text-lg font-medium text-black">
          Interested in exploring our product and services on a demo, getting a
          quote or do you just want to send an email
        </p>
        <div className="w-full min-h-[16rem]  bg-white shadow-xl shadow-gray-300 rounded-lg flex flex-col md:flex-row md:items-center">
          <div className="px-5 md:px-10 py-3 w-full md:w-1/3 h-full flex flex-col justify-center gap-3 md:gap-y-5 border-b md:border-r md:border-b-0 border-gray-200">
            <CiCalendar size={44} color="#3b82f6" />
            <div className="space-y-2">
              <p className="font-semibold text-[#1A1A1A] text-xl">
                Request a demo
              </p>
              <p className="text-gray-700 text-sm">
                Book time in our calender to learn more about our products and
                services
              </p>
            </div>
          </div>
          <div className="px-5 md:px-10 py-3 w-full md:w-1/3 h-full flex flex-col justify-center gap-3 md:gap-y-5 border-b md:border-r md:border-b-0 border-gray-200">
            <BsSend size={44} color="#3b82f6" />
            <div className="space-y-2">
              <p className="font-semibold text-[#1A1A1A] text-xl whitespace-nowrap">
                Get a quote
              </p>
              <p className="text-gray-700 text-sm">
                Fill out information about your use-case and get a quote from us
              </p>
            </div>
          </div>
          <div className="px-5 md:px-10  py-3 w-full md:w-1/3 h-full flex flex-col justify-center gap-3 md:gap-y-5 border-b md:border-r md:border-b-0 border-gray-200">
            <BsEnvelope size={44} color="#3b82f6" />
            <div className="space-y-2">
              <p className="font-semibold text-[#1A1A1A] text-xl whitespace-nowrap">
                Email sales
              </p>
              <p className="text-gray-700 text-sm">
                Contact our Sales team with any questions you might have
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full min-h-[20rem] bg-black md:border-x-[12px] md:border-t-[12px] border-gray-700 mt-10 md:mt-20 px-5 pt-5 md:px-20 md:pt-20 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-y-5">
          <div className="w-full lg:w-3/5 flex flex-wrap items-start justify-between gap-y-6">
            <div className="text-white space-y-2 md:space-y-4">
              <p className=" text-xl font-semibold text-white">Platform</p>
              <ul className="space-y-4">
                <li className="">
                  <Link to=" text-base">Plans and Pricing</Link>
                </li>
                <li>
                  <Link to="text-base">Personal AI Manager</Link>
                </li>
                <li>
                  <Link to="text-base">AI Business Writers</Link>
                </li>
                <li>
                  <Link to="text-base">AI Data Processing</Link>
                </li>
              </ul>
            </div>
            <div className="text-white space-y-4">
              <p className="text-xl font-semibold text-white">Company</p>
              <ul className="space-y-4">
                <li>
                  <Link to="">About Us</Link>
                </li>
                <li>
                  <Link to="">Work with Us</Link>
                </li>
                <li>
                  <Link to="">Blog and News</Link>
                </li>
              </ul>
            </div>
            <div className="text-white space-y-4">
              <p className="text-xl font-semibold text-white">Resouces</p>
              <ul className="space-y-4">
                <li>
                  <Link to="">Documentation</Link>
                </li>
                <li>
                  <Link to="">Free Demo</Link>
                </li>
                <li>
                  <Link to="">Press Conferences</Link>
                </li>
              </ul>
            </div>
            <div className="text-white space-y-4">
              <p className="text-xl font-semibold text-white">Legal</p>
              <ul className="space-y-4">
                <li>
                  <Link to="">Terms of Services</Link>
                </li>
                <li>
                  <Link to="">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="">Cookies Policy</Link>
                </li>
                <li>
                  <Link to="">Data Processing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[24rem] h-[16rem] rounded-xl bg-white p-5">
            <p className="text-lg font-semibold text-[#1A1A1A]">Newsletter</p>
            <div className="flex items-centerw-full border border-blue-300 p-2.5 rounded-md">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full bg-inherit outline-none "
              />
              <button className="text-sm text-blue-700">Subscribe</button>
            </div>
            <p className="text-sm text-gray-800 py-5 font-medium">
              Get expert advice on managing inventory, Marketing and finance to
              grow your business, The more you know the faster you grow
            </p>
          </div>
        </div>
        <div className="border-t border-[#F5F5F5] py-5 flex items-center justify-between">
          <svg
            width="170"
            height="48"
            viewBox="0 0 235 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.1265 25.5654H22.4688C24.0632 24.1724 25.072 22.1252 25.072 19.8467V9.875H26.8125V15.25H28.6875V9.875H30.3438V8H5.03125V9.875H9.88452V19.8467C9.88452 22.1252 10.8936 24.1724 12.4878 25.5654H12.2485C7.7002 25.5654 4 29.2659 4 33.814V40H31.375V33.814C31.375 29.2659 27.6748 25.5654 23.1265 25.5654ZM23.197 9.875V16.0625H11.7595V9.875H23.197ZM11.7595 19.8467V17.9375H23.197V19.8467C23.197 23 20.6316 25.5654 17.4783 25.5654C14.325 25.5654 11.7595 23 11.7595 19.8467ZM21.6497 27.4404L17.6875 32.7983L13.7253 27.4404H21.6497ZM29.5 38.125H5.875V33.814C5.875 30.5764 8.30176 27.8948 11.4316 27.4927L17.6875 35.9517L23.9434 27.4927C27.0732 27.8948 29.5 30.5764 29.5 33.814V38.125Z"
              fill="#9C2D9C"
            />
            <path
              d="M62.016 12.76V26.936C62.016 28.6213 62.4533 29.8907 63.328 30.744C64.224 31.5973 65.4613 32.024 67.04 32.024C68.64 32.024 69.8773 31.5973 70.752 30.744C71.648 29.8907 72.096 28.6213 72.096 26.936V12.76H75.744V26.872C75.744 28.6853 75.3493 30.2213 74.56 31.48C73.7707 32.7387 72.7147 33.6773 71.392 34.296C70.0693 34.9147 68.608 35.224 67.008 35.224C65.408 35.224 63.9467 34.9147 62.624 34.296C61.3227 33.6773 60.288 32.7387 59.52 31.48C58.752 30.2213 58.368 28.6853 58.368 26.872V12.76H62.016ZM89.3898 17.08C90.7764 17.08 92.0138 17.368 93.1018 17.944C94.2111 18.52 95.0751 19.3733 95.6938 20.504C96.3124 21.6347 96.6218 23 96.6218 24.6V35H93.0058V25.144C93.0058 23.5653 92.6111 22.36 91.8218 21.528C91.0324 20.6747 89.9551 20.248 88.5898 20.248C87.2244 20.248 86.1364 20.6747 85.3258 21.528C84.5364 22.36 84.1418 23.5653 84.1418 25.144V35H80.4938V17.368H84.1418V19.384C84.7391 18.6587 85.4964 18.0933 86.4138 17.688C87.3524 17.2827 88.3444 17.08 89.3898 17.08ZM103.131 15.032C102.47 15.032 101.915 14.808 101.467 14.36C101.019 13.912 100.795 13.3573 100.795 12.696C100.795 12.0347 101.019 11.48 101.467 11.032C101.915 10.584 102.47 10.36 103.131 10.36C103.771 10.36 104.315 10.584 104.763 11.032C105.211 11.48 105.435 12.0347 105.435 12.696C105.435 13.3573 105.211 13.912 104.763 14.36C104.315 14.808 103.771 15.032 103.131 15.032ZM104.923 17.368V35H101.275V17.368H104.923ZM116.529 31.736L121.521 17.368H125.392L118.673 35H114.321L107.633 17.368H111.536L116.529 31.736ZM144.31 25.752C144.31 26.4133 144.267 27.0107 144.182 27.544H130.71C130.817 28.952 131.339 30.0827 132.278 30.936C133.217 31.7893 134.369 32.216 135.734 32.216C137.697 32.216 139.083 31.3947 139.894 29.752H143.83C143.297 31.3733 142.326 32.7067 140.918 33.752C139.531 34.776 137.803 35.288 135.734 35.288C134.049 35.288 132.534 34.9147 131.19 34.168C129.867 33.4 128.822 32.3333 128.054 30.968C127.307 29.5813 126.934 27.9813 126.934 26.168C126.934 24.3547 127.297 22.7653 128.022 21.4C128.769 20.0133 129.803 18.9467 131.126 18.2C132.47 17.4533 134.006 17.08 135.734 17.08C137.398 17.08 138.881 17.4427 140.182 18.168C141.483 18.8933 142.497 19.9173 143.222 21.24C143.947 22.5413 144.31 24.0453 144.31 25.752ZM140.502 24.6C140.481 23.256 140.001 22.1787 139.062 21.368C138.123 20.5573 136.961 20.152 135.574 20.152C134.315 20.152 133.238 20.5573 132.342 21.368C131.446 22.1573 130.913 23.2347 130.742 24.6H140.502ZM151.548 19.928C152.081 19.032 152.785 18.3387 153.66 17.848C154.556 17.336 155.612 17.08 156.828 17.08V20.856H155.9C154.471 20.856 153.383 21.2187 152.636 21.944C151.911 22.6693 151.548 23.928 151.548 25.72V35H147.9V17.368H151.548V19.928ZM166.581 35.288C165.195 35.288 163.947 35.0427 162.837 34.552C161.749 34.04 160.885 33.3573 160.245 32.504C159.605 31.6293 159.264 30.6587 159.221 29.592H162.997C163.061 30.3387 163.413 30.968 164.053 31.48C164.715 31.9707 165.536 32.216 166.517 32.216C167.541 32.216 168.331 32.024 168.885 31.64C169.461 31.2347 169.749 30.7227 169.749 30.104C169.749 29.4427 169.429 28.952 168.789 28.632C168.171 28.312 167.179 27.96 165.813 27.576C164.491 27.2133 163.413 26.8613 162.581 26.52C161.749 26.1787 161.024 25.656 160.405 24.952C159.808 24.248 159.509 23.32 159.509 22.168C159.509 21.2293 159.787 20.376 160.341 19.608C160.896 18.8187 161.685 18.2 162.709 17.752C163.755 17.304 164.949 17.08 166.293 17.08C168.299 17.08 169.909 17.592 171.125 18.616C172.363 19.6187 173.024 20.9947 173.109 22.744H169.461C169.397 21.9547 169.077 21.3253 168.501 20.856C167.925 20.3867 167.147 20.152 166.165 20.152C165.205 20.152 164.469 20.3333 163.957 20.696C163.445 21.0587 163.189 21.5387 163.189 22.136C163.189 22.6053 163.36 23 163.701 23.32C164.043 23.64 164.459 23.896 164.949 24.088C165.44 24.2587 166.165 24.4827 167.125 24.76C168.405 25.1013 169.451 25.4533 170.261 25.816C171.093 26.1573 171.808 26.6693 172.405 27.352C173.003 28.0347 173.312 28.9413 173.333 30.072C173.333 31.0747 173.056 31.9707 172.501 32.76C171.947 33.5493 171.157 34.168 170.133 34.616C169.131 35.064 167.947 35.288 166.581 35.288ZM179.131 15.032C178.47 15.032 177.915 14.808 177.467 14.36C177.019 13.912 176.795 13.3573 176.795 12.696C176.795 12.0347 177.019 11.48 177.467 11.032C177.915 10.584 178.47 10.36 179.131 10.36C179.771 10.36 180.315 10.584 180.763 11.032C181.211 11.48 181.435 12.0347 181.435 12.696C181.435 13.3573 181.211 13.912 180.763 14.36C180.315 14.808 179.771 15.032 179.131 15.032ZM180.923 17.368V35H177.275V17.368H180.923ZM189.969 20.344V30.104C189.969 30.7653 190.118 31.2453 190.417 31.544C190.737 31.8213 191.27 31.96 192.017 31.96H194.257V35H191.377C189.734 35 188.475 34.616 187.601 33.848C186.726 33.08 186.289 31.832 186.289 30.104V20.344H184.209V17.368H186.289V12.984H189.969V17.368H194.257V20.344H189.969ZM213.491 17.368L202.675 43.288H198.899L202.483 34.712L195.539 17.368H199.603L204.563 30.808L209.715 17.368H213.491ZM226.452 23.896L233.364 35H229.268L224.244 26.936L219.54 35H215.476L222.388 23.896L215.444 12.76H219.54L224.596 20.888L229.332 12.76H233.396L226.452 23.896Z"
              fill="#FFFFFF"
            />
          </svg>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center">
              <AiFillInstagram color="#fff" size={28} />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center">
              <AiFillFacebook color="#fff" size={28} />
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center">
              <AiOutlineTwitter color="#fff" size={28} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
