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

const Products = () => {
  return (
    <div className="min-h-[800px] md:min-h-svh pt-[100px]">
      <div className="products-bg text-white bg-[#f6f6f6] py-12 px-4 md:py-16 md:px-[20px] lg:px-[50px] xl:px-[120px] flex flex-col gap-3 ">
        <h6 className="text-2xl font-semibold px-2">OUR PRODUCTS</h6>
        <span className="flex gap-x-3 text-sm items-center px-2">
          <Link className="hover:text-[#900C3F]" href="/">
            Home
          </Link>
          /<span className="font-semibold">Our Products</span>
        </span>
      </div>

      <div className="px-4 md:px-0 mx-auto max-w-[1100px] py-10 flex flex-col lg:flex-row gap-5 lg:gap-9">
        <div className="flex flex-col gap-4 basis-1/2">
          <h2 className="font-bold">Rena Agricultural Services Limited</h2>
          <p className="text-justify">
            MEAT & POULTRY – EGG FARMING, POULTRY MEAT – BROILER & LAYER,
            (...raising poultry, encompassing layers, broilers, chickens, egg
            production, and the distribution of frozen feeds..)
          </p>
          <p className="text-justify">
            We supply nutritious meat and poultry products to food producers,
            retailers, and food service operators across Nigeria. In the pursuit
            of healthier living, individuals are increasingly incorporating
            animal protein into their diets for essential nutrients. At Rena
            Agricultural Services Limited, our mission is to provide consumers
            with convenient and sustainable protein options, aligning with the
            evolving preferences of those seeking quality nutrition.
          </p>
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

export default Products;
