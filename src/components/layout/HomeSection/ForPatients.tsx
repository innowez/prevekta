"use client";
import Link from "next/link";
import ForPatientBtn from "./btns/ForPatientBtn";

const MultipleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="81"
    height="80"
    fill="none"
    viewBox="0 0 81 80"
    className="h-10 w-10 lg:h-20 lg:w-20"
  >
    <path
      fill="#81DE76"
      stroke="#81DE76"
      d="M67.98 46.065c-.125-.1 0-.02-11.299-5.874-.51-.264-.17-.269-11.869 5.79-.294.154-.44.403-.44.682v12.272c0 .269.136.523.44.682 11.67 6.029 11.314 5.984 11.774 5.825l11.28-5.825c.294-.15.44-.408.44-.682 0-12.88.169-12.491-.32-12.875zM55.587 63.513l-9.715-5.032V47.854l9.715 5.032zm.75-11.927-9.556-4.948 9.555-4.947 9.55 4.947zM66.8 58.48l-9.715 5.032V52.886l9.715-5.032v10.632zM13.713 59.592c.05.03 11.26 5.844 11.394 5.88.435.114.085.174 11.774-5.88a.75.75 0 0 0 .38-.652c0-12.81.18-12.62-.43-12.95l-11.189-5.794c-.51-.264-.17-.269-11.869 5.79-.295.154-.44.403-.44.682V58.94c0 .269.145.518.385.652zm22.049-1.106-9.715 5.032V52.891l9.715-5.032V58.49zM25.297 41.701l9.555 4.947-9.555 4.948-9.55-4.948zm-10.464 6.158 9.715 5.032v10.627l-9.715-5.032zM40.47 14.582l-11.21 5.81a.73.73 0 0 0-.409.662v12.272c0 .268.145.518.38.652 11.684 6.054 11.339 5.994 11.774 5.88.165-.046 11.559-5.97 11.394-5.88a.75.75 0 0 0 .38-.653V21.054a.81.81 0 0 0-.44-.683c-11.704-6.058-11.37-6.048-11.869-5.789Zm-.405 23.322-9.715-5.032V22.245l9.715 5.032zm.75-11.928L31.26 21.03l9.555-4.947 9.555 4.947zm10.464 6.896-9.715 5.032V27.277l9.715-5.032v10.632z"
    ></path>
  </svg>
);

const ExpertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="53"
    fill="none"
    viewBox="0 0 45 53"
    className="h-[35px] w-[35px] lg:h-[53px] lg:w-[45px]"

  >
    <path
      fill="#81DE76"
      stroke="#81DE76"
      d="M22.5 19.185c-3.802 0-6.89 3.065-6.89 6.837s3.089 6.842 6.89 6.842 6.889-3.065 6.889-6.837-3.09-6.842-6.89-6.842Zm0 12.436c-3.111 0-5.638-2.507-5.638-5.594 0-3.086 2.527-5.594 5.637-5.594s5.637 2.508 5.637 5.594-2.527 5.594-5.637 5.594Zm0 2.975c-7.72 0-14 6.232-14 13.892V49.7A2.31 2.31 0 0 0 10.82 52h23.355a2.31 2.31 0 0 0 2.318-2.3v-1.212c.006-7.666-6.274-13.892-13.993-13.892ZM35.244 49.7a1.06 1.06 0 0 1-1.065 1.057H10.824A1.06 1.06 0 0 1 9.76 49.7v-1.212c0-6.975 5.717-12.649 12.746-12.649 7.028 0 12.745 5.674 12.745 12.65v1.21zM18.297 9.85l-.69 3.576c-.086.44.085.877.454 1.137.204.143.44.218.675.218.187 0 .38-.048.557-.144l3.212-1.758 3.211 1.758c.396.218.868.186 1.232-.074s.54-.701.455-1.137l-.69-3.575 2.676-2.487c.326-.308.444-.76.305-1.184a1.14 1.14 0 0 0-.953-.781l-3.64-.452-1.558-3.294A1.15 1.15 0 0 0 22.499 1c-.45 0-.851.25-1.038.659l-1.558 3.294-3.64.451c-.45.053-.814.356-.953.781-.14.425-.021.877.305 1.185zm1.82-3.67c.396-.048.728-.292.9-.648l1.482-3.145 1.488 3.145c.166.356.504.6.9.648l3.474.43-2.559 2.375a1.13 1.13 0 0 0-.343 1.046l.664 3.41-3.067-1.678a1.14 1.14 0 0 0-1.108 0l-3.067 1.679.658-3.41a1.12 1.12 0 0 0-.343-1.047L16.637 6.61zm23.832 6.39a1.07 1.07 0 0 0-.889-.732l-3.094-.383-1.322-2.8a1.07 1.07 0 0 0-.974-.616c-.423 0-.798.234-.974.616l-1.323 2.8-3.094.383c-.417.053-.76.329-.888.733-.129.398-.022.823.289 1.11l2.275 2.114-.589 3.04c-.08.408.08.817.423 1.067a1.07 1.07 0 0 0 1.15.074l2.73-1.493 2.73 1.493c.37.202.815.176 1.157-.069a1.05 1.05 0 0 0 .423-1.068l-.589-3.038 2.275-2.115c.3-.292.413-.717.284-1.115Zm-3.49 2.38a1.06 1.06 0 0 0-.321.983l.535 2.763-2.484-1.36a1.06 1.06 0 0 0-.52-.133c-.176 0-.358.043-.518.133l-2.484 1.36.535-2.763a1.06 1.06 0 0 0-.321-.982l-2.072-1.924 2.816-.35c.37-.048.685-.271.84-.606l1.205-2.55 1.204 2.55c.155.335.471.563.84.606l2.816.35zm-29.244 4.947a1.05 1.05 0 0 0 .423-1.068l-.59-3.039 2.276-2.114c.31-.287.418-.712.289-1.11a1.07 1.07 0 0 0-.889-.734L9.63 11.45l-1.322-2.8a1.07 1.07 0 0 0-.974-.616 1.06 1.06 0 0 0-.974.616l-1.323 2.8-3.094.388c-.417.053-.76.329-.888.733-.129.398-.022.823.289 1.11l2.275 2.114-.589 3.04c-.08.408.08.817.423 1.067a1.07 1.07 0 0 0 1.15.074l2.73-1.493 2.73 1.493c.365.197.81.17 1.152-.08Zm-3.886-2.694c-.177 0-.36.043-.52.133l-2.484 1.36.536-2.763a1.06 1.06 0 0 0-.321-.982l-2.072-1.924 2.816-.35c.369-.048.685-.271.84-.606l1.205-2.55 1.204 2.55c.16.335.471.563.84.606l2.816.35-2.072 1.924a1.06 1.06 0 0 0-.32.982l.535 2.763-2.484-1.36a1.1 1.1 0 0 0-.52-.133Z"
    ></path>
  </svg>
);

const HealthRecordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="51"
    fill="none"
    viewBox="0 0 45 51"
    className="h-[28px] w-[25px] lg:h-[51px] lg:w-[45px]"
  >
    <path
      fill="#81DE76"
      d="M44.666 45.014h.002V9.82c0-3.305-2.75-5.99-6.124-5.99h-3.647c-1.334 0-2.452-.953-3.336-1.953A5.65 5.65 0 0 0 27.331 0h-9.497a5.41 5.41 0 0 0-4.08 1.843c-.88 1.015-1.997 1.982-3.34 1.982H6.791c-3.38 0-6.124 2.69-6.124 5.99V45.01C.667 48.316 3.417 51 6.791 51h31.75c3.378 0 6.122-2.688 6.124-5.986zM16.069 3.516a2.52 2.52 0 0 1 1.762-.714h9.497c1.376 0 2.556 1.01 2.649 2.254.008.126 0 .247-.015.372 0 .072-.008.148-.022.217-.014.09-.042.175-.064.26-.023.07-.037.147-.065.216a2 2 0 0 1-.128.246c-.037.063-.065.134-.107.189-.092.14-.192.265-.316.385a2.5 2.5 0 0 1-1.753.71h-9.48a2.78 2.78 0 0 1-1.983-.835 2.3 2.3 0 0 1-.643-1.218 1 1 0 0 1-.014-.153c-.014-.112-.028-.225-.023-.337.028-.61.285-1.176.716-1.603zM3.536 45.012h.001V9.82c0-1.76 1.46-3.188 3.26-3.188h5.562c.19 0 .365.125.434.303l.02.052q.002.016.008.033l.01.021c.704 1.867 2.464 3.228 4.572 3.389.086 0 .173.013.258.023q.08.011.164.013h9.667q.271 0 .53-.028a5.4 5.4 0 0 0 3.258-1.513c.15-.148.285-.31.414-.47.05-.063.1-.135.15-.203.074-.099.138-.197.202-.296q.083-.136.157-.273.065-.126.129-.252c.05-.104.092-.21.137-.315.028-.084.056-.16.086-.246a.37.37 0 0 1 .348-.246h5.633c1.798 0 3.258 1.428 3.258 3.188v35.196c0 1.76-1.46 3.188-3.258 3.188H6.793c-1.797 0-3.256-1.426-3.258-3.184z"
    ></path>
    <path
      fill="#81DE76"
      d="M10.361 21.552a1.4 1.4 0 0 1 1.401-1.4h3.671a1.4 1.4 0 1 1 0 2.801h-3.67a1.4 1.4 0 0 1-1.402-1.4M21.225 21.552a1.4 1.4 0 0 1 1.4-1.4H33.58a1.4 1.4 0 0 1 0 2.801H22.626a1.4 1.4 0 0 1-1.401-1.4M10.361 29.643a1.4 1.4 0 0 1 1.401-1.401h3.671a1.4 1.4 0 0 1 0 2.801h-3.67a1.4 1.4 0 0 1-1.402-1.4M21.225 29.643a1.4 1.4 0 0 1 1.4-1.401H33.58a1.4 1.4 0 0 1 0 2.801H22.626a1.4 1.4 0 0 1-1.401-1.4M10.361 37.725a1.4 1.4 0 0 1 1.401-1.4h3.671a1.4 1.4 0 0 1 0 2.8h-3.67a1.4 1.4 0 0 1-1.402-1.4M21.225 37.725a1.4 1.4 0 0 1 1.4-1.4H33.58a1.4 1.4 0 0 1 0 2.8H22.626a1.4 1.4 0 0 1-1.401-1.4"
    ></path>
  </svg>
);

