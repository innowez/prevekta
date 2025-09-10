"use client"

import NormalButton from "@/components/ui/NormalButton";
import Image from "next/image";
import React, { useState } from "react";
import VideoTip1 from "@/assets/images/videotip1.gif"
import VideoTip2 from "@/assets/images/videotip2.gif"
import VideoTip3 from "@/assets/images/videotip3.gif"
import VideoTip4 from "@/assets/images/videotip4.gif"

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    fill="none"
    viewBox="0 0 24 16"
  >
    <path
      fill="#fff"
      d="M.935 7.497 6.936.745c.314-.319.77-.316 1.06-.052a.78.78 0 0 1 .054 1.06L3.162 7.251h19.34a.75.75 0 1 1 0 1.5H3.162l4.888 5.497c.263.292.23.788-.053 1.06-.295.285-.797.24-1.061-.052L.935 8.505C.67 8.135.7 7.82.935 7.497"
    ></path>
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    fill="none"
    viewBox="0 0 24 16"
  >
    <path
      fill="#fff"
      d="M23.065 7.497 17.064.745c-.314-.319-.77-.316-1.06-.052a.78.78 0 0 0-.054 1.06l4.888 5.498H1.498a.75.75 0 1 0 0 1.5h19.34l-4.888 5.497c-.263.292-.23.788.053 1.06.295.285.797.24 1.061-.052l6.001-6.751c.265-.37.234-.685 0-1.008"
    ></path>
  </svg>
);


function VideoSection() {
  const [isSelect, setIsSelect] = useState(0);
  return (
    <div className=" mb-12">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-6 px-0 lg:px-10">
        <div className="flex items-center gap-1 px-4 lg:px-0">
          <div className="bg-secondary h-[18px] w-[18px] rounded-full"></div>
          <h1 className="text-primary text-xl leading-6">Video Tips</h1>
        </div>

        <div className="flex gap-2 overflow-x-scroll no-scrollbar px-4 lg:px-0">
          {["Routines", "Prevent pain", "Self-care", "Sleep Rituals"].map(
            (e, i) => (
              // <button  >{e}</button>
              <NormalButton
                key={i + 1}
                variant={i === isSelect ? "fill" : "outline"}
                onClick={() => {
                  setIsSelect(i);
                }}
              >
                {e}
              </NormalButton>
            )
          )}
        </div>
      </div>

      <div className="">
        <div className="flex items-start gap-2 lg:gap-6 overflow-x-scroll no-scrollbar mb-8 px-4 lg:px-10">
            <Image src={VideoTip1} width={437} height={658} alt="video tip" className="w-[297px] h-[413px] lg:w-[437px] lg:h-[658px]  rounded-3xl " />
            <Image src={VideoTip2} width={437} height={658} alt="video tip" className="w-[297px] h-[413px] lg:w-[437px] lg:h-[658px]  rounded-3xl " />
            <Image src={VideoTip3} width={437} height={658} alt="video tip" className="w-[297px] h-[413px] lg:w-[437px] lg:h-[658px]  rounded-3xl " />
            <Image src={VideoTip4} width={437} height={658} alt="video tip" className="w-[297px] h-[413px] lg:w-[437px] lg:h-[658px]  rounded-3xl " />
        </div>

        <div className="flex gap-4 justify-center mb-28">

            <button className="h-12 w-12 rounded-full flex justify-center items-center bg-[#132D47] opacity-50">
              <ArrowLeft />
            </button>

            <button className="h-12 w-12 rounded-full flex justify-center items-center bg-[#132D47] ">
              <ArrowRight />
            </button>
          </div>


        <hr className="bg-primary text-primary" />
      </div>
    </div>
  );
}

export default VideoSection;
