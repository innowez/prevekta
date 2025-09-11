"use client";

import React from "react";
import Case1 from "@/assets/images/case1.png";
import Case2 from "@/assets/images/case2.png";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";

const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
  >
    <path
      fill="#fff"
      d="M16.468.82 7.451.29c-.448-.004-.768.32-.787.712a.78.78 0 0 0 .712.788l7.344.43L1.044 15.897a.75.75 0 1 0 1.061 1.061L15.78 3.282l.431 7.343c.02.393.395.72.788.713.409-.008.732-.395.712-.788l-.53-9.017c-.075-.45-.319-.65-.713-.713"
    ></path>
  </svg>
);

function CaseStudies() {
  const caseList = [
    {
      heading: "Child Immunity Boost in a Pollution-Prone City",
      dis: "Growing up in polluted cities weakens immunity. Ayurveda offers simple remedies from herbs to diet, to keep children strong and resilient.",
      img: Case1,
    },
    {
      heading: "Healing Anxiety & Sleep Disorders Naturally",
      dis: "Growing up in polluted cities weakens immunity. Ayurveda offers simple remedies from herbs to diet, to keep children strong and resilient.",
      img: Case2,
    },
    {
      heading: "Managing Arthritis Without Painkillers",
      dis: "Growing up in polluted cities weakens immunity. Ayurveda offers simple remedies from herbs to diet, to keep children strong and resilient.",
      img: Case1,
    },
    {
      heading: "Reversing PCOS Through Lifestyle Correction",
      dis: "Growing up in polluted cities weakens immunity. Ayurveda offers simple remedies from herbs to diet, to keep children strong and resilient.",
      img: Case2,
    },
  ];
  return (
    <div className="px-4 pt-12 lg:px-10 ">
      <div className="flex items-end justify-between gap-24">
        <div className="lg:w-1/2">
          <p className="text-base lg:text-2xl text-primary font-semibold font-[Duplet] leading-5 lg:leading-[29px] mb-4 ">
            Case Studies
          </p>
          <h1 className="text-2xl lg:text-[40px] text-primary lg:leading-12 mb-6 ">
            Real stories, real <br />
            healing
          </h1>

          <div className="flex flex-col gap-2">
            {caseList.map((e, i) => (
              <div
                key={i + 1}
                className=" p-4 rounded-[20px]"
                style={{
                  backgroundColor: `rgba(19, 45, 71, ${1 - i * 0.2})`,
                }}
              >
                <div className="flex justify-between items-center gap-2.5 mb-4 lg:mb-0">
                  <h1 className="text-white text-base font-[Duplet] leading-5 ">
                    {e.heading}
                  </h1>
                  <span className={`${i !== 0 && "rotate-45"} `}>
                    <Arrow />
                  </span>
                </div>

                <div className="min-h-[256px] rounded-2xl relative w-full lg:hidden">
                  <Image
                    src={e.img}
                    alt={e.heading}
                    fill={true}
                    className="object-cover rounded-2xl absolute"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
                      backdropFilter: "blur(10px)",
                    }}
                  />
                  <div className="p-4 relative z-10 min-h-[256px] h-full flex flex-col justify-end gap-4">
                    <p className="text-white text-base font-[Duplet] ">
                      {e.dis}
                    </p>

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
            ))}
          </div>
        </div>

        <div className="min-h-[528px] w-[683px] rounded-2xl relative hidden lg:block">
          <Image
            src={caseList[0].img}
            alt={caseList[0].heading}
            fill={true}
            className="object-cover rounded-2xl absolute"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
              backdropFilter: "blur(10px)",
            }}
          />
          <div className="p-4 relative z-10 min-h-[528px] h-full flex flex-col justify-end gap-4">
            <p className="text-white text-lg font-[Duplet] ">
              {caseList[0].dis}
            </p>

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
    </div>
  );
}

export default CaseStudies;
