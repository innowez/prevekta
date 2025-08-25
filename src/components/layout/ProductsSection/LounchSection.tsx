import React, { useState } from "react";
import Image from "next/image";
import ArrowRightThin from "@/assets/icons/ArrowRightThin";
import ProductBG from "@assets/images/ProductBG.png";
import ProductsMobileBG from "@assets/images/productMobileBG.png";
import LeafBg from "@assets/images/ProbgleafMobile.png";

const LounchSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Main background container */}
      <div className="relative w-full max-w-[1440px] mx-auto h-[711px] md:h-auto md:pt-[52.85%] bg-[#E7F8E5]">
        {/* Background image */}
        <Image
          src={ProductsMobileBG}
          alt="mobilebg"
          className="absolute top-1/4 w-[471px] h-[249px] inset-0 bg-cover bg-center bg-no-repeat block md:hidden"
          width={471}
          height={249}
        />
        <Image
          src={ProductBG}
          alt="Product"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        />

        <Image
          src={LeafBg}
          alt="leaf"
          style={{
            // width: "334.7527548665033px",
            // height: "508.8663150836745px",
            // transform: "rotate(-166.19deg)",
            // opacity: 1,
            // top: "-132px",
            // left: "-262px",
            // backdropFilter: "blur(14.399999618530273px)"
            /* Cdsfdf 1 */

position: "absolute",
width: "334.75px",
height: "508.87px",
left: "-202px",
top: "-112px",

filter: "blur(7.2px)",
transform: "rotate(-166.19deg)"
// background: url(Cdsfdf.png);

          }}
        />

        {/* Blurred rotated images */}
        {/* <div className="absolute w-[522px] h-[793px] left-[-355px] top-[-179px] bg-cover blur-[7.2px] rotate-[-166.19deg] hidden md:block" style={{backgroundImage: `url(${LeafBg.src})`}} />
        <div className="absolute w-[522px] h-[793px] left-[902px] top-[-759px] bg-cover blur-[7.2px] rotate-[13.81deg] hidden md:block" style={{backgroundImage: `url(${LeafBg.src})`}} /> */}

        {/* Content section */}
        <div className="absolute w-full md:w-[371px] h-[215px] left-0 md:left-[100px] top-auto md:top-[486px] bottom-10 md:bottom-auto px-5 md:px-0">
          <div className="flex items-center md:items-start flex-col gap-6">
            <p className="w-full text-[18px] leading-[23px] text-[#132D47] font-[Duplet] text-center md:text-left">
              A new era of Ayurvedic formulations is on the horizon. Carefully
              crafted, ethically sourced, and rooted in classical wisdom our
              exclusive product range is launching soon. Stay tuned for herbal
              solutions you can trust.
            </p>

            <div
              className="relative w-[320px]  h-[56px]  group overflow-hidden transition-all duration-300 ease-in-out "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`px-3 absolute bg-[#81DE76] border w-[320px] h-full hover:w-[270px] whitespace-nowrap flex items-center border-[#81DE76] rounded-full  text-[18px] leading-[23px] uppercase text-[#132D47] font-duplet ${
                  isHovered
                    ? "w-[270px] transition-all duration-300 ease-in-out"
                    : ""
                }`}
              >
                Explore More
              </div>

              <div className="absolute bg-[#81DE76] right-0 top-1/2 transform -translate-y-1/2 w-[56px] h-[56px] flex justify-center items-center rounded-full  transition-transform duration-300">
                <div
                  className={`w-[22.5px] h-[15px] relative transition-transform duration-300 ${
                    isHovered
                      ? "-rotate-45  transition-transform duration-75"
                      : ""
                  }`}
                >
                  <div className="absolute ">
                    <ArrowRightThin fill="#132D47" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Launching Soon text */}
        <div className="absolute w-full max-w-[475px] h-auto left-1/2 transform -translate-x-1/2 md:left-[110px] font-extrabold md:translate-x-0 top-[92px] px-5 md:px-0 text-center md:text-left">
          <h1 className="text-[40px] md:text-[80px] leading-[48px] md:leading-[96px] text-[#132D47] font-[Atyp] font-bold">
            LAUNCHING SOON
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LounchSection;
