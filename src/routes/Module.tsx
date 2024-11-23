import { motion } from "framer-motion";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import AiGeneratedVideo from "../components/AiGeneratedVideo";
import NotesCard from "../components/NotesCard";
import DragNDropCard from "../components/DragNDropCard";
import Podcast from "../components/Podcast";

const Module: React.FC = () => {
  //   const [correctAnswer, setCorrectAnswer] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id: number = +(searchParams.get("id") || 1);
  const delta = 1;
  const dragOptions = {
    answer: "economist",
    options: [
      { text: "Cab drivers", value: "cab driver" },
      { text: "Economists", value: "economist" },
      { text: "Veterinarian", value: "veterinarian" },
    ],
  };

  const handleAnswerChange = (answer: string | null) => {
    console.log("Selected Answer:", answer);
  };
  return (
    <div className="space-y-5 min-h-screen ">
      <div
        style={{ boxShadow: "0px 6px 13.7px 0px #00000012" }}
        className="w-full fixed top-0 left-0 z-50 px-10 py-5 flex items-center justify-between bg-white max-h-[6.125rem]"
      >
        <button onClick={() => navigate(-1)} className="outline-none">
          <IoMdClose size={40} color="#242222" />
        </button>
        <div className="flex items-center gap-4 w-[45%]">
          <button onClick={() => navigate(-1)} className="outline-none">
            <FaArrowLeft color="#66708538" />
          </button>
          <progress id="progress-bar" value={id - 1} max={10} className="" />
          <button className="outline-none">
            <FaArrowRight color="#66708538" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <HiSpeakerWave color="#667085" size={28} />
          <span className="font-inter font-bold text-xl text-[#242222]">
            Read Aloud
          </span>
        </div>
      </div>
      <div className=" pt-[6.25rem] py-10 mx-auto w-10/12 space-y-10">
        {id == 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AiGeneratedVideo />
          </motion.div>
        )}
        {id == 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <NotesCard />
          </motion.div>
        )}
        {id == 3 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DragNDropCard
              options={dragOptions.options}
              onAnswerChange={handleAnswerChange}
            />
          </motion.div>
        )}
        {id == 4 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Podcast />
          </motion.div>
        )}
        <div className="flex justify-between w-full">
          <button
            onClick={() => navigate(`?id=${id + 1}`)}
            className="disabed:bg-black/80 w-[17rem] h-[4.75rem] rounded-[71px] p-2.5 bg-[#242222] flex items-center justify-center text-white text-2xl font-semibold"
          >
            Continue
          </button>
          <button className="text-2xl font-semibold text-[#242222] w-[22rem] h-[4.75rem] rounded-[71px] p-2.5 flex items-center justify-center border border-[#66708538] bg-[#F3F3F6]">
            Chat with AI tutor{" "}
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
    </div>
  );
};

export default Module;
