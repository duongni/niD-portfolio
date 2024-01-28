"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Degrees = () => {
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
          32 Degrees
        </h4>
        <div className="flex flex-row justify-between">
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            New York, New York
          </p>
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            2022 - 2023
          </p>
        </div>

        <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
          Manage the Shoe Design Department, collaborating with the Director of
          Design to develop seasonal Product Line Plans. Using Photoshop and
          illustration, create 2D shoe mockups and coordinate with factories for
          materials and samples. Present product lines to clients and
          departments.
        </p>
        <div className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto mt-[10px]">
          <Image
            src="/eva-slides.png"
            alt="32 Degrees EVE Sliders"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />

          <Image
            src="/32degrees-beltbag.png"
            alt="32 Degrees Beltbags"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />

          <Image
            src="/32degrees-sunglasses.png"
            alt="32 Degrees Sunglasses"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Degrees;
