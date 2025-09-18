// "use client";
import React from "react";
import Image from "next/image";
import PhysiciansImage from "@assets/images/vsvsv.png";
import PhysiciansImageMobile from "@assets/images/physicianImgMobile.png";
import CustomButton from "@/components/ui/CustomButton";
// import { useRouter } from "next/navigation";
import Link from "next/link";
// import { Link } from "t";

const MemberShipIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="38"
    height="38"
    fill="none"
    viewBox="0 0 38 38"
  >
    <path
      fill="#132D47"
      stroke="#132D47"
      strokeWidth="0.5"
      d="M11.097 19.67h15.806a1.8 1.8 0 0 0 1.8-1.798v-2.044a4.61 4.61 0 0 0-3.161-4.382L21.798 10.2C26.37 7.409 24.43.28 19 .25c-5.43.034-7.37 7.155-2.798 9.949l-3.744 1.247a4.615 4.615 0 0 0-3.16 4.382v2.044a1.8 1.8 0 0 0 1.8 1.798Zm3.869-14.048c.17-5.33 7.9-5.328 8.068 0-.17 5.328-7.9 5.327-8.068 0Zm-4.328 10.206a3.275 3.275 0 0 1 2.244-3.111c1.311-.365 4.77-1.818 6.118-1.722 1.33-.101 4.83 1.364 6.118 1.722a3.28 3.28 0 0 1 2.244 3.111v2.044a.46.46 0 0 1-.46.458H11.098a.46.46 0 0 1-.46-.458zM12.105 31.503l-2.309-.769a4.025 4.025 0 0 0-4.777-6.48 4.025 4.025 0 0 0-.073 6.48l-2.308.769A3.49 3.49 0 0 0 .25 34.815v1.459a1.477 1.477 0 0 0 1.476 1.476h11.29a1.48 1.48 0 0 0 1.477-1.476v-1.459a3.485 3.485 0 0 0-2.388-3.312ZM7.37 24.835a2.69 2.69 0 0 1 2.666 2.69 2.69 2.69 0 0 1-2.666 2.688 2.69 2.69 0 0 1-2.666-2.689 2.69 2.69 0 0 1 2.666-2.689Zm5.782 11.439a.137.137 0 0 1-.137.137H1.726a.137.137 0 0 1-.136-.137v-1.459a2.15 2.15 0 0 1 1.472-2.042c1.539-.432 3.95-1.696 5.563-1.018l3.056 1.02a2.15 2.15 0 0 1 1.472 2.04zM35.362 31.503l-2.308-.77a4.025 4.025 0 0 0-4.778-6.48 4.025 4.025 0 0 0-.072 6.481l-2.309.769a3.49 3.49 0 0 0-2.388 3.312v1.459a1.477 1.477 0 0 0 1.477 1.476h11.29a1.48 1.48 0 0 0 1.476-1.476v-1.46a3.485 3.485 0 0 0-2.388-3.31Zm-4.733-6.668a2.69 2.69 0 0 1 1.886 4.582c-.499.503-1.177.79-1.886.796a2.69 2.69 0 0 1-1.886-4.582 2.7 2.7 0 0 1 1.886-.796Zm5.781 11.439a.136.136 0 0 1-.136.137h-11.29a.137.137 0 0 1-.137-.137v-1.46a2.15 2.15 0 0 1 1.472-2.04c1.54-.433 3.95-1.698 5.564-1.019l3.055 1.019a2.15 2.15 0 0 1 1.472 2.04zM24.833 26.563l-1.34-1.34a.67.67 0 0 0-.947.947l.196.196H21.68a2.013 2.013 0 0 1-2.01-2.009V21.68a.67.67 0 0 0-1.34 0v2.678a2.01 2.01 0 0 1-2.01 2.01h-1.062l.196-.197a.67.67 0 0 0-.948-.947l-1.34 1.34a.67.67 0 0 0 0 .946l1.34 1.34a.67.67 0 0 0 .948-.947l-.197-.196h1.063a3.34 3.34 0 0 0 2.68-1.36 3.34 3.34 0 0 0 2.68 1.36h1.062l-.196.196a.67.67 0 0 0 .947.947l1.34-1.34a.67.67 0 0 0 0-.947Z"
    ></path>
  </svg>
);

const NetworkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="26"
    fill="none"
    viewBox="0 0 42 26"
  >
    <path
      fill="#132D47"
      stroke="#132D47"
      d="M37.188 1c-2.101 0-3.811 1.695-3.811 3.779 0 1.008.402 1.923 1.054 2.6l-6.346 8.554c-1.287-.608-2.891-.45-4.001.395l-5.257-4.736c.38-.593.591-1.283.591-2 0-2.09-1.707-3.789-3.805-3.789s-3.821 1.7-3.821 3.788c0 .825.271 1.604.753 2.244l-5.837 6.113a3.8 3.8 0 0 0-1.897-.506C2.71 17.442 1 19.138 1 21.222S2.71 25 4.811 25s3.812-1.695 3.812-3.779a3.74 3.74 0 0 0-.891-2.423l5.79-6.064a3.8 3.8 0 0 0 2.09.63 3.72 3.72 0 0 0 2.31-.8l5.255 4.735a3.75 3.75 0 0 0-.59 2.012c0 2.08 1.711 3.773 3.815 3.773s3.805-1.693 3.805-3.773c0-.982-.384-1.906-1.046-2.598l6.344-8.549c.508.25 1.078.394 1.684.394C39.29 8.558 41 6.863 41 4.78s-1.71-3.778-3.811-3.778zM4.811 23.678c-1.367 0-2.478-1.102-2.478-2.457s1.111-2.457 2.478-2.457c1.366 0 2.478 1.102 2.478 2.457s-1.112 2.457-2.478 2.457Zm9.269-12.159a2.42 2.42 0 0 1-.955-1.928c0-1.36 1.116-2.466 2.487-2.466a2.47 2.47 0 0 1 2.472 2.466c0 .714-.3 1.363-.86 1.843-.831.756-2.254.791-3.144.085Zm12.322 10.242c-1.369 0-2.482-1.099-2.482-2.45 0-.54.169-1.052.468-1.453.124-.15.249-.278.382-.396a2.45 2.45 0 0 1 1.632-.603c.485 0 .952.136 1.356.393l.04.03a2.44 2.44 0 0 1 1.076 2.028c0 1.35-1.109 2.451-2.472 2.451ZM37.188 7.236a2.47 2.47 0 0 1-1.46-.482l-.003-.004h-.003a2.44 2.44 0 0 1-1.013-1.972c0-1.355 1.112-2.457 2.478-2.457s2.478 1.102 2.478 2.457-1.111 2.457-2.478 2.457z"
    ></path>
  </svg>
);

