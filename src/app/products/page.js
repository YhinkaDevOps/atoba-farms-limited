"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import goat from "../../../public/assets/goat.jpeg";
import Image from "next/image";

import Link from "next/link";

const Products = () => {
  return (
    <div className="min-h-[800px] md:min-h-svh pt-[79px]">
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
        <div className="flex flex-col gap-4 basis-1/2 text-sm">
          <h2 className="text-3xl service-header">ATOBA FARMS LIMITED</h2>
          <p className="text-justify">
            Welcome to our "Our Products" page, where you can explore the
            diverse range of offerings from Atoba Farms Limited. From fresh,
            farm-raised meats to bountiful harvests of fruits and vegetables, we
            take pride in delivering premium-quality products to our valued
            customers.
          </p>
          <p className="text-justify">
            In our animal production line, we offer a variety of poultry
            products, including succulent chicken and flavorful eggs.
            Additionally, our selection of beef and goat meat provides options
            for every culinary preference, all sourced from our ethically raised
            livestock.
          </p>
          <p className="text-justify">
            Complementing our meats, our crop production division yields an
            array of fresh produce, ranging from vibrant vegetables to juicy
            fruits. From crispy lettuce to ripe tomatoes, our farm-fresh
            offerings are bursting with flavor and nutrition.
          </p>
          <p className="text-justify">
            With our commitment to sustainable farming practices and meticulous
            attention to quality, you can trust that each product from Atoba
            Farms Limited is a testament to our dedication to excellence.
            Explore our selection and experience the difference of farm-to-table
            goodness with Atoba Farms Limited.
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
                src="https://www.greeneeds.com/blog/wp-content/uploads/2022/09/Goat-far-business.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://dailytrust.com/wp-content/uploads/2023/02/Cattle-sheep-or-goats.jpg"
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
            <SwiperSlide>
              <img
                src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2017/06/maize-plantation.jpg?w=680&ssl=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://babbangona.com/wp-content/uploads/2021/11/SALISU-ABUBARKAR-AND-ABDULRAHMAN-SHAFIU-3-1024x673.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://professions.ng/wp-content/uploads/2023/08/Skills-and-Qualifications-Needed-for-Agricultural-Management-in-Nigeria1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://dailytrust.com/wp-content/uploads/2018/12/A-Turkey-farm.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
