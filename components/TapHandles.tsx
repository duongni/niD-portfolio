"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const TapHandles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75, scale: 0 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      <div className="flex flex-col md:max-w-[600px] mt-[30px]">
        <h4 className="flex text-md font-normal text-black leading-5 tracking-wide mt-[10px]">
          Tap Handles LLC
        </h4>
        <div className="flex flex-row justify-between">
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            Seattle, Washington
          </p>
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            2019 - 2021
          </p>
        </div>

        <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
          Determine materials, assembly methods, and finishes to inform
          manufacturing decisions for beer tap handles and LED signs. Providing
          production-based assessment to Project Managers. Work directly with
          both with PM Team and Product Design Team.
        </p>
        <div className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto mt-[10px]">
          <Image
            src="/beer-handles.png"
            alt="Beer tap handles"
            width={170}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/beer-tower-1.png"
            alt="Beer Tower for Europe Region"
            width={210}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/led-sign.png"
            alt="San Tan LED Sign"
            width={210}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TapHandles;
