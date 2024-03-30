import React from "react";
import mission from "../../public/assets/mission.gif";
import Image from "next/image";

const MissionStatement = () => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1100px] mx-auto gap-6">
        <div className="bg-[#f8f8f8] p-10 flex flex-col gap-6 shadow-md relative">
          <div className="hidden md:block absolute md:top-[-20px] md:left-[250px]">
            <Image src={mission} width={50} height={50} alt="mission" />
          </div>
          <h1 className="text-center text-[#7da500] font-bold text-2xl">
            Mission Statement
          </h1>
          <p className="text-center text-base md:text-sm">
            To cultivate sustainable agriculture practices, deliver
            premium-quality products, and foster community well-being through
            ethical farming, expert management, and superior customer service.
          </p>
        </div>
        <div className="bg-[#f8f8f8] p-10 flex flex-col gap-6 shadow-md relative">
          <div className="hidden md:block absolute top-[-20px] left-[250px]">
            <Image src={mission} width={50} height={50} alt="mission" />
          </div>
          <h1 className="text-center text-[#7da500] font-bold text-2xl">
            Vision Statement
          </h1>
          <p className="text-center text-base md:text-sm">
            To be a leading agro-farm renowned for excellence in animal and crop
            production, farm management, butcher services, and sales and
            distribution, all while promoting sustainability and innovation in
            agriculture."
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
