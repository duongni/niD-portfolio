"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Ricardo from "./Ricardo";
import SeeKaiRun from "./SeeKaiRun";
import TapHandles from "./TapHandles";
import ClassicAccessories from "./ClassicAccessories";
import Degrees from "./Degrees";

const TotalExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div>
      <h3 className="text-center text-xl font-medium my-[30px]">
        Past Experience
      </h3>

      <Degrees />
      <ClassicAccessories />
      <TapHandles />
      <SeeKaiRun />
      <Ricardo />
    </div>
  );
};

export default TotalExperience;
