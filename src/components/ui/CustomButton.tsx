"use client";
import React, { useEffect, useState } from "react";
import ArrowRightThin from "@/assets/icons/ArrowRightThin";
import useMediaQuery from "@/hooks/useMediaquery";

// Define the interface for the component props
interface CustomButtonProps {
  mainWidth?: string;
  labelWidth?: string;
  labelWidthHover?: string;
  labelBackground?: string;
  labelBackgroundHover?: string;
  labelBorderColor?: string;
  labelTextColor?: string;
  labelTextColorHover?: string;
  arrowFill?: string;
  arrowFillHover?: string;
  labelText?: string;
  iconPosition?: string;
  iconPositionHover?: string;
  // isHoveredProp?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  mainWidth = "120px",
  labelWidth = "120px",
  labelWidthHover = "70px",
  labelBackground = "#81DE76",
  labelBackgroundHover = "#6BCB62",
  labelBorderColor = "#81DE76",
  labelTextColor = "#132D47",
  labelTextColorHover = "#132D47",
  arrowFill = "#132D47",
  arrowFillHover = "#132D47",
  labelText = "Shop",
  iconPosition = "0px",
  iconPositionHover = "0px",
  onClick= () => {},
  // isHoveredProp = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1028px)");
  useEffect(() => {
    if (isMobile) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  }, [isMobile]);

  return (
    <div
      className="relative h-12 md:h-[57.5px] group overflow-hidden transition-all duration-300 ease-in-out cursor-pointer"
      style={{ width: mainWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className="px-3 absolute h-12 md:h-[57.5px] whitespace-nowrap flex items-center rounded-full text-base text-center md:text-[18px] leading-[23px] uppercase font-[Duplet] transition-all duration-300 ease-in-out"
        style={{
          width: isHovered ? labelWidthHover : labelWidth,
          backgroundColor: isHovered ? labelBackgroundHover : labelBackground,
          borderColor: labelBorderColor,
          borderWidth: isHovered ? "0px" : "1px",
          borderStyle: "solid",
          color: isHovered ? labelTextColorHover : labelTextColor,
        }}
      >
        {labelText}
      </div>

      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2  h-12 w-[48px] md:w-[55px] md:h-[56px] flex justify-center items-center rounded-full transition-transform duration-300"
        style={{
          backgroundColor: isHovered ? labelBackgroundHover : labelBackground,
          borderRightWidth: isHovered ? "0px" : "1px",
          borderRightColor: labelBorderColor,
          borderRight: isHovered ? "0px" : "1px",
          right: isHovered ? iconPositionHover : iconPosition,
        }}
      >
        <div
          className={`w-[22.5px] h-[15px] relative transition-transform duration-300 ${
            isHovered ? "-rotate-45 transition-transform duration-75" : ""
          }`}
        >
          <div className="absolute">
            <ArrowRightThin fill={isHovered ? arrowFillHover : arrowFill} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomButton;
