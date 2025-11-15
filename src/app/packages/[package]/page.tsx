"use client";

import React, { useState } from "react";
import UrbanCleanse from "@/assets/images/urban_cleanse.png";
import UCImage2 from "@/assets/images/uc2.png";
import UCImage3 from "@/assets/images/uc3.png";
import UCImage4 from "@/assets/images/uc4.png";
import UCImage5 from "@/assets/images/uc5.png";

import UCTImage1 from "@/assets/images/uct1.png";
import UCTImage2 from "@/assets/images/uct2.png";
import UCTImage3 from "@/assets/images/uct3.png";
import UCTImage4 from "@/assets/images/uct4.png";
import UCTImage5 from "@/assets/images/uct5.png";

import Image from "next/image";
import { motion } from "motion/react";
// import { i } from "framer-motion/client";
import ContactSection from "@/components/layout/HomeSection/ContactSection";

function PackageDetail() {
  const [selectBtn, setSelectBtn] = useState({
    inclusion: false,
    guidelines: false,
    summary: false,
  });
  return (
    <div className="w-full">
      <section className="px-10 pt-28 mb-12">
        <div className="flex justify-between mb-10 ">
          <h1 className="text-[60px] text-primary leading-[72px] font-Atyp font-semibold ">
            URBAN CLEANSE
          </h1>
          <div>
            <p className="text-lg text-primary font-[Duplet] leading-[18px] max-w-[454px] ">
              A 3-day Ayurvedic package that gently purifies the body, calms the
              mind, and restores inner balance from the effects of urban living.
            </p>
          </div>
        </div>

        <div>
          <div className="flex gap-4 mb-4 max-w-[3160px] mx-auto ">
            <Image
              src={UrbanCleanse}
              alt="urban"
              className="object-cover object-center w-[510px] h-[285px] rounded-2xl "
            />
            <Image
              src={UCImage2}
              alt="urban"
              className="object-cover object-center w-[391px] h-[285px] rounded-2xl "
            />
            <Image
              src={UCImage3}
              alt="urban"
              className="object-cover object-center w-[427px] h-[285px] rounded-2xl "
            />
          </div>

          <div className="flex gap-4 mb-4">
            <Image
              src={UCImage4}
              alt="urban"
              className="object-cover object-center w-[510px] h-[285px] rounded-2xl "
            />
            <Image
              src={UCImage5}
              alt="urban"
              className="object-cover object-center w-[391px] h-[285px] rounded-2xl "
            />
          </div>
        </div>
      </section>

      <div className="px-10 mb-12">
        <div className="bg-black w-full mb-12 h-[1px]" />
      </div>

      <section className="flex gap-6 px-10">
        <div className="border border-primary rounded-3xl w-full p-4">
          <div className="flex gap-2 overflow-x-auto px-4 mb-4 no-scrollbar ">
            <motion.button
              className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.inclusion
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  inclusion: !prev.inclusion,
                  guidelines: false,
                  summary: false,
                }))
              }
              // whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span layout="position">Inclusion</motion.span>
            </motion.button>

            <motion.button
              className={`px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.guidelines
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  guidelines: !prev.guidelines,
                  inclusion: false,
                  summary: false,
                }))
              }
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.span>Guidelines</motion.span>
            </motion.button>

            <motion.button
              className={` px-4 py-2 rounded-xl uppercase text-lg font-[Duplet] cursor-pointer flex items-center gap-4 ${
                selectBtn.summary
                  ? "bg-primary text-white"
                  : "border border-primary text-primary bg-white"
              }`}
              onClick={() =>
                setSelectBtn((prev) => ({
                  ...prev,
                  summary: !prev.summary,
                  inclusion: false,
                  guidelines: false,
                }))
              }
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span>Summary</span>
            </motion.button>
          </div>

          <div className="flex gap-4">
            <div className="bg-[#81DE7633] rounded-2xl p-8 flex flex-col gap-7 w-[268px] h-fit ">
              <p className="font-[Duplet] text-lg text-primary ">Description</p>
              <p className="font-[Duplet] text-lg text-primary ">
                Consultation
              </p>
              <p className="font-[Duplet] text-lg text-primary ">Therapies</p>
              <p className="font-[Duplet] text-lg text-primary ">Bonus</p>
            </div>

            <div className="bg-[#81DE7633] rounded-2xl flex flex-col gap-6 p-6 w-[665px]">
              <div>
                <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                  Description
                </h1>
                <p className="font-[duplet] text-lg leading-[23px] text-primary ">
                  The  Urban Cleanse is a compact yet powerful 3- day Ayurvedic
                  detox program designed for busy urban lifestyles. Rooted in
                  classical Panchakarma principles, this therapy focuses on
                  rejuvenating the body, clearing toxins, improving digestion,
                  and restoring natural vitality — all within a short timeframe.
                </p>
              </div>

              <hr className="w-full bg-[#00000033] h-0.5" />

              <div>
                <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                  Consultation
                </h1>
                <h2 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                  Personalized Consultation with an Ayurvedic Medical
                  Practitioner includes
                </h2>

                <p className="font-[duplet] text-lg leading-[23px] text-primary ">
                  <ul className="list-disc pl-6">
                    <li>Detailed Case Assessment</li>
                    <li>Examination (Ashta Sthana Pareeksha)</li>
                    <li>Nadi Pareeksha (Pulse Diagnosis)</li>
                    <li>Prakruti & Vikruti Analysis</li>
                    <li>Personalized Therapy Plan</li>
                    <li>Herbal formulations  Support</li>
                    <li>Follow-up & Progress Monitoring</li>
                  </ul>
                </p>
              </div>

              <hr className="w-full bg-[#00000033] h-0.5" />

              <div>
                <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                  Therapies
                </h1>

                <h2 className=" font-[Duplet] text-lg text-primary font-semibold mb-2 ">
                  Session Duration:
                </h2>
                <p className="font-[Duplet] text-lg text-primary leading-[23px] mb-4 ">
                  Total 3 sessions <br />
                  1- 1½ hours each session
                </p>

                <div className="flex flex-wrap gap-4 ">
                  <div>
                    <Image
                      src={UCTImage1}
                      alt="uct1"
                      className="w-[195px] h-[88px] object-cover rounded-xl mb-2 "
                    />
                    <p className="font-[Duplet] text-lg text-primary text-center ">
                      Abhyanga
                    </p>
                  </div>

                  <div>
                    <Image
                      src={UCTImage2}
                      alt="uct1"
                      className="w-[195px] h-[88px] object-cover rounded-xl mb-2 "
                    />
                    <p className="font-[Duplet] text-lg text-primary text-center ">
                      Swedanam
                    </p>
                  </div>

                  <div>
                    <Image
                      src={UCTImage3}
                      alt="uct1"
                      className="w-[195px] h-[88px] object-cover rounded-xl mb-2 "
                    />
                    <p className="font-[Duplet] text-lg text-primary text-center ">
                      Kashaya dhara
                    </p>
                  </div>

                  <div>
                    <Image
                      src={UCTImage4}
                      alt="uct1"
                      className="w-[195px] h-[88px] object-cover rounded-xl mb-2 "
                    />
                    <p className="font-[Duplet] text-lg text-primary text-center ">
                      Nasyam
                    </p>
                  </div>

                  <div>
                    <Image
                      src={UCTImage5}
                      alt="uct1"
                      className="w-[195px] h-[88px] object-cover object-bottom rounded-xl mb-2 "
                    />
                    <p className="font-[Duplet] text-lg text-primary text-center ">
                      Shiro dhara
                    </p>
                  </div>
                </div>
              </div>

              <hr className="w-full bg-[#00000033] h-0.5" />

              <div>
                <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                  Bonus
                </h1>
                <div className="flex gap-4">
                  <div className="p-4 bg-[#81DE7633] rounded-2xl w-1/2 ">
                    <h1 className="text-lg text-primary font-[Duplet] font-semibold mb-4 ">
                      Liver cleanse herbal tisane
                    </h1>
                    <p className="font-[Duplet] text-lg text-primary leading-[23px] ">
                      An Ayurvedic blend crafted to gently detoxify the liver,
                      improve digestion, and boost metabolism. This rejuvenating
                      herbal tisane supports natural cleansing, reduces
                      bloating, and restores balance. Infused with traditional
                      Ayurvedic ingredients, it enhances vitality and promotes a
                      sense of lightness and clarity. Sip warm daily to feel
                      refreshed, energized, and connected to your well-being.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 ">
                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Detoxifies liver
                        </span>

                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Boosts metabolism
                        </span>

                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Reduces bloating
                        </span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#81DE7633] rounded-2xl w-1/2 ">
                    <h1 className="text-lg text-primary font-[Duplet] font-semibold mb-4 ">
                      Diet & Lifestyle Guidance
                    </h1>
                    <p className="font-[Duplet] text-lg text-primary leading-[23px] ">
                      During & after cleanse therapy, diet acts as medicine and
                      also provides nourishment. Ayurveda recommends light,
                      warm, freshly prepared foods that support liver and gut
                      function. Following a proper diet makes digestion easier,
                      and also promotes the quality of the treatment. Engage in
                      light physical activities such as yoga, relaxing
                      exercises, or a brisk 30 mins walk to activate circulation
                      and metabolism.  Follow proper & adequate  sleep during
                      the night
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4 ">
                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Light & warm diet
                        </span>

                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Gentle yoga or walk
                        </span>

                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-[Duplet] ">
                            Proper sleep & rest
                        </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary rounded-3xl flex flex-col gap-2 p-5 py-8 w-[355px] h-fit ">
          <p className="text-white text-lg font-[Duplet] ">Actual Price</p>
          <div className="flex gap-4 items-center">
            <p className="text-3xl text-[#FFFFFF80] font-[Atyp] font-semibold line-through">
              ₹ 9999
            </p>
            <span className="text-lg text-[#FF383C] font-[Duplet]  ">
              16% Off
            </span>
          </div>
          <p className="font-[Duplet] text-lg text-white ">Discount Price</p>

          <p className="font-[Atyp] text-[40px] text-white ">₹ 7999</p>

          <p className="font-[Duplet] text-lg text-white ">
            Excluding Applicable Taxes
          </p>

          <div className="flex justify-between items-center gap-4 bg-secondary px-6 py-4 rounded-full cursor-pointer mt-4 w-[291px]">
            <span>Checkout now</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="15"
              fill="none"
              viewBox="0 0 23 15"
            >
              <path
                fill="#132D47"
                d="M22.317 6.997 16.316.245c-.314-.319-.77-.316-1.06-.052a.78.78 0 0 0-.054 1.06l4.888 5.498H.75a.75.75 0 1 0 0 1.5h19.34l-4.888 5.497c-.264.292-.23.788.053 1.06.295.285.797.24 1.06-.052l6.002-6.751c.265-.37.234-.685 0-1.008"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <ContactSection />
    </div>
  );
}

export default PackageDetail;
