"use client";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";
import React, { useState } from "react";
import WaterMark from "@assets/images/watrmark.png";
import { useRouter } from "next/navigation";

const InvestmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [selRegion, setRegion] = useState<number | null>(null)
  const [selState, setSelState] = useState<number | null>(null)
  const router = useRouter();

  const loct = {
    region: ["Southern India", "Western India", "Eastern India", "Northern India", "North-Eastern India"],
    states:[
      ["Tamil Nadu", 'Kerala', "Karnataka", "Andhra Pradesh", "Telangana", "Puducherry", "Lakshadweep", "Goa"],
      ["Rajasthan", "Gujarat", "Maharashtra", "Dadra & Nagar Haveli, Daman & Diu"],
      ["Bihar", "Jharkhand", "Odisha", "West Bengal", "Andaman & Nicobar Islands"],
      ["Jammu & Kashmir", "Ladakh", "Himachal Pradesh", "Punjab", "Haryana", "Chandigarh", "Delhi", "Uttarakhand",],
      ["Madhya Pradesh", "Chhattisgarh", "Uttar Pradesh"],
      ["Assam", "Arunachal Pradesh", "Nagaland", "Manipur", "Mizoram", "Tripura", "Meghalaya", "Sikkim"]
    ],
    cluster: [
      [
      ["Chennai", "Vellore / Chn", "Salem / Cbe", "Coimabatore", "Trichy", "Madurai", "Tirunelveli/Mdu",],
      ["Trivandrum (South)", "Ernakulam (Central)", "Kannur (North)"],
      ["Belgaum", "Gulbarga", "Mysuru", "Udupi", "Bengaluru", "Tumkuru"],
      ["Vizag","Kakinada", "Amaravathi", "Nellore", "Tirupati"],
      ["Warangal", "Hyderabad", "Nizamabad", ],
      ["Pondichery / Try"],
      ["Ernakulam (Central)"],
      ["Goa"],
    ],

      [
        ["Jaipur", "Jodhpur", "Udaipur",],
        ["Ahamedabad", "Surat", "Vadodara", "Rajkot"],
        ["Mumbai", "Thane","Pune", "Kolhapur", "Solapur", "Nashik", "Chhatrapati-Sambhajinagar", "Nanded", "Amravati", "Nagpur"],
        ["Dadra"]
      ],
      [
        ["Patna", "Rohtas", "Gaya", "Champaran", "Muzaffarpur", "Saran", "Dharbanga", "Saharsa", "Purnia", "Bhagalpur"],
        ["Ranchi", "Dhanbad", "Hazaribagh"],
        ["Bhubaneswar", "Berhampur", "Rourkela", "Balasore"],
        ["Baharampur", "Jalpaiguri", "Medinipur", "Kolkatta"],
        []
      ],
      [
        ["Jammu", "Kashmir"],
        [],
        ["Shimla", "Dharmashala", "Mandi"],
        ["Amritsar", "Jalandhar", "Ludhiana", "Patiala", "Bathinda"],
        ["Ambala", "Sonipat", "Faridabad", "Karnal", "Hisar", "Gurugram" ],
        ["Chandigarh", "Dharmashala", "Mandi"],
        ["Chandigarh"],
        ["East Delhi", "NE Delhi", "NW Delhi", "West Delhi", "South Delhi", "SW Delhi"],
        ["Dehradun", "Rudrapur"],
      ],
      [
        ["Bhopal", "Indore", "Ujjain", "Jabalpur", "Gwalior", "Sagar", "Rewa",],
        ["Bastar", "Durg", "Raipur", "Bilaspur", "Jashpur"],
        ["Agra", "Western UP", "Central UP", "Jhansi", "Bareilly", "Ayodhya","Prayagraj","Varanasi","Gorakhpur"],
      ],
      [
        ["Guawahati", "Lower Assam","Central Assam", "North Assam", "Upper Assam", "Barak Valley"],
        ["Kohima"],
        ["Imphal"],
        ["Aizawl"],
        ["Agartala"],
        ["Shillong"],
        ["Gangtok"],
      ]

  ] 
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const scriptURL =
      // "https://script.google.com/macros/s/AKfycbw3ybLKAZClUWzNLGQ75lHPhXG6wpo0J8CZMLuWapjZHQ-xpq-R4fTSNPgt2VVqUKXWtA/exec";
      "https://forms.zohopublic.in/adminviri1/form/PrevektaFranchiseform/formperma/xcRu1b3ziSJlpplC1mFH6p7GNMqWpzyg142I5p7pBfw/htmlRecords/submit";

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

  // console.log((selState !== null && selRegion !== null) && loct.cluster[selRegion]);
  // console.log(selRegion, "selRegion");
  // console.log(selState, "selState");
  

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
        <h2 className="text-[28px] md:text-[40px] leading-[1] md:leading-[60px] font-[Atyp] font-extrabold text-[#132D47] relative z-10 uppercase">
          Request <br />
          franchise <br /> enquiry
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
        {/* <div className="flex flex-col md:flex-row gap-4 w-full"> */}
          <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              name="Name_First"
              // name="name"
              placeholder="Name"
              required
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none placeholder:text-primary placeholder:font-normal"
            />
          </div>
        {/* </div> */}

        {/* Contact Fields */}
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              // name="email"
              name="Email"
              required
              placeholder="Email"
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none placeholder:text-primary placeholder:font-normal"
            />
          </div>
          <div className="w-full md:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <input
              // name="mobile"
              name="PhoneNumber_countrycode"
              required
              placeholder="Phone Number"
              className="w-full text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold bg-transparent outline-none placeholder:text-primary placeholder:font-normal"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-4 ">
          <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <select
              // name="region"
              name="SingleLine"
              className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
              onChange={(e) => {
                if (e.target.value !== "") { 
                  const selectedIndex = loct.region.findIndex(reg => reg === e.target.value);
                  setRegion(selectedIndex);
                } else{
                  setRegion(null);
                }
              }}
            >
              <option value="">-- Region --</option>
              {loct.region.map((reg, ind) => (<option key={ind+"reg"} value={reg}>{reg}</option>))}
            </select>
          </div>

          <div className="w-full lg:w-1/2 border-b border-[rgba(19,45,71,0.2)] pb-2">
            <select
              // name="state"
              name="SingleLine1"
              className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
              onChange={(e) => {
                if (selRegion !== null && e.target.value !== "") {
                  const selectedIndex = loct.states[selRegion].findIndex(reg => reg === e.target.value);
                  setSelState(selectedIndex);
                }else {
                  setSelState(null);
                }
              }}
            >
              <option value="">-- Select a state --</option>
              {selRegion !== null && loct.states[selRegion].map((reg, ind) => (<option key={ind+"reg"} value={reg}>{reg}</option>))}
            </select>
          </div>
        </div>

        {/* Message Field */}

        <div className="w-full border-b border-[rgba(19,45,71,0.2)] pb-2">
          <select
            // name="cluster"
            name="SingleLine2"
            className="w-full text-base text-primary md:text-[18px] leading-[23px] font-[Duplet] bg-transparent outline-none"
          >
            <option value="">-- Cluster --</option>
              {(selState !== null && selRegion !== null) && loct.cluster[selRegion][selState].map((reg, ind) => (<option key={ind+"reg"} value={reg}>{reg}</option>))}
          </select>
        </div>

        <input type="text" name="type" value={"finance"} className="hidden" />

        {/* Submit Button */}
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
      </form>
    </div>
  );
};

export default InvestmentForm;
