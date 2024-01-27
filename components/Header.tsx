import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-0 border-gray-10 p-[17px] rounded-[10px] mb-[30px] ">
      <div className="flex flex-row justify-between">
        <div className="flex ">
          <Image
            src="/ni-profile.png"
            alt="Ni-Profile"
            width={49}
            height={49}
            className="rounded-[10px] mr-[10px]"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-medium">Ni Duong</h1>
            <p className="text-sm font-normal text-gray-20 tracking-wide">
              Front-End Developer
            </p>
          </div>
        </div>
        <div className="flex gap-[9px] justify-end">
          <Link
            className="border border-gray-10 rounded-[5px] bg-white w-[40px] h-[40px] flex justify-center items-center"
            href="https://github.com/duongni"
          >
            <FaGithub size={17} />
          </Link>
          <Link
            className="border border-gray-10 rounded-[5px] bg-white w-[40px] h-[40px] flex justify-center items-center"
            href="https://www.linkedin.com/in/ni-duong/"
          >
            <TfiLinkedin size={17} />
          </Link>
          <Link
            className="border border-gray-10 rounded-[5px] bg-white w-[100px] h-[40px] flex gap-[7px] justify-center items-center"
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
