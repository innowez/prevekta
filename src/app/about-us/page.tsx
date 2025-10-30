import Image from "next/image";
import React from "react";
import AboutBg from "../../assets/images/about-bg.png";
import AbGrid1 from "../../assets/images/abgrid1.png";
import ContactSection from "@/components/layout/HomeSection/ContactSection";
import PrevektaWork from "./comp/PrevektaWork";
import RoadmapBg from "../../assets/images/roadmap-bg.png";
import "./timeStyle.css";

function page() {
  const roadlist = [
    {
      head: "120 Cluster Network Across India",
      desc: "We are developing 120 major healthcare clusters that connect India’s key cities and extend to surrounding towns. Each cluster will include Prevekta Care, Cure, and Cherish centers, ensuring authentic Ayurvedic treatment and guidance reach every household.",
    },
    {
      head: "Technology-Enabled Healing",
      desc: "Our upcoming digital platforms will enable teleconsultations, digital health records, and personalized wellness tracking, bringing Ayurveda and technology together for more connected and convenient care.",
    },
    {
      head: "Standardized Quality & Training",
      desc: "Through Prevekta Academy, we are preparing a new generation of Ayurvedic professionals. Every Prevekta center will follow uniform treatment standards, quality assurance, and ethical practices to ensure trust and consistency.",
    },
    {
      head: "Sustainability & Green Practices",
      desc: "All Prevekta centers will reflect our commitment to nature with eco-friendly infrastructure, responsible sourcing of herbs, and sustainable operations, staying true to Ayurveda’s principles of harmony with the environment.",
    },
    {
      head: "Wellness vs Illness",
      desc: "At Prevekta, we believe that health is a choice we make every day. When we care for our body, mind, and habits, wellness adds to our life; when we ignore early signs and preventive care, illness takes its place. Our mission is to help individuals stay on the side of wellness—through awareness, timely guidance, and authentic Ayurvedic care.",
    },
    {
      head: "Global Vision",
      desc: "By 2030, Prevekta aims to become India’s largest and most trusted Ayurveda healthcare network, touching lives across the nation and beyond. We are building not just a healthcare system, but a movement for preventive, holistic, and sustainable living.",
    },
  ];
  return (
    <>
      <section className="w-full h-screen p-4">
        <div className="relative rounded-2xl lg:rounded-[28px] h-[602px] lg:h-[568px]">
          <Image
            src={AboutBg}
            alt="contact-bg"
            className="w-full h-[602px] lg:h-[568px] object-cover rounded-2xl lg:rounded-[28px] "
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] rounded-2xl lg:rounded-[28px]"></div>

          <div className="text-white absolute left-[16px] top-[16px]">
            <h1 className="text-2xl leading-7 font-[Atyp] mb-5">
              Reviving Ayurveda: The Prevekta Approach
            </h1>
            <h2 className="text-base leading-5 font-[Duplet]">
              A modern approach to integrating Ayurveda into contemporary
              healthcare systems, making holistic wellness accessible for all.
            </h2>
          </div>

          <div className="absolute left-[16px] bottom-[16px] right-[16px] bg-[#132D474D] p-4 rounded-xl lg:rounded-2xl">
            <p className="text-white text-base leading-5 font-[Duplet]">
              Prevekta Ayurveda, An Initiative By Viriksham Wellness Pvt. Ltd.,
              Is An Integrated Ayurvedic Ecosystem That Modernizes Traditional
              Healthcare Through Holistic Service, Product, And Digital Models.
              With The Tagline “Thrive Beyond,” It Bridges Ancient Wisdom And
              Modern Wellness, Promoting Ayurveda As An Accessible, Reliable,
              And Evidence-based Lifestyle Healthcare System Rooted In
              Protection, Prevention, And Progression.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 mb-10 lg:mb-24">
        <div className="">
          <h1 className="text-2xl text-primary leading-7 font-Atyp mb-4">
            Mission
          </h1>
          <p className="text-base text-primary leading-5 font-[Duplet]">
            To build an ecosystem where Ayurveda, technology, and trust thrive
            together.
          </p>
        </div>

        <div>
          <div className="flex"></div>
        </div>
      </section>

      <section className="px-4 mb-10 lg:mb-24">
        <h1 className="text-2xl lg:text-[40px] text-primary text-center font-[Atyp] font-semibold leading-12 lg:leading-[29px] mb-8 lg:mb-12">Care, Cure, Cherish</h1>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 mt-6">
          <div className="w-full lg:w-1/3 border border-primary rounded-lg lg:rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-xl lg:text-[32px] text-primary font-[Atyp] font-semibold leading-6 lg:leading-[38px] ">
              Prevekta Care Consultation-First Model
            </h1>
            <p className="text-base lg:text-lg text-primary leading-5 lg:leading-[23px] font-[Duplet] mt-4">
              Prevekta Care™ centers focus on personalized Ayurvedic
              consultations, guiding patients on their wellness journeys.
              Designed for accessibility and expert support, these centers
              provide tailored guidance, follow-ups, and practical wellness
              insights, making authentic Ayurveda a part of everyday life.
            </p>
          </div>

          <div className="w-full lg:w-1/3 border border-primary rounded-lg lg:rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-xl lg:text-[32px] text-primary font-[Atyp] font-semibold leading-6 lg:leading-[38px]">
              Prevekta Cure Day care Model
            </h1>
            <p className="text-base lg:text-lg text-primary leading-5 lg:leading-[23px] font-[Duplet] mt-4">
              Prevekta Cure centers bring holistic Ayurvedic treatments closer
              to your community. Designed as mini-clinics, they offer
              personalized therapies, certified doctors, equipped treatment
              rooms, and on-site herbal medicines in a modern yet serene
              environment. By bridging traditional Ayurveda with accessible
              care, Prevekta Cure delivers effective, compassionate wellness
              solutions, while providing a promising opportunity for franchise
              partners in India’s growing Ayurvedic healthcare sector.
            </p>
          </div>

          <div className="w-full lg:w-1/3 border border-primary rounded-lg lg:rounded-lg p-5 flex flex-col justify-between">
            <h1 className="text-xl lg:text-[32px] text-primary font-[Atyp] font-semibold leading-6 lg:leading-[38px]">
              Prevekta Cherish IP Ayurvedic Hospital
            </h1>
            <p className="text-base lg:text-lg text-primary leading-5 lg:leading-[23px] font-[Duplet] mt-4">
              Prevekta Cherish centers redefine Ayurvedic care with
              state-of-the-art hospital facilities. Combining traditional
              Ayurvedic practices with modern infrastructure, these hospitals
              provide a serene and effective environment for healing. From
              comprehensive Panchakarma therapies to expert Ayurvedic doctors
              and a full spectrum of support staff, Prevekta Cherish ensures
              personalized, holistic care for every individual seeking wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 mb-10 lg:mb-24 flex flex-col lg:flex-row">
        <div>
          <h1 className="text-xl text-primary text-center font-[Atyp] font-semibold leading-6 ">
            Our Story
          </h1>
          <h2 className="text-2xl text-primary text-center font-[Atyp] font-semibold leading-7">
            Building a Legacy of <br />
            Holistic Health
          </h2>
        </div>

        <div>
          <div className="timeline">
            <ul>
              <li>
                <div className="content">
                  <h3>Seeds of Healing with Ayurveda</h3>
                  <p>
                    Planted the roots of therapy to bring the time-tested
                    healing of Ayurveda to our community, offering natural,
                    accessible care to enhance well-being.
                  </p>
                </div>
                <div className="time">
                  <h4>1998</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>First Sprout</h3>
                  <p>
                    Our first establishment, opened to provide personalized
                    Ayurvedic treatments, allowing us to guide individuals on
                    their unique wellness paths.
                  </p>
                </div>
                <div className="time">
                  <h4>2010</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Branching Out</h3>
                  <p>
                    With the next step, we expanded our services to address
                    complex health needs with advanced Ayurvedic therapies,
                    providing comprehensive health and wealth solutions.
                  </p>
                </div>
                <div className="time">
                  <h4>2018</h4>
                </div>
              </li>
              <li>
                <div className="content">
                  <h3>Blossoming Ahead with Prevekta</h3>
                  <p>
                    Prevekta launched as a vision for the future of holistic
                    healthcare, merging Ayurveda with modern practices to
                    support healing for advanced health, offering a complete
                    health and wealth solution.
                  </p>
                </div>
                <div className="time">
                  <h4 className="text-primary">2024</h4>
                </div>
              </li>

              <div style={{ clear: "both" }} />
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate mb-10 lg:mb-24 py-6 px-4 lg:py-16 lg:px-20 overflow-hidden">
        <Image
          src={RoadmapBg}
          alt="roadmap-bg"
          className="absolute object-fill w-full h-full blur-xl"
        />
        <div className="absolute z-10 inset-0 bg-[#132D4766] "></div>
        <div
          // className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          className="relative z-20"
        >
          <div className="mb-8 lg:mb-12">
            <h1 className="text-2xl lg:text-[40px] text-white text-center font-[Atyp] font-semibold leading-7 lg:leading-[48px] mb-4 lg:mb-6 ">
              Future Roadmap
            </h1>
            <h2 className="text-base lg:text-lg text-white text-center leading-5 lg:leading-[23px] font-[Duplet]">
              At Prevekta, we envision a future where Ayurveda becomes the first
              choice for holistic healthcare—accessible, reliable, and rooted in
              authenticity. Our journey ahead focuses on creating a connected
              ecosystem that empowers people to prevent illness, heal naturally,
              and live in balance.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-7">
            {roadlist.map((item, ind) => (
              <div
                key={ind + 1 + "a"}
                className="border border-white rounded-[8px] lg:rounded-2xl p-5 lg:p-4 flex flex-col gap-4 lg:gap-6 min-h-[296px]"
              >
                <div className="flex justify-center items-center p-2 rounded-[8px] bg-secondary w-fit  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      fill="#132D47"
                      fillRule="evenodd"
                      d="M6.234 4.924c-.725 0-1.314.589-1.315 1.313v8.526c.001.724.59 1.312 1.315 1.313h8.533c.725 0 1.313-.589 1.314-1.313V6.237c0-.724-.59-1.312-1.314-1.313zm8.888 1.612v7.928c0 .36-.294.653-.655.654H6.533a.657.657 0 0 1-.655-.655V6.537c0-.36.294-.654.655-.654h7.934c.361 0 .654.294.655.654m2.893.737V4.798a.958.958 0 1 1 .438 0V7.49a.23.23 0 0 1-.229.228h-1.707v-.445zM0 .967a.959.959 0 1 1 1.178.932v5.374h3.305v.436H.96A.23.23 0 0 1 .73 7.48V1.899A.955.955 0 0 1 0 .967m2.985 12.771v2.464a.958.958 0 1 1-.437 0V13.51c0-.125.102-.228.228-.228h1.716v.436zm4.285 2.774h.436v3.521a.23.23 0 0 1-.228.228H1.892a.958.958 0 1 1 0-.438H7.27zM2.897 2.773a.958.958 0 0 1 1.892-.228h2.698a.23.23 0 0 1 .228.228v1.715H7.27V2.992H4.793a.96.96 0 0 1-1.892-.228zm1.598 7.946H1.892a.959.959 0 1 1 0-.438h2.591zm13.608 7.508a.958.958 0 0 1-1.892.228h-2.698a.23.23 0 0 1-.228-.228v-1.715h.436v1.495l2.486.001a.96.96 0 0 1 1.892.229zM21 20.033a.96.96 0 1 1-1.178-.932v-5.374h-3.305v-.436h3.524a.23.23 0 0 1 .229.228v5.582c.43.104.732.49.73.932m-9.542 0a.957.957 0 1 1-1.186-.932v-2.59h.456v2.59c.43.104.732.49.73.932m2.283-15.545h-.448V.967c0-.126.103-.228.229-.228h5.586a.959.959 0 1 1 0 .438h-5.379zM9.54.967a.957.957 0 0 1 1.552-.75.957.957 0 0 1-.365 1.683v2.589h-.456v-2.59a.955.955 0 0 1-.73-.932m6.976 9.305h2.59a.958.958 0 1 1 0 .438h-2.59zM6.533 6.317a.23.23 0 0 0-.228.229v7.918a.23.23 0 0 0 .228.228h7.934a.23.23 0 0 0 .228-.228V6.537a.23.23 0 0 0-.228-.228zm7.487 4.502a.61.61 0 0 1-.503.593l-.21.04q-.06.174-.143.344l.122.175h-.001a.61.61 0 0 1-.069.78l-.457.457a.61.61 0 0 1-.78.068l-.175-.121a3 3 0 0 1-.345.143l-.04.21h.001a.61.61 0 0 1-.602.502h-.637a.61.61 0 0 1-.594-.495l-.04-.21a3 3 0 0 1-.343-.143l-.176.121a.61.61 0 0 1-.781-.07l-.457-.455a.61.61 0 0 1-.068-.78l.121-.175a3 3 0 0 1-.144-.345l-.216-.046a.61.61 0 0 1-.503-.602v-.629a.61.61 0 0 1 .503-.593l.21-.04q.061-.175.143-.343l-.121-.176a.61.61 0 0 1 .07-.78l.456-.456a.61.61 0 0 1 .78-.069l.176.121q.168-.081.345-.143l.039-.21H9.58a.61.61 0 0 1 .603-.502h.639c.29.004.536.211.591.495l.04.21q.174.061.344.143l.175-.121a.61.61 0 0 1 .781.07l.457.456c.207.209.237.537.068.78l-.12.175q.081.168.143.344l.21.04V9.58c.29.053.502.306.502.602zm-.582-.812-.366-.065a.17.17 0 0 1-.136-.123 2.5 2.5 0 0 0-.228-.557.17.17 0 0 1 0-.185l.212-.305a.174.174 0 0 0-.02-.228l-.457-.456a.175.175 0 0 0-.228-.022l-.306.212v.001a.17.17 0 0 1-.186 0 2.4 2.4 0 0 0-.556-.228.17.17 0 0 1-.124-.137l-.066-.365a.174.174 0 0 0-.174-.144h-.622c-.086 0-.16.06-.174.144l-.066.365a.17.17 0 0 1-.123.137q-.293.08-.557.228a.17.17 0 0 1-.185 0l-.306-.212a.174.174 0 0 0-.228.02l-.456.457a.174.174 0 0 0-.022.228l.212.305h.001a.17.17 0 0 1 0 .185 2.4 2.4 0 0 0-.228.557.17.17 0 0 1-.137.123l-.366.066a.174.174 0 0 0-.143.173v.639c-.001.085.06.159.143.173l.366.066c.066.01.12.059.137.123q.08.292.228.556a.17.17 0 0 1 0 .185l-.212.305a.174.174 0 0 0 .02.229l.457.456c.06.063.158.072.228.021l.306-.212a.17.17 0 0 1 .185 0q.264.148.557.227a.17.17 0 0 1 .123.137l.066.366a.174.174 0 0 0 .174.143h.64-.002c.086 0 .16-.06.174-.143l.066-.366a.17.17 0 0 1 .123-.137q.293-.079.557-.228a.17.17 0 0 1 .185 0l.306.212v.001c.07.05.168.042.228-.021l.457-.457a.174.174 0 0 0 .021-.228l-.212-.305h-.001a.17.17 0 0 1 0-.185 2.4 2.4 0 0 0 .228-.556.17.17 0 0 1 .137-.123l.366-.066a.174.174 0 0 0 .144-.174v-.638c0-.09-.07-.166-.16-.173m-1.814 1.616a1.599 1.599 0 0 1-2.595-1.758 1.598 1.598 0 1 1 2.595 1.758m-.309-1.937a1.14 1.14 0 0 1-1.223 1.873 1.14 1.14 0 1 1 1.223-1.873"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>

                <h1 className="text-xl text-white font-[Atyp] font-semibold leading-6">
                  {item.head}
                </h1>
                <p className="text-base lg:text-lg text-white leading-5 lg:leading-[23px] font-[Duplet]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 lg:px-5">
        <PrevektaWork />
      </section>

      <ContactSection />
    </>
  );
}

export default page;
