"use client";

import { categories, portfolioImages } from "@/utils/portfolio-section-items";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        {/* <div className="text-center">
          <p className="text-sm text-blue-500 uppercase font-medium">
            UI/UX Portfolio
          </p>
          <h2 className="text-3xl font-bold mt-2">Check Our Previous Work</h2>
        </div> */}

        {/* top */}
        <div className="relative">
          {/* <div className="bg-[url('/assets/answers-bg.png')] bg-cover bg-center bg-no-repeat h-[712px] w-full absolute bottom-0 left-0 -z-10"></div> */}

          <div className="">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-orange-500 uppercase font-medium">
                  UI/UX Portfolio
                </p>
                <h2 className="text-3xl font-bold mt-2 text-background">
                  Check Our Previous Work
                </h2>
              </div>

              <div>
                <button className="bg-primary h-10 w-60 text-white font-semibold rounded">
                  All Portfolio
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6 pb-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm font-medium uppercase transition ${
                    activeCategory === category
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Slider */}
        <div className="relative mt-8 overflow-hidden container mx-auto z-20">
          <div className="grid grid-cols-4 gap-6">
            {portfolioImages.map((src, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  width={1280}
                  height={720}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {/* <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button className="bg-primary p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="bg-primary p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
              <FaChevronRight />
            </button>
          </div> */}
        </div>

        {/* View All Portfolio Button */}
        {/* <div className="text-center mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            All Portfolio
          </button>
        </div>
         */}

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-gray-700 p-3 rounded hover:bg-blue-500 hover:text-white transition border border-gray-300">
            <FaChevronLeft />
          </button>

          <button className="bg-primary text-white p-3 rounded shadow-lg hover:bg-blue-500 hover:text-white transition">
            <FaChevronRight />
          </button>
        </div>

        <div className="flex items-center justify-end gap-4">
          <h4 className="uppercase tracking-widest text-background">
            Creative Solution
          </h4>
          <div className="h-[2px] w-20 bg-background"></div>
        </div>
      </div>
    </div>
  );
}
