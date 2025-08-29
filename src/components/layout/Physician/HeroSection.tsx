"use client";

import React from "react";
import "./herostyle.css";
import Image from "next/image";
import HeroImage from "@assets/images/phyHero.png";
import StarIcon from "@assets/icons/StarIcon";

function HeroSection() {
  return (
    <div className=" max-w-[1360px] mx-auto pt-7 px-4">
      <div className="flex justify-between md:items-center flex-col lg:flex-row mb-6 lg:mb-[72px]">
        <div className="mb-6">
          <h1 className="font-semibold text-2xl md:text-[40px] text-[#132D47] mb-4 ">
            One Platform. <br className="sm:hidden lg:block"/>
            Infinite Possibilities <br />
            for Ayurveda Practitioners.
          </h1>

          <div className="lg:w-[444px] text-[#132D47]">
            <p className="text-base lg:text-lg leading-[23px] font-light font-[Duplet] mb-2">
              At Prevekta, we believe that Ayurveda thrives when Vaidyas thrive.
              Whether you’re a seasoned ayurvedic physician or just stepping
              into clinical practice, Prevekta is your partner in purpose,
              practice, and progress.
            </p>
            <p className="text-base lg:text-lg  leading-[23px] font-light font-[Duplet]">
              We bring together a growing network of Ayurvedic doctors,
              scholars, and educators—creating a supportive ecosystem where you
              can connect, learn, grow, and lead.
            </p>
          </div>
        </div>

        <div className="h-[217px] sm:h-[390px] lg:h-[546px] w-full lg:w-[774px] relative">
          <div className="relative h-full w-full rounded-2xl lg:rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-right bg-no-repeat"
              style={{
                backgroundImage: `url(${HeroImage.src})`,
              }}
            />

            <div className="absolute inset-0 flex">
              <div className="w-[60%] h-full bg-transparent rounded-2xl lg:rounded-3xl overflow-hidden" />
              <div className="w-[4px] sm:w-[6.5px] lg:w-[8px] h-full bg-[#f2fcf1]" />
              {/* <div className="w-[20%] h-full bg-transparent overflow-hidden rounded-2xl" /> */}
              <div className="w-[20%] h-full overflow-hidden rounded-2xl" >
                <div className="w-full h-full bg-transparent overflow-hidden rounded-2xl" />
              </div>
              <div className="w-[4px] sm:w-[6.5px] lg:w-[8px] h-full bg-[#f2fcf1]" />
              <div className="w-[20%] h-full bg-transparent rounded-2xl lg:rounded-3xl overflow-hidden" />
            </div>
          </div>
        </div>

        {/* <div className="h-[217px] lg:h-[546px] w-full lg:w-[774px] relative flex gap-1 bg-white">
          <div className="over-lay w-[60%] h-full" ></div>
          <div className="over-lay w-[20%] h-full" ></div>
          <div className="over-lay w-[20%] h-full" ></div>
          <Image
            src={HeroImage}
            alt="heroimg"
            // height={546}
            // width={774}
            className="rounded-2xl lg:rounded-3xl object-fill object-right lg:w-[774px] lg:h-[546px] absolute top-0 left-0 right-0"
          />
        </div> */}
      </div>

      {/* ✅ Marquee Section Fixed */}
      <div className="w-full bg-[#132D47] text-white py-5 lg:py-6 px-6 md:px-10 rounded-[16px] overflow-hidden">
        <div
          className="flex items-center whitespace-nowrap animate-marquee"
          style={{ minWidth: "200%" }}
        >
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            Let’s not just practice Ayurveda. Let’s shape its future.
          </span>
          <StarIcon />
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            One platform.
          </span>
          <StarIcon />
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            One mission.
          </span>
          {/* repeat for looping */}
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            Let’s not just practice Ayurveda. Let’s shape its future.
          </span>
          <StarIcon />
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            One platform.
          </span>
          <StarIcon />
          <span className="text-base md:text-xl lg:text-[32px] mx-4">
            One mission.
          </span>
        </div>
      </div>
      {/* 🔑 Custom style for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
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
}

export default HeroSection;
