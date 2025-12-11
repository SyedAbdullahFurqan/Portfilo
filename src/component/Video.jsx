import React from 'react'
import { useRef, useState, useEffect } from "react";
import videoFile from "../assets/img.mp4"
const Video = () => {
    const videoRef = useRef();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Toggle fullscreen
  const toggleFullscreen = () => {
    const video = videoRef.current;

    if (!document.fullscreenElement) {
      // Enter fullscreen
      if (video.requestFullscreen) video.requestFullscreen();
      

      video.play(); // optional
    } else {
      // Exit fullscreen
      if (document.exitFullscreen) document.exitFullscreen();
  
    }
  };

  // Listen to fullscreen changes to update state
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
 // IE11

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
   
    };
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center cursor-pointer mt-10">
<video
  ref={videoRef}
 width={800}
  controls
  className="rounded-lg shadow-lg"
>
  <source src={videoFile} type="video/mp4" />
  Your browser does not support HTML5 video.
</video>


      <h2 className="mt-3 text-2xl capitalize">Website Name: TEXT INTO IMG</h2>
      <h2 className="my-3 text-[19px] capitalize">Skills: Reactjs, Nodejs , Mongodb, express </h2>
      <p className="text-gray-300">
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorem?
      </p>
      <button
        onClick={toggleFullscreen}
        className={`mt-4 px-6  w-50  sm:w-full text-black  cursor-pointer  py-2 rounded-4xl  transition ${
          isFullscreen ? "bg-red-500" : "text-white hover:bg-cyan-400 hover:text-black"
        }`}
      >
        {isFullscreen ? "Exit Fullscreen" : "View Video Fullscreen"}
      </button>
    </div>
    </div>
  )
}

export default Video
