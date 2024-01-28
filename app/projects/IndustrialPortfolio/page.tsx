"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const IndustrialPortfolio = () => {
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
          duration: 0.4,
          delay: 0.1,
        }}
      >
        <div className="mx-auto md:max-w-[600px] ">
          <div className="md:my-[100px] my-[30px]">
            <h1 className="text-left text-xl font-medium leading-6">
              Industrial Product Designer{" "}
              <span className="text-gray-20">Landing Page</span>
            </h1>
            <p className="font-normal text-gray-20 leading-6 tracking-wide md:text-base text-sm mt-[40px]">
              The website showcases some of the projects I've contributed to,
              spanning research, design, concept development, market research,
              and sourcing efforts.
            </p>
            <div className="grid grid-cols-1 justify-end gap-[20px] mb-[20px]">
              <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[40px]">
                Simple layout using flexbox and grid.
              </p>
              <div className="flex flex-row text-[10px] text-white gap-2 text-center">
                <p className="bg-black px-2 py-1  rounded-full">REACT</p>
                <p className="bg-black px-2 py-1 rounded-full">CSS</p>
              </div>

              <div className="flex md:flex-row flex-col gap-6">
                <Image
                  src="/ni-1.png"
                  aria-hidden="true"
                  height={400}
                  width={400}
                  alt=""
                  className="-z-20 flex object-cover object-center mx-auto  hover:scale-105 hover:ease-in-out hover:duration-500"
                />
              </div>
            </div>
            <div className=" flex flex-col mx-auto gap-2">
              <Image
                src="/ni-2.png"
                alt="portfolio screen 2"
                width={400}
                height={300}
                className="flex rounded-xl my-[10px] mx-auto object-cover object-center hover:scale-105 hover:ease-in-out hover:duration-500"
              />
              <Image
                src="/ni-3.png"
                alt="portfolio screen 3"
                width={400}
                height={300}
                className="flex rounded-xl my-[10px] mx-auto object-cover object-center hover:scale-105 hover:ease-in-out hover:duration-500"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default IndustrialPortfolio;
