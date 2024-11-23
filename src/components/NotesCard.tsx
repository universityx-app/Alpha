import React from "react";
import note_img from "../assets/images/note_img.jpg";

const NotesCard: React.FC = () => {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-[3rem] h-[3rem] rounded-full bg-[#B71111] flex items-center justify-center">
          <svg
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.53125 8.46875C6.53125 8.14552 6.65965 7.83552 6.88821 7.60696C7.11677 7.3784 7.42677 7.25 7.75 7.25H14.25C14.5732 7.25 14.8832 7.3784 15.1118 7.60696C15.3403 7.83552 15.4688 8.14552 15.4688 8.46875C15.4688 8.79198 15.3403 9.10198 15.1118 9.33054C14.8832 9.5591 14.5732 9.6875 14.25 9.6875H7.75C7.42677 9.6875 7.11677 9.5591 6.88821 9.33054C6.65965 9.10198 6.53125 8.79198 6.53125 8.46875ZM9.78125 11.3125H7.75C7.42677 11.3125 7.11677 11.4409 6.88821 11.6695C6.65965 11.898 6.53125 12.208 6.53125 12.5312C6.53125 12.8545 6.65965 13.1645 6.88821 13.393C7.11677 13.6216 7.42677 13.75 7.75 13.75H9.78125C10.1045 13.75 10.4145 13.6216 10.643 13.393C10.8716 13.1645 11 12.8545 11 12.5312C11 12.208 10.8716 11.898 10.643 11.6695C10.4145 11.4409 10.1045 11.3125 9.78125 11.3125ZM21.1562 2.375V13.4138C21.157 13.6807 21.1047 13.945 21.0026 14.1915C20.9004 14.438 20.7504 14.6618 20.5611 14.8499L15.3499 20.0611C15.1618 20.2504 14.938 20.4004 14.6915 20.5026C14.445 20.6047 14.1807 20.657 13.9138 20.6562H2.875C2.33628 20.6562 1.81962 20.4422 1.43869 20.0613C1.05776 19.6804 0.84375 19.1637 0.84375 18.625V2.375C0.84375 1.83628 1.05776 1.31962 1.43869 0.938689C1.81962 0.557756 2.33628 0.34375 2.875 0.34375H19.125C19.6637 0.34375 20.1804 0.557756 20.5613 0.938689C20.9422 1.31962 21.1562 1.83628 21.1562 2.375ZM3.28125 18.2188H12.625V13.3438C12.625 13.0205 12.7534 12.7105 12.982 12.482C13.2105 12.2534 13.5205 12.125 13.8438 12.125H18.7188V2.78125H3.28125V18.2188ZM17.3984 14.5625H15.0625V16.8984L17.3984 14.5625Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="font-plus_jakarta font-semibold text-2xl text-[#B71111]">
          Notes
        </span>
      </div>
      <div className="flex flex-col justify-between items-center gap-10 pb-10 px-10">
        <div className="w-[50%] h-[35.4rem] rounded-[14px] border-[7px] border-[#242222]">
          <img src={note_img} alt="" className="w-full h-full object-cover" />
        </div>
        <p className="w-[90%] font-medium text-[2.5rem] leading-[4rem] text-[#242222]">
          Minerva is lucky. She rules a planet with infinite resources, yielding
          an endless supply of everything she and her minions could possibly
          want.
        </p>
      </div>
    </div>
  );
};

export default NotesCard;
