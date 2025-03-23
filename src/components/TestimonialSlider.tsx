"use client";

import { testimonials } from "@/utils/testimonials";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h5 className="text-blue-600 uppercase font-medium tracking-widest">
          Client Reviews
        </h5>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Proud Clients
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((t) => (
            <div
              key={t.id}
              className="border rounded-lg shadow-sm p-6 text-center"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-3 text-yellow-500">
                {"★".repeat(t.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic">{t.review}</p>

              {/* Profile */}
              <div className="flex items-center mt-4 justify-center space-x-3">
                <Image
                  src={t.profileImg}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="w-12 h-12 rounded-full"
                />

                <div className="text-left">
                  <h5 className="text-gray-900 font-semibold">{t.name}</h5>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Image
                      src={t.platformLogo}
                      alt={t.platform}
                      width={32}
                      height={32}
                      className="w-4"
                    />
                    <span>From {t.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
