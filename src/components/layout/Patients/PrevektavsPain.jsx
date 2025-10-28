"use client";

import Image from "next/image";
import React from "react";
import LogoLeft from "@assets/images/pvprightlogo.png";
import LogoRight from "@assets/images/pvpleftlogo.png";
import CustomButton from "@/components/ui/CustomButton";
import MapVisualization from "@/components/ui/BodyVisualization";
import Link from "next/link";

function PrevektavsPain() {
  return (
    <div className="mt-12 lg:mt-32 ">
      <h1 className="text-primary text-[28px] lg:text-6xl leading-8 text-center mb-6 lg:mb-12 ">
        Prevekta vs Pain
      </h1>
      <div className="px-4 min-h-[659px] lg:min-h-[654px] relative">
        <Image
          alt="uyu"
          src={LogoRight}
          height={454}
          className=" absolute right-0 -top-1 lg:-top-56 h-[282px] lg:h-[454px] object-contain object-right "
        />
        <Image
          alt="ttgv"
          src={LogoLeft}
          height={354}
          className=" absolute bottom-0 left-0 h-[282px] lg:h-[354px] object-contain object-left"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20"
          style={{
            background: "#81DE76",
            filter: "blur(200px)",
          }}
        ></div>

        <MapVisualization />

        <div
          className="my-3 border border-[#132D471A] rounded-[20px] backdrop-blur-[1px] p-4 lg:h-fit lg:max-w-[389px] lg:absolute md:bottom-16 lg:top-1/2 lg:-translate-y-1/2 lg:left-28 "
        >
          <p className="text-primary text-base leading-5 font-[Duplet]">
            Pain is one of the most commonly ignored, self-managed, or
            mistreated conditions in today’s world. At Prevekta, pain isn’t just
            a symptom it’s a message. Our specialized Prevekta vs Pain segment
            focuses on identifying the root cause of chronic and
            lifestyle-related pain and treating it with classical Ayurvedic
            interventions like Panchakarma, Marma therapy, Yoga, and Herbal
            formulations.
          </p>
        </div>

        <div className="relative lg:absolute w-[218px] h-[56px] left-1/2 -translate-x-1/2 bottom-0 lg:left-auto lg:bottom-20 lg:right-6">
        <Link href={"/prevekta-vs-pain"}>
          <CustomButton
            mainWidth="216px"
            labelWidth="216px"
            labelWidthHover="170px"
            labelBackground="#81DE76"
            labelBackgroundHover="#81DE76"
            labelTextColor="#132D47"
            labelTextColorHover="#132D47"
            arrowFill="#132D47"
            arrowFillHover="#132D47"
            labelText="Prevekta v/s pain"
            labelBorderColor="#81DE76"
            iconPosition="0px"
            iconPositionHover="0px"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrevektavsPain;
