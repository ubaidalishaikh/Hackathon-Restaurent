"use client"
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center px-5 overflow-hidden">
            {/* Background Image with Heavy Dark Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/heroimage.jpg)',
                    opacity: 0.1,
                    
                }}
            ></div>

            <div className="hidden sm:block flex flex-col justify-center gap-[50px]" style={{ animation: 'slideInLeft 1s ease-out forwards' }}>
                <div>
                    <FaFacebookF className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out" />
                </div>
                <div>
                    <FaTwitter className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out" />
                </div>
                <div>
                    <FaPinterest className="text-white text-[20px] hover:text-[#FF9F0D] transform hover:scale-110 transition-all duration-300 ease-in-out" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-6" style={{ animation: 'fadeInUp 1.5s ease-out forwards' }}>
                    <p className="font-[32px] font-greatVibes text-yellow-400 text-[32px] animate-pulse">
                        It&apos;s Quick & Amusing!
                    </p>
                    <h1 className="text-5xl font-bold leading-tight">
                        <span className="text-yellow-400">T</span>he Art of speed <br />
                        food <span className="text-yellow-400">Quality</span>
                    </h1>
                    <p className="text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
                    </p>
                    <button className="bg-[#FF9F0D] text-white font-semibold py-3 px-6 shadow-lg rounded-[20px] hover:bg-yellow-500 transition transform hover:scale-105">
                        See Menu
                    </button>
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center">
                    <Image
                        src="/images/hero-section.png"
                        alt="hero"
                        width={624.15}
                        height={633.51}
                        className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[624.15px] lg:h-[633.51px] transition-transform duration-700 ease-in-out transform hover:scale-110"
                        style={{ animation: 'fadeIn 2s ease-in forwards' }}
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

                @keyframes slideInLeft {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(0);
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