const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="34"
    height="34"
    fill="none"
    viewBox="0 0 34 34"
  >
    <path
      fill="#132D47"
      fillRule="evenodd"
      stroke="#132D47"
      d="M21.284 1c-.768-.012-1.463.3-2.067.608-.806.41-1.514.808-2.238.81-.724 0-1.433-.394-2.24-.802s-1.774-.827-2.86-.469c-1.085.359-1.623 1.273-2.037 2.083s-.755 1.554-1.34 1.984c-.585.431-1.39.533-2.28.682s-1.915.387-2.585 1.322c-.67.934-.573 1.992-.436 2.893.138.901.292 1.706.07 2.402-.223.696-.814 1.257-1.447 1.906C1.19 15.07.498 15.87.5 17.023s.696 1.953 1.331 2.6c.635.648 1.228 1.206 1.453 1.902.224.695.071 1.5-.064 2.403-.134.901-.228 1.96.445 2.892.673.933 1.699 1.166 2.59 1.313.89.146 1.694.247 2.28.676.587.429.932 1.17 1.347 1.98.416.81.955 1.722 2.042 2.078s2.052-.066 2.858-.476 1.514-.81 2.238-.81c.724-.001 1.436.396 2.242.804.808.408 1.774.824 2.86.466s1.621-1.271 2.035-2.082c.413-.81.757-1.554 1.342-1.985.585-.43 1.389-.532 2.28-.682.89-.149 1.914-.387 2.584-1.321.67-.935.573-1.992.436-2.894-.138-.901-.292-1.706-.07-2.402.223-.696.814-1.257 1.447-1.906.634-.65 1.326-1.45 1.324-2.604s-.695-1.953-1.33-2.6c-.635-.648-1.229-1.206-1.454-1.902-.224-.695-.071-1.5.064-2.402.134-.902.228-1.959-.445-2.892-.672-.932-1.698-1.167-2.59-1.313-.89-.147-1.694-.246-2.28-.675-.587-.43-.93-1.173-1.346-1.982-.416-.81-.957-1.72-2.044-2.075A2.7 2.7 0 0 0 21.284 1Zm-.04 1.147q.237.002.482.08c.657.215.99.748 1.383 1.512.392.764.79 1.724 1.688 2.382.897.657 1.925.74 2.765.879.841.138 1.447.293 1.853.856.407.564.366 1.193.239 2.044s-.364 1.865-.02 2.93c.344 1.064 1.128 1.742 1.728 2.354s1 1.096 1 1.793c.001.698-.398 1.182-.996 1.796-.598.613-1.379 1.293-1.72 2.359s-.1 2.08.029 2.93c.13.851.17 1.48-.234 2.045-.405.565-1.01.72-1.85.861s-1.867.227-2.763.886c-.896.66-1.291 1.622-1.682 2.387-.39.766-.722 1.3-1.378 1.517s-1.235-.017-1.997-.403c-.761-.385-1.643-.925-2.751-.924s-1.99.546-2.75.933c-.761.388-1.34.622-1.996.408-.657-.215-.99-.748-1.381-1.513-.393-.764-.792-1.724-1.69-2.381s-1.925-.74-2.765-.88c-.841-.138-1.446-.291-1.853-.855-.406-.564-.366-1.192-.239-2.044.127-.851.364-1.865.02-2.93S3.24 19.426 2.64 18.814s-1-1.094-1.001-1.792c-.001-.697.398-1.183.996-1.796.598-.614 1.378-1.294 1.719-2.36.34-1.065.103-2.078-.027-2.929s-.173-1.48.232-2.045c.405-.564 1.009-.72 1.85-.86.84-.142 1.867-.228 2.763-.888s1.292-1.622 1.683-2.387c.39-.765.722-1.298 1.378-1.515s1.236.016 1.998.401 1.643.926 2.751.924c1.108-.001 1.988-.544 2.75-.932.57-.29 1.037-.494 1.513-.488Zm-4.245 4.268c-3.58 0-6.913 1.847-8.837 4.898a.58.58 0 0 0 .172.793.564.564 0 0 0 .786-.174A9.32 9.32 0 0 1 17 7.566a9.32 9.32 0 0 1 7.884 4.366.57.57 0 0 0 .785.179.575.575 0 0 0 .172-.794A10.46 10.46 0 0 0 17 6.415Zm0 4.14a.56.56 0 0 0-.515.337l-1.482 3.261-3.514.424a.56.56 0 0 0-.473.394.58.58 0 0 0 .155.602l2.6 2.437-.69 3.525a.59.59 0 0 0 .222.579.56.56 0 0 0 .61.037l3.09-1.756 3.087 1.754a.56.56 0 0 0 .612-.036.57.57 0 0 0 .223-.58l-.69-3.524 2.596-2.44a.58.58 0 0 0 .152-.6.58.58 0 0 0-.471-.393l-3.513-.424-1.483-3.26a.57.57 0 0 0-.516-.336Zm0 1.953 1.1 2.42a.57.57 0 0 0 .45.331l2.606.315-1.927 1.809a.58.58 0 0 0-.171.534l.512 2.614-2.29-1.3a.56.56 0 0 0-.556 0l-2.291 1.305.511-2.617a.59.59 0 0 0-.171-.534l-1.926-1.811 2.605-.313a.56.56 0 0 0 .449-.333zm-8.383 9.295a.565.565 0 0 0-.53.45.58.58 0 0 0 .076.433A10.45 10.45 0 0 0 17 27.584c3.58 0 6.917-1.848 8.841-4.898a.58.58 0 0 0-.383-.875.56.56 0 0 0-.578.26 9.32 9.32 0 0 1-7.88 4.362A9.31 9.31 0 0 1 9.12 22.07a.57.57 0 0 0-.504-.267Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const PatientsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="34"
    fill="none"
    viewBox="0 0 41 34"
  >
    <path
      fill="#132D47"
      stroke="#132D47"
      d="M39.535 11.468c-.624-4.919-3.437-8.645-7.527-9.967-3.927-1.27-8.282-.083-11.51 3.094C17.274 1.42 12.914.23 8.992 1.501 4.9 2.822 2.088 6.549 1.464 11.468c-1.323 10.508 10.03 18.526 17.982 21.35a3.15 3.15 0 0 0 2.106.001c7.957-2.822 19.313-10.836 17.983-21.35ZM21.177 31.756a2.03 2.03 0 0 1-1.351 0c-7.61-2.703-18.482-10.299-17.24-20.145.567-4.475 3.09-7.851 6.753-9.035a9.2 9.2 0 0 1 2.833-.445c2.84 0 5.703 1.287 7.917 3.659a.58.58 0 0 0 .824 0c2.96-3.168 7.08-4.402 10.75-3.214 3.664 1.184 6.186 4.56 6.754 9.035 1.243 9.853-9.63 17.445-17.24 20.145Z"
    ></path>
    <path
      fill="#132D47"
      stroke="#132D47"
      d="M34.412 7.113a3.417 3.417 0 0 0-4.826 0l-.193.192-.19-.189c-1.298-1.297-3.568-1.282-4.819 0a3.4 3.4 0 0 0-1.001 2.41c0 .907.356 1.763.998 2.405l.192.197-.194.194a3.415 3.415 0 0 0 0 4.825c.644.645 1.501.998 2.412.998.912 0 1.768-.355 2.411-.998l.191-.191.189.196c.667.665 1.54.998 2.413.998.876 0 1.751-.333 2.42-1 1.312-1.33 1.312-3.494-.008-4.833l-.19-.186.19-.189a3.42 3.42 0 0 0 .005-4.829Zm-9.23 4.022a2.26 2.26 0 0 1 .005-3.228c.833-.857 2.345-.865 3.221.01l.19.184-3.228 3.228zm8.433 1.977c.883.892.883 2.346.004 3.237a2.29 2.29 0 0 1-3.233.003l-.195-.199 3.23-3.23zm-.001-1.972-5.208 5.206c-.864.864-2.367.862-3.229 0a2.287 2.287 0 0 1 0-3.23l5.208-5.209A2.28 2.28 0 0 1 32 7.241c.586 0 1.171.222 1.615.666a2.29 2.29 0 0 1-.001 3.233Z"
    ></path>
  </svg>
);

