// pages/food.js
import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="bg-black text-white py-12 p-36">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-[#FF9F0D] font-semibold text-lg">Food Category</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            <span className="text-[#FF9F0D]">Choose</span> Food Item
          </h1>
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Item 1 */}
          <div className="relative">
            <Image
              src="/category.png"
              alt="Food Item 1"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-[#FF9F0D] text-black font-medium px-4 py-2 rounded-md">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white font-medium px-4 py-2 rounded-md">
              Fast Food Dish
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <Image
              src="/category2.png"
              alt="Food Item 2"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Item 3 */}
          <div>
            <Image
              src="/category3.png"
              alt="Food Item 3"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Item 4 */}
          <div>
            <Image
              src="/category4.png"
              alt="Food Item 4"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
