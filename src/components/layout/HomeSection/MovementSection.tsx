"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import doctorsLeft from "@assets/images/doctors-left.jpg";
import doctorsRight from "@assets/images/doctors-right.png";
import twoleft from "@assets/images/2left.jpg";
import tworight from "@assets/images/2right.jpg";
import threeright from "@assets/images/3right.png";
import threeleft from "@assets/images/3left.png";
import fourleft from "@assets/images/4left.jpg";
import fourright from "@assets/images/4right.jpg";
import fiveright from "@assets/images/5right.png";
import fiveleft from "@assets/images/5left.jpg";
import sixleft from "@assets/images/6left.png";
import sixright from "@assets/images/6right.jpg";
import StarIcon from "@assets/icons/StarIcon";

const MovementSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const movementItems = [
    {
      id: 0,
      text: (<>Doctors who carry <br className="block md:hidden"/>generations of wisdom</>),
      leftImage: doctorsLeft,
      rightImage: doctorsRight,
    },
    {
      id: 1,
      text: (<>Therapists who heal with <br  className="block md:hidden" />their hands and heart</>),
      leftImage: threeleft,
      rightImage: threeright,
    },
    {
      id: 2,
      text: (<>Medicine makers who <br className="block md:hidden" />preserve rare herbs <br />and forgotten formulas</>),
      leftImage: fourleft,
      rightImage: fourright,
    },
    {
      id: 3,
      text: (<>Entrepreneurs who wish <br className="block md:hidden" />to build with purpose</>),
      leftImage: fiveleft,
      rightImage: fiveright,
    },
    {
      id: 4,
      text: (<>Patients seeking <br className="block md:hidden" />solutions beyond pills</>),
      leftImage: sixleft,
      rightImage: sixright,
    },
    {
      id: 5,
      text: (<>Investors who value <br className="block md:hidden" />purpose over profit</>),
      leftImage: twoleft,
      rightImage: tworight,
    },
  ];

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-12 md:py-20 mx-auto max-w-[1360px] gap-12 lg:gap-[100px]">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-end w-full gap-3 lg:gap-[215px]">
        <h2 className="text-2xl sm:text-5xl lg:text-[60px]  md:leading-[1.2] lg:leading-[72px] font-atyp font-bold text-[#132D47] w-full md:w-[687px]">
          We are not just a clinic. <br />We are a Movement.
        </h2>
        <p className="text-base md:text-[18px] leading-[1.5] md:leading-[23px] font-[Duplet] font-normal text-[#132D47] w-full md:w-[468px]">
          At Prevekta, we believe that Ayurveda thrives when it unites
        </p>
      </div>

      {/* Movement Items */}
      <div className="flex flex-col w-full gap-14 sm:gap-8 lg:gap-1">
        {movementItems.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-[60px] sm:h-[90px] lg:h-[134px] flex items-center justify-center bg-[#81DE7633] lg:bg-[#f2fcf1] hover:bg-[#96dda55b] rounded-2xl"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Item Text */}
            <div className="z-10 px-4 py-2 md:py-0 rounded-[24px] transition-all duration-300">
              <p className="text-base md:text-[24px] leading-[1.2] md:leading-[29px] font-atyp font-bold text-[#132D47] text-center">
                {item.text}
              </p>
            </div>

            {/* Left Image */}
            <div
              className={`absolute left-0 sm:left-2 lg:left-9 -rotate-6 w-[66px] h-[86px] sm:w-[91px] sm:h-[111px] lg:w-[183px] lg:h-[238px] z-20 transition-all duration-500 ease-in-out ${
                hoveredItem === item.id || isMobile
                  ? "top-1/2 -translate-y-1/2 opacity-100"
                  : "-bottom-20 opacity-0"
              }`}
            >
              <Image
                src={item.leftImage}
                alt=""
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Right Image */}
            <div
              className={`absolute right-0 sm:right-2 lg:right-9 rotate-6 h-[86px] w-[66px] sm:w-[91px] sm:h-[111px] lg:w-[183px] lg:h-[238px] z-20 transition-all duration-500 ease-in-out ${
                hoveredItem === item.id || isMobile
                  ? "top-1/2 -translate-y-1/2 opacity-100"
                  : "-bottom-20 opacity-0"
              }`}
            >
              <Image
                src={item.rightImage}
                alt=""
                className="w-full h-full object-cover rounded-[16px]"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Marquee Section Fixed */}
      <div className="w-full bg-[#132D47] text-white py-6 px-6 md:px-10 rounded-[16px] overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap animate-marquee"
          style={{ minWidth: "200%" }}
        >
          <span className="text-xl md:text-[32px] mx-4">
            We are weaving them all into one fabric.
          </span>
          <StarIcon />
          <span className="text-xl md:text-[32px] mx-4">One platform.</span>
          <StarIcon />
          <span className="text-xl md:text-[32px] mx-4">One mission.</span>
          {/* repeat for looping */}
          <span className="text-xl md:text-[32px] mx-4">
            We are weaving them all into one fabric.
          </span>
          <StarIcon />
          <span className="text-xl md:text-[32px] mx-4">One platform.</span>
          <StarIcon />
          <span className="text-xl md:text-[32px] mx-4">One mission.</span>
        </div>
      </div>

      {/* 🔑 Custom style for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(
              -80%
            ); /* Move half the width to ensure continuous flow */
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MovementSection;
