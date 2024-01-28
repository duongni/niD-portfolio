import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row mt-[40px] py-[15px] px-[40px] bg:black shadow-lg justify-between rounded-full items-center">
      <div className="flex   text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium">
        <Link href="/">Introduction</Link>
      </div>
      <div className="flex text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium">
        <Link href="/projects">Projects</Link>
      </div>
      <div className="flex  text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium">
        <Link href="/experience">Experience</Link>
      </div>
      <div className="flex  text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium">
        <Link href="/contacts">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
