import Image from "next/image";
import React from "react";
import HeroBg from "@/assets/images/forpeoplehero.png";
import WaterMark from "@assets/images/watrmark.png";
function HeroSection() {
  return (
    <div className="lg:mb-16">
      <div className="h-[674px] w-full relative flex items-end mb-6">
        <Image
          src={HeroBg}
          alt="This is hero"
          height={674}
          className="h-full w-full object-fill absolute lg:rounded-b-[40px] -z-10"
        />
        <div className="p-4 lg:p-10 lg:pb-16 max-w-[563px] ">
          <h1 className="text-white text-[28px] lg:text-6xl leading-[34px] lg:leading-16 mb-4">
            Wellness <br />
            Begins with <br />
            Awareness
          </h1>
          <p className="text-white text-base lg:text-lg leading-5 font-[Duplet] ">
            Ayurveda is not just for the ill, {"it's"} for everyone. Prevekta
            makes ancient Ayurvedic wisdom easy, enjoyable, and accessible to
            the modern world.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-end px-4 py-12 md:py-20 lg:pt-24 mx-auto max-w-[1360px] gap-0 lg:gap-64 relative">
        {/* Title Section */}
        <div className="w-full lg:w-fit flex flex-col justify-center lg:pl-16 relative">
          <Image
            src={WaterMark}
            alt="watermark"
            height={321}
            width={376}
            className="absolute h-[121px] w-[142px] lg:h-[321px] lg:w-[376px] lg:top-[-102px] left-2.5 "
          />
          <h2 className="text-[28px] md:text-[40px] leading-[1] md:leading-[60px] font-atyp font-bold text-[#132D47] relative z-10">
            Making Ayurveda <br />
            Life Style
          </h2>
        </div>

        <div className="flex lg:w-fit">
          <p className="text-primary text-base leading-5 font-[Duplet] max-w-[253px] lg:max-w-[431px] ">
            At Prevekta, we believe Ayurveda is more than healing, it’s a
            lifestyle. From mindful meals to stress-free evenings, we bring
            timeless Ayurvedic principles into the flow of your modern life
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

