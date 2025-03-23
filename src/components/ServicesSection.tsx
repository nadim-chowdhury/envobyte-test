"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = [
  "WEBSITE",
  "UI/UX",
  "SEO",
  "LOGO DESIGN",
  "BANNER DESIGN",
  "GOOGLE ADS",
];

const services = [
  {
    title: "WordPress Website",
    description: "Design & Development",
    icon: "🖥️",
  },
  {
    title: "Content Writing",
    description: "For entire project",
    icon: "📝",
  },
  {
    title: "Monthly SEO",
    description: "Rank #1 on Google",
    icon: "📊",
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("WEBSITE");

  return (
    <div className="py-16 bg-[#0A1F44] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm text-orange-500 uppercase font-medium">
            Digital Services
          </p>
          <h2 className="text-3xl font-bold mt-2">
            Check Our Available Services
          </h2>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-6 mt-6 border-b border-gray-600 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-medium uppercase px-4 py-2 transition ${
                activeCategory === category
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0E2A52] p-6 rounded-lg text-center shadow-lg"
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
              <div className="mt-4 flex justify-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Portfolio
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
            <FaChevronLeft />
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
            All Services
          </button>
          <button className="bg-white text-gray-700 p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
