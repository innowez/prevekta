"use client";
import React, { useState } from "react";
import Box from "@assets/images/Box.png";
import Star from "@assets/images/Star.png";
import Board from "@assets/images/Board.png";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaquery";
import { useRouter } from "next/navigation";

const ForPatients = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 525px)');

  const router = useRouter();

  return (
    <div className="flex flex-col items-center px-4 py-5 md:py-20 mx-auto max-w-[1360px] gap-4 mb:gap-[72px] relative">
      <div id="Patient" className="absolute -top-16"></div>

      {/* Header Section */}
      <div className="flex flex-col items-center w-full gap-2 md:gap-[48px]">
        {/* Title and Description */}
        <div className="flex flex-col items-center w-full max-w-[735px] gap-4 md:gap-[24px]">
          <h2 className="text-2xl sm:text-5xl lg:text-[60px] md:leading-[72px] font-atyp font-bold text-center text-[#132D47]">
            FOR PATIENTS
          </h2>
          <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-normal text-center text-[#132D47]">
            Find the right doctor, not just a consultation. Prevekta connects
            you to a growing network of experienced Ayurveda practitioners
            across specialties. Get timely diagnoses, personalized wellness
            plans, and continuous care whether in person or online.
          </p>
        </div>

        {/* Features Section */}
        <div className="relative w-full md:h-[223px]">
          {/* Features Grid */}
          <div className="flex flex-col md:flex-row  w-full h-full">
            {/* Feature 1 */}
            <div
              className={`flex flex-col md:flex-row justify-start items-start w-[75%] mx-auto md:w-1/3 h-full  relative transition-all duration-300 ${
                hoveredFeature !== null && hoveredFeature !== 0
                  ? "opacity-90 blur-[1.5px]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredFeature(0)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12 mx-auto w-[220px] md:w-auto`}
              >
                <div className="relative w-[40px] md:w-[80px] h-[40px] md:h-[80px]">
                  {/* <img
                    src={Box.src}
                    alt="Box Icon"
                    className="absolute top-1/2 left-1/2 w-[43px] h-[51px] transform -translate-x-1/2 -translate-y-1/2"
                  /> */}
                  <Image 
                    src={Box.src}
                    alt="Box Icon"
                    className="absolute top-1/2 left-1/2 w-[27px] h-[25px] md:w-[51px] md:h-[51px] transform -translate-x-1/2 -translate-y-1/2" 
                    width={27}
                    height={25}
                  />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Multiple specialties
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className={`flex flex-col md:flex-row justify-start items-start w-[75%] mx-auto md:w-1/3 h-full  relative transition-all duration-300 ${
                hoveredFeature !== null && hoveredFeature !== 1
                  ? "opacity-90 blur-[1.5px]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredFeature(1)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12  mx-auto w-[220px] md:w-auto`}
              >
                <div className="relative w-[40px] md:w-[80px] h-[40px] md:h-[80px]">
                  <Image 
                    src={Star.src}
                    alt="Star Icon"
                    className="absolute top-1/2 left-1/2 w-[21px] h-[25px] md:w-[43px] md:h-[51px] transform -translate-x-1/2 -translate-y-1/2"
                    width={21}
                    height={25}
                  />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Expert Experiences
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className={`flex flex-col md:flex-row justify-start items-start w-[75%] mx-auto md:w-1/3 h-full  relative transition-all duration-300  ${
                hoveredFeature !== null && hoveredFeature !== 2
                  ? "opacity-90 blur-[1.5px]"
                  : ""
              }`}
              onMouseEnter={() => setHoveredFeature(2)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12 mx-auto w-[220px] md:w-auto`}
              >
                <div className="relative w-[40px] md:w-[80px] h-[40px] md:h-[80px]">
                  {/* <img
                    /> */}
                  <Image
                    src={Board.src}
                    alt="Board Icon"
                    className="absolute top-1/2 left-1/2 w-[22px] h-[25px] md:w-[43px] md:h-[51px] transform -translate-x-1/2 -translate-y-1/2"
                    width={22}
                    height={25}
                  />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Digital Health Records
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <CustomButton
        mainWidth={isMobile? "100%" : "320px"}
        labelWidth={isMobile? "100%" : "320px"}
        labelWidthHover={isMobile? "91%" : "280px"}
        labelBackground="rgba(19,45,71,0.0)"
        labelBackgroundHover="#132D47"
        labelTextColor="#132D47"
        labelTextColorHover="#FFFF"
        arrowFill="#132D47"
        arrowFillHover="#FFFF"
        labelText="Book Your Consultation"
        labelBorderColor="#132D47"
        iconPosition="0px"
        iconPositionHover="px"
        onClick={() => router.push("/patients")}
      />
    </div>
  );
};

export default ForPatients;
