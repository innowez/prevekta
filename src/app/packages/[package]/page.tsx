"use client";

import React, { useState } from "react";
import UrbanCleanse from "@/assets/images/urban_cleanse.png";
import UCImage2 from "@/assets/images/uc2.png";
import UCImage3 from "@/assets/images/uc3.png";
import UCImage4 from "@/assets/images/uc4.png";
import UCImage5 from "@/assets/images/uc5.png";

import Image from "next/image";
import { motion } from "motion/react";
// import { i } from "framer-motion/client";
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import Inclusions from "./components/Inclusions";
import Gudlines from "./components/Gudlines";

import "./pageStyle.css";

function PackageDetail() {
  const [selectBtn, setSelectBtn] = useState({
    inclusion: true,
    guidelines: false,
    summary: false,
  });
  return (
    <div className="w-full overflow-hidden">
      <section className="px-4 lg:px-10 pt-7 lg:pt-28 mb-4 lg:mb-12">
        <div className="flex flex-col lg:flex-row justify-between gap-2 mb-10 ">
          <h1 className="text-2xl lg:text-[60px] text-center lg:text-left text-primary lg:leading-[72px] font-Atyp font-semibold ">
            URBAN CLEANSE
          </h1>
          <div>
            <p className="text-base lg:text-lg text-center lg:text-left text-primary font-[Duplet] leading-[18px] max-w-[454px] ">
              A 3-day Ayurvedic package that gently purifies the body, calms the
              mind, and restores inner balance from the effects of urban living.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 min-w-[365px] mx-auto">
          <div>
            <Image
              src={UrbanCleanse}
              alt="urban"
              style={{ gridArea: "box1" }}
              className="object-cover object-center w-[195px] h-[148px] lg:w-[480px] lg:h-[285px] rounded-2xl "
            />
          </div>
          <div>
            <Image
              src={UCImage2}
              alt="urban"
              style={{ gridArea: "box2" }}
              className="object-cover object-center w-[158px] h-[148px] lg:w-[361px] lg:h-[285px] rounded-2xl "
            />
          </div>

          <div>
            <Image
              src={UCImage3}
              alt="urban"
              style={{ gridArea: "box3" }}
              className="object-cover object-center w-[158px] h-[104px] lg:w-[397px] lg:h-[285px] rounded-2xl "
            />
          </div>

          <div>
            <Image
              src={UCImage4}
              alt="urban"
              style={{ gridArea: "box4" }}
              className="object-cover object-center w-[195px] h-[104px] lg:w-[480px] lg:h-[285px] rounded-2xl "
            />
          </div>

          <div className="">
            <Image
              src={UCImage5}
              alt="urban"
              style={{ gridArea: "box5" }}
              className="object-cover object-center w-[361px] h-[104px] lg:w-[361px] lg:h-[285px] rounded-2xl "
            />
          </div>
        </div>
      </section>

      <div className="px-4 lg:px-10 mb-4 lg:mb-12">
        <div className="bg-black w-full h-[1px]" />
      </div>

      <section className="flex flex-col lg:flex-row gap-6 px-4 lg:px-10">
        <div className="border border-primary rounded-3xl w-full p-4">
          <div className="flex gap-2 overflow-x-auto px-4 mb-4 no-scrollbar ">
            <motion.button
              className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.inclusion
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  inclusion: !prev.inclusion,
                  guidelines: false,
                  summary: false,
                }))
              }
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span layout="position">Inclusion</motion.span>
            </motion.button>

            <motion.button
              className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.guidelines
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  guidelines: !prev.guidelines,
                  inclusion: false,
                  summary: false,
                }))
              }
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span>Guidelines</motion.span>
            </motion.button>

            <motion.button
              className={` px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.summary
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  summary: !prev.summary,
                  inclusion: false,
                  guidelines: false,
                }))
              }
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Summary</span>
            </motion.button>
          </div>
          {selectBtn.inclusion && <Inclusions />}
          {selectBtn.guidelines && <Gudlines />}
        </div>

        <div className="bg-primary rounded-3xl flex flex-col gap-2 p-4 lg:p-5 py-8 w-full lg:w-[355px] h-fit ">
          <p className="text-white text-base lg:text-lg font-[Duplet] ">Actual Price</p>
          <div className="flex gap-4 items-center">
            <p className="text-xl lg:text-3xl text-[#FFFFFF80] font-[Atyp] font-semibold line-through">
              ₹ 9999
            </p>
            <span className="text-base lg:text-lg text-[#FF383C] font-[Duplet]  ">
              16% Off
            </span>
          </div>
          <p className="font-[Duplet] text-base lg:text-lg text-white ">Discount Price</p>

          <p className="font-[Atyp] text-2xl lg:text-[40px] text-white ">₹ 7999</p>

          <p className="font-[Duplet] text-base lg:text-lg text-white ">
            Excluding Applicable Taxes
          </p>

          <div className="flex justify-between items-center gap-4 bg-secondary px-6 py-4 rounded-full cursor-pointer mt-4 w-full">
            <span className="font-[Duplet] text-primary text-base font-extralight ">Checkout now</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="15"
              fill="none"
              viewBox="0 0 23 15"
            >
              <path
                fill="#132D47"
                d="M22.317 6.997 16.316.245c-.314-.319-.77-.316-1.06-.052a.78.78 0 0 0-.054 1.06l4.888 5.498H.75a.75.75 0 1 0 0 1.5h19.34l-4.888 5.497c-.264.292-.23.788.053 1.06.295.285.797.24 1.06-.052l6.002-6.751c.265-.37.234-.685 0-1.008"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default PackageDetail;
