import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Gudlines() {

  const gudlinList = [
    {
      id:'id1',
      title: "Eligibility & Medical Disclosure",
      desc: `Clients are required to provide complete and accurate medical history before the start of the program. <br /><br />

Any ongoing medication, allergies, or chronic health conditions must be disclosed during the initial consultation. <br /><br />

The physician reserves the right to modify or withhold any therapy based on health suitability.`,
    },
    {
      id:'id2',
      title: "Consultation & Customization",
      desc: `The therapies and diet plan will be customized after the Ayurvedic Practitioner consultation. <br /><br />

Changes to the schedule or therapies may be made by the doctor depending on the client’s body condition and daily response.`,
    },
    {
      id:'id3',
      title: "Therapy Timings",
      desc: `Clients are requested to strictly adhere to their allotted therapy timings.
Late arrivals may lead to inconvenience to other clients.`,
    },
    {
      id:'id4',
      title: "Diet & Lifestyle During Program",
      desc: `Discover Ayurveda’s magic — feel recharged, peaceful, and naturally alive in just a few days. <br /><br />
           Clients are advised to follow the prescribed  healthy  diet and lifestyle guidance throughout the package period for optimal results. <br/><br />

Consumption of alcohol, caffeine, tobacco, or heavy foods is discouraged during and immediately after the therapy. `,
    },
    {
      id:'id5',
      title: "Clothing & Personal Items",
      desc: `The clinic will provide towel, tissues, herbal bath powder as needed.`,
    },
    {
      id:'id6',
      title: "Payment & Cancellation",
      desc: `Full payment or 50% advance as per clinic policy is to be made prior to the start of the package. <br/><br />

Cancellations or rescheduling should be informed at least 24 hours in advance. <br/><br />

No refunds will be applicable once the therapy  has commenced.`,
    },
    {
      id:'id7',
      title: "Confidentiality",
      desc: `All personal and medical information shared with the clinic will remain strictly confidential`,
    },
    {
      id:'id8',
      title: "Responsibility & Safety",
      desc: `Therapies are conducted under qualified Ayurvedic Practitioner supervision. <br/><br />

Clients are requested to immediately inform the therapist of any discomfort during or after the procedure. <br/><br />

The clinic will not be responsible for any adverse effects if the prescribed post-therapy guidelines are not followed.`,
    },
    {
      id:'id9',
      title: "Post-Package Guidance",
      desc: `Clients will receive a short-term follow-up plan for maintaining benefits.
Continuing the suggested lifestyle and dietary regimen after the therapy is essential for sustained results.`,
    },
  ];

    const ref = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
  
    const { scrollYProgress } = useScroll({
      container: ref,
      offset: ["start start", "end end"]
    });
  
    useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (latest) => {
        const newIndex = Math.min(
          Math.floor(latest * gudlinList.length),
          gudlinList.length - 1
        );
        setActiveIndex(newIndex);
      });
  
      return () => unsubscribe();
    }, [scrollYProgress]);

  return (
    <div className="flex gap-4">
      <ul
        role="list"
        className="bg-[#81DE7633] rounded-2xl p-8 hidden lg:flex flex-col w-[268px] h-fit "
      >
        {gudlinList.map((item, ind) => (
          <li
            key={item.id}
            className="group relative flex flex-col pb-4 pl-7 last:pb-0"
          >
            {/* Vertical line */}
            <motion.div
              className="absolute bottom-0 left-[calc(0.45rem-0.5px)] top-0 w-px group-first:top-3"
              initial={{ backgroundColor: "#d1d5db" }}
              animate={{
                backgroundColor: ind <= activeIndex ? "#132d47" : "#d1d5db",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            ></motion.div>

            {/* Circle indicator */}
            <motion.div
              className="absolute left-0 top-2 h-4 w-4 rounded-full border border-primary"
              initial={{
                backgroundColor: "#dcf6d9",
                scale: 1,
              }}
              animate={{
                backgroundColor: ind <= activeIndex ? "#132d47" : "#dcf6d9",
                scale: ind <= activeIndex ? 1.15 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                scale: { type: "spring", stiffness: 300, damping: 20 },
              }}
            ></motion.div>
            <motion.p
              initial={{ fontWeight: 400 }}
              animate={{
                fontWeight: ind <= activeIndex ? 600 : 400,
              }}
              transition={{ duration: 0.3 }}
              className="font-[Duplet] text-lg text-primary "
            >
              {item.title}
            </motion.p>
          </li>
        ))}
      </ul>

      <div ref={ref} className="bg-[#81DE7633] rounded-2xl flex flex-col gap-6 p-6 w-full lg:w-[665px] overflow-y-scroll lg:h-[850px] no-scrollbar">
        {gudlinList.map((itm, int) => (
          <div id={itm.id} key={int + "desc"}>
            <div className="mb-4">
              <h1 className="mb-4 font-[Atyp] font-semibold text-2xl text-primary ">
                {itm.title}
              </h1>
              <p
                className="font-[duplet] text-lg leading-[23px] text-primary "
                dangerouslySetInnerHTML={{ __html: itm.desc }}
              ></p>
            </div>

            {gudlinList.length - 1 !== int && (
              <hr className="w-full bg-[#00000033] h-0.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gudlines;
