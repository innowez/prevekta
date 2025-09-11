"use client";

import React, { useState, useRef, useEffect } from "react";
import RS1 from "@/assets/images/rs1.png";
import RS2 from "@/assets/images/rs2.png";
import RS3 from "@/assets/images/rs3.png";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";

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

function ResearchArticles() {
  const reserchList = [
    {
      heading: "The Science of Turmeric",
      des: "Modern studies confirm what Ayurveda knew turmeric’s curcumin fights inflammation, boosts immunity, and supports overall health.",
      img: RS1,
    },
    {
      heading: "Gut Health & Ayurveda",
      des: "Research shows Ayurvedic herbs and diets naturally restore gut balance, improving digestion and overall well-being.",
      img: RS2,
    },
    {
      heading: "Ashwagandha Uncovered",
      des: "Clinical research highlights Ashwagandha’s role in reducing stress, improving sleep, and boosting strength naturally.",
      img: RS3,
    },
    {
      heading: "The Science of Turmeric",
      des: "Modern studies confirm what Ayurveda knew turmeric’s curcumin fights inflammation, boosts immunity, and supports overall health.",
      img: RS1,
    },
    {
      heading: "Gut Health & Ayurveda",
      des: "Research shows Ayurvedic herbs and diets naturally restore gut balance, improving digestion and overall well-being.",
      img: RS2,
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -450,
        behavior: "smooth",
      });
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 450,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      
      // Calculate progress percentage
      const maxScrollLeft = scrollWidth - clientWidth;
      const progress = maxScrollLeft > 0 ? (scrollLeft / maxScrollLeft) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div
      className=" mt-12 pb-8"
      style={{
        background: "linear-gradient(180deg, #F3FCF2 0%, #D8FFD4 100%)",
      }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-4 mb-8 px-4 lg:px-10">
        <div>
          <h1 className="text-primary text-base lg:text-2xl leading-5 lg:leading-7 font-[Duplet] font-semibold mb-2">
            Research Articles
          </h1>
          <h2 className="text-primary text-[28px] lg:text-[40px] leading-[34px] lg:leading-[48px] ">
            Science behind <br className="lg:hidden" />
            Ayurvedic <br className="hidden lg:block" />
            therapies
          </h2>
        </div>

        <p className="text-primary text-base lg:text-lg leading-5 lg:leading-[23px] font-[Duplet] max-w-[484px]">
          At Prevekta, we believe Ayurveda belongs in evidence-based healthcare.
          Our Research Articles section features curated studies and clinical
          insights that validate Ayurvedic therapies in today’s scientific
          context ideal for curious readers and healthcare professionals alike.
        </p>
      </div>

      <div className="w-full">
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-scroll no-scrollbar w-full mb-6 px-4 lg:px-10"
        >
          {reserchList.map((e, i) => (
            <div
              key={i + 1}
              className="min-w-[297px] lg:min-w-[467px] h-[413px] lg:h-[565px] relative"
            >
              <Image
                src={e.img}
                alt="rr1"
                width={297}
                className=" min-w-[297px] w-full h-full overflow-hidden rounded-3xl object-cover absolute "
              />
              <div className="min-w-[297px] flex flex-col justify-between items-center p-4 lg:p-12 h-full w-full relative z-10">
                <div className="w-full">
                  <h2 className="text-white text-xl leading-6 mb-4 ">
                    {e.heading}
                  </h2>
                  <p className="text-white text-base leading-5 font-[Duplet] ">
                    {e.des}
                  </p>
                </div>

                <CustomButton
                  mainWidth="170px"
                  labelWidth="170px"
                  labelWidthHover="170px"
                  labelBackground="#81DE76"
                  labelBackgroundHover="#81DE76"
                  labelTextColor="#132D47"
                  labelTextColorHover="#132D47"
                  arrowFill="#132D47"
                  arrowFillHover="#132D47"
                  labelText="Read More"
                  labelBorderColor="#81DE76"
                  iconPosition="0px"
                  iconPositionHover="px"
                  // isHoveredProp={true}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 px-4 lg:px-10">
          <div className="w-full progress-bar-section">
            <div className="progress-bar-container h-[1px] lg:h-1 bg-[#83959c] w-full rounded-full">
              <div 
                className="progress-bar h-[1px] lg:h-1 bg-[#132D47] rounded-full transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={slideLeft}
              className={`h-12 w-12 rounded-full flex justify-center items-center bg-[#132D47] cursor-pointer transition-opacity ${
                canScrollLeft ? "opacity-100" : "opacity-50"
              }`}
            >
              <ArrowLeft />
            </button>

            <button
              onClick={slideRight}
              className={`h-12 w-12 rounded-full flex justify-center items-center bg-[#132D47] cursor-pointer transition-opacity ${
                canScrollRight ? "opacity-100" : "opacity-50"
              }`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchArticles;
