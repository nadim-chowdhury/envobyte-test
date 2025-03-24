// "use client";

// import { categories, portfolioImages } from "@/utils/portfolio-section-items";
// import Image from "next/image";
// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function PortfolioSection() {
//   const [activeCategory, setActiveCategory] = useState("UI/UX");

//   return (
//     <div className="py-16 bg-white">
//       <div className="container mx-auto px-6">
//         {/* top */}
//         <div className="relative">
//           <div className="">
//             <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
//               <div>
//                 <p className="text-sm text-orange-500 uppercase font-medium">
//                   UI/UX Portfolio
//                 </p>
//                 <h2 className="text-3xl font-bold mt-2 text-background">
//                   Check Our Previous Work
//                 </h2>
//               </div>

//               <div className="mt-4 md:mt-0">
//                 <button className="bg-primary h-10 w-60 text-white font-semibold rounded hover:bg-primary/80 transition-all duration-300 cursor-pointer">
//                   All Portfolio
//                 </button>
//               </div>
//             </div>

//             <div className="flex flex-wrap items-center gap-4 mt-6 pb-4">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   onClick={() => setActiveCategory(category)}
//                   className={`text-sm font-medium uppercase transition cursor-pointer ${
//                     activeCategory === category
//                       ? "text-blue-400 border-b-2 border-blue-400"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Portfolio Slider */}
//         <div className="relative mt-8 overflow-hidden container mx-auto z-20">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {portfolioImages.map((src, index) => (
//               <div key={index} className="bg-white p-2 rounded-lg shadow-lg">
//                 <Image
//                   src={src}
//                   alt={`Portfolio ${index + 1}`}
//                   width={1280}
//                   height={720}
//                   className="h-full w-full rounded-lg object-cover transition-all duration-300 hover:scale-110 cursor-pointer"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="bg-white text-gray-700 p-3 rounded hover:bg-blue-500 hover:text-white transition border border-gray-300 cursor-pointer">
//             <FaChevronLeft />
//           </button>

//           <button className="bg-primary text-white p-3 rounded shadow-lg hover:bg-blue-500 hover:text-white transition cursor-pointer">
//             <FaChevronRight />
//           </button>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8">
//           <h4 className="uppercase tracking-widest text-background">
//             Creative Portfolio
//           </h4>
//           <div className="h-[2px] w-20 bg-background"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { categories, portfolioImages } from "@/utils/portfolio-section-items";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="relative">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
            <div>
              <p className="text-sm text-orange-500 uppercase font-medium">
                UI/UX Portfolio
              </p>
              <h2 className="text-3xl font-bold mt-2 text-background">
                Check Our Previous Work
              </h2>
            </div>

            <div className="mt-4 md:mt-0">
              <button className="bg-primary h-10 w-60 text-white font-semibold rounded hover:bg-primary/80 transition-all duration-300 cursor-pointer">
                All Portfolio
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 pb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm font-medium uppercase transition cursor-pointer ${
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

        {/* First Portfolio Slider */}
        <div className="relative mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-1",
              prevEl: ".swiper-button-prev-1",
            }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          >
            {portfolioImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <Image
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    width={1280}
                    height={720}
                    className="h-[180px] w-[320px] rounded-lg object-cover transition-all duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons for First Slider */}
          {/* <div className="flex justify-center gap-4 mt-6">
            <button className="swiper-button-prev-1 bg-white text-gray-700 p-3 rounded hover:bg-blue-500 hover:text-white transition border border-gray-300 cursor-pointer">
              <FaChevronLeft />
            </button>

            <button className="swiper-button-next-1 bg-primary text-white p-3 rounded shadow-lg hover:bg-blue-500 hover:text-white transition cursor-pointer">
              <FaChevronRight />
            </button>
          </div> */}
        </div>

        {/* Second Portfolio Slider (Different Speed) */}
        <div className="relative mt-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-2",
              prevEl: ".swiper-button-prev-2",
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
          >
            {portfolioImages.reverse().map((src, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-2 rounded-lg shadow-lg w-full h-full">
                  <Image
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    width={1280}
                    height={720}
                    className="h-[180px] w-[320px] rounded-lg object-cover transition-all duration-300 hover:scale-110 cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons for Second Slider */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="swiper-button-prev-2 bg-white text-gray-700 p-3 rounded hover:bg-blue-500 hover:text-white transition border border-gray-300 cursor-pointer">
              <FaChevronLeft />
            </button>

            <button className="swiper-button-next-2 bg-primary text-white p-3 rounded hover:bg-blue-500 hover:text-white transition cursor-pointer">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8">
          <h4 className="uppercase tracking-widest text-background">
            Creative Portfolio
          </h4>
          <div className="h-[2px] w-20 bg-background"></div>
        </div>
      </div>
    </div>
  );
}
