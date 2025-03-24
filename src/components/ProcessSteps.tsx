import { processSteps } from "@/utils/process-steps";

export default function ProcessSteps() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-36 px-6"
      style={{ backgroundImage: "url('/assets/process-banner-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-40"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-300">
          HOW WE WORK
        </p>
        <h2 className="text-4xl font-bold mt-4">
          Our Process For Delivering Results
        </h2>
        <p className="text-gray-300 mt-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text
          ever.
        </p>

        {/* Process Steps */}
        <div className="relative mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Dotted Line */}
          <div className="absolute top-1/2 left-0 right-0 mx-auto border-t-2 border-dashed border-gray-400 w-4/5 hidden md:block"></div>

          {/* Steps */}
          {processSteps.map((item, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#d25b43] to-[#222665] w-40 h-40 rounded-full flex items-center justify-start text-center shadow-lg mx-auto"
            >
              <div className="text-white font-bold text-start pl-6">
                <p className="text-2xl">{item.step}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <div className="mt-16">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-60 h-9 rounded cursor-pointer transition-all duration-300">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
}
