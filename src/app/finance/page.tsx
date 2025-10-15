import React from "react";
import Link from "next/link";
import SendReqBtn from "./LearnMoreBtn";
import StrategicPartner from "@assets/images/strategic_partner.png";
import FinanceMassage from "@assets/images/finance-massage.png";
import VaidaPartner from "@assets/images/vaidyaPartner.png";
import Image from "next/image";

function FinancePage() {
  return (
    <main className="min-h-screen ">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-2.5 py-7 px-4 lg:py-20 lg:px-6">
        <h1 className="text-2xl md:text-6xl font-[Atyp] font-semibold text-primary mb-4 lg:mb-6">
          Building Health, Wealth,
          <br />
          and Sustainability Together.
        </h1>
        <p className="text-base lg:text-lg text-primary font-[Duplet] max-w-3xl mx-auto leading-5 lg:leading-[23px]">
          Shape Your Future with Ayurveda through Prevekta by Building a
          structured, profitable, and scalable ecosystem
        </p>
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 bg-[#CFF2CB] p-4 lg:rounded-3xl mb-11 lg:mb-24">
        {/* Active Investor Card */}
        <div className="bg-primary rounded-3xl ">
          <div className="inline-block bg-secondary text-[#1B3A3A] font-[Duplet] font-semibold px-6 py-2 rounded-tl-3xl rounded-br-3xl mb-6">
            FOR ACTIVE INVESTOR
          </div>

          <div className="p-4">
            <h2 className="text-xl lg:text-4xl text-white mb-6 font-[Atyp] font-semibold">
              Together Towards Scalable Ayurveda
            </h2>

            <p className="text-gray-300 mb-6 leading-5 font-[Duplet]">
              For visionaries who want to actively engage in building and
              running the franchise. Gain exclusive territory rights to expand
              our connected ecosystem of clinics, products, and services, while
              creating lasting impact for communities and investors alike.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="border border-white text-white px-4 py-1 rounded-full text-sm font-[Duplet]">
                Lead operations
              </span>
              <span className="border border-white text-white px-4 py-1 rounded-full text-sm font-[Duplet]">
                Actively shape growth
              </span>
              <span className="border border-white text-white px-4 py-1 rounded-full text-sm font-[Duplet]">
                Enjoy strong returns
              </span>
            </div>

            {/* Learn More Button */}
            <Link href="/active-investment">
              <SendReqBtn btntype="active" />
            </Link>
          </div>
        </div>

        {/* Passive Investor Card */}
        <div className="bg-secondary rounded-3xl ">
          <div className="inline-block bg-primary text-white font-[Duplet] font-semibold px-6 py-2 rounded-tl-3xl rounded-br-3xl mb-6">
            FOR PASSIVE INVESTOR
          </div>

          <div className="p-4">
            <h2 className="text-xl lg:text-4xl text-primary mb-6 font-[Atyp] font-semibold">
              Purposeful Gains, Passive Growth
            </h2>

            <p className="text-primary mb-6 leading-5 font-[Duplet]">
              Your investment doesn&apos;t just earn it creates lasting impact,
              bringing authentic Ayurveda to healthcare and communities, all
              while contributing to a sustainable and scalable business.
            </p>

            <p className="text-primary mb-6 leading-5 font-[Duplet]">
              Sit back, invest, and grow with purpose.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="border border-primary text-primary px-4 py-1 rounded-full text-sm font-[Duplet]">
                No management
              </span>
              <span className="border border-primary text-primary px-4 py-1 rounded-full text-sm font-[Duplet]">
                Expert-run
              </span>
              <span className="border border-primary text-primary px-4 py-1 rounded-full text-sm font-[Duplet]">
                Steady returns
              </span>
            </div>

            {/* Learn More Button */}
            <Link href="/passive-investor">
              <SendReqBtn btntype="passive" />
            </Link>
          </div>
        </div>
      </div>

      {/* Strategic Partner Section */}
      <div className="max-w-7xl mx-auto p-4 flex flex-col lg:flex-row lg:justify-between mb-11 lg:mb-24">
        <Image
          src={StrategicPartner}
          alt="smom"
          className="h-[435px] w-[412px] rounded-2xl object-cover mb-4 hidden lg:block"
        />
        <div className="flex flex-col justify-between mb-4">
          <div>
            <h1 className="text-xl lg:text-[40px] text-center lg:text-left text-primary leading-6 lg:leading-12 font-Atyp font-bold mb-6">
              Strategic Partner: <br className="hidden lg:block" /> Expand With
              Us
            </h1>
            <Image
              src={StrategicPartner}
              alt="smom"
              className="h-[245px] w-full rounded-2xl object-cover mb-4 lg:hidden"
            />

            <p className="text-base text-primary leading-5 font-[Duplet] mb-4 w-full lg:w-[384px]">
              If you already own hospitals or clinics, you can integrate with
              Prevekta as a strategic partner. This model allows you to leverage
              your existing infrastructure, add new revenue streams through
              Ayurveda, and strengthen your brand with our proven framework.
              Together, we create a win-win model where your setup grows in
              value while contributing to a larger vision of holistic
              healthcare.
            </p>
          </div>

          <div className="hidden lg:flex h-auto flex-col justify-end ">
            <Link href={"passive-investor"}>
            <SendReqBtn btntype="passive" /></Link>
          </div>
        </div>

        <div className="w-[364px] h-auto lg:flex flex-col justify-end ">
          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  fill="none"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill="#fff"
                    d="M1.483 2.109c0-.301.093-.595.266-.846.173-.25.419-.444.707-.56.287-.114.604-.144.909-.085s.585.204.805.417c.22.212.37.484.43.779.061.295.03.601-.09.879-.118.278-.32.516-.579.683a1.61 1.61 0 0 1-1.988-.19 1.5 1.5 0 0 1-.34-.494 1.5 1.5 0 0 1-.12-.583M8.94 3.632c.312 0 .616-.09.874-.257.259-.167.46-.405.58-.683.118-.278.15-.584.088-.88a1.5 1.5 0 0 0-.43-.778c-.22-.213-.5-.358-.806-.416a1.62 1.62 0 0 0-.909.086c-.287.115-.533.31-.706.56s-.266.544-.266.845c.002.402.169.788.464 1.072s.695.443 1.111.443zM.626 8.274c.024.202.105.393.235.553s.303.28.5.35l.658 5.788a.5.5 0 0 0 .169.316.53.53 0 0 0 .344.128h1.033c.127 0 .25-.046.344-.128a.5.5 0 0 0 .17-.316l.303-2.704.73-6.614a.07.07 0 0 1 .022-.042.07.07 0 0 1 .044-.018l.95-.124.386 2.815c.024.201.105.393.235.552s.303.281.5.35l.658 5.788a.5.5 0 0 0 .169.317.53.53 0 0 0 .344.127h1.033c.127 0 .25-.046.344-.127a.5.5 0 0 0 .17-.317l.657-5.78a1.13 1.13 0 0 0 .518-.348c.135-.161.22-.356.244-.562l.37-2.82a1.277 1.277 0 0 0-.328-.999 1.3 1.3 0 0 0-.447-.318 1.4 1.4 0 0 0-.541-.114h-.518a.07.07 0 0 0-.051.023l-.823.985a.16.16 0 0 1-.125.056.17.17 0 0 1-.126-.056l-.823-.985a.06.06 0 0 0-.05-.023h-.527l-2.68.01-.68-.02a.06.06 0 0 0-.051.022l-.822.986a.16.16 0 0 1-.126.057.17.17 0 0 1-.126-.057l-.822-.984a.06.06 0 0 0-.038-.024h-.494a1.4 1.4 0 0 0-.54.115 1.3 1.3 0 0 0-.447.317 1.248 1.248 0 0 0-.328.999z"
                  ></path>
                </svg>
              </div>
              <p className="text-base text-primary leading-5 font-[Duplet] font-semibold">
                Strategic Partner
              </p>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  fill="none"
                  viewBox="0 0 16 15"
                >
                  <path
                    fill="#fff"
                    d="M13.94 10.293h-.387C13.431 7.29 10.988 4.888 8 4.888c-.59 0-1.173.095-1.73.28l-1.442-2.48v-.002l.027-.081a1.62 1.62 0 0 0-.17-1.222A1.59 1.59 0 0 0 3.318.588a1.609 1.609 0 0 0-1.538 1.21 1.617 1.617 0 0 0 1.227 1.984L4.42 6.214a5.64 5.64 0 0 0-1.975 4.078h-.387c-.808 0-1.47.668-1.47 1.493v2.535c0 .148.119.268.265.268h14.294c.146 0 .264-.12.264-.268v-2.535c0-.825-.662-1.492-1.471-1.492m-5.173.166a.785.785 0 0 1-1.45.207.8.8 0 0 1-.085-.61.79.79 0 0 1 .365-.49A.75.75 0 0 1 8 9.452a.79.79 0 0 1 .683.398.8.8 0 0 1 .085.61m-5.792-.166a5.1 5.1 0 0 1 1.719-3.61l1.31 2.254a2.43 2.43 0 0 0-.389 1.356zm7.407 0c.005-.43-.1-.865-.331-1.262a2.36 2.36 0 0 0-2.223-1.184L6.547 5.642a4.9 4.9 0 0 1 1.452-.217c2.698 0 4.906 2.162 5.025 4.868z"
                  ></path>
                </svg>
              </div>
              <p className="text-base text-primary leading-5 font-[Duplet] font-semibold">
                Leverage Existing Infrastructure
              </p>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#fff"
                    d="M6.368 4.196a4.3 4.3 0 0 1-.86-.633c-.523-.496-.94-1.13-1.236-1.885l-.433-1.1-.433 1.1c-.297.755-.713 1.39-1.235 1.885-.26.246-.55.46-.86.634l-.723.405.723.406c.31.174.6.388.86.634.522.496.938 1.13 1.235 1.885l.433 1.1.433-1.1c.297-.755.713-1.39 1.236-1.885.26-.246.55-.46.86-.634l.724-.406zM13.966 9.01a4.4 4.4 0 0 1-.874-.644c-.537-.508-.965-1.163-1.273-1.946l-.866-2.198-.865 2.198c-.308.783-.736 1.438-1.273 1.946-.264.25-.558.467-.873.644l-1.446.812 1.446.81c.315.178.61.394.873.645.537.509.965 1.163 1.273 1.946l.866 2.199.865-2.2c.308-.782.736-1.436 1.273-1.945.264-.25.558-.468.874-.645l1.446-.811z"
                  ></path>
                </svg>
              </div>
              <p className="text-base text-primary leading-5 font-[Duplet] font-semibold">
                New Revenue Streams Through Ayurveda
              </p>
            </li>
            <li className="flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="14"
                  fill="none"
                  viewBox="0 0 15 14"
                >
                  <path
                    fill="#fff"
                    d="M10.751 5.49c-.092.484-.155.964-.185 1.429a.42.42 0 0 1-.203.342.37.37 0 0 1-.372.01 3.9 3.9 0 0 0-1.846-.462c-.588 0-1.17.132-1.683.38a.56.56 0 0 1-.517-.018L5.93 7.16a.2.2 0 0 0-.064-.036 3.57 3.57 0 0 0-1.896-.542c-1.962 0-3.559 1.572-3.559 3.503s1.597 3.503 3.559 3.503c.635 0 1.254-.167 1.802-.486q.023-.007.043-.018.126-.07.246-.151a.41.41 0 0 1 .338.015 3.9 3.9 0 0 0 1.747.411 5.5 5.5 0 0 0 1.868-.343q.274-.108.528-.103c.741.017 1.357-.1 1.38-.103l.035-.006c1.418-.256 2.45-1.551 2.454-3.08a36 36 0 0 0-.033-1.941c-.057-.968-.468-2.497-.831-3.846l-.091-.34a5 5 0 0 0-.082-.275c-.36-1.086-1.177-2.007-2.238-2.528l-.444-.217a.87.87 0 0 0-.688-.147.9.9 0 0 0-.59.42l-.861 1.153q-.008.01-.013.02c-.24.396-.178.917.15 1.24l.63.616c.34.33.76.346 1.181.044a.28.28 0 0 1 .258-.039c.047.016.13.06.166.172a.2.2 0 0 1 .017.098c-.04.417-.104.869-.192 1.337"
                  ></path>
                </svg>
              </div>
              <p className="text-base text-primary leading-5 font-[Duplet] font-semibold">
                Strengthen Your Brand
              </p>
            </li>
          </ul>

          <Image
            src={FinanceMassage}
            alt="smom"
            className="h-[132px] w-full rounded-2xl object-cover mb-4 hidden lg:block"
          />

          <div className="lg:hidden">
            <Link href={"passive-investor"}>
            <SendReqBtn btntype="passive" /></Link>
          </div>
        </div>
      </div>

      {/* Vaidya Partner Section */}
      <div className="max-w-7xl mx-4 lg:mx-auto bg-primary rounded-3xl py-6 px-7 mb-11 lg:mb-24">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          <h2 className="text-xl lg:text-[40px] leading-6 lg:leading-12 text-center lg:text-left text-white font-[Atyp] font-semibold mb-6 w-full lg:w-1/2">
            Vaidya Partner: <br />
            Turn Expertise into Opportunity
          </h2>

          <p className="font-[Duplet] font-extralight text-base leading-5 text-white mb-4 w-full lg:w-[45%]">
            Join Prevekta as a Vaidya Partner and bring authentic Ayurveda to
            more people. We provide you with a professional platform, patient
            reach, and growth opportunities so you can focus on healing while we
            support you in building a thriving practice.
          </p>
        </div>

        <div className="lg:flex gap-32">
          <Image
            src={VaidaPartner}
            alt="vaidya partner"
            className="h-[163px] lg:w-[656px] w-full lg:h-[288px] rounded-2xl object-cover mb-4 "
          />
          <div className="lg:flex flex-col justify-between h-auto lg:mb-4">
            <ul className="flex flex-col gap-4 mb-4">
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="16"
                    fill="none"
                    viewBox="0 0 14 16"
                  >
                    <path
                      fill="#132D47"
                      fillRule="evenodd"
                      d="M10.522 7.038a3.87 3.87 0 0 0-1.98-1.341 3.7 3.7 0 0 1-2.463.93 3.7 3.7 0 0 1-2.463-.93C2.009 6.157.778 7.638.826 9.38l.05 1.849a.884.884 0 0 0 .884.857h5.76a.9.9 0 0 1-.193-.443v-.008a.9.9 0 0 1 .036-.357l.094-.299a.4.4 0 0 0 .014-.202.4.4 0 0 0-.09-.181l-.128-.151a.9.9 0 0 1-.175-.324.9.9 0 0 1-.021-.365.86.86 0 0 1 .393-.6l.265-.17a.4.4 0 0 0 .14-.146.4.4 0 0 0 .048-.198v-.197q0-.194.074-.359l.006-.013a.878.878 0 0 1 .535-.461.9.9 0 0 1 .367-.029l.312.041q.109.014.202-.022a.4.4 0 0 0 .164-.12l.126-.152a.9.9 0 0 1 .29-.228.9.9 0 0 1 .358-.084h.013q.088 0 .172.02m-.79 7.236v-.82a.84.84 0 0 1-.538-.007.9.9 0 0 1-.318-.186.9.9 0 0 1-.21-.303l-.12-.29a.4.4 0 0 0-.181-.202l-.019 1.81v1.136l.53-.527c.09-.09.237-.09.328 0l.528.526zm2.606.001-.018-1.81a.4.4 0 0 0-.062.04.4.4 0 0 0-.12.163l-.12.29a.9.9 0 0 1-.21.303.9.9 0 0 1-.317.186.87.87 0 0 1-.54.007v.82h.002v1.137l.528-.526c.09-.09.237-.09.328 0l.53.527zm.028-2.306a.86.86 0 0 0-.656.522l-.12.29a.4.4 0 0 1-.097.142.4.4 0 0 1-.149.086.4.4 0 0 1-.172.022.4.4 0 0 1-.164-.056l-.17-.099a1 1 0 0 0-.495-.124c-.174 0-.35.042-.494.124l-.17.1a.4.4 0 0 1-.164.055.4.4 0 0 1-.172-.022.4.4 0 0 1-.15-.086.4.4 0 0 1-.096-.143l-.12-.289a.87.87 0 0 0-.656-.522l-.195-.033a.4.4 0 0 1-.161-.062.4.4 0 0 1-.118-.126.4.4 0 0 1-.058-.162v-.005a.4.4 0 0 1 .018-.167l.095-.298a.87.87 0 0 0 .025-.431.86.86 0 0 0-.19-.389l-.128-.15a.4.4 0 0 1-.082-.15.4.4 0 0 1-.009-.173.4.4 0 0 1 .06-.161.4.4 0 0 1 .123-.12l.265-.169a.87.87 0 0 0 .298-.314.86.86 0 0 0 .104-.418v-.198q0-.092.033-.17l.004-.008a.4.4 0 0 1 .1-.128.4.4 0 0 1 .15-.086.4.4 0 0 1 .172-.012l.312.04c.151.02.297.003.43-.049a.86.86 0 0 0 .351-.255l.127-.152a.4.4 0 0 1 .298-.145.4.4 0 0 1 .163.038.4.4 0 0 1 .135.107l.127.152a.86.86 0 0 0 .35.255q.203.079.431.05l.312-.041a.4.4 0 0 1 .172.012.4.4 0 0 1 .15.086.4.4 0 0 1 .104.136.4.4 0 0 1 .034.17l-.001.198a.856.856 0 0 0 .402.733l.265.168a.4.4 0 0 1 .124.12q.045.069.059.16a.4.4 0 0 1-.009.173.4.4 0 0 1-.082.15l-.13.151a.86.86 0 0 0-.165.82l.094.298a.4.4 0 0 1 .018.172.4.4 0 0 1-.059.162.4.4 0 0 1-.117.126.4.4 0 0 1-.16.062zm-1.163-1.28.247 1.008a.145.145 0 0 1-.056.154.15.15 0 0 1-.166.006l-.885-.546-.886.547a.15.15 0 0 1-.165-.007.15.15 0 0 1-.058-.155l.248-1.007-.796-.67a.14.14 0 0 1-.045-.158.15.15 0 0 1 .13-.102l1.04-.077.393-.96a.15.15 0 0 1 .138-.092c.061 0 .114.035.137.092l.394.96 1.039.077a.15.15 0 0 1 .13.102.15.15 0 0 1-.045.158zM6.078.59a2.58 2.58 0 0 1 2.586 2.575 2.58 2.58 0 0 1-2.586 2.575 2.58 2.58 0 0 1-2.586-2.575A2.58 2.58 0 0 1 6.078.588"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base text-white leading-5 font-[Duplet] ">
                  Professional Platform
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="#132D47"
                      fillRule="evenodd"
                      d="M2.955 9.235a1.488 1.488 0 1 1 0-.47h1.433a4.6 4.6 0 0 1 1.185-2.86L4.56 4.892a1.487 1.487 0 1 1 .332-.332l1.014 1.015a4.6 4.6 0 0 1 2.86-1.186V2.955a1.488 1.488 0 1 1 .47 0v1.433a4.6 4.6 0 0 1 2.858 1.186l1.015-1.014a1.488 1.488 0 1 1 .332.331l-1.014 1.015a4.6 4.6 0 0 1 1.185 2.86h1.433A1.488 1.488 0 0 1 18 9a1.487 1.487 0 0 1-2.956.234h-1.433a4.6 4.6 0 0 1-.864 2.462 4 4 0 0 0-2.672-2.47 1.957 1.957 0 1 0-2.15 0 4 4 0 0 0-2.672 2.47 4.6 4.6 0 0 1-.864-2.462zM4.89 13.44a1.487 1.487 0 1 1-.332-.333l1.075-1.074a3.523 3.523 0 0 1 5.856-1.455c.41.41.708.911.875 1.455l1.074 1.074a1.487 1.487 0 1 1-.333.332l-1.014-1.014a4.6 4.6 0 0 1-2.86 1.186v1.433a1.488 1.488 0 1 1-1.722 1.468c.001-.74.544-1.356 1.253-1.468v-1.433a4.6 4.6 0 0 1-2.86-1.186L4.89 13.441zm4.108-4.363A1.488 1.488 0 1 1 9 6.103 1.488 1.488 0 0 1 9 9.078"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-base text-white leading-5 font-[Duplet] ">
                  Patient Reach
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#132D47"
                      d="M10.495 7.364a.413.413 0 0 1-.13.604.45.45 0 0 1-.227.061h-.893v7.139a.24.24 0 0 1-.074.172.26.26 0 0 1-.178.072H7.009a.26.26 0 0 1-.18-.072.24.24 0 0 1-.073-.172V8.029H5.86a.45.45 0 0 1-.227-.062.43.43 0 0 1-.16-.166.41.41 0 0 1 .03-.437l2.14-2.908A.43.43 0 0 1 8 4.28a.45.45 0 0 1 .358.177zM5.66 11.056a.41.41 0 0 1-.13.603.45.45 0 0 1-.227.06h-.892v3.449a.24.24 0 0 1-.075.172.26.26 0 0 1-.178.072H2.174a.26.26 0 0 1-.18-.072.24.24 0 0 1-.074-.172V11.72h-.895a.44.44 0 0 1-.226-.061.42.42 0 0 1-.21-.39.4.4 0 0 1 .077-.215l2.143-2.907a.44.44 0 0 1 .357-.176.45.45 0 0 1 .357.177zM15.363 4.107a.43.43 0 0 1-.161.168.45.45 0 0 1-.229.062h-.892v10.83a.24.24 0 0 1-.073.173.25.25 0 0 1-.179.072h-1.984a.26.26 0 0 1-.179-.072.24.24 0 0 1-.073-.172V4.338h-.897a.45.45 0 0 1-.227-.063.43.43 0 0 1-.16-.166.41.41 0 0 1 .03-.437l2.14-2.908a.44.44 0 0 1 .357-.176.45.45 0 0 1 .357.176l2.138 2.91a.4.4 0 0 1 .032.433"
                    ></path>
                  </svg>
                </div>
                <p className="text-base text-white leading-5 font-[Duplet] ">
                  Growth Opportunities
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="flex justify-center items-center h-7 w-7 rounded-full bg-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#132D47"
                      d="M9.076 7.867a1.95 1.95 0 0 1-1.077.328c-.39 0-.764-.125-1.076-.328a1.385 1.385 0 0 0-.937 1.312v.703c0 .14.11.25.25.25h3.51c.141 0 .25-.11.25-.25v-.687a1.36 1.36 0 0 0-.92-1.328M7.998 7.524a1.218 1.218 0 1 0 0-2.436 1.218 1.218 0 0 0 0 2.436M7.828 4.025c.078.109.25.109.327 0l.999-1.25a.211.211 0 0 0-.172-.344h-.468V.776a.19.19 0 0 0-.187-.188h-.702a.19.19 0 0 0-.188.188v1.64H6.97c-.171 0-.28.203-.171.343zM4.755 3.353l-.328.328-1.17-1.171a.18.18 0 0 0-.266 0l-.483.5a.18.18 0 0 0 0 .265l1.17 1.171-.328.328c-.124.125-.046.344.125.36l1.592.187c.14.016.25-.094.234-.234l-.187-1.609c-.016-.187-.234-.25-.36-.125M2.757 9.18l1.248-1a.205.205 0 0 0 0-.328l-1.248-1a.211.211 0 0 0-.343.172v.468H.775a.19.19 0 0 0-.187.188v.703a.19.19 0 0 0 .187.187h1.639v.469c0 .14.202.25.343.14M5.067 10.71l-1.592.188c-.171.015-.25.234-.125.359l.328.328-1.17 1.171a.18.18 0 0 0 0 .266l.5.5a.18.18 0 0 0 .264 0l1.17-1.172.328.328c.125.125.344.047.36-.125l.186-1.593c0-.156-.109-.266-.25-.25M8.172 11.99a.205.205 0 0 0-.328 0l-.999 1.25a.211.211 0 0 0 .172.344h.468v1.64a.19.19 0 0 0 .187.188h.703a.19.19 0 0 0 .187-.188V13.6h.468c.172 0 .28-.203.172-.344zM12.322 11.585l.327-.328c.125-.125.047-.344-.125-.36l-1.591-.187a.207.207 0 0 0-.234.234l.187 1.594c.016.172.234.25.359.125l.328-.328 1.17 1.171a.18.18 0 0 0 .265 0l.5-.5a.18.18 0 0 0 0-.265zM15.224 7.477h-1.638v-.469c0-.172-.203-.281-.344-.172l-1.248 1a.205.205 0 0 0 0 .328l1.248 1c.14.11.344.015.344-.172v-.469h1.638a.19.19 0 0 0 .187-.187v-.703c0-.078-.078-.156-.187-.156M10.933 5.306l1.592-.188c.172-.016.25-.234.125-.36l-.328-.327 1.17-1.172a.18.18 0 0 0 0-.265l-.499-.485a.18.18 0 0 0-.265 0l-1.17 1.172-.328-.328c-.125-.125-.344-.047-.36.125l-.186 1.593c0 .14.109.25.25.235"
                    ></path>
                  </svg>
                </div>
                <p className="text-base text-white leading-5 font-[Duplet] ">
                  Focus on Healing
                </p>
              </li>
            </ul>
            <SendReqBtn btntype="active" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default FinancePage;
