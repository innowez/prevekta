"use client";

import CustomButton from "@/components/ui/CustomButton";
import useMediaQuery from "@/hooks/useMediaquery";
import React from "react";

function HoldHandBtn({ btntype, text }: {btntype: "active" | "passive", text?: string}) {
  const isMobile = useMediaQuery("(max-width: 525px)");
  return (
    <CustomButton
      mainWidth={isMobile ? "175px" : "250px"}
      labelWidth={isMobile ? "135px" : "250px"}
      labelWidthHover={isMobile ? "139px" : "220px"}
      labelBackground={btntype === "active" ? "#81DE76" : "#132D47"}
      labelBackgroundHover={btntype === "active" ? "#81DE76" : "#132D47"}
      labelTextColor={"#132D47"}
      labelTextColorHover={"#132D47"}
      arrowFill={btntype !== "active" ? "#fff" : "#132D47"}
      arrowFillHover={"#132D47"}
      labelText={ text ? text : "Send Request" }
      labelBorderColor="#81DE76"
      iconPosition="0px"
      iconPositionHover="px"
    />
  );
}

export default HoldHandBtn;
