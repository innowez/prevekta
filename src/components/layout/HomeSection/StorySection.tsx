"use client";
import CustomButton from "@/components/ui/CustomButton";
import React from "react";

interface StorySectionProps {
  // title: string;
  content: string;
  background: string;
}

const StorySection: React.FC<StorySectionProps> = ({ content, background }) => {
  return (
    <section
      className="relative px-6 h-[600px] w-full bg-cover bg-center"
      style={{
        backgroundImage: `radial-gradient(50% 50% at 50% 50%, rgba(19, 45, 71, 0) 0%, rgba(19, 45, 71, 0.3) 100%), url(${background})`,
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[rgba(19,45,71,0.3)] backdrop-blur-sm"></div> */}

      {/* Bottom Content */}
      <div className="absolute bottom-8 left-0  right-0 flex flex-col lg:flex-row justify-between items-start lg:items-end px-6 md:px-12 gap-6 z-10">
        {/* Text Card */}
        <div className=" rounded-2xl p-6 md:p-5 w-full md:w-[550px] bg-[rgba(19,45,71,0.3)] backdrop-blur-sm">


          <h2 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight font-[Atyp]">
            One Platform. Boundless <br />Possibilities in Ayurveda.
          </h2>
          <p className="text-white text-[16px] md:text-xl leading-snug mt-4 font-[Duplet]">
            {content}
          </p>
        </div>

        {/* Button */}
        <div className="">
           <CustomButton
              mainWidth="320px"
              labelWidth="320px"
              labelWidthHover="280px"
              labelBackground="rgba(19,45,71,0.0)"
              labelBackgroundHover="#132D47"
              labelTextColor="#FFFF"
              labelTextColorHover="#FFFF"
              arrowFill="#FFFF"
              arrowFillHover="#FFFF"
              labelText="Book Your Consultation"
              labelBorderColor="#FFFF"
              iconPosition="0px"
              iconPositionHover="px"
            />
          
        </div>
      </div>
    </section>
  );
};

export default StorySection;
