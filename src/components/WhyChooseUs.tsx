import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black text-white py-10 px-5 md:px-20 ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4 p-28">
          <Image
            src="/Whychoose1.png"
            alt="Tacos"
            width={300}
            height={300}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Whychoose2.png"
            alt="Burger"
            width={300}
            height={300}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Whychoose3.png"
            alt="Fried Chicken"
            width={300}
            height={300}
            className="rounded-lg w-full h-full object-cover"
          />
          <Image
            src="/Whychoose4.png"
            alt="Dish"
            width={300}
            height={300}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h3 className="text-yellow-500 font-medium">Why Choose Us</h3>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mt-2">
              Extra <span className="text-yellow-500">Ordinary</span> Taste <br />
              And Experienced
            </h1>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
            elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <div className="grid grid-cols-3 gap-4 text-center">
            {/* Features */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-3">
                <Image src="/chooseBurger.png" alt="Fast Food" width={30} height={30} />
              </div>
              <p className="text-sm font-semibold">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-3">
                <Image src="/chooseLaunch.png" alt="Lunch" width={30} height={30} />
              </div>
              <p className="text-sm font-semibold">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 rounded-full p-4 mb-3">
                <Image src="/chooseDinner.png" alt="Dinner" width={30} height={30} />
              </div>
              <p className="text-sm font-semibold">Dinner</p>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg">
              30+
            </div>
            <p className="font-medium text-lg">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
