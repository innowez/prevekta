'use client'

import CustomButton from '@/components/ui/CustomButton';
import useMediaQuery from '@/hooks/useMediaquery';
import React from 'react'

function ForPublicBtn() {
    const isMobile = useMediaQuery('(max-width: 720px)');
  return (
    <CustomButton
            mainWidth={isMobile ? "175px" : "210px"}
            labelWidth={isMobile ? "135px" : "210px"}
            labelWidthHover={isMobile ? "139px" : "180px"}
            labelBackground="rgba(19,45,71,0.0)"
            labelBackgroundHover="#132D47"
            labelTextColor="#132D47"
            labelTextColorHover="#FFFF"
            arrowFill="#132D47"
            arrowFillHover="#FFFF"
            labelText="Explore More"
            labelBorderColor="#132D47"
            iconPosition="0px"
            iconPositionHover="px"
          />
  )
}

export default ForPublicBtn