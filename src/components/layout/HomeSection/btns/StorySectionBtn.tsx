'use client'

import CustomButton from '@/components/ui/CustomButton'
import useMediaQuery from '@/hooks/useMediaquery';
import React from 'react'

function StorySectionBtn() {
      const isMobile = useMediaQuery('(max-width: 525px)');
  return (
        <CustomButton
            mainWidth={isMobile ? "100%" : "320px"}
            labelWidth={isMobile ? "100%" : "320px"}
            labelWidthHover={isMobile ? "91%" : "280px"}
            labelBackground="rgba(19,45,71,0.0)"
            labelBackgroundHover="#132D47"
            labelTextColor="#FFFF"
            labelTextColorHover="#FFFF"
            arrowFill="#FFFF"
            arrowFillHover="#FFFF"
            labelText="Book Your Consultation"
            labelBorderColor="#FFFF"
            iconPosition="0px"
            iconPositionHover="px"
        />
  )
}

export default StorySectionBtn