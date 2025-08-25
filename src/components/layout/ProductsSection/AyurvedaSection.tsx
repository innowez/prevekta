import React, { useState } from "react";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton"; // Adjust path as needed
import ArrowRightThin from "@/assets/icons/ArrowRightThin"; // Adjust path as needed
import ProductImageOne from "@/assets/images/ProductImageOne.jpg"; // Adjust path as needed
import ProductImageTwo from "@/assets/images/ProductImageTwo.jpg"; // Adjust path as needed
import ProductImageThree from "@/assets/images/ProductImageThree.jpg"; // Adjust path as needed
import ProductImageFour from "@/assets/images/ProductImageFour.jpg"; // Adjust path as needed
import useMediaQuery from "@/hooks/useMediaquery";

const AyurvedaSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const isMobile = useMediaQuery('(max-width: 768px)');

  const subsections = [
    {
      heading: "Yuvrasa",
      subtitle: "The Essence of Timeless Beauty",
      description:
        (<>Yuvarasa is where age-old Ayurvedic beauty rituals meet modern skincare needs. Derived from {"Yuva"} (youth) and {"Rasa"} (essence), our formulations are crafted to restore your {"skin's"} natural glow, balance, and vitality. Each product is powered by potent botanicals and classical Ayurvedic principles that support deep nourishment, cellular renewal, and lasting radiance. <br /> <br /> Discover the secret to timeless beauty — naturally, through Yuvarasa.</>),
      buttonText: "Glow Naturally",
      imageUrl: ProductImageOne,
    },
    {
      heading: "Trimanya",
      subtitle: "The Legacy of Classical Ayurveda",
      description:
       (<>Trimanya pays homage to the classical wisdom of Ayurveda. Rooted in the triad of ancient Ayurvedic scriptures, our formulations remain true to tradition. Each preparation is made using time-honored methods, authentic herbs, and strict classical protocols — offering powerful, trusted solutions for chronic and lifestyle disorders.<br /> <br />Trust Trimanya for authentic healing, backed by the sanctity of classical Ayurveda.</>),
      buttonText: "Explore Classics",
      imageUrl: ProductImageTwo,
    },
    {
      heading: "Treenya",
      subtitle: "Wholesome Nourishment, Naturally",
      description:
        "Treenya brings together the purity of nature into everyday food. Derived from “Tree” (nature) and a nurturing suffix that evokes care, Treenya offers organic, natural grains and condiments that blend healthily into modern lifestyles. Experience the gentle power of food as medicine — with Treenya.",
      buttonText: "Explore Treenya",
      imageUrl: ProductImageThree,
    },
    {
      heading: "Juvinam",
      subtitle: "Ayurvedic Nutraceuticals for Vital Life",
      description:
        (<>Juvinam is designed for those who seek to nourish the body from within. Inspired by the words Neo Rejuvanate, our nutraceutical range combines traditional Ayurvedic herbs with modern scientific validation. From immunity and digestion to vitality and hormonal balance, Juvinam offers targeted, safe, and effective support for everyday health and disease prevention. <br /> <br />Empower your body with the intelligence of nature — through Juvinam.</>),
      buttonText: "Browse Supplements",
      imageUrl: ProductImageFour,
    },
  ];
// 
  return (
    <div className="flex flex-col items-start gap-6 md:gap-[1px] w-full max-w-[1360px] mx-auto py-10 px-4 ">
      {subsections.map((section, index) => (
        <div
          key={index}
          className="w-full border-b border-[#132D47] bg-[#132D47] md:bg-[#f2fcf1] hover:bg-[#132D47] rounded-3xl md:rounded-[48px] box-border mb-[-1px] hover:text-white flex flex-col items-center py-6 md:py-10 transition-all duration-300"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Heading */}
          <h2
            className="text-[28px] md:text-[60px] font-[Atyp] font-light md:leading-[72px] text-[#132D47] text-center mb-0 md:mb-0 md:relative md:top-7"
            style={{
              width: `${section.heading.length * 30}px`,
              color: (hoveredIndex=== index || isMobile ) ? "white" : "#132D47",
            }}
          >
            {section.heading}
          </h2>

          {/* Content (Image, Subtitle, Description, Button) */}
          <div
            className={`w-full flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8 px-4 md:px-10 transition-all duration-300 ${
             (hoveredIndex === index) || isMobile 
                ? "opacity-100 min-h-[550px] md:min-h-[300px] visible"
                : "opacity-0 max-h-0 invisible overflow-hidden"
            }`}
          >
            <div >
              <div className="mb-4">
                <h3 className="text-base md:text-[24px] font-['Atyp'] font-light leading-[29px] text-white text-center md:text-left">
                  {section.subtitle}
                </h3>
              </div>
              {/* Image */}
              <Image
                src={section.imageUrl}
                alt={`${section.heading} Image`}
                width={840}
                height={240}
                className="rounded-[20px] object-cover md:object-cover w-[329px] h-[250px] md:w-[840px] md:h-[240px]"
              />
            </div>

            {/* Subtitle, Description, Button */}
            <div className="w-full md:w-[404px] flex flex-col justify-between gap-8">
              <p className="text-base md:text-[18px] font-[Duplet] font-normal md:leading-[23px] text-white">
                {section.description}
              </p>
              <CustomButton
                mainWidth="269px"
                labelWidth="269px"
                labelWidthHover="220px"
                labelBackground="#81DE76"
                labelBackgroundHover="#6BCB62"
                labelBorderColor="#81DE76"
                labelTextColor="#132D47"
                labelTextColorHover="#132D47"
                arrowFill="#132D47"
                arrowFillHover="#132D47"
                labelText={section.buttonText}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AyurvedaSection;
