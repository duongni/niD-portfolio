"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [toogleDropDown, setToogleDropdown] = useState(false);

  return (
    <nav className="">
      <div className="hidden sm:flex flex-row mt-[40px] py-[15px] px-[40px] bg:black shadow-lg justify-between rounded-full items-center ease-in duration-300 relative">
        <div className="flex text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium">
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
      <div className="sm:hidden flex flex-col justify-center px-auto py-[15px] items-center">
        <FiMenu
          size={26}
          onClick={() => setToogleDropdown(!toogleDropDown)}
          className="hover:cursor-pointer"
        />
        {toogleDropDown && (
          <div className="">
            <div className="flex flex-col pt-[15px] px-auto relative shadow-md justify-center rounded-md z-10 items-center w-[200px] gap-2">
              <div className="flex text-sm font-normal hover:text-black text-gray-700 tracking-wide hover:font-medium py-2">
                <Link href="/" onClick={() => setToogleDropdown(false)}>
                  Introduction
                </Link>
              </div>
              <div className="flex text-sm font-normal py-2 hover:text-black text-gray-700 tracking-wide hover:font-medium">
                <Link href="/projects" onClick={() => setToogleDropdown(false)}>
                  Projects
                </Link>
              </div>
              <div className="flex  text-sm font-normal py-2 hover:text-black text-gray-700 tracking-wide hover:font-medium">
                <Link
                  href="/experience"
                  onClick={() => setToogleDropdown(false)}
                >
                  Experience
                </Link>
              </div>
              <div className="flex  text-sm font-normal pt-2 pb-4 hover:text-black text-gray-700 tracking-wide hover:font-medium">
                <Link href="/contacts" onClick={() => setToogleDropdown(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
