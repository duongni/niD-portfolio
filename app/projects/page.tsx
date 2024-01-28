import Image from "next/image";

const Zen = () => {
  return (
    <div className="mx-auto md:max-w-[600px] ">
      <div className="md:my-[100px] my-[30px]">
        <h1 className="text-left text-xl font-medium leading-6">Zen</h1>
        <p className="font-normal text-gray-20 leading-6 tracking-wide md:text-base text-sm mt-[10px]">
          The main goal of the Zen website is to provide users with a serene and
          visually appealing platform for exploring National Parks and
          campgrounds. It aims to offer a calming browsing experience,
          facilitating easy navigation through park information and campground
          details, ultimately encouraging users to connect with nature and
          embark on outdoor adventures with a sense of tranquility and ease.
        </p>

        <div className="flex md:flex-row flex-col">
          <Image
            src="/ZEN-1.png"
            aria-hidden="true"
            height={400}
            width={250}
            alt=""
            className="-z-20 flex object-cover object-center w-[480px] hover:scale-80"
          />
          <div className="flex flex-col justify-end gap-[20px] mb-[10px]">
            <p className="font-normal text-gray-20 leading-6 tracking-wide  text-sm mt-[10px]">
              I designed and coded a user-friendly interface for a website aimed
              at inviting users to explore national parks and camps. The data is
              sourced from the National Park Service's API.
            </p>
            <div className="grid grid-cols-3 text-[10px] text-white gap-2 text-center">
              <p className="bg-black px-2 py-1 rounded-full">NEXT.JS</p>
              <p className="bg-black px-2 py-1 rounded-full">TAILWIND CSS</p>
              <p className="bg-black px-2 py-1 rounded-full">MONGODB</p>
              <p className="bg-black px-2 py-1 rounded-full">HEADLESS UI</p>
              <p className="bg-black px-2 py-1 rounded-full">NEXT AUTH</p>
              <p className="bg-black px-2 py-1 rounded-full">TYPESCRIPT</p>
            </div>
          </div>
        </div>
        <div className="grid  grid-cols-2 mx-auto">
          <Image
            src="/park-1.png"
            alt="Softgood luggage collection"
            width={400}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/park-2.png"
            alt="Skyway-Softgood luggage collection"
            width={400}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/park-3.png"
            alt="Skyway Collection Colors"
            width={400}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
          <Image
            src="/park-4.png"
            alt="Skyway Collection Colors"
            width={400}
            height={300}
            className="flex rounded-3xl my-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Zen;
