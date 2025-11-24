import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import UCTImage1 from "@/assets/images/uct1.png";
import UCTImage2 from "@/assets/images/uct2.png";
import UCTImage3 from "@/assets/images/uct3.png";
import UCTImage4 from "@/assets/images/uct4.png";
import UCTImage5 from "@/assets/images/uct5.png";
// import { motion, useScroll } from "motion/react";

function Inclusions() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = [
    { id: 'description', label: 'Description' },
    { id: 'consultation', label: 'Consultation' },
    { id: 'therapies', label: 'Therapies' },
    { id: 'bonus', label: 'Bonus' }
  ];

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const newIndex = Math.min(
        Math.floor(latest * sections.length),
        sections.length - 1
      );
      setActiveIndex(newIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="flex gap-4">
      <ul
        role="list"
        className="bg-[#81DE7633] rounded-2xl p-8 w-[268px] h-fit "
      >
        {sections.map((section, index) => (
          <li key={section.id} className="group relative flex flex-col pb-4 pl-7 last:pb-0">
            {/* Vertical line */}
            <motion.div 
              className="absolute bottom-0 left-[calc(0.45rem-0.5px)] top-0 w-px group-first:top-3"
              initial={{ backgroundColor: '#d1d5db' }}
              animate={{ 
                backgroundColor: index <= activeIndex ? '#132d47' : '#d1d5db'
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            ></motion.div>
            
            {/* Circle indicator */}
            <motion.div 
              className="absolute left-0 top-2 h-4 w-4 rounded-full border border-primary"
              initial={{ 
                backgroundColor: '#dcf6d9',
                scale: 1
              }}
              animate={{ 
                backgroundColor: index <= activeIndex ? '#132d47' : '#dcf6d9',
                scale: index <= activeIndex ? 1.15 : 1
              }}
              transition={{ 
                duration: 0.4, 
                ease: "easeInOut",
                scale: { type: "spring", stiffness: 300, damping: 20 }
              }}
            ></motion.div>
            
            <motion.p 
              className="font-sans text-lg text-primary"
              initial={{ fontWeight: 400 }}
              animate={{ 
                fontWeight: index <= activeIndex ? 600 : 400
              }}
              transition={{ duration: 0.3 }}
            >
              {section.label}
            </motion.p>
          </li>
        ))}
      </ul>

      <div
        ref={ref}
        className="bg-[#81DE7633] rounded-2xl flex flex-col gap-6 p-6 w-full lg:w-[665px] overflow-y-scroll lg:h-[850px] no-scrollbar"
      >

        <div id="description">
          <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
            Description
          </h1>
          <p className="font-[duplet] text-lg leading-[23px] text-primary ">
            The  Urban Cleanse is a compact yet powerful 3- day Ayurvedic detox
            program designed for busy urban lifestyles. Rooted in classical
            Panchakarma principles, this therapy focuses on rejuvenating the
            body, clearing toxins, improving digestion, and restoring natural
            vitality — all within a short timeframe.
          </p>
        </div>

        <hr className="w-full bg-[#00000033] h-0.5" />

        <div id="consultation">
          <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
            Consultation
          </h1>
          <h2 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
            Personalized Consultation with an Ayurvedic Medical Practitioner
            includes
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

        <div id="therapies">
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
            <div className="w-full lg:w-fit">
              <Image
                src={UCTImage1}
                alt="uct1"
                className="w-full h-[169px] lg:w-[195px] lg:h-[88px] object-cover rounded-xl mb-2 "
              />
              <p className="font-[Duplet] text-lg text-primary text-center ">
                Abhyanga
              </p>
            </div>

            <div>
              <Image
                src={UCTImage2}
                alt="uct1"
                className=" w-full h-[169px] lg:w-[195px] lg:h-[88px] object-cover rounded-xl mb-2 "
              />
              <p className="font-[Duplet] text-lg text-primary text-center ">
                Swedanam
              </p>
            </div>

            <div>
              <Image
                src={UCTImage3}
                alt="uct1"
                className="w-full h-[169px] lg:w-[195px] lg:h-[88px] object-cover rounded-xl mb-2 "
              />
              <p className="font-[Duplet] text-lg text-primary text-center ">
                Kashaya dhara
              </p>
            </div>

            <div>
              <Image
                src={UCTImage4}
                alt="uct1"
                className="w-full h-[169px] lg:w-[195px] lg:h-[88px] object-cover rounded-xl mb-2 "
              />
              <p className="font-[Duplet] text-lg text-primary text-center ">
                Nasyam
              </p>
            </div>

            <div className="w-full lg:w-fit">
              <Image
                src={UCTImage5}
                alt="uct1"
                className="w-full h-[169px] lg:w-[195px] lg:h-[88px] object-cover object-bottom rounded-xl mb-2 "
              />
              <p className="font-[Duplet] text-lg text-primary text-center ">
                Shiro dhara
              </p>
            </div>
          </div>
        </div>

        <hr className="w-full bg-[#00000033] h-0.5" />

        <div id="bonus">
          <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
            Bonus
          </h1>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="p-4 bg-[#81DE7633] rounded-2xl lg:w-1/2 w-full flex flex-col justify-between">
              <div>
                <h1 className="text-lg text-primary font-[Duplet] font-semibold mb-4 ">
                  Liver cleanse herbal tisane
                </h1>
                <p className="font-[Duplet] text-lg text-primary leading-[23px] ">
                  An Ayurvedic blend crafted to gently detoxify the liver,
                  improve digestion, and boost metabolism. This rejuvenating
                  herbal tisane supports natural cleansing, reduces bloating,
                  and restores balance. Infused with traditional Ayurvedic
                  ingredients, it enhances vitality and promotes a sense of
                  lightness and clarity. Sip warm daily to feel refreshed,
                  energized, and connected to your well-being.
                </p>
              </div>

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

            <div className="p-4 bg-[#81DE7633] rounded-2xl w-full lg:w-1/2 flex flex-col justify-baseline ">
              <div>
                <h1 className="text-lg text-primary font-[Duplet] font-semibold mb-4 ">
                  Diet & Lifestyle Guidance
                </h1>
                <p className="font-[Duplet] text-lg text-primary leading-[23px] ">
                  During & after cleanse therapy, diet acts as medicine and also
                  provides nourishment. Ayurveda recommends light, warm, freshly
                  prepared foods that support liver and gut function. Following
                  a proper diet makes digestion easier, and also promotes the
                  quality of the treatment. Engage in light physical activities
                  such as yoga, relaxing exercises, or a brisk 30 mins walk to
                  activate circulation and metabolism.  Follow proper &
                  adequate  sleep during the night
                </p>
              </div>

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
  );
}

export default Inclusions;

// import React, { useRef, useState, useEffect } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ScrollTimeline = () => {
//   const ref = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const sections = [
//     { id: 'description', label: 'Description' },
//     { id: 'consultation', label: 'Consultation' },
//     { id: 'therapies', label: 'Therapies' },
//     { id: 'bonus', label: 'Bonus' }
//   ];

//   const { scrollYProgress } = useScroll({
//     container: ref,
//     offset: ["start start", "end end"]
//   });

//   useEffect(() => {
//     const unsubscribe = scrollYProgress.on("change", (latest) => {
//       const newIndex = Math.min(
//         Math.floor(latest * sections.length),
//         sections.length - 1
//       );
//       setActiveIndex(newIndex);
//     });

//     return () => unsubscribe();
//   }, [scrollYProgress]);

//   return (
//     <div className="flex gap-4 p-8 bg-gray-50 min-h-screen">
//       <ul
//         role="list"
//         className="bg-[#81DE7633] rounded-2xl p-8 w-[268px] h-fit sticky top-8"
//       >
        // {sections.map((section, index) => (
        //   <li key={section.id} className="group relative flex flex-col pb-4 pl-7 last:pb-0">
        //     {/* Vertical line */}
        //     <motion.div 
        //       className="absolute bottom-0 left-[calc(0.45rem-0.5px)] top-0 w-px group-first:top-3"
        //       initial={{ backgroundColor: '#d1d5db' }}
        //       animate={{ 
        //         backgroundColor: index <= activeIndex ? '#4CAF50' : '#d1d5db'
        //       }}
        //       transition={{ duration: 0.4, ease: "easeInOut" }}
        //     ></motion.div>
            
        //     {/* Circle indicator */}
        //     <motion.div 
        //       className="absolute left-0 top-2 h-4 w-4 rounded-full border border-[#4CAF50]"
        //       initial={{ 
        //         backgroundColor: '#dcf6d9',
        //         scale: 1
        //       }}
        //       animate={{ 
        //         backgroundColor: index <= activeIndex ? '#4CAF50' : '#dcf6d9',
        //         scale: index <= activeIndex ? 1.15 : 1
        //       }}
        //       transition={{ 
        //         duration: 0.4, 
        //         ease: "easeInOut",
        //         scale: { type: "spring", stiffness: 300, damping: 20 }
        //       }}
        //     ></motion.div>
            
        //     <motion.p 
        //       className="font-sans text-lg text-[#4CAF50]"
        //       initial={{ fontWeight: 400 }}
        //       animate={{ 
        //         fontWeight: index <= activeIndex ? 600 : 400
        //       }}
        //       transition={{ duration: 0.3 }}
        //     >
        //       {section.label}
        //     </motion.p>
        //   </li>
        // ))}
//       </ul>

//       <div
//         ref={ref}
//         className="bg-[#81DE7633] rounded-2xl flex flex-col gap-6 p-6 w-full lg:w-[665px] overflow-y-scroll h-[850px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
//       >
//         <div id="description">
//           <h1 className="mb-4 font-semibold text-2xl text-[#4CAF50]">
//             Description
//           </h1>
//           <p className="text-lg leading-[23px] text-[#4CAF50]">
//             The Urban Cleanse is a compact yet powerful 3-day Ayurvedic detox
//             program designed for busy urban lifestyles. Rooted in classical
//             Panchakarma principles, this therapy focuses on rejuvenating the
//             body, clearing toxins, improving digestion, and restoring natural
//             vitality — all within a short timeframe.
//           </p>
//         </div>

//         <hr className="w-full bg-[#00000033] h-0.5" />

//         <div id="consultation">
//           <h1 className="mb-4 font-semibold text-2xl text-[#4CAF50]">
//             Consultation
//           </h1>
//           <h2 className="mb-4 font-semibold text-2xl text-[#4CAF50]">
//             Personalized Consultation with an Ayurvedic Medical Practitioner includes
//           </h2>
//           <ul className="list-disc pl-6 text-lg leading-[23px] text-[#4CAF50]">
//             <li>Detailed Case Assessment</li>
//             <li>Examination (Ashta Sthana Pareeksha)</li>
//             <li>Nadi Pareeksha (Pulse Diagnosis)</li>
//             <li>Prakruti & Vikruti Analysis</li>
//             <li>Personalized Therapy Plan</li>
//             <li>Herbal formulations Support</li>
//             <li>Follow-up & Progress Monitoring</li>
//           </ul>
//         </div>

//         <hr className="w-full bg-[#00000033] h-0.5" />

//         <div id="therapies">
//           <h1 className="mb-4 font-semibold text-2xl text-[#4CAF50]">
//             Therapies
//           </h1>
//           <h2 className="text-lg text-[#4CAF50] font-semibold mb-2">
//             Session Duration:
//           </h2>
//           <p className="text-lg text-[#4CAF50] leading-[23px] mb-4">
//             Total 3 sessions <br />
//             1-1½ hours each session
//           </p>
//           <div className="flex flex-wrap gap-4">
//             {['Abhyanga', 'Swedanam', 'Kashaya dhara', 'Nasyam', 'Shiro dhara'].map((therapy, i) => (
//               <div key={i} className="w-full lg:w-fit">
//                 <div className="w-full h-[169px] lg:w-[195px] lg:h-[88px] bg-gradient-to-br from-green-200 to-green-300 rounded-xl mb-2"></div>
//                 <p className="text-lg text-[#4CAF50] text-center">{therapy}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <hr className="w-full bg-[#00000033] h-0.5" />

//         <div id="bonus">
//           <h1 className="mb-4 font-semibold text-2xl text-[#4CAF50]">
//             Bonus
//           </h1>
//           <div className="flex flex-col lg:flex-row gap-4">
//             <div className="p-4 bg-[#81DE7633] rounded-2xl lg:w-1/2 w-full flex flex-col justify-between">
//               <div>
//                 <h1 className="text-lg text-[#4CAF50] font-semibold mb-4">
//                   Liver cleanse herbal tisane
//                 </h1>
//                 <p className="text-lg text-[#4CAF50] leading-[23px]">
//                   An Ayurvedic blend crafted to gently detoxify the liver,
//                   improve digestion, and boost metabolism. This rejuvenating
//                   herbal tisane supports natural cleansing, reduces bloating,
//                   and restores balance. Infused with traditional Ayurvedic
//                   ingredients, it enhances vitality and promotes a sense of
//                   lightness and clarity. Sip warm daily to feel refreshed,
//                   energized, and connected to your well-being.
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Detoxifies liver
//                 </span>
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Boosts metabolism
//                 </span>
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Reduces bloating
//                 </span>
//               </div>
//             </div>

//             <div className="p-4 bg-[#81DE7633] rounded-2xl w-full lg:w-1/2 flex flex-col justify-baseline">
//               <div>
//                 <h1 className="text-lg text-[#4CAF50] font-semibold mb-4">
//                   Diet & Lifestyle Guidance
//                 </h1>
//                 <p className="text-lg text-[#4CAF50] leading-[23px]">
//                   During & after cleanse therapy, diet acts as medicine and also
//                   provides nourishment. Ayurveda recommends light, warm, freshly
//                   prepared foods that support liver and gut function. Following
//                   a proper diet makes digestion easier, and also promotes the
//                   quality of the treatment. Engage in light physical activities
//                   such as yoga, relaxing exercises, or a brisk 30 mins walk to
//                   activate circulation and metabolism. Follow proper &
//                   adequate sleep during the night
//                 </p>
//               </div>
//               <div className="flex flex-wrap gap-2 mt-4">
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Light & warm diet
//                 </span>
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Gentle yoga or walk
//                 </span>
//                 <span className="bg-[#4CAF50] text-white px-4 py-1.5 rounded-full text-sm">
//                   Proper sleep & rest
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollTimeline;