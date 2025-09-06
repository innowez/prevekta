"use client"

import Image from "next/image";
import React from "react";
import GreenWomen from "@/assets/images/greenwomen.png";
import useMediaQuery from "@/hooks/useMediaquery";

function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 720px)');
  return (
    <div>
      <div
        className="h-[622px] lg:h-[641px] w-full mb-12 lg:mb-28 relative overflow-hidden"
        style={{
          backgroundImage: `
        linear-gradient(
          to top,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.6) 15%,
          rgba(0, 0, 0, 0.4) 30%,
          rgba(0, 0, 0, 0.2) 45%,
          rgba(0, 0, 0, 0.1) 60%,
          rgba(0, 0, 0, 0) 75%
        ),
        url(${GreenWomen.src || GreenWomen})
      `,
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          backgroundRepeat: "no-repeat, no-repeat",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Content */}
        <div className="flex flex-col justify-between relative h-full z-20 py-7 px-4">
          <div>
            <h1 className="mb-4 text-white text-[28px] lg:text-6xl font-semibold font-[Atyp] leading-8 lg:leading-[72px]">
              Modern Ayurveda,
              <br />
              Made for You
            </h1>
            <p className="text-white text-base lg:text-lg font-[Duplet] leading-5 lg:leading-[23px] ">
              Because Your Body Deserves to Heal, <br className="sm:hidden" />
              Not Just Cope
            </p>
          </div>

          <div className="flex justify-end ">
            <div>
            <p className="mb-1 lg:mb-4 text-base lg:text-lg text-white font-[Duplet] leading-5 lg:leading-[23px]">
              At Prevekta, we believe that true healing starts with <br className="hidden lg:block"/>the right
              guidance not just a one-time consultation.
            </p>
            <p className="text-base lg:text-lg text-white font-[Duplet] leading-5 lg:leading-[23px]">
              We connect you with a growing network of trusted <br className="hidden lg:block"/>Ayurveda doctors
              across specialties, helping you <br className="hidden lg:block"/>make clear, informed decisions
              about your health <br className="hidden lg:block"/>and well-being.
            </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-7">
        <h1 className="text-center text-primary text-2xl lg:text-[40px] leading-7 lg:leading-12 font-Atyp font-semibold mb-4 lg:mb-6">
          Start your healing journey with <br className="hidden lg:block" />clarity and confidence.
        </h1>
        <h2 className="text-center text-primary text-base lg:text-base font-[Duplet] leading-5 lg:leading-[23px] ">
          Whether {"you're"} managing chronic conditions, lifestyle-related
          disorder, or <br className="hidden lg:block"/>seeking preventive care, Prevekta Ayurveda ensures
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 mt-6 lg:mt-12">
          {[
            <>Timely and accurate diagnosis</>,
            <>Multiple expert opinions </>,
            <>Personalized Ayurvedic Wellness Plans</>,
            <>Online and Offline <br className="hidden lg:block"/>support till you heal</>,
          ].map((e, i) => (
            <div key={i+1} className={`w-full aspect-square rounded-full p-1 flex items-center justify-center ${isMobile ? i === 0 || i === 3 ? "bg-primary text-white" : "bg-[#CEDDD6] text-primary" : i%2 === 0 ? "bg-primary text-white" : "bg-[#CEDDD6] text-primary"}  `}>
              <p className="font-[Duplet] font-semibold text-center text-base lg:text-2xl lg:leading-[29px]">{e}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <div className="w-full"></div>
        <div className="w-full"></div>
      </div> */}
    </div>
  );
}



export default HeroSection;
