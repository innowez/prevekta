"use client"

import React from "react";
import Image from "next/image";
import Logo from "@assets/icons/Logo";
import AyurvedaDoctor from "@assets/images/AyurvedaDoctor.png";
import LogoDriverDesignOne from "@assets/images/LogoDriverDesignOne.png";
import LogoDriverDesignTwo from "@assets/images/LogoDriverDesignTwo.png";
import AyruvedaSectionBtn from "./btns/AyruvedaSectionBtn";

const AyurvedaSection = () => {

  const scrollIntopvfor = () => {
     const element = document.getElementById("pvfor");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // element.scrollIntoView();
    }
  } 
  
  return (
    <div className="w-full mx-auto px-4  my-8 lg:my-16">
      {/* Main Grid Layout */}
      <div className="flex flex-col lg:flex-row justify-between xl:justify-center gap-4 mx-auto xl:max-w-[1365px] ">
        {/* Left Section (Green) - Takes more space on desktop */}
        <div className="lg:w-[71%] xl:w-[74%] relative bg-primary-light rounded-3xl overflow-hidden ">
          <div className="p-5 min-h-[650px] lg:min-h-auto mb-12">
            {/* Desktop Layout - Side by side */}
            <div className="flex flex-col xl:flex-row items-start justify-start gap-3 lg:gap-8">
              {/* Image */}
              <div className="md:min-w-[356px] w-full h-[363px] bg-gray-300 rounded-xl overflow-hidden">
                <Image
                  src={AyurvedaDoctor}
                  alt="Ayurveda Doctor"
                  // layout="fill"
                  // objectFit="cover"
                  loading="lazy"
                  className="object-cover object-center min-h-[199px] min-w-[329px] w-full h-full lg:min-w-[356px] lg:min-h-[363px] "
                />
              </div>

              {/* Content */}
              <div className="lg:p-0 lg:pb-9">
                <h1 className="left-[396px] top-5 font-[Atyp] font-bold text-4xl leading-[48px] text-primary-dark">
                  Ayurveda. <br />
                  Community. Future.
                </h1>

                {/* Description */}
                <p className=" xl:w-[474px] xl:h-[161px] left-[396px] top-[136px] my-4  md:mb-8 font-[Duplet] font-normal text-base md:text-lg leading-[23px] text-primary-dark">
                  Prevekta Ayurveda is more than a healthcare service its a
                  holistic ecosystem designed to bring the ancient science of
                  Ayurveda into every aspect of modern life. Whether youre a
                  patient seeking personalized healing, a physician striving to
                  grow your clinical career, a wellness enthusiast exploring
                  authentic products, or a learner looking to deepen your
                  Ayurvedic knowledge Prevekta is your trusted destination.
                </p>

                <div className="pb-4 lg:pb-0">
                  <button onClick={() => scrollIntopvfor()}>
                  <AyruvedaSectionBtn />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Pattern Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
            <Image
              src={LogoDriverDesignOne}
              alt="LogoDriverDesignOne"
              fill
              sizes="100vw"
              className="object-cover opacity-90"
            />
          </div>
        </div>

        {/* Right Section (Dark) */}
        <div className=" relative bg-primary-dark rounded-3xl overflow-hidden min-h-[300px] lg:min-w-[364px] flex flex-col justify-between">
          <div className="flex flex-col justify-center h-full lg:h-auto p-6 lg:p-8 mt-14">
            <div className="space-y-6 lg:space-y-7">
              <h3 className="font-[Atyp] font-bold text-xl lg:text-2xl leading-tight text-white">
                Whether you are,
              </h3>

              <div className="space-y-4 lg:space-y-5">
                {[
                  "A Patient seeking personalized healing",
                  "A physician seeking clinical growth",
                  "A wellness seeker exploring Ayurveda",
                  "An eager student of Ayurveda",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 pt-1">
                      <Logo className="opacity-30 text-primary-light w-4 h-4" />
                    </div>
                    <p className="font-[Duplet] font-normal text-sm lg:text-base leading-relaxed text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo Pattern Bottom */}
          <div className="relative w-full h-16 mt-4 rounded bottom-0 left-0 ">
            {/* <Image
              src={LogoDriverDesignTwo}
              alt="LogoDriverDesignTwo"
              fill
              // sizes="100vw"
              className="object-contain bg-repeat-x opacity-90 w-full"
              // style={{ objectFit: "fit" }}
            /> */}
            <div 
            className="absolute bottom-0 left-0 w-full h-16 opacity-90"
            style={{
              backgroundImage: `url(${LogoDriverDesignTwo.src || LogoDriverDesignTwo})`,
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center',
              backgroundSize: 'auto 100%'
            }}
          ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaSection;
