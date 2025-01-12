"use client"
import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

function AboutUs() {
  return (
    <section className="bg-black px-4 md:px-16 flex flex-col justify-between md:flex-row md:items-center py-12">
      {/* Left Section: Text Content */}
      <div
        className="text-center sm:text-left text-white w-full md:w-[50%]"
        style={{ animation: 'fadeIn 1.5s ease-out forwards' }}
      >
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody
          Products
        </h2>

        <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul className="ml-[10%] text-center md:text-left md:ml-[0] mt-6 space-y-4">
          <li className="flex items-center text-[14px] md:text-[16px]">
            <FaCheck className="text-center text-[#FF9F0D] mr-3" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-center text-[14px] md:text-[16px]">
            <FaCheck className="text-[#FF9F0D] mr-3" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-center text-[14px] md:text-[16px]">
            <FaCheck className="text-[#FF9F0D] mr-3" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <button className="bg-[#FF9F0D] text-white text-[14px] md:text-[16px] w-[120px] md:w-[190px] h-[40px] md:h-[60px] rounded-full mt-8 hover:bg-yellow-800 transition-all duration-300">
          See More
        </button>
      </div>

      {/* Right Section: Image Content */}
      <div
        className="mt-12 md:mt-0 md:w-[50%] flex flex-col items-center md:items-end"
        style={{ animation: 'fadeInUp 1.5s ease-out forwards' }}
      >
        <Image
          src="/images/about.jpg"
          width={660}
          height={330}
          alt="Main Dish"
          className="hidden md:block rounded w-full md:w-[660px] h-auto"
        />

        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-6">
          <Image
            src="/images/about1.jpg"
            width={322}
            height={194}
            alt="Sub Dish 1"
            className="hidden md:block rounded w-full md:w-[322px] h-auto"
          />
          <Image
            src="/images/about2.jpg"
            width={322}
            height={194}
            alt="Sub Dish 2"
            className="hidden md:block rounded w-full md:w-[322px] h-auto"
          />
        </div>
      </div>

      {/* Inline CSS for keyframes animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
