import { motion } from "framer-motion";
import React, { useState } from "react";
import CorrectBox from "./CorrectBox";
import IncorrectBox from "./IncorrectBox";

const Quiz: React.FC<{ onClick: () => void; toggleModal: () => void }> = ({
  onClick,
  toggleModal,
}) => {
  const answer = "2";
  // "The value of the next best alternative forgone when a choice is made.";
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const quizQuestion = {
    question: "In microeconomics, the concept of opportunity cost refers to?",
    answerOptions: [
      {
        id: "1",
        value: "The amount of money spent to produce a good or service.",
      },
      {
        id: "2",
        value:
          "The value of the next best alternative forgone when a choice is made.",
      },
      {
        id: "3",
        value: "The total revenue a firm earns from selling goods or services.",
      },
      {
        id: "4",
        value: "The additional cost incurred from producing one more unit.",
      },
    ],
  };
  const delta = 1;
  return (
    <div className="space-y-5 px-5">
      <div className="flex items-center gap-2">
        <div className="w-[3rem] h-[3rem] rounded-full bg-[#9C2D9C] flex items-center justify-center">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2324 9.66133C21.8749 9.28859 21.5063 8.90367 21.3854 8.61219C21.2777 8.35219 21.2696 7.81695 21.2625 7.3457C21.2473 6.33008 21.228 5.06664 20.3302 4.16984C19.4323 3.27305 18.1699 3.25578 17.1543 3.2375C16.683 3.23039 16.1478 3.22227 15.8878 3.11461C15.5963 2.99375 15.2114 2.62508 14.8387 2.26758C14.1196 1.57797 13.2238 0.71875 12 0.71875C10.7762 0.71875 9.88039 1.57797 9.16133 2.26758C8.78859 2.62508 8.40367 2.99375 8.11219 3.11461C7.85219 3.22227 7.31695 3.23039 6.8457 3.2375C5.83008 3.25781 4.56664 3.27203 3.67188 4.17188C2.77711 5.07172 2.75781 6.33008 2.7375 7.3457C2.73039 7.81695 2.72227 8.35219 2.61461 8.61219C2.49375 8.90367 2.12508 9.28859 1.76758 9.66133C1.07797 10.3804 0.21875 11.2812 0.21875 12.5C0.21875 13.7188 1.07797 14.6196 1.76758 15.3438C2.12508 15.7165 2.49375 16.1014 2.61461 16.3929C2.72227 16.6529 2.73039 17.1881 2.7375 17.6594C2.75273 18.675 2.77203 19.9384 3.66984 20.8352C4.56766 21.732 5.83008 21.7493 6.8457 21.7676C7.31695 21.7747 7.85219 21.7828 8.11219 21.8905C8.40367 22.0113 8.78859 22.38 9.16133 22.7375C9.88039 23.422 10.7812 24.2812 12 24.2812C13.2188 24.2812 14.1196 23.422 14.8387 22.7324C15.2114 22.3749 15.5963 22.0063 15.8878 21.8854C16.1478 21.7777 16.683 21.7696 17.1543 21.7625C18.1699 21.7473 19.4334 21.728 20.3302 20.8302C21.227 19.9323 21.2442 18.6699 21.2625 17.6543C21.2696 17.183 21.2777 16.6478 21.3854 16.3878C21.5063 16.0963 21.8749 15.7114 22.2324 15.3387C22.922 14.6196 23.7812 13.7238 23.7812 12.5C23.7812 11.2762 22.922 10.3804 22.2324 9.66133ZM20.4734 13.6517C19.9838 14.1595 19.4293 14.7405 19.1338 15.4555C18.8473 16.1461 18.8362 16.8936 18.8291 17.6177C18.8209 18.1621 18.8098 18.9086 18.6107 19.1066C18.4116 19.3047 17.6662 19.3169 17.1218 19.325C16.3977 19.3362 15.6502 19.3473 14.9595 19.6297C14.2486 19.9252 13.6666 20.4798 13.1558 20.9693C12.7902 21.3197 12.2437 21.8438 12 21.8438C11.7563 21.8438 11.2098 21.3197 10.8483 20.9734C10.3405 20.4838 9.75953 19.9293 9.04453 19.6338C8.35391 19.3473 7.60641 19.3362 6.88227 19.3291C6.33789 19.3209 5.59141 19.3098 5.39336 19.1107C5.19531 18.9116 5.18313 18.1662 5.175 17.6218C5.16383 16.8977 5.15266 16.1502 4.87031 15.4595C4.57477 14.7486 4.02023 14.1666 3.5307 13.6558C3.18031 13.2902 2.65625 12.7437 2.65625 12.5C2.65625 12.2563 3.18031 11.7098 3.52664 11.3483C4.01617 10.8405 4.5707 10.2595 4.86625 9.54453C5.15266 8.85391 5.16383 8.10641 5.17094 7.38227C5.18313 6.83789 5.19531 6.09141 5.39844 5.89844C5.60156 5.70547 6.34297 5.6882 6.88734 5.68008C7.61148 5.66891 8.35898 5.65773 9.04961 5.37539C9.76055 5.07984 10.3425 4.52531 10.8534 4.03578C11.2098 3.68031 11.7563 3.15625 12 3.15625C12.2437 3.15625 12.7902 3.68031 13.1517 4.02664C13.6595 4.51617 14.2405 5.0707 14.9555 5.36625C15.6461 5.65266 16.3936 5.66383 17.1177 5.67094C17.6621 5.67906 18.4086 5.69023 18.6066 5.8893C18.8047 6.08836 18.8169 6.83383 18.825 7.3782C18.8362 8.10234 18.8473 8.84984 19.1297 9.54047C19.4252 10.2514 19.9798 10.8334 20.4693 11.3442C20.8156 11.7058 21.3397 12.2522 21.3397 12.4959C21.3397 12.7397 20.8197 13.2902 20.4734 13.6517ZM13.625 17.7812C13.625 18.1026 13.5297 18.4168 13.3511 18.6841C13.1726 18.9513 12.9188 19.1596 12.6219 19.2826C12.3249 19.4055 11.9982 19.4377 11.683 19.375C11.3678 19.3123 11.0782 19.1576 10.851 18.9303C10.6237 18.703 10.4689 18.4135 10.4062 18.0983C10.3435 17.7831 10.3757 17.4563 10.4987 17.1594C10.6217 16.8625 10.83 16.6087 11.0972 16.4301C11.3644 16.2516 11.6786 16.1562 12 16.1562C12.431 16.1562 12.8443 16.3275 13.149 16.6322C13.4538 16.9369 13.625 17.3503 13.625 17.7812ZM16.4688 10.4688C16.4688 12.3345 15.0784 13.9097 13.1913 14.385C13.1278 14.6793 12.9576 14.9397 12.7135 15.116C12.4694 15.2923 12.1686 15.372 11.8693 15.3397C11.5699 15.3074 11.2931 15.1654 11.0922 14.9411C10.8913 14.7168 10.7805 14.4261 10.7812 14.125V13.3125C10.7812 12.9893 10.9097 12.6793 11.1382 12.4507C11.3668 12.2222 11.6768 12.0938 12 12.0938C13.1172 12.0938 14.0312 11.3645 14.0312 10.4688C14.0312 9.57297 13.1172 8.84375 12 8.84375C10.8828 8.84375 9.96875 9.57297 9.96875 10.4688V10.875C9.96875 11.1982 9.84035 11.5082 9.61179 11.7368C9.38323 11.9653 9.07323 12.0938 8.75 12.0938C8.42677 12.0938 8.11677 11.9653 7.88821 11.7368C7.65965 11.5082 7.53125 11.1982 7.53125 10.875V10.4688C7.53125 8.22828 9.53609 6.40625 12 6.40625C14.4639 6.40625 16.4688 8.22828 16.4688 10.4688Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="font-plus_jakarta font-semibold text-2xl text-[#9C2D9C]">
          Quiz
        </span>
      </div>
      <div
        style={{ boxShadow: "0px 1px 10.4px 0px #0000000F" }}
        className="w-full min-h-[30rem] rounded-[5px] border-2 border-[#6670858] py-5 px-5 md:px-10 space-y-8 bg-white"
      >
        <p className="font-plus_jakarta font-bold text-2xl md:text-[2.5rem] md:leading-10  text-[#242222]">
          {quizQuestion.question}
        </p>

        <div className="space-y-5">
          {quizQuestion.answerOptions.map((option, index) => {
            const letter = String.fromCharCode(65 + index);

            return (
              <div
                key={option.id}
                onClick={() => setSelectedAnswer(option.id)}
                className={`${selectedAnswer == answer && selectedAnswer == option.id
                    ? "bg-[#F0FDF4] border-[#30D258]"
                    : selectedAnswer !== answer && selectedAnswer == option.id
                      ? "bg-red-100 border-red-500"
                      : "bg-white border-[#66708538] hover:border-[#30D258]"
                  } flex items-center space-x-3 cursor-pointer w-full rounded-[14px] border-[3px]  md:py-5 p-3 md:px-6`}
              >
                <div
                  className={`${selectedAnswer == answer && selectedAnswer == option.id
                      ? "text-white bg-[#34C759]"
                      : selectedAnswer !== answer && selectedAnswer == option.id
                        ? "text-white bg-red-500"
                        : "text-[#242222] bg-[#F6F6F6]"
                    } font-bold text-[2.5rem] w-[6rem] flex items-center justify-center rounded-[11px] p-2.5 `}
                >
                  {letter}
                </div>
                <div className="font-plus_jakarta md:text-[2rem] md:leading-10 text-[#242222]">
                  {option.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedAnswer === answer && (
        <motion.div
          initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <CorrectBox whyText="
          In microeconomics, opportunity cost is the value of the next best alternative forgone when making a choice. It represents the benefits you miss out on by choosing one option over another
          " onClick={onClick} />
        </motion.div>
      )}
      {selectedAnswer !== answer && (
        <motion.div
          initial={{ y: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <IncorrectBox whyText="
          In microeconomics, opportunity cost is the value of the next best alternative forgone when making a choice. It represents the benefits you miss out on by choosing one option over another
          "/>
        </motion.div>
      )}
      <div className="flex justify-end w-full mt-10 ">
        <button
          onClick={toggleModal}
          className="text-2xl font-semibold text-[#242222] w-[22rem] h-[4.75rem] rounded-[71px] p-2.5 flex items-center justify-center border border-[#66708538] bg-[#F3F3F6]"
        >
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
  );
};

export default Quiz;
