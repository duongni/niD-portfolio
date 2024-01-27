"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1.1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="grid grid-cols-1 ">
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="wrapper"
      >
        <h3 className="text-center text-xl font-medium my-[30px]">
          My Projects
        </h3>
        <div className="flex flex-col md:max-w-[600px] mt-[30px]">
          <Link href="/">
            <Image
              src="/zen-landing.png"
              width={600}
              height={300}
              alt="Zen Website landing page"
              className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
            />
          </Link>

          <div className="flex flex-row justify-start gap-3 mt-[20px]">
            <p className="flex text-base font-light">Zen</p>
            <p className="flex text-base font-light text-gray-20 leading-6 tracking-wide">
              Web Development
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-[600px] mt-[30px]">
          <Image
            src="/promptopia.png"
            width={600}
            height={300}
            alt="Promptopia landing page"
            className="flex rounded-[5px] shadow-md object-fill hover:scale-105 hover:ease-in-out hover:duration-500"
          />
          <div className="flex flex-row justify-start gap-3 mt-[20px]">
            <p className="flex text-base font-light">Promptopia</p>
            <p className="flex text-base font-light text-gray-20 leading-6 tracking-wide">
              Web Development
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-[600px] mt-[30px]">
          <Image
            src="/past-works.png"
            width={600}
            height={300}
            alt="Zen Website landing page"
            className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
          />
          <div className="flex flex-row justify-start gap-3 mt-[20px]">
            <p className="flex text-base font-light">Past Works</p>
            <p className="flex text-base font-light text-gray-20 leading-6 tracking-wide ">
              Web Development
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-[600px] mt-[30px] mb-[200px]">
          <Image
            src="/family-voyage.png"
            width={600}
            height={300}
            alt="Family Voyage landing page"
            className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
          />
          <div className="flex flex-row justify-start gap-3 mt-[20px]">
            <p className="flex text-base font-light">Family Voyage</p>
            <p className="flex text-base font-light text-gray-20 leading-6 tracking-wide">
              Web Development
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
