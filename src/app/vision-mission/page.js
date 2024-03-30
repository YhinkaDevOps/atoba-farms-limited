"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";

const Vision = () => {
  return (
    <div className="min-h-[800px] md:min-h-svh pt-[100px]">
      <div className="mission-bg bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">VISION | MISSION</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Vision | Mission</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col lg:flex-row gap-5 lg:gap-9">
        <div className="flex flex-col gap-4 basis-1/2">
          <div className="flex flex-col gap-3">
            <h6 className="text-2xl font-semibold">Our Vision</h6>
            <p>
              To provide a consistent supply of high-quality frozen chicken to
              our customers whilst maintaining the highest global industry
              standards in food safety and defence.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h6 className="text-2xl font-semibold">Our Mission</h6>
            <p>
              We exist to provide quality chicken products to our esteemed
              customers whilst maintaining the highest global food safety
              standard at competitive prices. We are committed to enhancing food
              security in our country and providing a means of livelihood to
              small scale farmers in our host communities.
            </p>
          </div>
        </div>

        <div className="basis-1/2">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper max-w-[500px]"
          >
            <SwiperSlide>
              <img
                src="https://taghini.com/wp-content/uploads/2019/09/whole-chicken-1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://taghini.com/wp-content/uploads/2019/09/frozen-chicken-wings-1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://oatvanafarms.com/images/about/12.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://oatvanafarms.com/images/about/02.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://oatvanafarms.com/images/about/14.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Vision;
