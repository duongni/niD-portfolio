"use client";

import Image from "next/image";
import TotalExperience from "@/components/TotalExperience";
import CertificateTemp from "@/components/CertificateTemp";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const page = () => {
  const images = [
    {
      src: "/intro-coding.png",
      alt: "Introduction to Coding Certificate",
      width: 550,
      height: 340,
    },
    {
      src: "/intro-web.png",
      alt: "Introduction to Web Development Certificate",
      width: 550,
      height: 340,
    },
    {
      src: "/advance-web.png",
      alt: "Advance Web Development Certificate",
      width: 550,
      height: 340,
    },
    {
      src: "/react-dev.png",
      alt: "React Certificate",
      width: 550,
      height: 340,
    },
    {
      src: "/responsive-web.png",
      alt: "Responsive Web Development Certificate",
      width: 550,
      height: 340,
    },
    {
      src: "/responsive-advance-web.png",
      alt: "Advance Responsive Web Development Certificate",
      width: 550,
      height: 340,
    },
    // Add more image objects as needed
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="my-[40px]">
      <motion.div
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
        <div className="flex flex-col align-center gap-6">
          {images.map((image, index) => (
            <CertificateTemp
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="hover:scale-105 hover:ease-in-out hover:duration-500"
            />
          ))}
        </div>
      </motion.div>

      <TotalExperience />
    </div>
  );
};

export default page;
