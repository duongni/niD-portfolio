import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="nested-links">
        <div className="flex flex-row md:gap-[36px] gap-[12px] text-base font-light text-gray-20 tracking-wide">
          <div className="flex flex-col nested-links">
            <Link href="/">Portfolio</Link>
            <hr className="relative flex w-[69px] h-[2px] mt-[17px] bg-gray-20 border-0 hover:cursor-pointer" />
          </div>
          <div className="flex flex-col nested-links">
            <Link href="/projects">Projects</Link>
            <hr className="relative flex w-[69px] h-[2px] mt-[17px] bg-gray-20 border-0 hover:cursor-pointer" />
          </div>
          <div className="flex flex-col nested-links">
            <Link href="/experience">Experience</Link>
            <hr className="relative flex w-[90px] h-[2px] mt-[17px] bg-gray-20 border-0 hover:cursor-pointer" />
          </div>
          <div className="flex flex-col nested-links">
            <Link href="/contacts">Contact</Link>
            <hr className="relative flex w-[66px] h-[2px] mt-[17px] bg-gray-20 border-0 hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <hr className=" flex h-[2px] -mt-[2px] mb-[17px] bg-gray-20 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Navbar;
