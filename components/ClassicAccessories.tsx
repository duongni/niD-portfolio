"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ClassicAccessories = () => {
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
          Classic Accessories
        </h4>
        <div className="flex flex-row justify-between">
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            Kent, Washington
          </p>
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            2021 - 2022
          </p>
        </div>

        <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
          Curate trends and seasonal color palettes for future development,
          while also generating creative content such as repeated prints and
          product assortments for review and final approval by other
          departments. Additionally, I collaborate with the Licensing Agency
          (Frida Kahlo) to develop product assortments for their outdoor pillow
          and cushion launch for Spring/Summer 2023.
        </p>
        <div className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto mt-[10px]">
          <Image
            src="/accessories-pillow.jpeg"
            alt="Frida Outdoor Pillow Collection"
            width={800}
            height={400}
            className="flex rounded-3xl my-[10px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ClassicAccessories;
