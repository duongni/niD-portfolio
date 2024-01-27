import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-0 border-gray-10 md:p-[17px] p-[2px] rounded-[10px] mb-[30px] ">
      <div className="flex flex-row justify-between">
        <div className="flex ">
          <Image
            src="/ni-profile.png"
            alt="Ni-Profile"
            width={49}
            height={49}
            className="flex rounded-[10px] mr-[10px] md:w-[49px] w-[46px] md:h-[49px] h-[46px] justify-center items-center"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">Ni Duong</h1>
            <p className="md:text-sm text-[12px] font-normal text-gray-20 tracking-wide">
              Front-End Developer
            </p>
          </div>
        </div>
        <div className="flex gap-[9px] justify-end">
          <Link
            className="border border-gray-10 rounded-[5px] bg-white md:w-[40px] w-[30px] w:h-[40px] h-[30px] flex justify-center items-center"
            href="https://github.com/duongni"
          >
            <FaGithub size={17} />
          </Link>
          <Link
            className="border border-gray-10 rounded-[5px] bg-white md:w-[40px] w-[30px] w:h-[40px] h-[30px] flex justify-center items-center"
            href="https://www.linkedin.com/in/ni-duong/"
          >
            <TfiLinkedin size={17} />
          </Link>
          <Link
            className="border border-gray-10 rounded-[5px] bg-white md:w-[100px] w-[80px] w:h-[40px] h-[30px] flex gap-[7px] justify-center items-center"
            href="https://www.linkedin.com/in/ni-duong/"
          >
            <MdEmail size={17} />
            <span className="text-sm font-normal text-gray-20 tracking-wide">
              Email
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
