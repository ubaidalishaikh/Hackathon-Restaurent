// pages/about.js
import React from "react";
import Image from "next/image";


const AboutUs = () => {
  return (
    <div className="bg-black text-white py-12 p-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-[#FF9F0D] font-semibold text-lg mb-4">About us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Create the Best <br /> Foody Product
            </h1>
            <p className="text-gray-400 text-base md:text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#FF9F0D] mr-4">✔</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9F0D] mr-4">✔</span> Quisque diam pellentesque bibendum non dui volutpat fringilla.
              </li>
              <li className="flex items-start">
                <span className="text-[#FF9F0D] mr-4">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
            <button className="mt-6 bg-[#FF9F0D] text-black font-medium px-6 py-3 rounded-md">
              Read More
            </button>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="row-span-2">
              <Image
                src="/food1.jpg"
                alt="Food 1"
                width={660}
                height={330}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/food2.jpg"
                alt="Food 2"
                width={322}
                height={194}
                className="rounded-lg"
              />
            </div>
            <div>
              <Image
                src="/food3.jpg"
                alt="Food 3"
                width={322}
                height={194}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
