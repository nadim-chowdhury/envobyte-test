// "use client";

// import { categories, services } from "@/utils/service-section-items";
// import Image from "next/image";
// import { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// export default function ServicesSection() {
//   const [activeCategory, setActiveCategory] = useState("WEBSITE");

//   return (
//     <div className="py-16 bg-background text-white">
//       <div className="container mx-auto px-6">
//         {/* top */}
//         <div>
//           <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
//             <div>
//               <p className="text-sm text-orange-500 uppercase font-medium">
//                 Digital Services
//               </p>
//               <h2 className="text-3xl font-bold mt-2">
//                 Check Our Available Services
//               </h2>
//             </div>

//             <div className="mt-4 md:mt-0">
//               <button className="bg-primary h-10 w-60 text-white font-semibold rounded transition-all duration-300 hover:bg-primary/80 cursor-pointer">
//                 All Services
//               </button>
//             </div>
//           </div>

//           <div className="flex flex-wrap items-center gap-4 mt-6 pb-4">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`text-sm font-medium uppercase transition cursor-pointer ${
//                   activeCategory === category
//                     ? "text-blue-400 border-b-2 border-blue-400"
//                     : "text-gray-400"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Services List */}
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-[#3158C733]/20 p-6 text-center border border-gray-500 rounded transition-all duration-300 hover:bg-blue-900/40"
//             >
//               <div className="flex items-center justify-center">
//                 <Image
//                   src={service.icon}
//                   alt=""
//                   width={960}
//                   height={960}
//                   className="w-44 h-44 object-contain"
//                 />
//               </div>

//               <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
//               <p className="text-gray-400 mt-2">{service.description}</p>
//               <div className="mt-4 flex items-center justify-center gap-4 text-sm">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white w-28 h-9 rounded-full transition-all duration-300 cursor-pointer">
//                   Portfolio
//                 </button>
//                 <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white w-28 h-9 rounded-full transition-all duration-300 cursor-pointer">
//                   Order
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <div className="flex justify-center gap-4 mt-6">
//           <button className="bg-white text-gray-700 p-3 rounded shadow-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
//             <FaChevronLeft />
//           </button>

//           <button className="bg-primary text-white p-3 rounded shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer">
//             <FaChevronRight />
//           </button>
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8">
//           <h4 className="uppercase tracking-widest">Creative Solution</h4>
//           <div className="h-[2px] w-20 bg-white"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { categories, services } from "@/utils/service-section-items";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState("WEBSITE");

  return (
    <div className="py-16 bg-background text-white">
      <div className="container mx-auto px-6">
        {/* top */}
        <div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
            <div>
              <p className="text-sm text-orange-500 uppercase font-medium">
                Digital Services
              </p>
              <h2 className="text-3xl font-bold mt-2">
                Check Our Available Services
              </h2>
            </div>

            <div className="mt-4 md:mt-0">
              <button className="bg-primary h-10 w-60 text-white font-semibold rounded transition-all duration-300 hover:bg-primary/80 cursor-pointer">
                All Services
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

        {/* Services List with Swiper */}
        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: ".swiper-button-next-x",
              prevEl: ".swiper-button-prev-x",
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#3158C733]/20 p-6 text-center border border-gray-500 rounded transition-all duration-300 hover:bg-blue-900/40">
                  <div className="flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt=""
                      width={960}
                      height={960}
                      className="w-44 h-44 object-contain"
                    />
                  </div>

                  <h3 className="text-xl font-semibold mt-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{service.description}</p>
                  <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white w-28 h-9 rounded-full transition-all duration-300 cursor-pointer">
                      Portfolio
                    </button>
                    <button className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white w-28 h-9 rounded-full transition-all duration-300 cursor-pointer">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="swiper-button-prev-x bg-white text-gray-700 p-3 rounded shadow-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer">
              <FaChevronLeft />
            </button>

            <button className="swiper-button-next-x bg-primary text-white p-3 rounded shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-300 cursor-pointer">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8">
          <h4 className="uppercase tracking-widest">Creative Solution</h4>
          <div className="h-[2px] w-20 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
