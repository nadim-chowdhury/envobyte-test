"use client";

import { categories, services } from "@/utils/service-section-items";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("WEBSITE");

  return (
    <div className="py-16 bg-background text-white">
      <div className="container mx-auto px-6">
        {/* top */}
        <div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm text-orange-500 uppercase font-medium">
                Digital Services
              </p>
              <h2 className="text-3xl font-bold mt-2">
                Check Our Available Services
              </h2>
            </div>

            <div>
              <button className="bg-primary h-10 w-60 text-white font-semibold rounded">
                All Services
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

        {/* Services List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#3158C733]/20 p-6 text-center border border-gray-500 rounded"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt=""
                  width={960}
                  height={960}
                  className="w-44 h-44 object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-400 mt-2">{service.description}</p>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-28 h-9 rounded-full">
                  Portfolio
                </button>
                <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white w-28 h-9 rounded-full">
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-gray-700 p-3 rounded shadow-lg hover:bg-blue-500 hover:text-white transition">
            <FaChevronLeft />
          </button>

          <button className="bg-primary text-white p-3 rounded shadow-lg hover:bg-blue-500 hover:text-white transition">
            <FaChevronRight />
          </button>
        </div>

        <div className="flex items-center justify-end gap-4">
          <h4 className="uppercase tracking-widest">Creative Solution</h4>
          <div className="h-[2px] w-20 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
