import { bannerItems } from "@/utils/banner-items";
import Image from "next/image";

export default function MainBanner() {
  return (
    <section className="mt-8 py-12 relative w-full overflow-hidden">
      <div className="flex flex-col items-center gap-12">
        <div className="text-center uppercase space-y-4">
          <h1 className="font-bold text-7xl">Digital Service</h1>
          <h3 className="font-bold">Building your empire digitally</h3>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-60 h-12 bg-primary rounded">See Pricing</button>
          <button className="w-60 h-12 rounded border">
            Book an appointment
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between w-6xl mx-auto my-12">
        {bannerItems?.map((item) => (
          <div key={item.id} className="flex items-center justify-center gap-2">
            <Image
              src={item.img}
              alt=""
              width={96}
              height={96}
              className="w-12 h-12"
            />

            <div className="font-semibold">
              <h4 className="text-2xl">{item.title}</h4>
              <h5>{item.tagline}</h5>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <Image
          src="/assets/banner-image.png"
          alt=""
          width={1280}
          height={720}
          className="w-1/2"
        />
      </div>

      {/* Gradient Shape Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-20 h-1/2 max-w-[1400px] w-full bg-gradient-to-r from-[#062a7b] via-[#51f73] to-[#062a7b]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-20 h-1/2 max-w-[1400px] w-full bg-gradient-to-t from-background via-transparent to-background"></div>

      {/* <div className="absolute -top-28 left-[10%] rotate-[20deg] w-[462px] h-[684px] -z-10 bg-background"></div>
      <div className="absolute -top-28 right-[10%] -rotate-[20deg] w-[462px] h-[684px] -z-10 bg-background"></div> */}

      {/* Left Rotated Shape */}
      <div className="absolute -top-28 -left-20 rotate-[20deg] w-[462px] h-[684px] -z-10 bg-background"></div>

      {/* Right Rotated Shape */}
      <div className="absolute -top-28 -right-20 -rotate-[20deg] w-[462px] h-[684px] -z-10 bg-background"></div>
    </section>
  );
}
