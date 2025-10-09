"use client";

import CustomButton from "@/components/ui/CustomButton";
import useMediaQuery from "@/hooks/useMediaquery";
import React from "react";

function SendReqBtn({ btntype }: {btntype: "active" | "passive"}) {
  const isMobile = useMediaQuery("(max-width: 525px)");
  return (
    <CustomButton
      mainWidth={isMobile ? "175px" : "210px"}
      labelWidth={isMobile ? "135px" : "210px"}
      labelWidthHover={isMobile ? "139px" : "180px"}
      labelBackground={btntype === "active" ? "#81DE76" : ""}
      labelBackgroundHover={btntype === "active" ? "#81DE76" : "#132D47"}
      labelTextColor="#132D47"
      labelTextColorHover="#FFFF"
      arrowFill="#132D47"
      arrowFillHover="#FFFF"
      labelText="Learn More"
      labelBorderColor="#fff"
      iconPosition="0px"
      iconPositionHover="px"
    />
  );
}

export default SendReqBtn;
