import React, { useState, useEffect } from "react";
import Image from "next/image";
import LeftSideHalfrLogo from "@assets/images/LeftSideHalfLogo.png";
import RightSideHalfLogo from "@assets/images/RightSideHalfLogo.png";
import SliderImageOne from "@assets/images/SliderImageOne.jpg";
import SliderImageTwo from "@assets/images/SliderImageTwo.png";
import SliderImageThree from "@assets/images/SliderImageThree.png";
import SliderImageFour from "@assets/images/SliderImageFour.png";
import SliderImageFive from "@assets/images/SliderImageFive.jpg";

const AyurvedaPlatform: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageCards = [
    {
      id: 1,
      title: "Patients guided through authentic, personalized healing",
      image: SliderImageOne,
      rotation: 0,
    },
    {
      id: 2,
      title: "Clinics that collaborate, not compete",
      image: SliderImageTwo,
      rotation: 8,
    },
    {
      id: 3,
      title: "Medicine manufacturers finding space in a unified market",
      image: SliderImageThree,
      rotation: -8,
    },
    {
      id: 4,
      title: "Therapies revived with classical herbs and modern integrity",
      image: SliderImageFour,
      rotation: 6,
    },
    {
      id: 5,
      title: "Doctors who share protocols and success stories",
      image: SliderImageFive,
      rotation: 0,
    },
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCards.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [imageCards.length]);

  return (
    <section className="w-full bg-[#132D47] py-6 md:py-16 px-4 md:px-8 relative md:min-h-[873px] flex flex-col items-center justify-center overflow-hidden">
      {/* Background logo elements */}
      <div className="absolute left-[3.5%] bottom-[62%]  w-96 h-96  transform  -translate-x-1/2 translate-y-1/2">
        <Image
          src={LeftSideHalfrLogo}
          alt="Left Side Half Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="absolute right-[6%] -bottom-[12.4%] w-40 h-40  transform translate-x-1/2 -translate-y-1/2">
        <Image
          src={RightSideHalfLogo}
          alt="Left Side Half Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Header section */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-5 md:gap-10 mb-8 md:mb-16 relative z-10">
        <h2 className="text-[20px] md:text-5xl lg:text-[60px] md:leading-[48px] lg:leading-[72px] font-bold text-white font-['Atyp'] flex-1">
          A Platform Where <br className="hidden lg:block" /> Ayurveda Reconnects
        </h2>

        <p className="text-base md:text-[18px] md:leading-[23px] text-white font-[Duplet] flex-1 max-w-[371px]">
          From individual care to community awareness, from traditional
          therapies to modern formats, we are building a collaborative ecosystem
        </p>
      </div>

      {/* Image carousel section - All images visible simultaneously */}
      <div className="relative w-full max-w-4xl h-[385px] flex items-center justify-center mb-8 md:mb-16">
        {imageCards.map((card, index) => (
          <div
            key={card.id}
            className={`absolute w-full max-w-[814px] h-[357px] transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "z-30 opacity-100 scale-100"
                : "z-10 opacity-70 scale-95"
            }`}
            style={{
              transform: `rotate(${
                index === currentImageIndex ? 0 : card.rotation
              }deg)`,
            }}
          >
            <div
              className="w-full h-full rounded-[28px] overflow-hidden flex items-center justify-center p-8"
              style={{
                background: `linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${card.image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3
                className={`text-2xl md:text-[32px] leading-[38px] font-bold text-white text-center uppercase font-['Atyp'] max-w-[750px] transition-all duration-500 ${
                  index === currentImageIndex
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-4"
                }`}
              >
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Footer section */}
      <div className="text-center max-w-2xl relative z-10">
        <h3 className="text-basic md:text-[32px] md:leading-[38px] font-bold text-white uppercase font-['Atyp'] mb-2">
          All under one vision
        </h3>
        <h3 className="text-basic md:text-[32px] md:leading-[38px] font-bold text-white uppercase font-['Atyp']">
          Prevekta: Prevail Ekta in Ayurveda.
        </h3>
      </div>

      {/* Navigation dots */}
      {/* <div className="flex gap-3 mt-8 relative z-10">
        {imageCards.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/40'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div> */}
    </section>
  );
};

export default AyurvedaPlatform;
