// import React from "react";

// interface PodcastCardProp {
//   number: number;
//   title: string;
//   description: string;
// }

// const PodcastCard: React.FC<PodcastCardProp> = ({
//   number,
//   title,
//   description,
// }) => {
//   return (
//     <div className="w-full min-h-[17rem] rounded-xl border-[3px] py-[17px] px-4 md:px-8 border-[#66708538] space-y-5">
//       <p className="font-plus_jakarta font-bold text-2xl md:text-[2.5rem] md:leading-10 text-[#242222]">
//         Episode {number}: {title}
//       </p>
//       <p className="font-plus_jakarta font-bold text-xl md:text-2xl lg:leading-10 text-[#667085]">
//         {description}
//       </p>
//       <button className="w-[13.25rem] h-[3.2rem] rounded-[5px] bg-[#30D25B] font-plus_jakarta font-semibold text-[26px] leading-8 text-white">
//         Listen Now
//       </button>
//     </div>
//   );
// };

// export default PodcastCard;


// import React, { useRef } from "react";

// import theAudio from '../assets/The Power of Choice and Opportunity Cost.wav'

// interface PodcastCardProp {
//   number: number;
//   title: string;
//   description: string;
//   audioSrc?: string; // New prop for audio source
// }

// const PodcastCard: React.FC<PodcastCardProp> = ({
//   number,
//   title,
//   description,
//   audioSrc,
// }) => {
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const playAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseAudio = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   return (
//     <div className="w-full min-h-[17rem] rounded-xl border-[3px] py-[17px] px-4 md:px-8 border-[#66708538] space-y-5">
//       <p className="font-plus_jakarta font-bold text-2xl md:text-[2.5rem] md:leading-10 text-[#242222]">
//         Episode {number}: {title}
//       </p>
//       <p className="font-plus_jakarta font-bold text-xl md:text-2xl lg:leading-10 text-[#667085]">
//         {description}
//       </p>
//       <audio ref={audioRef} src={audioSrc} className="hidden" />
//       <div className="flex items-center space-x-4">
//         <button
//           onClick={playAudio}
//           className="w-[13.25rem] h-[3.2rem] rounded-[5px] bg-[#30D25B] font-plus_jakarta font-semibold text-[26px] leading-8 text-white"
//         >
//           Play Audio
//         </button>
//         <button
//           onClick={pauseAudio}
//           className="w-[13.25rem] h-[3.2rem] rounded-[5px] bg-[#D23D30] font-plus_jakarta font-semibold text-[26px] leading-8 text-white"
//         >
//           Pause Audio
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PodcastCard;


import React, { useState, useRef, useEffect } from "react";

interface PodcastCardProp {
  number: number;
  title: string;
  audioSrc?: string;
}

const PodcastCard: React.FC<PodcastCardProp> = ({ number, title, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");

  // Format time in MM:SS format
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress and time
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      setCurrentTime(formatTime(current));
    }
  };

  // Set audio duration
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(formatTime(audioRef.current.duration));
    }
  };

  // Seek audio on progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current) {
      const { left, width } = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - left;
      const newTime = (clickX / width) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress((clickX / width) * 100);
    }
  };

  return (
    <div className="w-full p-4 rounded-lg border border-gray-200 shadow-lg">
      <p className="text-lg font-semibold text-gray-900">
        Episode {number}: {title}
      </p>
      <div className="mt-4">
        <div
          className="relative w-full h-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={handleProgressClick}
        >
          <div
            className="absolute top-0 left-0 h-2 bg-purple-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className="absolute top-0 -mt-[4px] h-4 w-4 bg-purple-500 rounded-full transform -translate-x-1/2"
            style={{ left: `${progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{currentTime}</span>
          <span>{duration}</span>
        </div>
      </div>
      <button
        onClick={togglePlay}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg font-medium w-full"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default PodcastCard;
