"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <Image
          src="/ni-profile.png"
          height={300}
          width={300}
          alt="Ni Profile Picture"
          className="rounded-full mx-auto md:mt-[250px] my-[150px]"
        />
        <div className="h-[200px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto mb-[100px]"></div>

        <h1 className="font-bold text-black backdrop:leading-6 tracking-wide text-6xl  text-center">
          <div className="text-black leading-6 tracking-wide md:text-base text-sm text-center">
            Hello, I'm
          </div>{" "}
          Ni Duong
        </h1>
        <div className="h-[200px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto my-[100px]"></div>
        <p className="font-normal text-black leading-6 tracking-wide md:text-base text-sm mb-[48px] text-center">
          a former Industrial Designer turned Front-end Developer.
        </p>
        <div className="h-[200px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto my-[100px]"></div>
        <p className="font-normal text-black leading-6 tracking-wide md:text-base text-sm text-center">
          After 9 years of designing accessories and products, I stumbled upon a
          coding platform called SheCodes and got hooked from the first week of
          class. My favorite part of coding is problem-solving—the feeling of
          solving a puzzle is incredibly satisfying.
        </p>
      </motion.div>
    </div>
  );
};

export default Intro;
