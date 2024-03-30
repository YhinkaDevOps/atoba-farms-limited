import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="about-font bg-[#7da500] py-16 text-[#ffffff]">
      <h4 className="service-header text-center text-3xl">ABOUT US</h4>
      <p className="px-4 md:px-0 text-center max-w-[1000px] mx-auto mt-7 font-sans">
        Welcome to Atoba Farms Limited, nestled in the heart of Ogun State,
        Nigeria. As a premier agro-farm, we are dedicated to excellence in every
        aspect of our operations. From animal production to crop cultivation,
        farm management, butcher services, and sales & distribution, we pride
        ourselves on delivering top-quality products and services to our valued
        customers.
      </p>

      <div className="flex flex-col md:flex-row gap-7 md:gap-4 mx-auto mt-6 items-center justify-center p-2 md:p-0">
        <div className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-700 border-lime-400 bg-white text-black ">
          <div className="flex">
            <span></span>
            <div className="flex flex-col">
              <p>WORKING HOURS</p>
              <p className="text-sm font-sans">Mon - Sat: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <button className="rounded-l-[50px] rounded-r-[50px] py-2 px-10 border-[5px] hover:border-red-700 border-lime-400 bg-white text-black ">
          <div className="flex">
            <span></span>
            <Link href="/contact-us">
              <div className="flex flex-col">
                <p>GET IN TOUCH NOW</p>
                <p className="text-sm font-sans">Offer Friendly Service</p>
              </div>
            </Link>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
