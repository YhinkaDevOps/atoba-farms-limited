"use client";
import React from "react";
// import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="min-h-[300px] mx-auto py-12 flex flex-col">
      <div className="px-4 lg:px-0">
        <h6 className="text-center mb-5 text-2xl">
          WELCOME TO RENA AGRICULTURAL SERVICES
        </h6>
        <p className="text-center lg:mx-[200px] mb-10">
          Situated in Ibadan, Oyo State, Rena Agricultural Services is a leading food processing
          company specializing in the transformation of live broiler chicken
          into premium frozen chicken meat. Within our state-of-the-art factory
          and offices, we collaborate closely with multiple local live bird
          farmers. This partnership ensures the delivery of high-quality
          products and services, reflecting our commitment to excellence in
          every step of the process.
        </p>

        <h6 className="text-center text-3xl">WHAT WE DO</h6>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto max-w-[1000px] p-2 mt-5 ">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px]">Chicken Processing</p>
            <p className="text-[#8f8f8f]  text-center">
              Embark on a culinary journey with our Chicken Processing services,
              where farm-fresh broiler chickens are transformed into a
              harmonious symphony of flavors.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px]">Flavorful Preservations</p>
            <p className="text-[#8f8f8f] text-center">
              From our hands to your plate, enjoy meat that is not just
              preserved but perfected.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px]">Elegant Packaging</p>
            <p className="text-[#8f8f8f]  text-center">
              Elegance in Every Package: Immerse yourself in the art of
              presentation with our thoughtfully designed packaging.
            </p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[20px]">Precision Butchering</p>
            <p className="text-[#8f8f8f]  text-center">
              Our skilled butchers ensure each cut is made with precision,
              delivering top-notch meat products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
