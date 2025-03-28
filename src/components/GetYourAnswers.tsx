import { getYourAnswers } from "@/utils/get-your-answers-items";
import Image from "next/image";

export default function GetYourAnswers() {
  return (
    <div className="bg-white py-20 z-20">
      <div className="text-center mb-12">
        <h5 className="text-sm uppercase text-blue-500 font-medium tracking-widest mb-2">
          More Details
        </h5>
        <h3 className="text-5xl font-semibold text-background">
          Get Your Answers
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:w-1/2 md:mx-auto px-6 md:px-0">
        {getYourAnswers?.map((item) => (
          <div
            key={item.id}
            className={`${item.id === 1 ? "bg-background" : ""} ${
              item.id === 2
                ? "border-x md:border-y border-gray-300"
                : "border border-gray-300"
            }`}
          >
            <Image
              src={item.img}
              alt=""
              width={960}
              height={960}
              className="w-[254px] h-[254px] object-contain mx-auto pt-8 mb-2"
            />

            <div className="p-4">
              <h3
                className={`${
                  item.id === 1 ? "text-white" : "text-gray-700"
                } text-2xl font-semibold`}
              >
                {item.title}
              </h3>
              <h5 className="font-medium text-sm text-blue-500">
                {item.tagline}
              </h5>
              <p
                className={`${
                  item.id === 1 ? "text-white" : "text-gray-700"
                } mt-4`}
              >
                {item.info}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-12">
        <button className="bg-primary w-44 h-10 rounded transition-all duration-300 cursor-pointer hover:bg-primary/80">
          See Pricing
        </button>
      </div>
    </div>
  );
}
