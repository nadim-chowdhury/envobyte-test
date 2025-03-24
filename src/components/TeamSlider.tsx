"use client";
import { teamMembers } from "@/utils/team-members";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h5 className="text-blue-600 uppercase font-medium tracking-widest mb-4">
          Experienced Team
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Team Members
        </h2>
      </div>

      {/* Team Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.slice(currentIndex, currentIndex + 4).map((member) => (
            <div key={member.id} className="relative group">
              <Image
                src={member.image}
                alt={member.name}
                width={720}
                height={960}
                className="w-full h-72 object-cover rounded-lg transition-all duration-300 hover:shadow-xl hover:rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-blue-900 text-white py-3 px-4">
                <h5 className="text-lg font-semibold">{member.name}</h5>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded border border-gray-300 hover:bg-gray-100 transition-all duration-300 cursor-pointer text-background"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
