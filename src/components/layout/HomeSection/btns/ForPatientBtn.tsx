'use client';

import CustomButton from '@/components/ui/CustomButton';
import useMediaQuery from '@/hooks/useMediaquery';
import React from 'react'

function ForPatientBtn() {
      const isMobile = useMediaQuery('(max-width: 525px)');
  return (
          <CustomButton
        mainWidth={isMobile? "100%" : "190px"}
        labelWidth={isMobile? "100%" : "190px"}
        labelWidthHover={isMobile? "91%" : "155px"}
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
        // onClick={() => router.push("/patients")}
      />
  )
}

export default ForPatientBtn