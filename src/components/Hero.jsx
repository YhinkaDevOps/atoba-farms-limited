"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-image min-h-screen">
      <div className="bg-text mt-28">
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl md:text-[58px] md:leading-[70px]">
            Welcome to Atoba Farms Limited:{" "}
            <span className="text-3xl md:text-[50px]">
              Where Freshness Meets Flavor!
            </span>
          </h1>
          <p>
            We take pride in cultivating the finest vegetable crops and
            providing premium-quality meats from our farm to your table.
          </p>

          <div>
            <button className="px-7 py-3 rounded-md border-2 border-[#00ce1b] hover:bg-orange-600 transition duration-300 ease-in-out">
              <Link href="/contact-us">Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
