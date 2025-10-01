"use client";

import React, { useState } from "react";
import * as PrevIcon from "./icon-component";
import Pvplogo from "@/assets/images/pvp-bg.png";
import BodyFront from "@/assets/pvp/body-front.png";
import BodySide from "@/assets/pvp/body-side.png";
import BodyBack from "@/assets/pvp/body-back.png";
import EyePain from "@/assets/pvp/eye.png";
import NeckPain from "@/assets/pvp/neckPain.png";
import ShoulderPain from "@/assets/pvp/shouldePain.png";
import ElbowWristPain from "@/assets/pvp/elbowWristpain.png";
import XiphisternumPain from "@/assets/pvp/xiphisternumPain.png";
import MidBackPain from "@/assets/pvp/midBackPain.png";
import PelvicPain from "@/assets/pvp/pelvicPain.png";
import AbdominalPain from "@/assets/pvp/abdominalPain.png";
import KneePain from "@/assets/pvp/kneePain.png";
import CalfMusclePain from "@/assets/pvp/calfMusclePain.png";
import AnklePain from "@/assets/pvp/AnklePain.png";
import SolePain from "@/assets/pvp/solePain.png";
import FlankPain from "@/assets/pvp/flankPain.png";
import Headpain from "@/assets/pvp/headpain.png";
import HeelPain from "@/assets/pvp/heelPain.png";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { StaticImageData } from "next/image";
import ContactSection from "@/components/layout/HomeSection/ContactSection";

const iconList = [
  PrevIcon.firstIcon,
  PrevIcon.SecondIcon,
  PrevIcon.ThirdIcon,
  PrevIcon.FourthIcon,
  PrevIcon.fifthIcon,
  PrevIcon.sixthIcon,
  PrevIcon.seventhIcon,
  PrevIcon.eigithIcon,
  PrevIcon.ninthIcon,
  PrevIcon.tenthIcon,
  PrevIcon.eleventhIcon,
  PrevIcon.twelvthIcon,
  PrevIcon.thirteenthIcon,
  PrevIcon.fourteenthIcon,
  PrevIcon.fifteenIcon,
];

