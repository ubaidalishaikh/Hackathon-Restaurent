'use client';
import React from "react";
import Image from "next/image";

function Category() {
  return (
    <section className="bg-black px-4 md:px-16 flex flex-col justify-between md:flex-col md:items-center py-12">
      {/* Header Section */}
      <div className="text-center sm:text-center text-white w-full md:w-[50%]">
        <h1 className="text-[24px] md:text-[32px] text-[#FF9F0D] font-greatVibes">
          Food Category
        </h1>

        <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold mt-2">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h2>
      </div>

      {/* Image Section */}
      <div className="mt-12 md:mt-0 md:w-[50%] flex flex-col items-center md:items-end">
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="w-full h-[200px] md:h-[200px]">
            <Image
              src="/images/category4.jpeg"
              width={362}
              height={356}
              alt="Sub Dish 1"
              className="rounded w-full h-full object-cover fadeIn"
            />
          </div>
          <div className="w-full h-[200px] md:h-[200px]">
            <Image
              src="/images/category2.jpeg"
              width={281}
              height={231}
              alt="Sub Dish 2"
              className="rounded w-full h-full object-cover fadeIn"
            />
          </div>
          <div className="w-full h-[200px] md:h-[200px]">
            <Image
              src="/images/category3.jpeg"
              width={244}
              height={304}
              alt="Sub Dish 3"
              className="rounded w-full h-full object-cover fadeIn"
            />
          </div>
          <div className="w-full h-[200px] md:h-[200px]">
            <Image
              src="/images/category1.jpeg"
              width={322}
              height={194}
              alt="Sub Dish 4"
              className="rounded w-full h-full object-cover fadeIn"
            />
          </div>
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

        .fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

export default Category;
