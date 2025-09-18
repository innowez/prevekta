'use client'

import CustomButton from '@/components/ui/CustomButton'
import useMediaQuery from '@/hooks/useMediaquery';
import React from 'react'

function AyruvedaSectionBtn() {
    const isMobile = useMediaQuery('(max-width: 720px)');
  return (
                      <CustomButton
                    mainWidth={isMobile? "172px" : "190px"}
                    labelWidth={isMobile? "172px" : "190px"}
                    labelWidthHover={isMobile? "137px" : "155px"}
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

export default AyruvedaSectionBtn