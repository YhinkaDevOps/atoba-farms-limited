"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-svh pt-[100px]">
      <div className="about-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">ABOUT US</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">About Us</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col gap-4">
        <h6 className="text-3xl">Rena Agricultural Services Limited</h6>
        <p className="text-justify">
          <span className="font-bold">
            Rena Agricultural Services Limited,
          </span>{" "}
          located in Ibadan, Oyo State, is a food processing company
          specializing in the conversion of live broiler chicken into
          meticulously preserved and packaged frozen chicken meat. Collaborating
          with local farmers, we ensure the delivery of high-quality products
          from our factory and offices.
        </p>

        <p className="text-justify">
          The establishment of our firm was driven by a strategic mission to
          address the substantial demand-supply disparity within the Nigerian
          foods market, specifically targeting the local production of chicken
          meat. Our purpose is rooted in bridging this gap, contributing to the
          growth of self-sufficiency in the poultry industry, and ensuring that
          the market is adequately supplied with high-quality locally produced
          chicken meat. We commenced farming business over a decade now,
          however, the company was incorporated by the Corporate Affairs
          Commission in Oct 2018.
        </p>

        <p className="text-justify">
          Nigeria presently boasts a chicken population of 165 million, yielding
          approximately 650,000 metric tons (MT) of eggs and 300,000 MT of meat.
          However, the existing demand for poultry stands at a staggering 200
          million birds, with a corresponding demand for eggs and meat at around
          790,000 MT and 1,500,000 MT, respectively. This glaring disparity
          reveals a substantial demand gap, exacerbated by the influx of
          approximately 1,200,000 MT of smuggled meat, as reported by Business
          Day in 2019
        </p>

        <p className="text-justify">
          In response, we envision establishing a robust and sustainable
          business model that not only addresses this significant demand but
          also contributes to reducing the nation's reliance on imported chicken
          meat. Through strategic interventions and quality agricultural
          practices, we aim to play a pivotal role in meeting the domestic
          requirements, fostering economic growth, and promoting
          self-sufficiency in poultry production.
        </p>

        <p className="text-justify">
          As we actively explore new avenues, our unwavering commitment to
          responsible business practices remains at the forefront of our
          endeavors. We consistently strive to conduct our operations in a
          manner that not only upholds our esteemed reputation but also propels
          us toward continuous innovation.
        </p>

        <p className="text-justify">
          This commitment is driven by our vision to secure a sustainable and
          improved quality of life for consumers both now and into the future.
          Embracing a forward-thinking approach, we actively seek innovative
          solutions that not only meet the needs of today but also contribute to
          a lasting positive impact on the future. Our pursuit of excellence is
          anchored in the belief that responsible business practices and a
          dedication to innovation are pivotal in shaping a better tomorrow for
          all.
        </p>
      </div>
    </div>
  );
};

export default About;
