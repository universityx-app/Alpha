import React from "react";
import PodcastCard from "./PodcastCard";

const Podcast: React.FC = () => {
  const podcastList = [
    {
      number: 1,
      title: "The Power of Choices",
      description:
        "Explore how individuals and businesses make decisions about resource allocation, the role of opportunity cost.",
    },
    {
      number: 2,
      title: "Breaking Barriers",
      description:
        "Dive into the fascinating world of supply and demand, price elasticity, and how market forces influence our daily lives and purchasing behaviors.",
    },
    {
      number: 3,
      title: "Incentives and Innovation",
      description:
        "Uncover how incentives drive behavior, promote innovation, and shape the strategies of businesses in competitive markets.",
    },
  ];
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <div className="w-[3rem] h-[3rem] rounded-full bg-[#9c2d9c] flex items-center justify-center">
          <svg
            width="20"
            height="26"
            viewBox="0 0 20 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17.7812C11.4002 17.7796 12.7425 17.2227 13.7326 16.2326C14.7227 15.2425 15.2796 13.9002 15.2812 12.5V6C15.2812 4.59933 14.7248 3.25602 13.7344 2.26559C12.744 1.27517 11.4007 0.71875 10 0.71875C8.59933 0.71875 7.25602 1.27517 6.26559 2.26559C5.27517 3.25602 4.71875 4.59933 4.71875 6V12.5C4.72036 13.9002 5.2773 15.2425 6.26737 16.2326C7.25745 17.2227 8.59982 17.7796 10 17.7812ZM7.15625 6C7.15625 5.24579 7.45586 4.52247 7.98917 3.98917C8.52247 3.45586 9.24579 3.15625 10 3.15625C10.7542 3.15625 11.4775 3.45586 12.0108 3.98917C12.5441 4.52247 12.8438 5.24579 12.8438 6V12.5C12.8438 13.2542 12.5441 13.9775 12.0108 14.5108C11.4775 15.0441 10.7542 15.3438 10 15.3438C9.24579 15.3438 8.52247 15.0441 7.98917 14.5108C7.45586 13.9775 7.15625 13.2542 7.15625 12.5V6ZM11.2188 21.7645V23.875C11.2188 24.1982 11.0903 24.5082 10.8618 24.7368C10.6332 24.9653 10.3232 25.0938 10 25.0938C9.67677 25.0938 9.36677 24.9653 9.13821 24.7368C8.90965 24.5082 8.78125 24.1982 8.78125 23.875V21.7645C6.53473 21.4659 4.47289 20.3622 2.9786 18.6584C1.48432 16.9545 0.659122 14.7663 0.65625 12.5C0.65625 12.1768 0.784653 11.8668 1.01321 11.6382C1.24177 11.4097 1.55177 11.2812 1.875 11.2812C2.19823 11.2812 2.50823 11.4097 2.73679 11.6382C2.96535 11.8668 3.09375 12.1768 3.09375 12.5C3.09375 14.3317 3.82137 16.0883 5.11654 17.3835C6.41172 18.6786 8.16835 19.4062 10 19.4062C11.8317 19.4062 13.5883 18.6786 14.8835 17.3835C16.1786 16.0883 16.9062 14.3317 16.9062 12.5C16.9062 12.1768 17.0347 11.8668 17.2632 11.6382C17.4918 11.4097 17.8018 11.2812 18.125 11.2812C18.4482 11.2812 18.7582 11.4097 18.9868 11.6382C19.2153 11.8668 19.3438 12.1768 19.3438 12.5C19.3409 14.7663 18.5157 16.9545 17.0214 18.6584C15.5271 20.3622 13.4653 21.4659 11.2188 21.7645Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="font-plus_jakarta font-semibold text-2xl text-[#9c2d9c]">
          Podcast
        </span>
      </div>
      <div className="space-y-5">
        {podcastList.map((item) => (
          <PodcastCard key={item.number} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Podcast;
