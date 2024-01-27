import React from "react";
import Link from "next/link";

const Navbar = () => {
  const line = {
    border: "2px solid #FBFBFA",
    margin: "0 0 17 0",
  };
  return (
    <div className="flex flex-row gap-[32px] text-base font-light text-gray-20 tracking-wide">
      <div className="flex flex-row gap-[32px] text-base font-light text-gray-20 tracking-wide">
        <Link href="/" className="hover:text-black hover:font-normal">
          Portfolio
        </Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contacts">Contact</Link>
      </div>
      <hr style={line} />
    </div>
  );
};

export default Navbar;
