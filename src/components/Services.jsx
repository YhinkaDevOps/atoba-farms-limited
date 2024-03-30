"use client";
import React from "react";
import chickenicon from "../../public/assets/chicken-icon.png";
import vegetablecrops from "../../public/assets/vegetable-crops.png";
import butchericon from "../../public/assets/butcher-icon.png";
import gardentrolley from "../../public/assets/garden-trolley.png";
import distribution from "../../public/assets/distribution.png";
import Image from "next/image";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-[300px] mx-auto py-16 flex flex-col">
      <div className="px-4 lg:px-0">
        <h6 className="text-center text-2xl service-header text-[#cc1c10]">
          WHAT WE DO
        </h6>

        <h5 className="service-phrase text-center mt-5 text-2xl md:text-4xl text-[#000000]">
          Transitioning from Poultry to Agro-Industrialization
        </h5>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mx-auto max-w-[1000px] md:p-2 mt-5">
          <div className="flex flex-col gap-3 items-center">
            <span className="rounded bg-[#00ce1b] p-3">
              <Image
                src={chickenicon}
                width={100}
                height={100}
                alt="chicken-icon"
              />
            </span>
            <p className="text-sm">Animal production</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="rounded bg-[#00ce1b] p-3">
              <Image
                src={vegetablecrops}
                width={100}
                height={100}
                alt="vegetable-crops"
              />
            </span>
            <p className="text-sm">Crop production</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="rounded bg-[#00ce1b] p-3">
              <Image
                src={butchericon}
                width={100}
                height={100}
                alt="butcher-service"
              />
            </span>
            <p className="text-sm">Butcher</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="rounded bg-[#00ce1b] p-3">
              <Image
                src={gardentrolley}
                width={100}
                height={100}
                alt="garden-trolley"
              />
            </span>
            <p className="text-sm">Farm management</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <span className="rounded bg-[#00ce1b] p-3">
              <Image
                src={distribution}
                width={100}
                height={100}
                alt="distribution"
              />
            </span>
            <p className="text-sm">Sales & Distribution</p>
          </div>
        </div>

        <h3 className="service-phrase text-[#000000] max-w-[1000px] mx-auto text-center mt-8">
          Discover superior poultry products alongside chicken, beef, and eggs
          for discerning consumers. For our agricultural partners, we specialize
          in crop production services, sales & distribution, butchering, and farm
          management.
        </h3>
      </div>
    </div>
  );
};

export default Services;
