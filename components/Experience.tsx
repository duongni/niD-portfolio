import Image from "next/image";

const Experience = () => {
  return (
    <div className="flex flex-col md:max-w-[600px] mt-[30px]">
      <h3 className="text-center text-xl font-medium my-[30px]">
        Past Experience
      </h3>
      <h4 className="flex text-md font-normal text-black leading-5 tracking-wide mt-[10px]">
        Ricardo Beverly Hills
      </h4>
      <p className="flex text-xs font-normal text-gray-20 leading-6 tracking-wide -mt-[5px] pt-0">
        Seattle, Washington - 2014 - 2018
      </p>
      <p className="flex text-sm font-normal text-gray-20 leading-5 tracking-wide mt-[10px]">
        Design travel products such as luggage, duffels, bags for Ricardo and
        Skyway brand Core and derivative, SMU products. Manage projects from
        start (concept) to finish (production), project status reports, working
        with factories oversea, product seasonal planning, develop and prepare
        samples for meeting.
      </p>
      <div className="hide-scrollbar flex items-start justify-start gap-8 overflow-x-auto mt-[10px]">
        <Image
          src="/ricardo-2.png"
          alt="Skyway Collection Colors"
          width={600}
          height={300}
          className="flex rounded-3xl my-[10px]"
        />
        <Image
          src="/ricardo-1.png"
          alt="Work with luggage factory"
          width={600}
          height={300}
          className="flex rounded-3xl my-[10px]"
        />
      </div>
    </div>
  );
};

export default Experience;
