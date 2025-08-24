"use client";
import React from 'react';
import Image from 'next/image';
import PhysiciansImage from '@assets/images/vsvsv.png'
import PhysiciansImageMobile from '@assets/images/physicianImgMobile.png'
import Grop from '@assets/images/Group.png'
import Grow from '@assets/images/Grow.png'
import Brand from '@assets/images/Brand.png'
import Focus from '@assets/images/Focus.png'
import CustomButton from '@/components/ui/CustomButton';

const ForPhysicians = () => {
  return (
    <div className="flex flex-col items-start px-4 py-20 mx-auto max-w-[1360px] gap-[40px]">
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center w-full gap-4">
        <h2 className="text-2xl md:text-[60px] md:leading-[72px] font-atyp font-bold text-[#132D47]">
          FOR PHYSICIANS
        </h2>

        <button className='md:hidden flex items-center justify-center rounded-full bg-[#81DE76] w-12 h-12'>
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="16"
    fill="none"
    viewBox="0 0 24 16"
  >
    <path
      fill="#132D47"
      d="M23.065 7.497 17.064.745c-.314-.319-.77-.316-1.061-.052a.78.78 0 0 0-.053 1.06l4.888 5.498H1.498a.75.75 0 1 0 0 1.5h19.34l-4.888 5.497c-.264.292-.23.788.053 1.06.294.285.797.24 1.06-.052l6.002-6.751c.265-.37.233-.685 0-1.008"
    ></path>
  </svg>
        </button>
        {/* Button */}
       <div className='absolute right-16 hidden md:block'>
        <CustomButton
        mainWidth="270px"
        labelWidth="270px"
        labelWidthHover="220px"
        labelBackground="#81DE76"
        labelBackgroundHover="#81DE76"
        labelTextColor="#132D47"
        labelTextColorHover="#132D47"
        arrowFill="#132D47"
        arrowFillHover="#132D47"
        labelText="Hold Hands with us"
        labelBorderColor="#81DE76"
        iconPosition="0px"
        iconPositionHover="px"
      />
       </div>
        {/* <button className="relative w-[269px] h-[56px] bg-[#81DE76] border border-[#81DE76] rounded-full hover:bg-[#6bcb60] transition-colors duration-300">
          <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[18px] leading-[23px] font-duplet font-normal uppercase text-[#132D47]">
            Hold Hands with us
          </span>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[56px] h-[56px] rounded-full flex justify-center items-center hover:bg-[#132D47] transition-colors duration-300">
            <div className="w-[22.5px] h-[15px] relative">
              <div className="absolute top-1/2 left-1/2 w-[40%] h-[20%] bg-[#132D47] transform -translate-x-1/2 -translate-y-1/2 hover:bg-white"></div>
            </div>
          </div>
        </button> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full gap-[16px]">
        {/* Image Section */}
        <div className="relative w-full h-[623px] rounded-3xl md:rounded-[48px] overflow-hidden">
          {/* Main Image */}
          {/* <img
            src={PhysiciansImage.src}
            alt="Physicians"
            className="w-full h-full object-cover"
          /> */}
          <Image 
             src={PhysiciansImage.src}
            alt="Physicians"
            className="w-full h-full object-cover hidden"
            fill
            // height={459}
            // width={361}
          />
          <Image 
          src={PhysiciansImageMobile.src}
          alt='ph'
          className='w-full h-full object-cover '
          // fill
          height={459}
            width={361}
          />
          {/* Overlay Text Box */}
          <div className="absolute left-1/2 -translate-x-1/2 min-w-[335px] md:left-10 bottom-2 md:w-[505px] p-4 mb:p-8 bg-[rgba(129,222,118,0.7)] rounded-[32px] ">
            <p className="text-[18px] leading-[23px] font-duplet font-light text-justify text-white">
              At Prevekta, you focus on treating patients we take care of the rest. From branding and patient flow to mentorship and growth, we support you at every step. Work with experienced Vaidyas, learn, collaborate, and grow your knowledge. Already running your own clinic? Strengthen it with our tools advanced technology, access to quality products, better patient management, and co-branding to help you stand out.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Feature 1 - Get Mentorship */}
          <div className="flex flex-row items-center justify-center p-4 bg-[#E6F8E4] rounded-[48px] gap-4  md:h-[180px]">
            <div className="relative w-[40px] h-[40px] flex justify-center items-center">
              {/* Mentorship Icon */}
              <Image
                src={Grop}
                alt="Grop"
                className="w-[25px] h-[25px] md:w-full md:h-full object-Contain"
                quality={100}
                height={25}
                width={25}
              />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-duplet font-semibold text-center text-[#132D47]">
              Get Mentorship
            </p>
          </div>

          {/* Feature 2 - Grow Your Network */}
          <div className="flex flex-row items-center justify-center p-4 bg-[#E6F8E4] rounded-[48px] gap-4 md:h-[180px]">
            <div className="relative w-[40px] h-[25px] flex items-center justify-center">
              {/* Network Icon */}
              <Image
                src={Grow}
                alt="Grow"
                className="w-[26px] h-[16px] md:w-full md:h-full object-Contain"
                quality={100}
                width={26}
                height={16}
              />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-duplet font-semibold text-center text-[#132D47]">
              Grow Your Network
            </p>
          </div>

          {/* Feature 3 - Co-Branding Support */}
          <div className="flex flex-row items-center justify-center p-6 bg-[#E6F8E4] rounded-[48px] gap-4  md:h-[180px]">
            <div className="relative w-[35px] h-[35px] flex items-center justify-center">
              {/* Branding Icon */}
              <Image
                src={Brand}
                alt="Brand"
                className="h-[22px] w-[22px] md:w-full md:h-full object-Contain"
                quality={100}
                height={22}
                width={22}
              />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-duplet font-semibold text-center text-[#132D47]">
              Co-Branding Support
            </p>
          </div>

          {/* Feature 4 - Focus on Healing Patients */}
          <div className="flex flex-row items-center justify-center p-6 bg-[#E6F8E4] rounded-[48px] gap-4 h-[72px] md:h-[180px]">
            <div className="relative w-[40px] h-[35px] flex justify-center items-center">
              {/* Healing Icon */}
              <Image
                src={Focus}
                alt="Focus"
                className="w-[25px] h-[21px] md:w-full md:h-full object-Contain"
                quality={100}
                width={25}
                height={21}
              />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-duplet font-semibold text-center text-[#132D47]">
              Focus on Healing Patients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPhysicians;