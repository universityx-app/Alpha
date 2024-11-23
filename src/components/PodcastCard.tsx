import React from "react";

interface PodcastCardProp {
  number: number;
  title: string;
  description: string;
}

const PodcastCard: React.FC<PodcastCardProp> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="w-full min-h-[17rem] rounded-xl border-[3px] py-[17px] px-8 border-[#66708538] space-y-5">
      <p className="font-plus_jakarta font-bold text-[2.5rem] leading-10 text-[#242222]">
        Episode {number}: {title}
      </p>
      <p className="font-plus_jakarta font-bold text-2xl leading-10 text-[#667085]">
        {description}
      </p>
      <button className="w-[13.25rem] h-[3.2rem] rounded-[5px] bg-[#30D25B] font-plus_jakarta font-semibold text-[26px] leading-8 text-white">
        Listen Now
      </button>
    </div>
  );
};

export default PodcastCard;
