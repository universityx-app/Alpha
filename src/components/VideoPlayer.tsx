import React, { useRef, useState } from "react";
import video from "../assets/UniversityX ai video.mp4";

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-[100%] mx-auto min-h-[25rem]">
      <video
        ref={videoRef}
        className=" min-h-[25rem] object-cover w-full rounded-lg aspect-video"
        onClick={handlePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[9.25rem] h-[9.25rem] rounded-full bg-white/60 flex items-center justify-center"
        >
          <svg
            width="58"
            height="67"
            viewBox="0 0 58 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.2858 33.4357L0.105469 66.1065L0.40189 0.251465L57.2858 33.4357Z"
              fill="#9C2D9C"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
