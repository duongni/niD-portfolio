import Image from "next/image";
import TotalExperience from "@/components/TotalExperience";

const page = () => {
  return (
    <div className="my-[40px]">
      <div className="flex flex-col align-center   gap-6">
        <Image
          src="/intro-coding.png"
          alt="Introduction to Coding Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px]  hover:scale-105 mx-auto hover:ease-in-out hover:duration-500"
        />
        <Image
          src="/intro-web.png"
          alt="Introduction to Web Development Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px] mx-auto hover:scale-105 hover:ease-in-out hover:duration-500"
        />
        <Image
          src="/advance-web.png"
          alt="Advance Web Development Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px] mx-auto hover:scale-105 hover:ease-in-out hover:duration-500"
        />
        <Image
          src="/react-dev.png"
          alt="React Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px] mx-auto hover:scale-105 hover:ease-in-out hover:duration-500"
        />
        <Image
          src="/responsive-web.png"
          alt="Responsive Web Development Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px] mx-auto hover:scale-105 hover:ease-in-out hover:duration-500"
        />
        <Image
          src="/responsive-advance-web.png"
          alt="Advance Responsive Web Development Certificate"
          width={500}
          height={300}
          className="flex rounded-3xl my-[10px] mx-auto hover:scale-105 hover:ease-in-out hover:duration-500"
        />
      </div>
      <TotalExperience />
    </div>
  );
};

export default page;
