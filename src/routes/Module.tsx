import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useSearchParams } from "react-router-dom";
import AiGeneratedVideo from "../components/AiGeneratedVideo";
import NotesCard from "../components/NotesCard";
import DragNDropCard from "../components/DragNDropCard";
import Podcast from "../components/Podcast";
import Quiz from "../components/Quiz";
import Modal from "../components/Modal";
import AiChatUI from "../components/AiChatUI";

const Module: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id: number = +(searchParams.get("id") || 1);
  const delta = 1;

  return (
    <div className="space-y-5 min-h-screen">
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          children={<AiChatUI toggleModal={toggleModal} />}
        />
      ) : null}
      <div
        style={{ boxShadow: "0px 6px 13.7px 0px #00000012" }}
        className="w-full fixed top-0 left-0 z-40 px-4 md:px-10 py-5 flex items-center justify-between bg-white max-h-[6.125rem]"
      >
        <button onClick={() => navigate(-1)} className="outline-none text-4xl">
          <IoMdClose color="#242222" />
        </button>
        <div className="flex items-center gap-4 w-[90%] md:w-[45%]">
          <button onClick={() => navigate(-1)} className="outline-none text-xl">
            <FaArrowLeft color="#242222" />
          </button>
          <progress id="progress-bar" value={id - 1} max={5} className="" />
          <button className="outline-none text-xl">
            <FaArrowRight color="#242222" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <HiSpeakerWave color="#667085" size={28} />
          <span className="font-inter font-bold text-xl text-[#242222]">
            Read Aloud
          </span>
        </div>
      </div>

      <div className="h-full pt-[6.25rem] py-10 mx-auto w-full md:w-10/12 space-y-10">
        {id == 1 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <AiGeneratedVideo
              onClick={() => navigate("?id=2")}
              toggleModal={toggleModal}
            />
          </motion.div>
        )}
        {id == 2 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <NotesCard
              onClick={() => navigate("?id=3")}
              toggleModal={toggleModal}
            />
          </motion.div>
        )}
        {id == 3 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <DragNDropCard
              onClick={() => navigate("?id=4")}
              toggleModal={toggleModal}
            />
          </motion.div>
        )}
        {id == 4 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Podcast
              onClick={() => navigate("?id=5")}
              toggleModal={toggleModal}
            />
          </motion.div>
        )}
        {id == 5 && (
          <motion.div
            initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Quiz
              onClick={() => navigate("/dashboard/complete")}
              toggleModal={toggleModal}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Module;
