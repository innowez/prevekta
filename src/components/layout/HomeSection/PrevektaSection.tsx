"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "@assets/icons/Logo";
import ArrowRightThin from "@/assets/icons/ArrowRightThin";
import PatientImage from "@assets/images/PatientImage.jpg";
import PhysicianImage from "@assets/images/PhysicianImage.jpg";
import ProductImage from "@assets/images/ProductImage.jpg";
import YogaImage from "@assets/images/YogaImage.jpg";
import PrevektaLogo from "@assets/images/PrevektaLogo.png";
import useMediaQuery from "@/hooks/useMediaquery";

const PrevektaSection = () => {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width: 1028px)');

  const tabs = [
    {
      id: 0,
      title: "Patient",
      description:
        "Get expert Ayurvedic care from trusted doctors, all in one place.",
      chips: [
        "Customized wellness plans",
        "Multiple Locations",
        "Multiple experts",
      ],
      image: PatientImage,
    },
    {
      id: 1,
      title: "Physician",
      description:
        "Grow your practice and career with Prevekta's support and network.",
      chips: ["Mentorship", "Publish & Share Insights", "Learning Modules"],
      image: PhysicianImage,
    },
    {
      id: 2,
      title: "Product",
      description:
        "Shop authentic Ayurvedic products for daily wellness and healing.",
      chips: [
        "Clinically Tested",
        "Rooted in Classical Ayurveda",
        "Natural Ingredients",
      ],
      image: ProductImage,
    },
    {
      id: 3,
      title: "Public",
      description:
        "Learn and live Ayurveda through simple, useful health knowledge.",
      chips: ["Daily Wellness", "Ancient Wisdom", "Simple Rituals for Balance"],
      image: YogaImage,
    },
  ];

  const handleTabHover = (id: number) => {
    setActiveTab(id);
  };

  const handleTabLeave = () => {
    setActiveTab(null);
  };

  const gotoelement = (name:string) => {
    const element = document.getElementById(name);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="max-w-[1360px] mx-auto px-8 py-12 md:py-24">
      {/* Header */}
      <div className="flex justify-between items-center gap-8 mb-0">
        <h1 className="text-2xl md:text-5xl lg:text-[60px] font-bold text-primary-dark font-atyp" >
          PREVEKTA FOR
        </h1>
        <div className="">
          <Image
            src={PrevektaLogo}
            alt="Prevekta Logo"
            width={50}
            height={50}
            className="w-[29px] h-[29px] md:w-[50px] md:h-[50px]"
          />
          {/* <Logo className="opacity-30 text-primary-light w-[70px] h-[70px]" /> */}
        </div>
      </div>

      {/* Content */}
      <div className="py-4 mt-4 flex flex-col md:flex-row gap-12">
        {/* Image Panel */}
        <div className="hidden lg:block w-full md:w-1/2 relative h-[638px] rounded-3xl overflow-hidden">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`absolute inset-0 transition-all duration-500 ${
                activeTab === tab.id || activeTab === null
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }`}
            >
              {activeTab === null ? (
                // Show default PatientImage only once (not per tab)
                tab.id === tabs[0].id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={PatientImage}
                      alt="PatientImage"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                )
              ) : (
                <Image
                  src={tab.image}
                  alt={tab.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
              )}
            </div>
          ))}
        </div>
        {/* Accordion */}
        <div className="w-full lg:w-1/2">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`border-b border-primary-dark py-5 md:py-12 transition-all duration-300 ${
                activeTab === tab.id ? "active" : ""
              }`}
              onMouseEnter={() => handleTabHover(tab.id)}
              onMouseLeave={handleTabLeave}
            >
              <div className="flex items-start gap-3.5 w-full">
                <div className="relative rounded-xl block md:hidden h-[96px] w-[96px] overflow-hidden">
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-between items-center cursor-pointer w-8/12 md:w-full">
                  <h2 className="text-base md:text-[32px] font-bold uppercase text-primary-dark font-[Atyp]" onClick={() => gotoelement(tab.title)}>
                    {tab.title}
                  </h2>
                  <div
                    className={`transform ${
                      activeTab === tab.id ? "-rotate-45" : "rotate-0"
                    } transition-transform duration-300`}
                  >
                    <ArrowRightThin className="text-primary-dark" />
                  </div>
                </div>
              </div>

              {(activeTab === tab.id || isMobile) && (
                <div className="mt-4 transition-all duration-300">
                  <p className="text-lg text-primary-dark font-[Duplet] mb-6">
                    {tab.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tab.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-0.5 border border-primary-dark rounded-full text-primary-dark font-[Duplet] text-base whitespace-nowrap"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrevektaSection;
