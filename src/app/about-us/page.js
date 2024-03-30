"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-svh pt-[79px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="text-[#000000] px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col gap-4">
        <h6 className="text-3xl service-header">ATOBA FARMS LIMITED</h6>
        <p className="text-justify">
          <span className="font-bold">Atoba Farms Limited,</span> Welcome to
          Atoba Farms Limited, nestled in the heart of Ogun State, Nigeria. As a
          premier agro-farm, we are dedicated to excellence in every aspect of
          our operations. From animal production to crop cultivation, farm
          management, butcher services, and sales and distribution, we pride
          ourselves on delivering top-quality products and services to our
          valued customers.
        </p>

        <p className="text-justify">
          In our animal production division, we raise healthy and happy
          livestock, including poultry, cattle, and goats. Our commitment to
          ethical farming practices ensures that our animals thrive in a natural
          environment, resulting in superior-quality meat products.
        </p>

        <p className="text-justify">
          In tandem with our animal production, our crop production endeavors
          yield an abundant harvest of nutritious and flavorful fruits and
          vegetables. From lush fields to vibrant orchards, our crops are
          cultivated with care and precision, reflecting our dedication to
          sustainable agriculture.
        </p>

        <p className="text-justify">
          At Atoba Farms Limited, our farm management services extend beyond the
          fields, providing expert guidance and support to fellow farmers and
          agricultural partners. Whether you're seeking advice on crop rotation,
          livestock management, or farm infrastructure, our experienced team is
          here to help you maximize your agricultural potential.
        </p>

        <p className="text-justify">
          Furthermore, our butcher services offer a wide selection of fresh,
          locally sourced meats, including beef, chicken, and goat, expertly
          prepared to meet the highest standards of quality and taste.
        </p>

        <p className="text-justify">
          Join us on a journey of farm-to-table excellence at Atoba Farms
          Limited, where passion, integrity, and sustainability converge to
          create a thriving agricultural enterprise.
        </p>
      </div>
    </div>
  );
};

export default About;
