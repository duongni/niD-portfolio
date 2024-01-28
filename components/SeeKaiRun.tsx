"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const SeeKaiRun = () => {
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
          See Kai Run
        </h4>
        <div className="flex flex-row justify-between">
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            Bothell, Washington
          </p>
          <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
            2018 - 2019
          </p>
        </div>

        <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
          Worked closely with VP Design to create color palette, mood board and
          generate renders for new collections. Used photoshop and illustration
          to create 2D shoes mockup for line review. Coordinated with factories
          to get swatches, samples, costing. Presented product lines to clients
          and other departments.
        </p>
        <div className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto mt-[10px]">
          <Image
            src="/see-kai-run-1.png"
            alt="See Kai Run Slippers"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/see-kai-run-2.png"
            alt="See Kai Run Sneakers"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/see-kai-run-3.png"
            alt="See Kai Run Slippers Collection"
            width={275}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SeeKaiRun;
