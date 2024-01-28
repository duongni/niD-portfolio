"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Ricardo = () => {
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
        {" "}
        <div className="flex flex-col md:max-w-[600px] mt-[30px]">
          <h4 className="flex text-md font-normal text-black leading-5 tracking-wide mt-[10px]">
            Ricardo Beverly Hills
          </h4>
          <div className="flex flex-row justify-between">
            <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
              Seattle, Washington
            </p>
            <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
              2014 - 2018
            </p>
          </div>

          <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
            Design travel products such as luggage, duffels, bags for Ricardo
            and Skyway brand Core and derivative, SMU products. Manage projects
            from start (concept) to finish (production), project status reports,
            working with factories oversea, product seasonal planning, develop
            and prepare samples for meeting.
          </p>
          <div className="hide-scrollbar flex items-center justify-start gap-8 overflow-x-auto mt-[10px]">
            <Image
              src="/ricardo-3.png"
              alt="Softgood luggage collection"
              width={275}
              height={300}
              className="flex rounded-3xl my-[10px]"
            />
            <Image
              src="/ricardo-4.jpeg"
              alt="Skyway-Softgood luggage collection"
              width={275}
              height={300}
              className="flex rounded-3xl my-[10px]"
            />
            <Image
              src="/ricardo-2.png"
              alt="Skyway Collection Colors"
              width={425}
              height={300}
              className="flex rounded-3xl my-[10px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Ricardo;
