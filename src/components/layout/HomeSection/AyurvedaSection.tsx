"use client";
import React from "react";
import Image from "next/image";
import Logo from "@assets/icons/Logo";
import AyurvedaDoctor from "@assets/images/AyurvedaDoctor.png";
import LogoDriverDesignOne from "@assets/images/LogoDriverDesignOne.png";
import LogoDriverDesignTwo from "@assets/images/LogoDriverDesignTwo.png";
import CustomButton from "@/components/ui/CustomButton";

const AyurvedaSection = () => {
  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row items-center justify-center gap-4 w-full  mx-auto my-16 px-5">
        {/* Left Section (Green) */}
        <div className="relative w-[890px] h-[507px] bg-primary-light rounded-3xl">
          <div className="flex justify-between">
            {/* Image */}
            <div className="relative w-[356px] h-[363px] left-5 top-5 bg-gray-300 rounded-xl overflow-hidden">
              <Image
                src={AyurvedaDoctor}
                alt="Ayurveda Doctor"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="p-5 px-9">
              {/* Title */}
              <h1 className=" w-[373px] h-[96px] left-[396px] top-5 font-[Atyp] font-bold text-4xl leading-[48px] text-primary-dark">
                Ayurveda. Community. Future.
              </h1>

              {/* Description */}
              <p className=" w-[474px] h-[161px] left-[396px] top-[136px] mt-4 md:mb-8 font-[Duplet] font-normal text-base md:text-lg leading-[23px] text-primary-dark">
                Prevekta Ayurveda is more than a healthcare service its a
                holistic ecosystem designed to bring the ancient science of
                Ayurveda into every aspect of modern life. Whether youre a
                patient seeking personalized healing, a physician striving to
                grow your clinical career, a wellness enthusiast exploring
                authentic products, or a learner looking to deepen your
                Ayurvedic knowledge Prevekta is your trusted destination.
              </p>

              {/* Button */}
              <div>
                <CustomButton
                  mainWidth="210px"
                  labelWidth="200px"
                  labelWidthHover="180px"
                  labelBackground="rgba(19,45,71,0.0)"
                  labelBackgroundHover="#132D47"
                  labelTextColor="#132D47"
                  labelTextColorHover="#FFFF"
                  arrowFill="#132D47"
                  arrowFillHover="#FFFF"
                  labelText="Explore More"
                  labelBorderColor="#132D47"
                  iconPosition="0px"
                  iconPositionHover="px"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <div className="w-[22.5px] h-[15px] relative">
                    <div className="absolute inset-0 bg-primary"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo Pattern (Bottom) */}
          <div className="absolute w-[956px] h-[60px] -left-[35px] bottom-5  gap-1 overflow-hidden">
            <Image
              className="absolute w-full h-[60px] left-1/2  bottom-0 flex flex-row items-center gap-1 overflow-hidden"
              src={LogoDriverDesignOne}
              alt="LogoDriverDesignOne"
              layout="fill"
              objectFit="contain"
            />
            {/* {[...Array(14)].map((_, i) => (
                            <div key={i} className="w-[60px] h-[60px] relative overflow-hidden">
                                <Logo className="w-full h-full opacity-30 text-primary-dark" fill="primary-light" />
                            </div>
                        ))} */}
          </div>
        </div>

        {/* Right Section (Dark) */}
        <div className="relative w-[454px] h-[507px] bg-primary-dark rounded-3xl">
          <div className=" w-[370px] h-[201px] py-10 mt-16 px-3 ml-5 flex flex-col gap-8">
            <div>
              <h3 className="w-full font-[Atyp] font-bold text-2xl leading-[29px] text-white">
                Whether you are,
              </h3>
            </div>

            <div className="w-full flex flex-col gap-4">
              {[
                "A Patient seeking personalized healing",
                "A physician seeking clinical growth",
                "A wellness seeker exploring Ayurveda",
                "An eager student of Ayurveda",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {/* <div className="w-[19px] h-[19px] bg-primary-2 rounded-full"></div> */}
                  <Logo className=" opacity-30 text-primary-light" />
                  <p className=" font-[Duplet] font-normal text-base md:text-[17px] leading-[23px] text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Pattern (Bottom) */}
          <div className="absolute w-full h-[60px] left-[0px] bottom-5 flex flex-row items-center gap-1 overflow-hidden">
            <Image
              className="absolute w-full h-[60px] left-1/2  bottom-0 flex flex-row items-center gap-1 overflow-hidden"
              src={LogoDriverDesignTwo}
              alt="LogoDriverDesignTwo"
              layout="fill"
              objectFit="cover"
            />
            {/* {[...Array(15)].map((_, i) => (
                            <div key={i} className="w-[60px] h-[60px] relative">
                                <Logo className="w-full h-full opacity-30 text-primary-2" />
                            </div>
                        ))} */}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full px-4 my-10">
        {/* Green Card */}
        <div className="relative w-full h-[669px] bg-primary-light rounded-3xl">
          {/* Image */}
          <div className="relative w-full pt-4">
      <div className="relative mx-auto w-[93%] sm:w-[85%] md:w-[95%] md:h-[300px]" style={{ aspectRatio: '16/10' }}>
        <Image
          src={AyurvedaDoctor}
          alt="Ayurveda Doctor"
          fill
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 70vw, 50vw"
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
        />
      </div>
    </div>

          {/* Title */}
          <h1 className="relative w-[224px] h-[58px] left-4 top-[31px] font-[Atyp] font-bold text-2xl leading-[29px] text-primary-dark">
            Ayurveda. Community. Future.
          </h1>

          {/* Description */}
          <p className="p-4 py-10 pb-5 w-full left-4 top-[45px] font-[duplet] font-normal text-sm leading-5 text-primary-dark">
            Prevekta Ayurveda is more than a healthcare service its a holistic
            ecosystem designed to bring the ancient science of Ayurveda into
            every aspect of modern life. Whether youre a patient seeking
            personalized healing, a physician striving to grow your clinical
            career, a wellness enthusiast exploring authentic products, or a
            learner looking to deepen your Ayurvedic knowledge Prevekta is your
            trusted destination.
          </p>

          {/* Button */}
          <div className=" ml-5 w-[163px] h-12 left-4 top-[90px]">
            <button className="w-[141px] h-12 bg-primary-dark rounded-full flex items-center justify-center font-duplet font-normal text-base leading-5 text-white uppercase">
              Explore More
            </button>
          </div>

          {/* Logo Pattern (Bottom) */}
          <div className="absolute w-full h-[67px]  bottom-5  gap-1 overflow-hidden">
            <Image
              className="absolute w-full h-[60px] left-1/2  bottom-0 flex flex-row items-center gap-1 overflow-hidden"
              src={LogoDriverDesignOne}
              alt="LogoDriverDesignOne"
              layout="fill"
              objectFit="cover"
            />
            {/* {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-[60px] h-[60px] relative">
                                <Logo className="w-full h-full opacity-30 text-primary-dark" />
                            </div>
                        ))} */}
          </div>
        </div>

        {/* Dark Card */}
        <div className="w-full bg-primary-dark rounded-3xl flex flex-col justify-between min-h-[320px] mt-4">
  {/* Main Content */}
  <div className="flex-1 flex flex-col justify-center px-4">
    <h3 className="font-[Atyp] font-bold text-xl leading-6 text-white mb-6">
      Whether you are,
    </h3>

    <div className="space-y-3">
      {[
        "A Patient seeking personalized healing",
        "A physician seeking clinical growth", 
        "A wellness seeker exploring Ayurveda",
        "An eager student of Ayurveda",
      ].map((item, index) => (
        <div key={index} className="flex items-center gap-3">
          <Logo className="opacity-30 text-primary-light flex-shrink-0" />
          <p className="font-[Duplet] font-normal text-sm leading-5 text-white">
            {item}
          </p>
        </div>
      ))}
    </div>
  </div>

  {/* Logo Pattern (Bottom) - Simplified */}
  <div className="relative w-full h-[60px] mt-4 rounded overflow-hidden">
    <Image
      src={LogoDriverDesignTwo}
      alt="LogoDriverDesignTwo"
      fill
      sizes="100vw"
      style={{ objectFit: "cover" }}
    />
  </div>
</div>

      </div>
    </>
  );
};

export default AyurvedaSection;
