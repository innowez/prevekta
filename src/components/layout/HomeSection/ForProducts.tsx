"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowRightThin from "@/assets/icons/ArrowRightThin";
import ProductBoxes from "@assets/images/ProductBoxes.jpg";
import Yuvrasa from "@assets/images/Yuvrasa.jpg";
import Juvinam from "@assets/images/Juvinam.jpg";
import Treenya from "@assets/images/Treenya.png";
import CustomButton from "@/components/ui/CustomButton";

const ForProducts = () => {
  const [activeProduct, setActiveProduct] = useState<number>(0);

  const products = [
    {
      id: 0,
      name: "TRIMANYA",
      description: "Classical formulations - authentic and GMP-certified.",
      bgColor: "rgba(19, 45, 71, 0.2)",
      image: ProductBoxes,
    },
    {
      id: 1,
      name: "YUVRASA",
      description:
        "Herbal personal care and cosmetic solutions, rooted in Ayurvedic skin science.",
      bgColor: "rgba(19, 45, 71, 0.1)",
      image: Yuvrasa,
      textAlign: "text-right",
    },
    {
      id: 2,
      name: "JUVINAM",
      description:
        "Nutraceutical blends fusing Ayurveda with evidence-based nutrition.",
      bgColor: "rgba(19, 45, 71, 0.2)",
      image: Juvinam,
    },
    {
      id: 3,
      name: "TREENYA",
      description:
        "Daily wellness from nature's finest organic food supplements.",
      bgColor: "rgba(19, 45, 71, 0.1)",
      image: Treenya,
      textAlign: "text-right",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-20 mx-auto max-w-[1360px] gap-[48px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end w-full gap-6">
        <div className="flex flex-col items-start gap-2.5 w-full md:w-auto">
          <h2 className="text-2xl md:text-[60px] md:leading-[72px] font-atyp font-bold text-[#132D47] text-left">
            FOR PRODUCT
          </h2>
          <p className="text-base md:text-[18px] leading-[23px] font-duplet font-normal text-[#132D47] text-left max-w-[610px]">
            At Prevekta, we provide an end-to-end Ayurvedic product suite—backed
            by tradition and tailored for today. Trusted by practitioners,
            designed for results
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto">
          <CustomButton
            mainWidth="290px"
            labelWidth="290px"
            labelWidthHover="240px"
            labelBackground="rgba(19,45,71,0.0)"
            labelBackgroundHover="#132D47"
            labelTextColor="#132D47"
            labelTextColorHover="#FFFF"
            arrowFill="#132D47"
            arrowFillHover="#FFFF"
            labelText="Explore Our Products"
            labelBorderColor="#132D47"
            iconPosition="0px"
            iconPositionHover="px"
          />
        </div>
        {/* <button className="relative w-[277px] h-[56px] border border-[#132D47] rounded-full hover:bg-[#132D47] hover:text-white transition-colors duration-300">
          <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[18px] leading-[23px] font-duplet font-normal uppercase">
            Explore Our Products
          </span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[56px] h-[56px] rounded-full flex justify-center items-center hover:bg-[#81DE76] transition-colors duration-300">
            <div className="w-[22.5px] h-[15px] relative">
              <div className="absolute top-1/2 left-1/2 w-[40%] h-[20%] bg-[#132D47] transform -translate-x-1/2 -translate-y-1/2 hover:bg-white"></div>
            </div>
          </div>
        </button> */}
      </div>

      {/* Products Section */}
      <div className="flex flex-col w-full gap-4 md:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-[28px] transition-all duration-500 ${
              activeProduct === product.id
                ? "h-[280px] md:h-[480px]"
                : "h-[140px] md:h-[165px]"
            }`}
            style={{ backgroundColor: product.bgColor }}
            onMouseEnter={() => setActiveProduct(product.id)}
            onMouseLeave={() => setActiveProduct(0)}
          >
            {/* Product Image Container - Properly contained */}
            <div
              className={`absolute transition-all duration-700 ${
                activeProduct === product.id
                  ? "top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 bottom-[80px] md:bottom-[100px] opacity-100"
                  : "top-full opacity-0"
              }`}
            >
              <div className="w-full h-full rounded-[12px] md:rounded-[16px] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width={1312}
                  height={390}
                />
              </div>
            </div>

            {/* Product Info - Fixed positioning to prevent overlap */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-transparent via-transparent to-transparent">
              <div
                className={`flex items-end gap-3 md:gap-4 ${
                  product.textAlign === "text-right"
                    ? "flex-row-reverse"
                    : "flex-row"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`flex-1 w-fit ${
                    product.textAlign === "text-right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  <h3 className="text-[18px] md:text-[32px] font-bold uppercase text-[#132D47] font-atyp leading-tight md:leading-[38px] mb-1 md:mb-2">
                    {product.name}
                  </h3>
                  <h3 className="text-[12px] md:text-[18px] font-normal text-[#132D47] font-duplet leading-tight md:leading-[23px] w-full">
                    {product.description}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="flex-shrink-0 w-8 h-8 md:w-[56px] md:h-[56px] bg-[#132D47] rounded-full flex items-center justify-center">
                  <ArrowRightThin
                    fill="#ffffff"
                    width={12}
                    height={10}
                    className="md:w-6 md:h-5"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForProducts;
