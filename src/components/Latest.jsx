import React from "react";
import Link from "next/link";

const Latest = () => {
  return (
    <div className=" bg-[#f5f5f5] min-h-screen mx-auto py-12">
      <h5 className="text-center text-4xl mb-8">LATEST</h5>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-4 mx-auto max-w-[1100px] p-2 ">
        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            src="https://oatvanafarms.com/images/about/12.jpg"
            alt=""
            className="latest-img"
          />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Welcome to Rena Agricultural Services
            </p>
            <span className="text-sm">Feb 01, 2019</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              Rena Agricultural Services, located in Ibadan, Oyo State, is a
              food processing company specializing in the conversion of live
              broiler chicken into meticulously preserved and packaged frozen
              chicken meat....
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/about-us"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            src="https://www.poultryworld.net/app/uploads/2022/05/IMG_gro408851-028-848x565.jpg"
            alt=""
            className="latest-img"
          />
          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">
              Rena Agricultural Services Products
            </p>
            <span className="text-sm">Feb 01, 2019</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              Poultry meat stands out as an incredibly versatile option in the
              market, valued not only for its affordability but also for its low
              fat content and high protein levels...
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/products"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center rounded-md border shadow-lg shadow-[rgb(4,12,22)]">
          <img
            className="latest-img"
            src="https://oatvanafarms.com/images/about/01.jpg"
            alt=""
          />

          <div className="p-2 flex flex-col space-y-2 py-3">
            <p className="font-semibold text-[20px]">Our Mission and Vision</p>
            <span className="text-sm">Feb 01, 2019</span>
            <p className="text-[#8f8f8f] text-justify text-sm">
              To provide a consistent supply of high-quality frozen chicken to
              our customers whilst maintaining the highest global industry
              standards in food safety and defence.
            </p>
            <span className="inline-block text-[#ee1c25] text-sm text-right  ">
              <Link
                className="underline hover:no-underline hover:text-red-300"
                href="/vision-mission"
              >
                Read More
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