const ForPhysicians = () => {
  // const router = useRouter();
  return (
    <div className="flex flex-col items-start px-4 py-20 mx-auto max-w-[1360px] gap-[40px] relative">
      <div id="Physician" className="absolute -top-4 md:-top-12"></div>
      {/* Header Section */}
      <div className="flex flex-row justify-between items-center w-full gap-4">
        <h2 className="text-2xl sm:text-5xl lg:text-[60px] md:leading-[72px] font-atyp font-bold text-[#132D47]">
          FOR PHYSICIANS
        </h2>

        <Link
          className="md:hidden flex items-center justify-center rounded-full bg-[#81DE76] w-12 h-12 cursor-pointer"
          // onClick={() => router.replace("/physician")}
          href="/physician"
        >
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
        </Link>
        {/* Button */}
        <div className="absolute right-16 hidden md:block">
          <Link href="/physician">
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
            // onClick={() => router.push("/physician")}
          />
          </Link>
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
            className="w-full h-full object-cover hidden md:block"
            fill
            // height={459}
            // width={361}
          />
          <Image
            src={PhysiciansImageMobile.src}
            alt="ph"
            className="w-full h-full object-cover block md:hidden "
            // fill
            height={459}
            width={361}
          />
          {/* Overlay Text Box */}
          <div className="absolute left-1/2 -translate-x-1/2 md:-translate-x-0 min-w-[335px] md:left-6 bottom-2 md:bottom-6 md:w-[505px] p-4 mb:p-8 bg-[rgba(129,222,118,0.7)] lg:bg-[rgba(129,222,118,0.93)] rounded-[32px] ">
            <p className="text-base md:text-[18px] leading-[23px] font-[Duplet] font-light text-justify text-white">
              At Prevekta, you focus on treating patients we take care of the
              rest. From branding and patient flow to mentorship and growth, we
              support you at every step. Work with experienced Vaidyas, learn,
              collaborate, and grow your knowledge. Already running your own
              clinic? Strengthen it with our tools advanced technology, access
              to quality products, better patient management, and co-branding to
              help you stand out.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {/* Feature 1 - Get Mentorship */}
          <div className="flex flex-row items-center justify-center p-4 bg-[#E6F8E4] rounded-[48px] gap-4  md:h-[180px]">
            <div className="relative w-[40px] h-[40px] flex justify-center items-center">
              {/* Mentorship Icon */}
              {/* <Image
                src={Grop}
                alt="Grop"
                className="w-[25px] h-[25px] md:w-full md:h-full object-Contain"
                quality={100}
                height={25}
                width={25}
              /> */}
              <MemberShipIcon />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
              Get Mentorship
            </p>
          </div>

          {/* Feature 2 - Grow Your Network */}
          <div className="flex flex-row items-center justify-center p-4 bg-[#E6F8E4] rounded-[48px] gap-4 md:h-[180px]">
            <div className="relative w-[40px] h-[25px] flex items-center justify-center">
              {/* Network Icon */}
              {/* <Image
                src={Grow}
                alt="Grow"
                className="w-[26px] h-[16px] md:w-full md:h-full object-Contain"
                quality={100}
                width={26}
                height={16}
              /> */}
              <NetworkIcon />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
              Grow Your Network
            </p>
          </div>

          {/* Feature 3 - Co-Branding Support */}
          <div className="flex flex-row items-center justify-center p-6 bg-[#E6F8E4] rounded-[48px] gap-4  md:h-[180px]">
            <div className="relative w-[35px] h-[35px] flex items-center justify-center">
              {/* Branding Icon */}
              {/* <Image
                src={Brand}
                alt="Brand"
                className="h-[22px] w-[22px] md:w-full md:h-full object-Contain"
                quality={100}
                height={22}
                width={22}
              /> */}
              <SupportIcon />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
              Co-Branding Support
            </p>
          </div>

          {/* Feature 4 - Focus on Healing Patients */}
          <div className="flex flex-row items-center justify-center p-6 bg-[#E6F8E4] rounded-[48px] gap-4 h-[72px] md:h-[180px]">
            <div className="relative w-[40px] h-[35px] flex justify-center items-center">
              {/* Healing Icon */}
              {/* <Image
                src={Focus}
                alt="Focus"
                className="w-[25px] h-[21px] md:w-full md:h-full object-Contain"
                quality={100}
                width={25}
                height={21}
              /> */}
              <PatientsIcon />
            </div>
            <p className="text-base md:text-[18px] md:leading-[23px] font-[Duplet] font-semibold text-center text-[#132D47]">
              Focus on Healing Patients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForPhysicians;
