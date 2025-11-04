"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

function AboutAccordina() {
  const accordinList = [
    {
      title: "Authenticity",
      desc: "Rooted in true Ayurvedic wisdom, we stay committed to purity in every treatment, product, and practice. No shortcuts—only genuine healing.",
    },
    {
      title: "Integrity",
      desc: "Every patient is treated with empathy, understanding, and respect. Healing begins with a caring touch and a listening ear.",
    },
    {
      title: "Sustainability",
      desc: "We uphold transparency and ethics in every interaction—with patients, partners, and practitioners. Trust is the foundation of our journey.",
    },
    {
      title: "Preventive First",
      desc: "From herbal sourcing to eco-friendly operations, we honor nature—the essence of every Ayurvedic principle.",
    },
    {
      title: "Innovation with Tradition",
      desc: "We blend time-tested Ayurvedic knowledge with modern systems, creating a connected, efficient, and scalable model of holistic healthcare.",
    },
    {
      title: "Accessibility",
      desc: "We promote wellness before illness. Early awareness, timely guidance, and sustainable habits are at the heart of Prevekta’s approach.",
    },
  ];

  const [accActive, setAccActive] = useState(0);

  const handleToggle = (index: number) => {
    // If clicking the currently active item, don't close it (keep at least one open)
    if (accActive === index) return;
    setAccActive(index);
  };
  return (
    <div className="lg:w-1/2 relative z-20">
      {accordinList.map((item, ind) => (
        <div key={ind + "acor"} className="border-b border-[#FFFFFF33] pb-4">
          <button
            onClick={() => handleToggle(ind)}
            className="flex justify-between items-center mt-4 mb-4 w-full text-left cursor-pointer"
          >
            <h2 className="text-xl text-white font-semibold">{item.title}</h2>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="none"
              viewBox="0 0 12 12"
              animate={{
                rotate: accActive === ind ? 45 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <path
                fill="#fff"
                d="m10.943 10.466.355-6.033a.505.505 0 0 0-.477-.527.52.52 0 0 0-.527.477l-.288 4.913L.856.146a.502.502 0 1 0-.71.71l9.15 9.15-4.913.288c-.262.013-.481.264-.477.527.005.274.264.49.527.477l6.033-.355c.3-.05.434-.213.477-.477"
              ></path>
            </motion.svg>
          </button>
          <AnimatePresence initial={false}>
            {accActive === ind && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-base text-white leading-5 pb-2 font-[Duplet] font-extralight ">
                  {item.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default AboutAccordina;
