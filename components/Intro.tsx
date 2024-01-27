import Image from "next/image";

const Intro = () => {
  return (
    <div>
      <Image
        src="/ni-profile.png"
        height={300}
        width={300}
        alt="Ni Profile Picture"
        className="rounded-full mx-auto md:mt-[250px] my-[150px]"
      />
      <div className="h-[400px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto mb-[100px]"></div>
      <h1 className="font-bold text-black backdrop:leading-6 tracking-wide text-6xl mb-[48px] text-center">
        <div className="text-black leading-6 tracking-wide md:text-base text-sm mb-[48px] text-center">
          Hello, I'm
        </div>{" "}
        Ni Duong
      </h1>
      <div className="h-[400px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto my-[200px]"></div>
      <p className="font-normal text-black leading-6 tracking-wide md:text-base text-sm mb-[48px] text-center">
        a former Industrial Designer turned Front-end Developer.
      </p>
      <div className="h-[400px] w-[2px] bg-gray-20 opacity-25 rounded-full mx-auto my-[200px]"></div>
      <p className="font-normal text-black leading-6 tracking-wide md:text-base text-sm text-center">
        After 9 years of designing accessories and products, I stumbled upon a
        coding platform called SheCodes and got hooked from the first week of
        class. My favorite part of coding is problem-solving—the feeling of
        solving a puzzle is incredibly satisfying.
      </p>
    </div>
  );
};

export default Intro;
