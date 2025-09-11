"use client";

import Image from "next/image";
import React from "react";
import OldAunty from "@/assets/images/oldWomen.png";
import YogaMan from "@/assets/images/yogaman.png"
import CustomButton from "@/components/ui/CustomButton";

function BlogSeries() {
  return (
    <div className="px-4 lg:px-10">
      <div className="flex flex-col items-center justify-center mb-12">
        <p className="text-primary text-base lg:text-2xl text-center leading-5 font-[Duplet] mb-2 lg:mb-4 ">
          Blog Series
        </p>
        <h1 className="text-primary text-[28px] lg:text-[40px] text-center leading-8 lg:leading-12 font-semibold mb-4">
          Demystifying Ayurveda
        </h1>
        <h2 className="text-primary text-base lg:text-lg text-center leading-5 font-[Duplet] ">
          Our blog transforms ancient Ayurvedic knowledge into everyday wellness{" "}
          <br className=" hidden lg:block" />
          insights that are easy to understand, engaging, and ready to apply.
        </h2>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4 lg:gap-0 border-b border-b-primary pb-4 mb-4">
        <div className="flex flex-col justify-between">
          <h1 className="hidden lg:block text-primary text-[32px] leading-[38px] ">
            Healing in the Kitchen
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-28 mb-4 lg:mb-14">
              <p className="text-primary text-xl lg:text-2xl lg:leading-[29px] ">
                6 Spices with <br className="hidden lg:block" />
                Hidden Powers
              </p>
              <p className="text-primary text-base lg:text-lg lg:leading-[23px] font-[Duplet] max-w-[455px] ">
                From turmeric to cumin, everyday spices aren’t just for flavor —
                they’re ancient remedies. Learn how to use them in your cooking
                for better digestion, immunity, and vitality.
              </p>
            </div>

            <div className=" flex justify-center lg:justify-start">
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
        </div>
        <div className="w-auto lg:w-[484px] h-[269px] lg:h-[394px] rounded-3xl ">
          <Image
            src={OldAunty}
            alt="old aunty"
            className="h-full w-full object-cover rounded-3xl scale-x-[-1]"
          />
        </div>
        <h1 className="block lg:hidden text-primary text-xl font-semibold ">
          Healing in the Kitchen
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4 lg:gap-0 border-b border-b-primary pb-4">
        <div className="flex flex-col justify-between">
          <h1 className="hidden lg:block text-primary text-[32px] leading-[38px] ">
            The Morning Rituals of Ayurveda
          </h1>
          <div>
            <div className="flex flex-col lg:flex-row lg:gap-20 mb-4 lg:mb-14">
              <p className="text-primary text-xl lg:text-2xl lg:leading-[29px] ">
                Simple Daily <br className="hidden lg:block" />Practices for Balance
              </p>
              <p className="text-primary text-base lg:text-lg lg:leading-[23px] font-[Duplet] max-w-[455px] ">
                Start your day the Ayurvedic way with simple rituals like oil pulling and mindful breathing. Cleanse your body, boost focus, and sync with nature for lasting energy.
              </p>
            </div>

            <div className=" flex justify-center lg:justify-start">
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
        </div>
        <div className=" lg:w-[484px] h-[269px] lg:h-[394px] rounded-3xl ">
          <Image
            src={YogaMan}
            alt="old aunty"
            className="h-full w-full object-cover rounded-3xl "
          />
        </div>
        <h1 className="block lg:hidden text-primary text-xl font-semibold ">
          The Morning Rituals of Ayurveda
        </h1>
      </div>

    </div>
  );
}

export default BlogSeries;
