import React from "react";
import Image from "next/image";

import { FaPizzaSlice, FaHamburger, FaIceCream, } from "react-icons/fa";

function ChooseUS() {
  return (
    <section className="bg-black px-4 md:px-16 flex flex-col-reverse md:flex-row justify-between md:items-center py-12">
      {/* Right Section: Text Content */}
   

      {/* Left Section: Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {/* First Image */}
        <div className="w-full h-auto">
          <Image
            src="/images/image10.png"
            alt="Dish 1"
            layout="responsive"
            width={362}
            height={356}
            className="rounded object-cover"
          />
        </div>
        {/* Second Image */}
        <div className="w-full h-auto">
          <Image
            src="/images/category2.jpeg"
            alt="Dish 2"
            layout="responsive"
            width={281}
            height={231}
            className="rounded object-cover"
          />
        </div>
        <div className="w-full h-auto">
          <Image
            src="/images/image11.png"
            alt="Dish 3"
            layout="responsive"
            width={244}
            height={306}
            className="rounded object-cover"
          />
        </div>
        {/* Third Image */}
        <div className="w-full h-auto">
          <Image
            src="/images/image12.png"
            alt="Dish 3"
            layout="responsive"
            width={221}
            height={226}
            className="rounded object-cover"
          />
        </div>
        {/* Fourth Image */}
      
        {/* Fifth Image */}
        <div className="w-full h-auto">
          <Image
            src="/images/image13.png"
            alt="Dish 5"
            layout="responsive"
            width={161}
            height={168}
            className="rounded object-cover"
          />
        </div>
        {/* Sixth Image */}
        <div className="w-full h-auto">
            
            
          <Image
            src="/images/image14.png"
            alt="Dish 6"
            layout="responsive"
            width={161}
            height={166}
            className="rounded object-cover"
          />
        </div>
        
      </div>
      <div className="ml-[30px] text-center md:text-left text-white w-full md:w-[50%] mb-6 md:mb-0">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Why Choose Us
        </h1>

        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Ex</span>traordinary Taste and Experience
        </h2>

        <p className="text-[14px] md:text-[16px] mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>
        <div className="flex flex-row gap-[20px] text-center ml-6">
        <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center bg-yellow-500 text-white w-14 h-14 rounded-full"
        >
          <FaHamburger size={28} />
        </div>
        <p className="text-white mt-2 text-sm">Fast Food</p>
      </div>

      {/* Icon Item */}
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center bg-yellow-500 text-white w-14 h-14 rounded-full"
        >
          <FaPizzaSlice size={28} />
        </div>
        <p className="text-white mt-2 text-sm">Lunch</p>
      </div>

      {/* Icon Item */}
      <div className="flex flex-col items-center">
        <div
          className="flex items-center justify-center bg-yellow-500 text-white w-14 h-14 rounded-full"
        >
          <FaIceCream size={28} />
        </div>
        <p className="text-white mt-2 text-sm">Deserts</p>
      </div>

    
      </div>
      </div>
    </section>
  );
}

export default ChooseUS;
