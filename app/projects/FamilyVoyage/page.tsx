"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Page = () => {
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
      <div className="mx-auto sm:max-w-[600px] ">
        <div className="sm:my-[100px] my-[30px]">
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
            <h1 className="sm:text-left text-center text-xl font-medium leading-6">
              Family Voyage
            </h1>
            <p className="font-normal text-gray-20 tracking-wide md:text-base text-sm mt-[40px]">
              A user-friendly platform and extensive selection of
              family-friendly accommodations, attractions, and activities,
              planning your next family getaway has never been easier.
            </p>
          </motion.div>
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
            <div className="flex sm:flex-row flex-col gap-[20px] my-[40px]">
              <Image
                src="/family-voyage-full-page.png"
                aria-hidden="true"
                height={400}
                width={200}
                alt=""
                className="-z-20 flex object-cover object-center w-[480px]  hover:scale-105 hover:ease-in-out hover:duration-500"
              />
              <div className="flex flex-col justify-end gap-[20px] mb-[20px]">
                <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
                  I crafted the layout and coded the landing page from scratch,
                  ensuring a seamless and visually captivating user experience.
                </p>
                <div className="grid grid-cols-3 text-[10px] text-white gap-2 text-center">
                  <p className="bg-black px-2 py-1  rounded-full">REACT</p>
                  <p className="bg-black px-2 py-1 rounded-full">CSS</p>
                  <p className="bg-black px-2 py-1  rounded-full">HTML</p>
                  <p className="bg-black px-2 py-1 rounded-full">BOOTSTRAP</p>
                  <p className="bg-black px-2 py-1 rounded-full">FRONT-END</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center items-center mx-auto gap-6">
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
              <Image
                src="/family-fav.png"
                alt="Favorite page"
                width={400}
                height={300}
                className="flex rounded-3xl my-[10px]  hover:scale-105 hover:ease-in-out hover:duration-500"
              />
            </motion.div>
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
              <Image
                src="/hotel-card.png"
                alt="Hotel Quick Detail Card"
                width={400}
                height={300}
                className="flex rounded-3xl my-[10px] hover:scale-105 hover:ease-in-out hover:duration-500"
              />
            </motion.div>
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
              <Image
                src="/hotel-card-2.png"
                alt="Hotel Quick Detail Cards"
                width={400}
                height={300}
                className="flex rounded-3xl my-[10px] hover:scale-105 hover:ease-in-out hover:duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-[40px]">
        <Link
          href="https://github.com/duongni/family-voyage-app.git"
          className="text-center bg-black rounded-full text-white text-xs px-3 py-2 hover:cursor-pointer hover:bg-white shadow-md hover:text-black"
        >
          Family Voyage Github
        </Link>
      </div>
      <div className="flex items-center justify-center my-[40px]">
        <Link
          href="https://rainbow-biscochitos-9d65d6.netlify.app/"
          className="text-center bg-black rounded-full text-white text-xs px-3 py-2 hover:cursor-pointer hover:bg-white shadow-md hover:text-black"
        >
          Family Voyage Web
        </Link>
      </div>
      <div className="flex flex-row gap-10 items-center justify-center opacity-70">
        <IoArrowBackOutline
          size={20}
          className="flex relative hover:cursor-pointer mt-5"
          onClick={() => {
            router.push("/projects/IndustrialPortfolio");
          }}
        />
        <IoArrowForwardOutline
          size={20}
          className="flex relative hover:cursor-pointer mt-5"
          onClick={() => {
            router.push("/projects/FamilyVoyage");
          }}
        />
      </div>
    </div>
  );
};

export default Page;
