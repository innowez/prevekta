"use client";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React from "react";
import WaterMark from "@assets/images/watrmark.png"

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start px-4 py-12 md:py-20 lg:pt-40 mx-auto max-w-[1360px] gap-10 md:gap-20 relative">
      {/* Background Circle (hidden on mobile) */}
      {/* <div className="hidden md:block absolute left-[-428px] top-[-442px] w-[804px] h-[804px]">
      </div> */}
        {/* <div className="absolute inset-[15%_6%_5%_13%] bg-[rgba(212,240,208,0.3)] rounded-full"></div> */}

      {/* Title Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-16 relative">
       <Image src={WaterMark} alt="watermark" height={321} width={376} className="absolute h-[121px] w-[142px] lg:h-[321px] lg:w-[376px] lg:top-[-102px] left-2.5 " />
        <h2 className="text-[28px] md:text-[40px] leading-[1] md:leading-[60px] font-[Atyp] font-bold text-[#132D47] relative z-10">
          GET IN TOUCH
        </h2>
      </div>

      {/* Form Section */}
      <form className="w-full lg:w-1/2 space-y-6 md:space-y-10">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              placeholder="First Name"
              className="w-full text-base md:text-[18px] leading-[23px] font-duplet font-semibold bg-transparent outline-none"
            />
          </div>
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              placeholder="Last Name"
              className="w-full text-base md:text-[18px] leading-[23px] font-duplet font-semibold bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              placeholder="Email"
              className="w-full text-base md:text-[18px] leading-[23px] font-duplet font-semibold bg-transparent outline-none"
            />
          </div>
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              placeholder="Phone Number"
              className="w-full text-base md:text-[18px] leading-[23px] font-duplet font-semibold bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
          <textarea
            placeholder="Message"
            className="w-full h-24 md:h-32 text-base md:text-[18px] leading-[23px] font-duplet font-semibold bg-transparent outline-none resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="relative w-[214px] h-[56px]">
          <CustomButton
            mainWidth="210px"
            labelWidth="210px"
            labelWidthHover="170px"
            labelBackground="#81DE76"
            labelBackgroundHover="#81DE76"
            labelTextColor="#132D47"
            labelTextColorHover="#132D47"
            arrowFill="#132D47"
            arrowFillHover="#132D47"
            labelText="Send Message"
            labelBorderColor="#81DE76"
            iconPosition="0px"
            iconPositionHover="0px"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
