"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useInView,
  useTransform,
  useAnimation,
} from "framer-motion";

const ProjectIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 1"],
  });

  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView]);

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1.1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div ref={ref} className="grid grid-cols-1 sm:p-0 p-2">
      <motion.div
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        variants={{
          hidden: { opacity: 1, y: 75, scale: 0 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControl}
        className="wrapper"
      >
        <Link
          href="/projects"
          className="flex justify-center items-center text-xl font-medium my-[100px]"
        >
          My Projects
        </Link>
        <div className="flex flex-col md:max-w-[600px] mt-[30px]">
          <Link href="/projects/Zen">
            <Image
              src="/zen-landing.png"
              width={600}
              height={300}
              alt="Zen Website landing page"
              className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
            />
          </Link>

          <div className="flex flex-row justify-start gap-3 mt-[20px]">
            <p className="flex  text-sm font-normal">Zen</p>
            <p className="flex text-sm font-normal text-gray-20 leading-6 tracking-wide">
              Web Development
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-[600px] mt-[30px]">
          <Link href="/projects/Promptopia">
            <Image
              src="/promptopia.png"
              width={600}
              height={300}
              alt="Promptopia landing page"
              className="flex rounded-[5px] shadow-md object-fill hover:scale-105 hover:ease-in-out hover:duration-500"
            />
            <div className="flex flex-row justify-start gap-3 mt-[20px]">
              <p className="flex text-sm font-normal">Promptopia</p>
              <p className="flex text-sm font-normal text-gray-20 leading-6 tracking-wide">
                Web Development
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col max-w-[600px] mt-[30px]">
          <Link href="/projects/IndustrialPortfolio">
            <Image
              src="/past-works.png"
              width={600}
              height={300}
              alt="Zen Website landing page"
              className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
            />
            <div className="flex flex-row justify-start gap-3 mt-[20px]">
              <p className="flex text-sm font-normal">Past Works</p>
              <p className="flex text-sm font-normal text-gray-20 leading-6 tracking-wide ">
                Web Development
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col max-w-[600px] mt-[30px] mb-[200px]">
          <Link href="/projects/FamilyVoyage">
            <Image
              src="/family-voyage.png"
              width={600}
              height={300}
              alt="Family Voyage landing page"
              className="flex rounded-[5px] shadow-md hover:scale-105 hover:ease-in-out hover:duration-500"
            />
            <div className="flex flex-row justify-start gap-3 mt-[20px]">
              <p className="flex text-sm font-normal">Family Voyage</p>
              <p className="flex text-sm font-normal text-gray-20 leading-6 tracking-wide">
                Web Development
              </p>
            </div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectIntro;
