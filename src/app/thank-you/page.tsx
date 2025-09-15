"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";
import { useRouter } from "next/navigation";
import WaterMark from "@assets/images/watrmark.png";
import LogoImage from "@assets/images/PrevektaLogo.png";

function ThankYouPage() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  const handleContactClick = () => {
    router.push("/#contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fffe] to-[#e8f5e8] flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Image
            src={WaterMark}
            alt="Background watermark"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src={LogoImage}
              alt="Prevekta Logo"
              width={120}
              height={40}
              className="mx-auto"
            />
          </div>

          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto bg-[#81DE76] rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#132D47]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-[Atyp] font-bold text-[#132D47] mb-6 leading-tight">
            THANK YOU!
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-[Duplet] font-semibold text-[#132D47] mb-8 opacity-80">
            Your message has been received
          </h2>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-base md:text-lg font-[Duplet] text-[#132D47] leading-relaxed mb-4">
              We appreciate you reaching out to us. Our team will review your message and get back to you within 24-48 hours.
            </p>
            <p className="text-base md:text-lg font-[Duplet] text-[#132D47] leading-relaxed">
              In the meantime, feel free to explore our platform and learn more about how Prevekta is revolutionizing Ayurvedic healthcare.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative">
              <CustomButton
                mainWidth="200px"
                labelWidth="200px"
                labelWidthHover="160px"
                labelBackground="#81DE76"
                labelBackgroundHover="#132D47"
                labelTextColor="#132D47"
                labelTextColorHover="#FFFFFF"
                arrowFill="#132D47"
                arrowFillHover="#FFFFFF"
                labelText="Back to Home"
                labelBorderColor="#81DE76"
                iconPosition="0px"
                iconPositionHover="0px"
                onClick={handleHomeClick}
              />
            </div>
            {/* <div className="relative">
              <CustomButton
                mainWidth="220px"
                labelWidth="220px"
                labelWidthHover="180px"
                labelBackground="transparent"
                labelBackgroundHover="#81DE76"
                labelTextColor="#132D47"
                labelTextColorHover="#132D47"
                arrowFill="#132D47"
                arrowFillHover="#132D47"
                labelText="Contact Us Again"
                labelBorderColor="#132D47"
                iconPosition="0px"
                iconPositionHover="0px"
                onClick={handleContactClick}
              />
            </div> */}
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-8 border-t border-[#132D47]/10">
            <p className="text-sm md:text-base font-[Duplet] text-[#132D47]/60">
              Need immediate assistance? Call us at{" "}
              <span className="font-semibold text-[#132D47]">+91 99620 62060</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;