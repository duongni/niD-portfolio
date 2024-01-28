"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const IndustrialPortfolio = () => {
  const router = useRouter();
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
            <h1 className="sm:text-left text-center text-xl font-medium leading-6">
              Industrial Product Designer{" "}
              <span className="text-gray-20">Landing Page</span>
            </h1>
            <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
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
                <p className="bg-black px-2 py-1  rounded-full">HTML</p>
                <p className="bg-black px-2 py-1 rounded-full">CSS</p>
                <p className="bg-black px-2 py-1 rounded-full">JAVASCRIPT</p>
                <p className="bg-black px-2 py-1 rounded-full">NETLIFY</p>
                <p className="bg-black px-2 py-1 rounded-full">FRONT-END</p>
              </div>

              <div className="flex md:flex-row flex-col gap-6">
                <Image
                  src="/ni-1.png"
                  aria-hidden="true"
                  height={400}
                  width={400}
                  alt=""
                  className="-z-20 flex object-cover object-center mx-auto  hover:scale-105 hover:ease-i n-out hover:duration-500"
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
      <div className="flex items-center justify-center my-[40px]">
        <Link
          href="https://github.com/duongni/current-work-portfolio.git"
          className="text-center bg-black rounded-full text-white text-xs px-3 py-2 hover:cursor-pointer hover:bg-white shadow-md hover:text-black"
        >
          Web Github
        </Link>
      </div>
      <div className="flex items-center justify-center my-[40px]">
        <Link
          href="https://elaborate-parfait-2265d9.netlify.app/"
          className="text-center bg-black rounded-full text-white text-xs px-3 py-2 hover:cursor-pointer hover:bg-white shadow-md hover:text-black"
        >
          Portfolio Web
        </Link>
      </div>
      <div className="flex flex-row gap-10 items-center justify-center opacity-70">
        <IoArrowBackOutline
          size={20}
          className="flex relative hover:cursor-pointer mt-5"
          onClick={() => {
            router.push("/projects/Zen");
          }}
        />
        <IoArrowForwardOutline
          size={20}
          className="flex relative hover:cursor-pointer mt-5"
          onClick={() => {
            router.push("/projects/Promptopia");
          }}
        />
      </div>
    </div>
  );
};

export default IndustrialPortfolio;
