"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Zen = () => {
  const router = useRouter();
  return (
    <div className="mx-auto sm:max-w-[600px] ">
      <div className="sm:my-[100px] my-[30px]">
        <h1 className="xs:text-left text-center text-xl font-medium my-[40px]">
          Zen
        </h1>

        <div className="flex sm:flex-row flex-col">
          <Image
            src="/ZEN-1.png"
            aria-hidden="true"
            height={400}
            width={250}
            alt=""
            className="-z-20 flex object-cover object-center w-[480px] hover:scale-80"
          />
          <div className="flex flex-col justify-between gap-[20px] mb-[10px] items-end xs:items-center">
            <MdArrowOutward
              size={30}
              className="flex relative hover:cursor-pointer mt-5"
              onClick={() => {
                router.push("/projects/Zen");
              }}
            />
            <div className="flex flex-col justify-end gap-[20px] mb-[10px] items-center">
              <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
                I designed and coded a user-friendly interface for a website
                aimed at inviting users to explore national parks and camps. The
                data is sourced from the National Park Service's API.
              </p>
              <div className="grid grid-cols-3 text-[10px] text-white gap-2 text-center ">
                <p className="bg-black px-2 py-1 rounded-full">NEXT.JS</p>
                <p className="bg-black px-2 py-1 rounded-full">TAILWIND CSS</p>
                <p className="bg-black px-2 py-1 rounded-full">MONGODB</p>
                <p className="bg-black px-2 py-1 rounded-full">HEADLESS UI</p>
                <p className="bg-black px-2 py-1 rounded-full">NEXT AUTH</p>
                <p className="bg-black px-2 py-1 rounded-full">TYPESCRIPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-[100px] my-[30px]">
        <h1 className="xs:text-left text-center text-xl font-medium my-[40px]">
          Industrial Product Designer{" "}
          <span className="text-gray-20">Landing Page</span>
        </h1>
        <div className="flex flex-col">
          <div className="flex sm:flex-row flex-col">
            <div className="flex flex-col justify-between gap-[20px] mb-[10px] items-end xs:items-center">
              <Image
                src="/ni-full-web.png"
                aria-hidden="true"
                height={400}
                width={300}
                alt=""
                className="-z-20 flex object-cover object-center mx-auto  hover:scale-105 hover:ease-in-out hover:duration-500"
              />
            </div>
            <div className="flex flex-col justify-between gap-[20px] mb-[10px] items-end xs:items-center">
              <MdArrowOutward
                size={30}
                className="flex relative hover:cursor-pointer mt-5"
                onClick={() => {
                  router.push("/projects/IndustrialPortfolio");
                }}
              />
              <div className="flex flex-col justify-end gap-[20px] mb-[10px] items-center mx-2">
                <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
                  Simple layout using flexbox and grid.
                </p>
                <div className="grid grid-cols-3 text-[10px] text-white gap-2 text-center">
                  <p className="bg-black px-2 py-1  rounded-full">REACT</p>
                  <p className="bg-black px-2 py-1 rounded-full">CSS</p>
                  <p className="bg-black px-2 py-1 rounded-full">FRONT-END</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-[100px] my-[30px]">
        <h1 className="text-center text-xl font-medium leading-6">
          Promptopia
        </h1>

        <div className="flex sm:flex-row flex-col gap-[20px] my-[40px]">
          <Image
            src="/promptopia-small.png"
            aria-hidden="true"
            height={400}
            width={250}
            alt=""
            className="-z-20 flex object-cover object-center w-[480px]  hover:scale-105 hover:ease-in-out hover:duration-500"
          />
          <div className="flex flex-col justify-between gap-[20px] mb-[10px] items-end xs:items-center">
            <MdArrowOutward
              size={30}
              className="flex relative hover:cursor-pointer mt-5"
              onClick={() => {
                router.push("/projects/Promptopia");
              }}
            />
            <div className="flex flex-col justify-end gap-[20px] mb-[10px] items-center">
              <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
                Powered by Next.js 14, full-stack application leverages
                technologies like Tailwind CSS for styling, Next Auth for
                authentication, and MongoDB for database management.
              </p>
              <div className="grid grid-cols-3 text-[10px] text-white gap-2 text-center">
                <p className="bg-black px-2 py-1 rounded-full">FULL-STACK</p>
                <p className="bg-black px-2 py-1 rounded-full">NEXT.JS</p>
                <p className="bg-black px-2 py-1 rounded-full">TAILWIND CSS</p>
                <p className="bg-black px-2 py-1 rounded-full">MONGODB</p>
                <p className="bg-black px-2 py-1 rounded-full">HEADLESS UI</p>
                <p className="bg-black px-2 py-1 rounded-full">NEXT AUTH</p>
                <p className="bg-black px-2 py-1 rounded-full">TYPESCRIPT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:my-[100px] my-[30px]">
        <h1 className="text-center text-xl font-medium leading-6">
          Family Voyage
        </h1>

        <div className="flex sm:flex-row flex-col gap-[20px] my-[40px]">
          <Image
            src="/family-voyage-full-page.png"
            aria-hidden="true"
            height={400}
            width={250}
            alt=""
            className="-z-20 flex object-cover object-center w-[480px]  hover:scale-105 hover:ease-in-out hover:duration-500"
          />
          <div className="flex flex-col justify-between gap-[20px] mb-[10px] items-end xs:items-center">
            <MdArrowOutward
              size={30}
              className="flex relative hover:cursor-pointer mt-5"
              onClick={() => {
                router.push("/projects/FamilyVoyage");
              }}
            />
            <div className="flex flex-col justify-end gap-[20px] mb-[10px] items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Zen;
