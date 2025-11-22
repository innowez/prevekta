"use client";
import CustomButton from "@/components/ui/CustomButton";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AppointmentPage = () => {
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
      const scriptURL =
        // "https://script.google.com/macros/s/AKfycby6G6Pp096af1BknVPklIptlUpoTc2pY6pWXyFYW82kQ1-Ybgk0_x-CyOY3AO87RjN3/exec";
        "https://forms.zohopublic.in/adminviri1/form/PreviktaWebsite/formperma/QV6vR7uRlqBG75EVBmNvekv1nbBfI129nwqpqWlP_aE/htmlRecords/submit";
  
  
      // Create a hidden iframe for form submission
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.name = "hidden_iframe";
      document.body.appendChild(iframe);
  
      // Create a temporary form for submission
      const tempForm = document.createElement("form");
      tempForm.action = scriptURL;
      tempForm.method = "POST";
      tempForm.target = "hidden_iframe";
      tempForm.encType = "multipart/form-data";
      tempForm.style.display = "none";
  
      // Copy form data to temp form
      for (const [key, value] of formData.entries()) {
        const input = document.createElement("input");
        input.type = "hidden";
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-8 lg:py-14">
      <div className="max-w-7xl mx-auto">
        {/* Desktop and Mobile Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h1 className="text-[#1a365d] text-2xl md:text-4xl lg:text-6xl font-bold font-Atyp mb-2">
            Book Your Appointment
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-[#1a365d] text-2xl md:text-3xl lg:text-[40px] font-Atyp font-semibold mb-4">
              Your Wellness,
              <br />
              Our Priority
            </h2>
            <div className="space-y-4 text-gray-600 text-lg font-[Duplet] leading-6 max-w-[550px]">
              <p>
                Your well-being matters. Whether {"you're"} struggling with
                discomfort, seeking preventive care, or simply want to live a
                healthier, balanced life, {"we're"} here to guide you every step
                of the way. At our Ayurvedic clinic, we combine tradition,
                science, and compassion to create a healing experience tailored
                just for you.
              </p>
              <p>
                At Prevekta Ayurveda, your health and well-being always come
                first. Booking an appointment is simple, flexible, and designed
                for your comfort whether you choose to visit our clinic in
                person or connect from home.
              </p>
              <p>
                Experience Ayurveda without boundaries Prevekta Ayurveda guides
                you on your healing journey anytime, anywhere through seamless
                tele and video consultations.
              </p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="md:w-1/2">
            <form className="bg-white p-6 rounded-lg lg:rounded-3xl space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4 lg:gap-8 lg:mb-10">
                <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
                  <input
                    // name="name"
                    name="Name_First"
                    placeholder="Name"
                    required
                    className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none placeholder:text-primary"
                  />
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-2 ">
                  <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
                    <input
                      // name="email"
                      name="Email"
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none placeholder:text-primary"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
                    <input
                      // name="mobile"
                      name="PhoneNumber_countrycode"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none placeholder:text-primary"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between gap-2 ">
                  <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
                    <select
                      // name="consultation"
                      name="SingleLine2"
                      className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
                    >
                      <option value="">Consultation type</option>
                      <option value="Online Consultation">
                        Online Consultation
                      </option>
                      <option value="In-Person Consultation">
                        In-Person Consultation
                      </option>
                    </select>
                  </div>

                  <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
                    <select
                      // name="location"
                      name="SingleLine3"
                      className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
                    >
                      <option value="">Location</option>
                      <option value="Main Clinic">Main Clinic</option>
                      <option value="Branch Location">Branch Location</option>
                    </select>
                  </div>
                </div>

                <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
                  <select
                    // name="time"
                    name="SingleLine4"
                    className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
                  >
                    <option value="">Choose Your Time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>

                <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
                  <textarea
                    // name="message"
                    name="SingleLine5"
                    placeholder="Message"
                    rows={4}
                    className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none placeholder:text-primary"
                  ></textarea>
                </div>
              </div>

              <input type="text" name="SingleLine1" value={"get_in_touch"} className="hidden" />

              <div className="flex justify-end lg:justify-start">
                <button
                  type="submit"
                  className="relative w-[214px] h-[56px]"
                  disabled={isSubmitting}
                >
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