function Previkta() {
  const [navigaate, setNavigaate] = useState<1 | 2 | 3>(1);
  const [activeOrgan, setActiveOrgan] = useState(0);

  const rotateImage = (
    direction: "next" | "prev",
    current: 1 | 2 | 3
  ): 1 | 2 | 3 => {
    if (direction === "next") {
      // Rotate forward: 1 -> 2 -> 3 -> 1
      return current === 3 ? 1 : ((current + 1) as 1 | 2 | 3);
    } else {
      // Rotate backward: 1 -> 3 -> 2 -> 1
      return current === 1 ? 3 : ((current - 1) as 1 | 2 | 3);
    }
  };

  interface BodyPosition {
    top: string;
    left: string;
    translate: string;
    icon: React.ElementType;
    organ?: {
      name: string;
      image: StaticImageData;
      description: string;
      top: string;
      left: string;
    };
  }

  const bodySectionPositions: Record<1 | 2 | 3, BodyPosition[]> = {
    1: [
      // Front view positions
      {
        top: "1.5",
        left: "50%",
        translate: "-50%",
        icon: PrevIcon.firstIcon,
        organ: {
          name: "Head Region",
          image: Headpain,
          description: "",
          top: "-1.8rem",
          left: "3rem",
        },
      },
      {
        top: "2.25",
        left: "53%",
        translate: "0",
        icon: PrevIcon.SecondIcon,
        organ: {
          name: "Eye Pain",
          image: EyePain,
          description: "Common eye pain areas",
          top: "-1.8rem",
          left: "3rem",
        },
      },
      {
        top: "5",
        left: "50%",
        translate: "-50%",
        icon: PrevIcon.ThirdIcon,
        organ: {
          name: "Neck Pain",
          image: NeckPain,
          description: "",
          top: "-1.8rem",
          left: "5rem",
        },
      },
      {
        top: "6",
        left: "35%",
        translate: "0",
        icon: PrevIcon.FourthIcon,
        organ: {
          name: "Shoulder Pain",
          image: ShoulderPain,
          description: "",
          top: "-1.8rem",
          left: "-7rem",
        },
      },

      {
        top: "10",
        left: "68%",
        translate: "0",
        icon: PrevIcon.fifthIcon,
        organ: {
          name: "Elbow & Wrist Pain",
          image: ElbowWristPain,
          description: "",
          top: "-4rem",
          left: "2rem",
        },
      },
      {
        top: "8",
        left: "50%",
        translate: "-50%",
        icon: PrevIcon.sixthIcon,
        organ: {
          name: "Xiphisternum Pain",
          image: XiphisternumPain,
          description: "",
          top: "4rem",
          left: "3.5rem",
        },
      },
      // {
      //   top: "15",
      //   left: "50%",
      //   translate: "-50%",
      //   icon: PrevIcon.seventhIcon,
      //   organ: {
      //     name: "Low Back & Mid Back Pain",
      //     image: MidBackPain,
      //     description: "",
      //     top: "1rem",
      //     left: "3.5rem",
      //   },
      // },
      {
        top: "12",
        left: "50%",
        translate: "-50%",
        icon: PrevIcon.ninthIcon,
        organ: {
          name: "Abdominal Pain",
          image: AbdominalPain,
          description: "",
          top: "1rem",
          left: "3.5rem",
        },
      },

      {
        top: "15",
        left: "50%",
        translate: "-50%",
        icon: PrevIcon.eigithIcon,
        organ: {
          name: "Pelvic Pain",
          image: PelvicPain,
          description: "",
          top: "1rem",
          left: "3.5rem",
        },
      },

      {
        top: "22",
        left: "40%",
        translate: "0",
        icon: PrevIcon.eleventhIcon,
        organ: {
          name: "Knee Pain",
          image: KneePain,
          description: "",
          top: "-1.5rem",
          left: "-6.5rem",
        },
      },
      {
        top: "25",
        left: "49%",
        translate: "0",
        icon: PrevIcon.twelvthIcon,
        organ: {
          name: "Calf Muscle Pain",
          image: CalfMusclePain,
          description: "",
          top: "-1.5rem",
          left: "3rem",
        },
      },

      {
        top: "28.5",
        left: "49%",
        translate: "0",
        icon: PrevIcon.thirteenthIcon,
        organ: {
          name: "Ankle Pain",
          image: AnklePain,
          description: "",
          top: "-2rem",
          left: "3rem",
        },
      },
      {
        top: "29.5",
        left: "42%",
        translate: "0",
        icon: PrevIcon.fourteenthIcon,
        organ: {
          name: "Heel Pain",
          image: HeelPain,
          description: "",
          top: "-2rem",
          left: "-7rem",
        },
      },
      {
        top: "30.2",
        left: "52%",
        translate: "0",
        icon: PrevIcon.fifteenIcon,
        organ: {
          name: "Sole Pain",
          image: SolePain,
          description: "",
          top: "-2rem",
          left: "3rem",
        },
      },
    ],
    2: [
      // Side view positions
      { top: "2.2", left: "53%", translate: "0", icon: PrevIcon.firstIcon, 
        organ: {
          name: "Head Region",
          image: Headpain,
          description: "",
          top: "-1.8rem",
          left: "3rem",
        }, },
      {
        top: "3.5",
        left: "48%",
        translate: "0",
        icon: PrevIcon.SecondIcon,
        organ: {
          name: "Eye Pain",
          image: EyePain,
          description: "Common eye pain areas",
          top: "-1.8rem",
          left: "3rem",
        },
      },
      // { top: "24", left: "40%", translate: "-50%", icon: PrevIcon.ThirdIcon },
      {
        top: "7.5",
        left: "55%",
        translate: "0",
        icon: PrevIcon.FourthIcon,
        organ: {
          name: "Shoulder Pain",
          image: ShoulderPain,
          description: "",
          top: "-1.8rem",
          left: "3rem",
        },
      },

      // { top: "10", left: "68%", translate: "0", icon: PrevIcon.fifthIcon },
      // { top: "12", left: "50%", translate: "-50%", icon: PrevIcon.sixthIcon },
      {
        top: "12",
        left: "57%",
        translate: "0",
        icon: PrevIcon.seventhIcon,
        organ: {
          name: "Low Back & Mid Back Pain",
          image: MidBackPain,
          description: "",
          top: "-1.5rem",
          left: "2rem",
        },
      },

      {
        top: "22.7",
        left: "44%",
        translate: "0",
        icon: PrevIcon.eleventhIcon,
        organ: {
          name: "Knee Pain",
          image: KneePain,
          description: "",
          top: "-1.5rem",
          left: "-6.5rem",
        },
      },
      {
        top: "25",
        left: "56%",
        translate: "0",
        icon: PrevIcon.twelvthIcon,
        organ: {
          name: "Calf Muscle Pain",
          image: CalfMusclePain,
          description: "",
          top: "-1.5rem",
          left: "3rem",
        },
      },

      {
        top: "29",
        left: "55%",
        translate: "0",
        icon: PrevIcon.thirteenthIcon,
        organ: {
          name: "Ankle Pain",
          image: AnklePain,
          description: "",
          top: "-2rem",
          left: "2rem",
        },
      },
      {
        top: "30.5",
        left: "56.5%",
        translate: "0",
        icon: PrevIcon.fourteenthIcon,
        organ: {
          name: "Heel Pain",
          image: HeelPain,
          description: "",
          top: "-2rem",
          left: "-7rem",
        },
      },
      {
        top: "31.3",
        left: "44.5%",
        translate: "0",
        icon: PrevIcon.fifteenIcon,
        organ: {
          name: "Sole Pain",
          image: SolePain,
          description: "",
          top: "-4rem",
          left: "-7rem",
        },
      },
    ],
    3: [
      // Back view positions
      { top: "1", left: "52%", translate: "-50%", icon: PrevIcon.firstIcon, organ: {
          name: "Head Region",
          image: Headpain,
          description: "",
          top: "-1.8rem",
          left: "3rem",
        }, },
      // { top: "2.5", left: "58%", translate: "0", icon: PrevIcon.SecondIcon },
      // { top: "5", left: "45%", translate: "-50%", icon: PrevIcon.ThirdIcon },
      {
        top: "6",
        left: "34%",
        translate: "0",
        icon: PrevIcon.FourthIcon,
        organ: {
          name: "Shoulder Pain",
          image: ShoulderPain,
          description: "",
          top: "-1.8rem",
          left: "-7rem",
        },
      },

      {
        top: "10",
        left: "68%",
        translate: "0",
        icon: PrevIcon.fifthIcon,
        organ: {
          name: "Elbow & Wrist Pain",
          image: ElbowWristPain,
          description: "",
          top: "-4rem",
          left: "2rem",
        },
      },
      // { top: "12", left: "50%", translate: "-50%", icon: PrevIcon.sixthIcon },
      {
        top: "13.5",
        left: "52%",
        translate: "-50%",
        icon: PrevIcon.seventhIcon,
        organ: {
          name: "Low Back & Mid Back Pain",
          image: MidBackPain,
          description: "",
          top: "1rem",
          left: "3.5rem",
        },
      },

      {
        top: "12.5",
        left: "57%",
        translate: "0",
        icon: PrevIcon.tenthIcon,
        organ: {
          name: "Flank Pain",
          image: FlankPain,
          description: "",
          top: "1rem",
          left: "1.5rem",
        },
      },

      // { top: "22", left: "40%", translate: "0", icon: PrevIcon.eleventhIcon },
      {
        top: "25",
        left: "54%",
        translate: "0",
        icon: PrevIcon.twelvthIcon,
        organ: {
          name: "Calf Muscle Pain",
          image: CalfMusclePain,
          description: "",
          top: "-1.5rem",
          left: "3rem",
        },
      },

      {
        top: "28.5",
        left: "52%",
        translate: "0",
        icon: PrevIcon.thirteenthIcon,
        organ: {
          name: "Ankle Pain",
          image: AnklePain,
          description: "",
          top: "-2rem",
          left: "2.5rem",
        },
      },
      { top: "30", left: "42%", translate: "0", icon: PrevIcon.fourteenthIcon,
        organ: {
          name: "Heel Pain",
          image: HeelPain,
          description: "",
          top: "-2rem",
          left: "-7rem",
        },
       },
      {
        top: "30",
        left: "55%",
        translate: "0",
        icon: PrevIcon.fifteenIcon,
        organ: {
          name: "Sole Pain",
          image: SolePain,
          description: "",
          top: "-4rem",
          left: "2rem",
        },
      },
    ],
  };

  // 15 Organs
  const organData = [
    {
      Heading: "Headache / Head Region",
      Diseases: [
        { icon: PrevIcon.MigraineIcon, txt: "Migraine" },
        { icon: PrevIcon.SinusHeadacheIcon, txt: "Sinus Headache" },
        { icon: PrevIcon.TensionHeadache, txt: "Tension headache" },
      ],
      // Diseases: ["Migraine", "Sinus Headache", "Tension headache"],
      Causes: [
        {
          icon: PrevIcon.OverThinkingIcon,
          dis: "Stress, tension & overthinking",
        },
        {
          icon: PrevIcon.SleeplessnessIcon,
          dis: "Late nights & sleeplessness",
        },
        {
          icon: PrevIcon.ComputerUseIcon,
          dis: "Too much mobile & computer use",
        },
        {
          icon: PrevIcon.SinusBlockageIcon,
          dis: "Sinus blockage or acidity rising to head",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Eye Pain / Eye Strain",
      Diseases: [
        {
          icon: PrevIcon.ComputerVisionSyndrome,
          txt: "Computer vision syndrome",
        },
        { icon: PrevIcon.EyeStrain, txt: "Eye strain" },
        { icon: PrevIcon.Conjunctivitis, txt: "Conjunctivitis" },
        { icon: PrevIcon.DryEyeSyndrome, txt: "Dry eye syndrome" },
        {
          icon: PrevIcon.ClusterHeadaches,
          txt: "Cluster headaches with eye pain",
        },
      ],
      Causes: [
        { icon: PrevIcon.LongScreenIcon, dis: "Long screen time" },
        { icon: PrevIcon.SleeplessnessIcon, dis: "Lack of sleep & stress" },
        { icon: PrevIcon.DryEyeIcon, dis: "Dry eyes or sinus-related strain" },
      ],
      ProbableTherapies: [
        "Netra tarpanam",
        "Aschotanam",
        "Nasyam",
        "Mukha abhyangam",
        "Nadi swedanam",
      ],
      HealingTime: [
        { title: "Simple strain :", period: "1 to 3 month" },
        { title: "Chronic dry eyes/sinus :", period: "3 to 6 month" },
      ],
    },

    {
      Heading: "Neck Pain (Cervical)",
      Diseases: [
        { icon: PrevIcon.CervicalSpondylosis, txt: "Cervical spondylosis" },
        { icon: PrevIcon.DiscProlapse, txt: "Disc prolapse" },
      ],
      Causes: [
        {
          icon: PrevIcon.SittingWrongPosture,
          dis: "Long sitting in wrong posture",
        },
        {
          icon: PrevIcon.HoursOnPhone,
          dis: "Hours on phone/laptop",
        },
        {
          icon: PrevIcon.AgeingDrynessBones,
          dis: "Ageing & dryness in bones",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Shoulder Pain",
      Diseases: [
        { icon: PrevIcon.FrozenShoulder, txt: "Frozen shoulder" },
        { icon: PrevIcon.Arthritis, txt: "Arthritis" },
      ],
      Causes: [
        {
          icon: PrevIcon.StiffnessInactivity,
          dis: "Stiffness due to diabetes or inactivity",
        },
        {
          icon: PrevIcon.OveruseStrain,
          dis: "Overuse or sudden strain",
        },
        {
          icon: PrevIcon.ArthritisAffectingJoints,
          dis: "Arthritis affecting joints",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Elbow & Wrist Pain",
      Diseases: [
        { txt: "Tennis", icon: PrevIcon.Tennis },
        { icon: PrevIcon.GolferElbow, txt: "Golfer’s elbow" },
        { icon: PrevIcon.CarpalTunnel, txt: "Carpal tunnel" },
      ],
      Causes: [
        {
          icon: PrevIcon.RepeatedMovements,
          dis: "Repeated hand movements",
        },
        {
          icon: PrevIcon.AgeingOrArthritis,
          dis: "Weak joints due to ageing or arthritis",
        },
        {
          icon: PrevIcon.NerveCompression,
          dis: "Nerve compression in wrist",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Xiphisternum Pain",
      Diseases: [
        { txt: "Gastritis", icon: PrevIcon.Tennis },
        { icon: PrevIcon.GolferElbow, txt: "Acid reflux" },
        { icon: PrevIcon.CarpalTunnel, txt: "Costochondritis" },
        {
          icon: PrevIcon.CarpalTunnel,
          txt: "Peptic ulcer pain radiating to xiphisternum",
        },
        { icon: PrevIcon.CarpalTunnel, txt: "Anxiety-related chest tightness" },
      ],
      Causes: [
        {
          icon: PrevIcon.IrregularFood,
          dis: "Excess spicy, oily, or irregular food",
        },
        {
          icon: PrevIcon.ToxinAccumulation,
          dis: "Weak digestion and toxin accumulation",
        },
        {
          icon: PrevIcon.RibCartilage,
          dis: "Overexertion, trauma, or strain can inflame rib cartilage.",
        },
        {
          icon: PrevIcon.StressAnxiety,
          dis: "Stress and anxiety",
        },
        {
          icon: PrevIcon.PoorPostureMeals,
          dis: "Poor posture after meals",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Low Back & Mid Back Pain",
      Diseases: [
        { icon: PrevIcon.GolferElbow, txt: "Sciatica" },
        { icon: PrevIcon.CarpalTunnel, txt: "Lumbar pain" },
        { icon: PrevIcon.CarpalTunnel, txt: "Thoracic stiffness" },
      ],
      Causes: [
        {
          icon: PrevIcon.OverThinkingIcon,
          dis: "Wrong sitting posture & long travel",
        },
        {
          icon: PrevIcon.SleeplessnessIcon,
          dis: "Weak spine muscles",
        },
        {
          icon: PrevIcon.ComputerUseIcon,
          dis: "Disc bulge pressing on nerves",
        },
        {
          icon: PrevIcon.SinusBlockageIcon,
          dis: "Stress & lack of exercise",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Pelvic Pain",
      Diseases: [
        { icon: PrevIcon.LowerAbdomen, txt: "Lower Abdomen" },
        { icon: PrevIcon.HipRegion, txt: "Hip Region" },
      ],
      Causes: [
        {
          icon: PrevIcon.MenstrualCramps,
          dis: "Menstrual cramps or PCOS in women",
        },
        {
          icon: PrevIcon.UrinaryTractInfection,
          dis: "Urinary tract infection (UTI)",
        },
        {
          icon: PrevIcon.MuscleStrainPelvic,
          dis: "Muscle strain in pelvic floor",
        },
        {
          icon: PrevIcon.ConstipationBowelIssues,
          dis: "Constipation or bowel issues",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Abdominal Pain",
      Diseases: [
        { icon: PrevIcon.GastroesophagealReflux, txt: "Gastroesophageal reflux disease" },
        { icon: PrevIcon.PepticUlcer, txt: "Peptic ulcer" },
        { icon: PrevIcon.Piles, txt: "Piles" },
        { icon: PrevIcon.Fissures, txt: "Fissures" },
      ],
      Causes: [
        {
          icon: PrevIcon.IndigestionGasAcidity,
          dis: "Indigestion, gas or acidity",
        },
        {
          icon: PrevIcon.ConstipationIBS,
          dis: "Constipation or IBS",
        },
        {
          icon: PrevIcon.ChronicGastritis,
          dis: "Ulcer or chronic gastritis",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Flank Pain",
      Diseases: [
        { icon: PrevIcon.ChronicKidney, txt: "Chronic Kidney Diseases" },
        { icon: PrevIcon.DiscProblems, txt: "Disc Problems" },
        { icon: PrevIcon.SpinalStenosi, txt: "Spinal stenosi" },
        { icon: PrevIcon.RenalCalculi, txt: "Renal calculi" },
      ],
      Causes: [
        {
          icon: PrevIcon.KidneyStoneInfection,
          dis: "Kidney stone or infection",
        },
        {
          icon: PrevIcon.MuscleStrainBending,
          dis: "Muscle strain from bending or lifting",
        },
        {
          icon: PrevIcon.NerveCompressionSpine,
          dis: "Nerve compression in spine",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Knee Pain",
      Diseases: [
        { icon: PrevIcon.Osteoarthritis, txt: "Osteoarthritis" },
        { icon: PrevIcon.RheumatoidArthritis, txt: "Rheumatoid arthritis" },
        { icon: PrevIcon.LigamentInjury, txt: "Ligament injury" },
      ],
      Causes: [
        {
          icon: PrevIcon.WearTearJoints,
          dis: "Wear & tear of joints",
        },
        {
          icon: PrevIcon.InjuryLigamentsCartilage,
          dis: "Injury to ligaments or cartilage",
        },
        {
          icon: PrevIcon.OverweightAddingStressKnees,
          dis: "Overweight adding stress on knees",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Calf Muscle Pain",
      Diseases: [
        { icon: PrevIcon.MuscleCramps, txt: "Muscle cramps" },
        { icon: PrevIcon.VaricoseVeins, txt: "Varicose veins" },
        { icon: PrevIcon.DeepVeinWeakness, txt: "Deep vein weakness" },
        { icon: PrevIcon.MuscleFatigue, txt: "Muscle fatigue" },
        { icon: PrevIcon.Strain, txt: "strain" },
      ],
      Causes: [
        {
          icon: PrevIcon.SuddenCrampsDue,
          dis: "Sudden cramps due to dehydration or low minerals",
        },
        {
          icon: PrevIcon.InjuryLigaments,
          dis: "Injury to ligaments or cartilage",
        },
        {
          icon: PrevIcon.OverweightStress,
          dis: "Overweight adding stress on knees",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Ankle Pain",
      Diseases: [
        { icon: PrevIcon.Sprain, txt: "Sprain" },
        { icon: PrevIcon.Gout, txt: "Gout" },
      ],
      Causes: [
        {
          icon: PrevIcon.SuddenTwistingInjury,
          dis: "Sudden twisting injury",
        },
        {
          icon: PrevIcon.ArthritisCausingSwelling,
          dis: "Arthritis or gout causing swelling",
        },
        {
          icon: PrevIcon.WeakLigamentsDue,
          dis: "Weak ligaments due to age/strain",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Heel Pain",
      Diseases: [
        { icon: PrevIcon.PlantarFasciiti, txt: "Plantar Fasciiti" },
        { icon: PrevIcon.Spur, txt: "Spur" },
      ],
      Causes: [
        {
          icon: PrevIcon.StandingLonghours,
          dis: "Standing long hours on hard floor",
        },
        {
          icon: PrevIcon.WrongFootwear,
          dis: "Wrong footwear",
        },
        {
          icon: PrevIcon.ExtraBodyWeight,
          dis: "Extra body weight causing strain",
        },
        {
          icon: PrevIcon.BoneSpurUnder,
          dis: "Bone spur under heel",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
    {
      Heading: "Sole Pain",
      Diseases: [
        { icon: PrevIcon.FlatFoot, txt: "Flat Foot" },
        { icon: PrevIcon.StrainIcon, txt: "Strain" },
        { icon: PrevIcon.FasciaTightness, txt: "Fascia Tightness" },
      ],
      Causes: [
        {
          icon: PrevIcon.LongWalkingStanding,
          dis: "Long walking/standing on hard floor",
        },
        {
          icon: PrevIcon.FlatwrongFootwear,
          dis: "Flat foot or wrong footwear",
        },
        {
          icon: PrevIcon.InflammationSoleTissue,
          dis: "Inflammation of sole tissue",
        },
        {
          icon: PrevIcon.BoneSpurHeel,
          dis: "Bone spur under heel",
        },
      ],
      ProbableTherapies: [
        "Siro abhynagam",
        "Dhara",
        "Pichu",
        "Nasyam",
        "Thalapothichil",
        "Siro lepam",
        "Abhyangam",
        "Swedanam",
      ],
      HealingTime: [
        { title: "Simple headache :", period: "1 to 3 month" },
        { title: "Migraine :", period: "3 to 6 month" },
      ],
    },
  ];

  return (
    <main className="p-10 relative min-h-screen overflow-hidden">
      {/* Eclips 19 */}
      <>
        <div
          className="absolute w-[513px] h-[513px]"
          style={{
            top: "-89px",
            left: "calc(50% - 513px/2 - 598.5px)",
            background: "rgba(129, 222, 118, 0.4)",
            filter: "blur(100px)",
            borderRadius: "50%",
          }}
        ></div>

        {/* Eclips 21 */}
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            left: "calc(50% - 280px/2 - 329px)",
            top: "824px",
            background: "#81DE76",
            filter: "blur(200px)",
          }}
        ></div>

        {/* Eclips 22 */}
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            left: "calc(50% - 280px/2 + 359px)",
            top: "-55px",
            background: "#81DE76",
            filter: "blur(200px)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            width: "317px",
            height: "317px",
            left: "calc(50% - 317px/2 + 579.5px)",
            top: "766px",
            background: "#81DE76",
            filter: "blur(250px)",
          }}
        ></div>
      </>
      <div className="mx-auto flex relative z-10 max-w-7xl gap-6">
        <div className="flex flex-col gap-2 w-12">
          {iconList.map((Icon, index) => (
            <motion.button
              key={index}
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                backdropFilter: "blur(7px) saturate(200%)",
                WebkitBackdropFilter: "blur(7px) saturate(200%)",
                backgroundColor: "rgba(255, 255, 255, 0.22)",
                // borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
              onClick={() => {
                setActiveOrgan(index);
              }}
            >
              <div
                className={`${
                  index === activeOrgan ? "bg-primary" : "bg-white"
                } w-8 h-8 rounded-full flex items-center justify-center `}
              >
                <span
                  className={`relative z-20 ${
                    index !== activeOrgan ? "fill-white" : "fill-primary"
                  }`}
                >
                  <Icon isActive={index === activeOrgan} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-between w-full">
          <div className="min-w-[344px] max-w-[344px]">
            <div
              className="w-full p-5 mb-2"
              style={{
                boxSizing: "border-box",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(20px)",
                // Note: backdrop-filter has minimal browser support
                borderRadius: "20px",
              }}
            >
              <h1 className=" text-2xl text-primary mb-5">Diseases</h1>

              <div className="grid grid-cols-2 grid-row-2 gap-4">
                {organData[activeOrgan].Diseases.map((item, ind) => (
                  <div
                    key={ind + 1}
                    className="p-4 rounded-2xl bg-white h-[136px] w-full flex flex-col justify-between shadow-md"
                  >
                    <div className="bg-primary flex justify-center items-center w-8 h-8 rounded-full">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="none"
                        viewBox="0 0 15 15"
                      >
                        <path
                          fill="#81DE76"
                          d="M13.662 7.496c.416-.4.749-.879.978-1.41a4.39 4.39 0 0 0-.899-4.814 4.3 4.3 0 0 0-1.42-.952 4.25 4.25 0 0 0-3.338.044c-.526.233-1 .57-1.395.99l-.036.041-.052-.041A4.27 4.27 0 0 0 4.491.122a4.27 4.27 0 0 0-3.002 1.25A4.37 4.37 0 0 0 .21 4.39a4.37 4.37 0 0 0 1.175 3.062l-.127.132A4.37 4.37 0 0 0 0 10.656a4.37 4.37 0 0 0 1.258 3.072A4.27 4.27 0 0 0 4.295 15a4.27 4.27 0 0 0 3.037-1.272l.044-.045.044.045a4.27 4.27 0 0 0 3.004 1.213 4.27 4.27 0 0 0 2.99-1.251 4.37 4.37 0 0 0 1.277-3.007 4.37 4.37 0 0 0-1.16-3.055zM2.345 2.28a2.975 2.975 0 0 1 3.726-.414L5.35 2.6H2.66v2.716l-.724.733a3.06 3.06 0 0 1 .41-3.769m2.62 1.635V4.93H3.96V3.915zm-2.791 8.883a3.062 3.062 0 0 1-.41-3.769l.724.734v2.717h2.687l.725.733a2.975 2.975 0 0 1-3.726-.415m1.614-1.633v-1.017h1.006v1.017zm4.866.385-1.278 1.293-1.28-1.294V8.835H3.408l-1.19-1.207L3.58 6.247h2.684V3.53l1.287-1.293 1.28 1.294v2.716h2.676l1.193 1.206-1.365 1.382H8.654zm1.473-6.618V3.915h1.003v1.017zm.832 5.217v1.016H9.952V10.15zm1.613 2.649a2.972 2.972 0 0 1-3.726.414l.723-.732h2.686V9.763l.726-.734a3.064 3.064 0 0 1-.41 3.769m.58-6.749-.722-.732V2.6H9.743l-.726-.734a2.96 2.96 0 0 1 3.741.4 3.051 3.051 0 0 1 .394 3.784"
                        ></path>
                      </svg> */}
                      <item.icon />
                    </div>

                    <p className="text-sm font-[Duplet]">{item.txt}</p>
                  </div>
                ))}

                <div className="relative rounded-2xl bg-white h-[136px] w-full flex flex-col justify-between shadow-md overflow-hidden">
                  <Image
                    src={Pvplogo}
                    alt="dsa"
                    className="absolute left-0 bottom-0"
                  />
                </div>
              </div>
            </div>

            <div
              className="w-full p-5"
              style={{
                boxSizing: "border-box",
                background: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(20px)",
                // Note: backdrop-filter has minimal browser support
                borderRadius: "20px",
              }}
            >
              <h1 className=" text-2xl text-primary mb-5">Causes</h1>

              <div className="flex flex-col gap-4">
                {organData[activeOrgan].Causes.map((item, ind) => (
                  <div
                    key={ind + 1}
                    className="w-full flex items-center gap-2 p-2 rounded-full bg-white"
                  >
                    <div className="flex items-center justify-center bg-primary h-12 w-12 rounded-full ">
                      <item.icon />
                    </div>

                    <p className=" text-sm font-[Duplet] ">{item.dis}</p>
                  </div>
                ))}

                {/* <div className="w-full flex items-center gap-2 p-2 rounded-full bg-white">
                  <div className="flex items-center justify-center bg-primary h-12 w-12 rounded-full ">
                    
                  </div>

                  <p className=" text-sm font-[Duplet] ">
                    Late nights & sleeplessness
                  </p>
                </div> */}

                {/* <div className="w-full flex items-center gap-2 p-2 rounded-full bg-white">
                  <div className="flex items-center justify-center bg-primary h-12 w-12 rounded-full ">
                    
                  </div>

                  <p className=" text-sm font-[Duplet] ">
                    Too much mobile & computer use
                  </p>
                </div> */}

                {/* <div className="w-full flex items-center gap-2 p-2 rounded-full bg-white">
                  <div className="flex items-center justify-center bg-primary h-12 w-12 rounded-full ">
                    
                  </div>

                  <p className=" text-sm font-[Duplet] ">
                    Sinus blockage or acidity rising to head
                  </p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative w-full mr-5">
            <div className="w-[358px]  absolute top-1 left-1/2 -translate-x-1/2 z-20 ">
              <div className="relative ">
                {bodySectionPositions[navigaate].map((position, index) => (
                  <motion.div
                    key={`body-section-${index}-${navigaate}`}
                    initial={{
                      opacity: 0,
                      top: `${position.top}rem`,
                      left: position.left,
                      transform: `translateX(${position.translate})`,
                    }}
                    animate={{
                      opacity: 1,
                      top: `${position.top}rem`,
                      left: position.left,
                      transform: `translateX(${position.translate})`,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    onClick={() => setActiveOrgan(index)}
                    className="absolute z-30"
                  >
                    <BodySection
                      className=""
                      Icon={position.icon}
                      organ={position.organ}
                    />
                  </motion.div>
                ))}

                {/* Image in the Center */}
                <AnimatePresence mode="popLayout">
                  {navigaate === 1 && (
                    <motion.div
                      key="front"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={BodyFront}
                        alt="reov"
                        className="relative z-10 h-[569px]"
                      />
                    </motion.div>
                  )}

                  {navigaate === 2 && (
                    <motion.div
                      key="side"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 flex justify-center items-center h-[569px]"
                    >
                      <Image
                        src={BodySide}
                        alt="reov"
                        height={529}
                        className="absolute left-[50%] -translate-x-[42%]"
                      />
                    </motion.div>
                  )}

                  {navigaate === 3 && (
                    <motion.div
                      key="back"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10 h-[569px] flex items-end justify-center"
                    >
                      <Image
                        src={BodyBack}
                        alt="reov"
                        height={556}
                        className=""
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <svg
                  className="absolute bottom-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="358"
                  height="124"
                  fill="none"
                  viewBox="0 0 396 124"
                >
                  <g filter="url(#filter0_d_2520_5910)">
                    <ellipse
                      cx="198"
                      cy="54"
                      fill="#ECFAEB"
                      rx="178"
                      ry="42"
                    ></ellipse>
                    <path
                      stroke="url(#paint0_linear_2520_5910)"
                      d="M198 12.5c49.126 0 93.586 4.699 125.75 12.288 16.086 3.796 29.069 8.308 38.019 13.3C370.76 43.104 375.5 48.5 375.5 54s-4.74 10.896-13.731 15.912c-8.95 4.992-21.933 9.504-38.019 13.3C291.586 90.802 247.126 95.5 198 95.5s-93.586-4.699-125.75-12.288c-16.086-3.796-29.07-8.308-38.019-13.3C25.24 64.896 20.5 59.5 20.5 54s4.74-10.896 13.731-15.912c8.95-4.992 21.933-9.504 38.019-13.3C104.414 17.198 148.874 12.5 198 12.5Z"
                    ></path>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_2520_5910"
                      x1="198"
                      x2="198"
                      y1="96"
                      y2="29"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#132D47" stopOpacity="0.5"></stop>
                      <stop
                        offset="1"
                        stopColor="#132D47"
                        stopOpacity="0"
                      ></stop>
                    </linearGradient>
                    <filter
                      id="filter0_d_2520_5910"
                      width="396"
                      height="124"
                      x="0"
                      y="0"
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      ></feColorMatrix>
                      <feOffset dy="8"></feOffset>
                      <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix values="0 0 0 0 0.505882 0 0 0 0 0.870588 0 0 0 0 0.462745 0 0 0 0.2 0"></feColorMatrix>
                      <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2520_5910"
                      ></feBlend>
                      <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2520_5910"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>

                <div
                  className="absolute bottom-[18px] left-1/2 -translate-x-1/2 z-20 flex items-center w-fit rounded-md h-[30px] border-2 border-[#ffffff9a] px-2"
                  style={{
                    background: "rgba(243, 252, 242, 0.05)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <motion.button
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setNavigaate((prev) => rotateImage("prev", prev))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      fill="none"
                      viewBox="0 0 12 8"
                    >
                      <path
                        fill="#132D47"
                        d="M.1 4.268 3.3 7.87c.167.17.41.169.566.028a.416.416 0 0 0 .028-.566L1.287 4.4H11.6a.4.4 0 0 0 0-.8H1.287L3.894.668c.14-.156.122-.42-.029-.566C3.709-.05 3.442-.025 3.3.13L.1 3.73c-.142.198-.125.366 0 .538"
                      ></path>
                    </svg>
                  </motion.button>
                  <div
                    style={{
                      width: "38px",
                      height: "2px",
                      background:
                        "radial-gradient(50% 50% at 50% 50%, #95DE8D 0%, rgba(240, 251, 239, 0) 100%)",
                      transform: "rotate(-90deg)",
                    }}
                  ></div>
                  <motion.button
                    className="cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setNavigaate((prev) => rotateImage("next", prev))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="8"
                      fill="none"
                      viewBox="0 0 12 8"
                    >
                      <path
                        fill="#132D47"
                        d="M11.9 4.268 8.7 7.87a.403.403 0 0 1-.566.028.416.416 0 0 1-.028-.566L10.713 4.4H.4a.4.4 0 0 1 0-.8h10.313L8.106.668c-.14-.156-.122-.42.028-.566.158-.152.425-.127.566.028l3.2 3.6c.142.198.125.366 0 .538"
                      ></path>
                    </svg>
                  </motion.button>
                </div>

                <p className="text-2xl text-primary absolute left-1/2 -translate-x-1/2 whitespace-nowrap ">
                  {organData[activeOrgan].Heading}
                </p>
              </div>
            </div>
            <div className="absolute top-0 right-0 flex flex-col gap-4 ">
              <div className="flex items-center justify-center w-12 h-12 bg-[#ffffff52] rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="#132D47"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    d="M8.111 15.222A7.111 7.111 0 1 0 8.111 1a7.111 7.111 0 0 0 0 14.222M17 17l-3.866-3.867"
                  ></path>
                </svg>
              </div>

              <div className="flex items-center justify-center w-12 h-12 bg-[#ffffff52] rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#132D47"
                    d="m13.406 2.974.206 3.497a.293.293 0 0 1-.277.305.303.303 0 0 1-.305-.276l-.167-2.848L9.74 6.773a.29.29 0 0 1-.412-.411l3.122-3.122-2.848-.167c-.152-.008-.28-.153-.277-.306.003-.158.154-.284.306-.276l3.497.206c.175.029.252.124.277.277M2.698 13.13l-.206-3.498a.293.293 0 0 1 .276-.305.303.303 0 0 1 .306.276l.167 2.848L6.363 9.33a.29.29 0 0 1 .411.411l-3.121 3.122 2.848.167c.152.008.279.153.276.306-.003.159-.153.284-.305.276l-3.498-.206c-.174-.029-.251-.123-.276-.276"
                  ></path>
                  <rect
                    width="15.3"
                    height="15.3"
                    x="0.35"
                    y="0.35"
                    stroke="#132D47"
                    strokeWidth="0.7"
                    rx="3.65"
                  ></rect>
                </svg>
              </div>

              <div className="flex items-center justify-center w-12 h-12 bg-[#ffffff52] rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#132D47"
                    d="M16 2.85a.5.5 0 0 1-.161.31.48.48 0 0 1-.32.123h-.065l-1.51-.203a8.14 8.14 0 0 1 1.647 4.997 8.13 8.13 0 0 1-1.74 4.963 7.77 7.77 0 0 1-4.375 2.772c-1.721.39-3.52.17-5.104-.625a7.9 7.9 0 0 1-3.616-3.75 8.2 8.2 0 0 1-.554-5.244 8.03 8.03 0 0 1 2.747-4.459A7.67 7.67 0 0 1 7.804 0c.13 0 .253.053.345.146a.507.507 0 0 1 0 .708.48.48 0 0 1-.345.146c-1.548 0-3.05.539-4.26 1.53a7.03 7.03 0 0 0-2.396 3.925 7.17 7.17 0 0 0 .516 4.6 6.9 6.9 0 0 0 3.202 3.264 6.66 6.66 0 0 0 4.487.497 6.8 6.8 0 0 0 3.808-2.485 7.12 7.12 0 0 0 1.462-4.382 7.1 7.1 0 0 0-1.524-4.359l-.082 1.933a.5.5 0 0 1-.149.338.48.48 0 0 1-.335.139h-.022a.47.47 0 0 1-.34-.16.5.5 0 0 1-.125-.36l.13-3.103a.1.1 0 0 1 0-.024.3.3 0 0 1 0-.05v-.07a.1.1 0 0 1 0-.02.5.5 0 0 1 .075-.123.5.5 0 0 1 .169-.13l.065-.023h.191l2.856.39a.48.48 0 0 1 .34.161.5.5 0 0 1 .127.362"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div
            className="max-w-[344px] min-w-[344px] p-5"
            style={{
              boxSizing: "border-box",
              background: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(20px)",
              // Note: backdrop-filter has minimal browser support
              borderRadius: "20px",
            }}
          >
            <h1 className=" text-2xl text-primary mb-5">Probable therapies</h1>

            <div className="flex flex-wrap gap-2 mb-12">
              {organData[activeOrgan].ProbableTherapies.map((item, ind) => (
                <p
                  key={ind + 1}
                  className="p-2.5 text-sm text-primary font-[Duplet] wrap-break-word rounded-2xl bg-[#D2F4CD]"
                >
                  {item}
                </p>
              ))}
            </div>

            <h1 className=" text-2xl text-primary mb-5">Healing time</h1>

            {organData[activeOrgan].HealingTime.map((item, index) => (
              <div
                key={index + 1}
                className="flex justify-between items-center rounded-2xl p-2 bg-[#81DE764D] mb-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="15"
                      fill="none"
                      viewBox="0 0 16 15"
                    >
                      <path
                        fill="#fff"
                        d="M13.75 13.015a1.73 1.73 0 0 1-.519 1.138 1.78 1.78 0 0 1-1.254.514H2.441c-.488 0-.931-.197-1.253-.514a1.73 1.73 0 0 1-.52-1.236c0-.215.176-.39.394-.39s.396.175.396.39c0 .266.11.508.289.685a1 1 0 0 0 .694.285h9.536a.986.986 0 0 0 .979-.873H5.012c-.455 0-.919-.15-1.297-.393-.39-.25-.697-.604-.827-1l-1.43-4.344v2.44c0 .216-.178.39-.396.39a.393.393 0 0 1-.395-.39V3.513c0-.482.2-.92.52-1.237a1.78 1.78 0 0 1 1.254-.513h.581v-.705c0-.215.177-.39.396-.39h1.967c.218 0 .396.175.396.39v.705h2.857v-.705c0-.215.177-.39.395-.39h1.968c.218 0 .395.175.395.39v.705h.58c.489 0 .932.197 1.254.513l.022.025c.309.315.499.743.499 1.212v1.245l2.18 6.625q.07.211.07.409c0 .27-.09.514-.253.714-.154.192-.373.34-.641.425l-.021.006q-.25.076-.54.078h-.798zm-3.482-2.93c.413 0 .838.273.949.61s-.135.609-.548.609-.838-.273-.95-.61c-.11-.336.136-.609.549-.609m-2.648 0c.413 0 .838.273.949.61s-.135.609-.548.609-.838-.273-.95-.61c-.11-.336.136-.609.549-.609m-2.648 0c.413 0 .838.273.949.61s-.135.609-.548.609-.838-.273-.949-.61.135-.609.548-.609m7.28-2.017c.414 0 .839.272.95.609s-.135.61-.548.61-.838-.274-.95-.61c-.11-.336.136-.61.549-.61m-2.648 0c.414 0 .839.272.95.609s-.135.61-.549.61c-.413 0-.837-.274-.949-.61-.11-.336.135-.61.548-.61m-2.648 0c.414 0 .838.272.95.609.11.336-.135.61-.549.61-.413 0-.838-.274-.949-.61s.135-.61.548-.61m-2.647 0c.413 0 .837.272.949.609.11.336-.135.61-.548.61s-.838-.274-.95-.61c-.11-.336.135-.61.549-.61m7.28-2.018c.414 0 .838.273.95.61.11.336-.135.609-.549.609-.413 0-.838-.273-.949-.61s.135-.609.548-.609m-2.648 0c.413 0 .838.273.949.61s-.135.609-.548.609-.838-.273-.95-.61c-.11-.336.136-.609.549-.609m-.302-3.508H5.782v.705c0 .215-.177.39-.395.39H3.419a.393.393 0 0 1-.395-.39v-.705h-.581c-.27 0-.517.11-.695.285a.96.96 0 0 0-.289.685v.915h11.503v-.915a.96.96 0 0 0-.27-.668l-.019-.017a1 1 0 0 0-.694-.285h-.58v.705c0 .215-.178.39-.396.39H9.036a.393.393 0 0 1-.396-.39v-.705m1.968-1.095H9.43v1.41h1.177zm-5.616 0H3.814v1.41h1.177zm10.192 10.175-2.112-6.416H1.607l2.033 6.176c.073.222.261.431.505.588.255.164.566.265.868.265h9.536q.173 0 .302-.04l.013-.004a.56.56 0 0 0 .267-.169.36.36 0 0 0 .08-.23q0-.081-.028-.168zM1.46 11.83c0 .215-.177.39-.395.39a.393.393 0 0 1-.396-.39v-1.025c0-.215.178-.39.396-.39s.395.175.395.39z"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-sm font-[Duplet] text-primary ">
                    {item.title}
                  </p>
                </div>

                <p className="bg-white rounded-lg px-3 py-2 text-sm font-[Duplet] text-primary">
                  {item.period}
                </p>
              </div>
            ))}

            <div className="bg-white rounded-2xl p-5 ">
              <h1 className="text-lg text-primary text-center font-[Duplet] font-semibold mb-4">
                Will it come back?
              </h1>

              <div className="semisSw">
                <ul className="flex flex-col gap-2">
                  <li className="text-sm text-primary font-[Duplet]">
                    Will not if you follow proper diet & lifestyle
                  </li>
                  <li className="text-sm text-primary font-[Duplet]">
                    Can be prevented with yoga, early sleep & good diet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </main>
  );
}

export default Previkta;

interface BodySectionProps {
  className: string;
  Icon: React.ElementType; // Changed from ReactDOM to React.ElementType
  organ?: {
    name: string;
    image: StaticImageData;
    description: string;
    top: string;
    left: string;
  };
}

function BodySection({ className, Icon, organ }: BodySectionProps) {
  const [showOrgan, setShowOrgan] = useState(false);

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.1 }}
        onHoverStart={() => setShowOrgan(true)}
        onHoverEnd={() => setShowOrgan(false)}
        className={
          "h-5 w-5 rounded-full bg-[#81DE7633] flex items-center justify-center cursor-pointer" +
          className
        }
      >
        <div className="bg-primary rounded-full w-3 h-3 flex items-center justify-center ">
          <Icon size="small" isActive={true} />
        </div>
      </motion.div>

      <AnimatePresence>
        {showOrgan && organ && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 bg-[#132D4733] rounded-xl p-1 shadow-lg"
            style={{
              top: organ.top,
              left: organ.left,
              // transform: "translateX(-50%)",
              // width: "200px"
            }}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden mb-0.5  h-[52px] w-[86px]">
              <Image
                src={organ.image}
                alt={organ.name}
                height={52}
                width={86}
                // fill
                className=" h-[52px] w-[86px]"
              />
            </div>
            <h3 className="text-primary font-[Duplet] text-sm text-center ">
              {organ.name}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
