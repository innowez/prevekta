"use client";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React, { useState } from "react";
import WaterMark from "@assets/images/watrmark.png";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const scriptURL = "https://script.google.com/macros/s/AKfycbydA740ttqxCgeFRUunzKOYlC4IJToqYBGvzqaZXQfYWMUyFqDyvWNtIN5AWcs6lx5V/exec"
    const zohoURL = "https://forms.zohopublic.in/adminviri1/form/PreviktaWebsite/formperma/QV6vR7uRlqBG75EVBmNvekv1nbBfI129nwqpqWlP_aE/htmlRecords/submit"

    // Create a hidden iframe for form submission
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe';
    document.body.appendChild(iframe);

    // Create a temporary form for submission
    const tempForm = document.createElement('form');
    tempForm.action = zohoURL;
    tempForm.method = "POST";
    tempForm.target = 'hidden_iframe';
    tempForm.encType = "multipart/form-data";
    tempForm.style.display = 'none';

    // Copy form data to temp form
    for (const [key, value] of formData.entries()) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = value as string;
      tempForm.appendChild(input);
    }

    document.body.appendChild(tempForm);

    try {
      // Submit the form
      tempForm.submit();
      
      // Wait a moment then assume success
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Cleanup
        document.body.removeChild(tempForm);
        document.body.removeChild(iframe);
      }, 1000);
      
    } catch (error) {
      setSubmitError("Failed to send message. Please try again.");
      setIsSubmitting(false);
      
      // Cleanup on error
      document.body.removeChild(tempForm);
      document.body.removeChild(iframe);
    }
  };

  if (isSubmitted) {
   router.push("/thank-you");
  }

  return (
    <div className="flex flex-col lg:flex-row items-start px-4 py-12 md:py-20 lg:pt-40 mx-auto max-w-[1360px] gap-10 md:gap-20 relative">
      {/* Background Circle (hidden on mobile) */}
      {/* <div className="hidden md:block absolute left-[-428px] top-[-442px] w-[804px] h-[804px]">
      </div> */}
      {/* <div className="absolute inset-[15%_6%_5%_13%] bg-[rgba(212,240,208,0.3)] rounded-full"></div> */}

      {/* Title Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-16 relative">
        <Image
          src={WaterMark}
          alt="watermark"
          height={321}
          width={376}
          className="absolute h-[121px] w-[142px] lg:h-[321px] lg:w-[376px] lg:top-[-102px] left-2.5 "
        />
        <h2 className="text-[28px] md:text-[40px] leading-[1] md:leading-[60px] font-atyp font-bold text-[#132D47] relative z-10">
          GET IN TOUCH
        </h2>
      </div>

      {/* Form Section */}
      <form
        className="w-full lg:w-1/2 space-y-6 md:space-y-10"
        onSubmit={handleSubmit}
      >
        {submitError && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {submitError}
          </div>
        )}
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              name="Name_First"
              // name="first_name"
              placeholder="First Name"
              required
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none"
            />
          </div>
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              name="Name_Last"
              // name="last_name"
              placeholder="Last Name"
              required
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              // name="email"
              name="Email"
              required
              placeholder="Email"
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none"
            />
          </div>
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              name="PhoneNumber_countrycode"
              // name="phone_number"
              required
              placeholder="Phone Number"
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none"
            />
          </div>
        </div>

        {/* Message Field */}
        <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
          <textarea
            name="SingleLine"
            // name="message"
            placeholder="Message"
            className="w-full h-24 md:h-32 text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none resize-none"
          />
        </div>

        <input type="text" name="SingleLine1" value={"get_in_touch"} className="hidden" />

        {/* Submit Button */}
        <button type="submit" className="relative w-[214px] h-[56px]" disabled={isSubmitting}>
          <CustomButton
            mainWidth="210px"
            labelWidth="210px"
            labelWidthHover="170px"
            labelBackground="#81DE76"
            labelBackgroundHover="#81DE76"
            labelTextColor="#132D47"
            labelTextColorHover="#132D47"
            arrowFill="#132D47"
            arrowFillHover="#132D47"
            labelText={isSubmitting ? "Sending..." : "Send Message"}
            labelBorderColor="#81DE76"
            iconPosition="0px"
            iconPositionHover="0px"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
