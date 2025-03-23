"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  "UI/UX",
  "WEBSITE",
  "SEO",
  "LOGO DESIGN",
  "BANNER DESIGN",
  "GOOGLE ADS",
];

const portfolioImages = [
  "/images/portfolio1.jpg",
  "/images/portfolio2.jpg",
  "/images/portfolio3.jpg",
  "/images/portfolio4.jpg",
  "/images/portfolio5.jpg",
  "/images/portfolio6.jpg",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm text-blue-500 uppercase font-medium">
            UI/UX Portfolio
          </p>
          <h2 className="text-3xl font-bold mt-2">Check Our Previous Work</h2>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-6 mt-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium uppercase px-4 py-2 transition ${
                activeCategory === category
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Slider */}
        <div className="relative mt-8 overflow-hidden">
          <div className="grid grid-cols-3 gap-6">
            {portfolioImages.map((src, index) => (
              <div key={index} className="bg-white p-2 rounded-lg shadow-lg">
                <Image
                  src={src}
                  alt={`Portfolio ${index + 1}`}
                  width={1280}
                  height={720}
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button className="bg-white p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* View All Portfolio Button */}
        <div className="text-center mt-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            All Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