const ForPatients = () => {

  return (
    <div className="flex flex-col items-center px-4 py-5 md:py-20 mx-auto max-w-[1360px] gap-4 mb:gap-[72px] relative">
      <div id="Patient" className="absolute -top-16"></div>

      {/* Header Section */}
      <div className="flex flex-col items-center w-full gap-2 md:gap-[48px] lg:mb-14">
        {/* Title and Description */}
        <div className="flex flex-col items-center w-full max-w-[735px] gap-4 md:gap-[24px]">
          <h2 className="text-2xl sm:text-5xl lg:text-[60px] md:leading-[72px] font-atyp font-bold text-center text-[#132D47]">
            FOR PATIENTS
          </h2>
          <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-normal text-center text-[#132D47]">
            Find the right doctor, not just a consultation. Prevekta connects
            you to a growing network of experienced Ayurveda practitioners
            across specialties. Get timely diagnoses, personalized wellness
            plans, and continuous care whether in person or online.
          </p>
        </div>

        {/* Features Section */}
        <div className="relative w-full md:h-[223px]">
          {/* Features Grid */}
          <div className="flex flex-col md:flex-row justify-between w-full h-full parent-container">
            {/* Feature 1 */}
            <div
              id="feature1"
              className="flex flex-col md:flex-row justify-start items-center h-full md:w-1/3 relative transition-all duration-300 method-3 "
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12 mx-auto  w-[220px] md:w-auto`}
              >
                <div className="relative">
                  <MultipleIcon />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Multiple specialties
                </p>
              </div>
              <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
            </div>

            {/* Feature 2 */}
            <div
              id="feature2"
              className="flex flex-col md:flex-row justify-start items-center h-full md:w-1/3 relative transition-all duration-300 method-1 "
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12  mx-auto w-[220px] md:w-auto`}
              >
                <div className="relative">
                  <ExpertIcon />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Expert Experiences
                </p>
              </div>
              <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
            </div>

            {/* Feature 3 */}
            <div
              id="feature3"
              className="flex flex-col md:flex-row justify-start items-center h-full md:w-1/3 relative transition-all duration-300  method-1"
            >
              <div
                className={`flex items-center sm:flex-col lg:flex-row gap-[12px] py-8 md:p-12 mx-auto w-[220px] md:w-auto`}
              >
                <div className="relative ">
                  <HealthRecordIcon />
                </div>
                <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
                  Digital Health Records
                </p>
              </div>
              <div className="sm:hidden absolute right-0 top-0 h-full w-1 method-1"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Button */}
      <Link href={"/appointment"} >
      <ForPatientBtn /></Link>
    </div>
  );
};

export default ForPatients;
